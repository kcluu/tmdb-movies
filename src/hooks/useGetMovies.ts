import useSWR from 'swr'
import { API_KEY, BASE_URL } from '../api'
import type { DiscoverResponse } from '../types'

export const useGetMovies = () => {
  // TODO: add filter mechanism
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: '1'
  })

  const { data, error, isLoading } = useSWR<DiscoverResponse, Error>(
    `${BASE_URL}?${params}`
  )

  // sort: highest rated desc
  const movies = data?.results
    ? [...data.results].sort((a, b) => b.vote_average - a.vote_average)
    : []

  return { movies, error, isLoading }
}
