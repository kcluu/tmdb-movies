import useSWR from 'swr'
import { API_KEY, BASE_URL } from '../api'
import type { DiscoverResponse, Movie, SortBy } from '../types'

const compare: Record<SortBy, (a: Movie, b: Movie) => number> = {
  popularity: (a, b) => b.popularity - a.popularity,
  title: (a, b) => a.title.localeCompare(b.title),
  vote: (a, b) => b.vote_average - a.vote_average
}

export const useGetMovies = (sortBy: SortBy) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: '1',
    primary_release_year: '2026'
  })

  const { data, error, isLoading } = useSWR<DiscoverResponse, Error>(
    `${BASE_URL}?${params}`
  )

  const movies = data?.results ? [...data.results].sort(compare[sortBy]) : []

  return { movies, error, isLoading }
}
