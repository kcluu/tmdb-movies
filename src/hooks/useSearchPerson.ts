import useSWR from 'swr'
import { API_KEY, SEARCH_PERSON_URL } from '../api'
import type { SearchPersonResponse } from '../types'

// Resolves a name to the best-matching actor, since discover filters cast by person id
export const useSearchPerson = (query: string) => {
  const trimmed = query.trim()
  const params = new URLSearchParams({ api_key: API_KEY, query: trimmed })

  const { data, isLoading } = useSWR<SearchPersonResponse, Error>(
    trimmed ? `${SEARCH_PERSON_URL}?${params}` : null
  )

  const person =
    data?.results.find((p) => p.known_for_department === 'Acting') ?? data?.results[0] ?? null

  return { person, isLoading }
}
