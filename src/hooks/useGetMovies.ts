import useSWR from 'swr'
import { API_KEY, BASE_URL } from '../api'
import type { DiscoverResponse, Movie, MovieQuery, SortBy } from '../types'

const compare: Record<SortBy, (a: Movie, b: Movie) => number> = {
  popularity: (a, b) => b.popularity - a.popularity,
  title: (a, b) => a.title.localeCompare(b.title),
  vote: (a, b) => b.vote_average - a.vote_average
}

export const useGetMovies = (sortBy: SortBy, query: MovieQuery, enabled = true) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: '1',
    primary_release_year: '2026'
  })
  if (query.genreId) params.set('with_genres', String(query.genreId))
  if (query.certification) {
    params.set('certification_country', 'US')
    params.set('certification', query.certification)
  }
  
  if (query.castId) params.set('with_cast', String(query.castId))

  const { data, error, isLoading } = useSWR<DiscoverResponse, Error>(
    enabled ? `${BASE_URL}?${params}` : null
  )

  const movies = data?.results ? [...data.results].sort(compare[sortBy]) : []

  return { movies, error, isLoading }
}
