import axios from 'axios'

const fetchCarbonFootprint = async () => axios.get('/api/dashboard/carbon_footprint')
const fetchEmission = async () => axios.get('/api/dashboard/emission')

export { fetchCarbonFootprint, fetchEmission }