import useSWR from 'swr'
import { API_KEY, MOVIE_URL } from '../api'
import type { MovieDetailsResponse } from '../types'

export const useGetMovieDetails = (id: number) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    append_to_response: 'release_dates'
  })

  const { data, error, isLoading } = useSWR<MovieDetailsResponse, Error>(
    `${MOVIE_URL}/${id}?${params}`
  )

  // US certification (R, PG-13, etc)
  const certification = data?.release_dates.results
    .find((r) => r.iso_3166_1 === 'US')
    ?.release_dates.find((d) => d.certification)?.certification

  return { runtime: data?.runtime || null, rating: certification ?? null, error, isLoading }
}
