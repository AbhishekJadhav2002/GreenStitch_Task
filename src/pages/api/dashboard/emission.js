import path from 'path'
import { readFileSync } from 'fs'

const __dirname = path.resolve()

export default async function handler(req, res, next) {
    try {
        const jsonData = readFileSync(__dirname + '/data/emission.data.json', 'utf8')
        const data = await JSON.parse(jsonData)

        const categoryTotals = {
            spinning: 0,
            transportation: 0,
            carding: 0,
            heating_cooling: 0
          }

          let overallTotal = 0

          data.forEach(item => {
            categoryTotals.spinning += parseInt(item.spinning)
            categoryTotals.transportation += parseInt(item.transportation)
            categoryTotals.carding += parseInt(item.carding)
            categoryTotals.heating_cooling += parseInt(item.heating_cooling)

            overallTotal += parseInt(item.spinning) +
                            parseInt(item.transportation) +
                            parseInt(item.carding) +
                            parseInt(item.heating_cooling)
          })

          const percentageData = {
            spinning: ((categoryTotals.spinning / overallTotal) * 100).toPrecision(2),
            transportation: ((categoryTotals.transportation / overallTotal) * 100).toPrecision(2),
            carding: ((categoryTotals.carding / overallTotal) * 100).toPrecision(2),
            heating_cooling: ((categoryTotals.heating_cooling / overallTotal) * 100).toPrecision(2)
          }

        res.status(200).json(percentageData)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}