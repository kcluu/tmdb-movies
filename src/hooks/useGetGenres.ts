import useSWR from 'swr'
import { API_KEY, GENRES_URL } from '../api'
import type { GenresResponse } from '../types'

export const useGetGenres = () => {
  const params = new URLSearchParams({ api_key: API_KEY })

  const { data } = useSWR<GenresResponse, Error>(`${GENRES_URL}?${params}`)
  return { genres: data?.genres ?? [] }
}
