import { useQuery } from '@tanstack/react-query'
import { fetchCarbonFootprint, fetchEmission } from '@/api/requests'

function useCarbonFootprint() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['carbon_footprint'],
        queryFn: fetchCarbonFootprint,
    })

    return { data, isLoading, error }
}

function useEmission() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['emission'],
        queryFn: fetchEmission,
    })

    return { data, isLoading, error }
}

export { useCarbonFootprint, useEmission }