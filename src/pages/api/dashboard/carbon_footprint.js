import path from 'path'
import { readFileSync } from 'fs'

const __dirname = path.resolve()

export default async function handler(req, res, next) {
    try {
        const jsonData = readFileSync(__dirname + '/data/carbon_footprint.data.json', 'utf8')
        const data = await JSON.parse(jsonData)

        const averages = {}
        data.forEach(item => {
            const month = item.datetime.slice(0, 7)
            Object.entries(item).forEach(([key, value]) => {
                if (key === 'datetime') return
                if (!averages[key]) averages[key] = {}
                if (!averages[key][month]) averages[key][month] = { total: 0, count: 0 }
                averages[key][month].total += parseInt(value)
                averages[key][month].count++
            })
        })

        const calculatedData = {}
        Object.entries(averages).forEach(([category, months]) => {
            calculatedData[category] = []
            Object.entries(months).forEach(([month, { total, count }]) => {
                const avg = total / count
                calculatedData[category].push(avg)
            })
        })

        res.status(200).json(calculatedData)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}