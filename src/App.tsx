import { useState } from 'react'
import { Filters, SortBy, SortType } from './types'
import { useGetMovies } from './hooks/useGetMovies'
import { useGetGenres } from './hooks/useGetGenres'
import { useSearchPerson } from './hooks/useSearchPerson'
import { useDebouncedValue } from './hooks/useDebouncedValue'
import { MovieGrid } from './components/MovieGrid'
import { SortSelect } from './components/SortSelect'
import { FilterBar } from './components/FilterBar'

export const App = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortType.VOTE)
  const [filters, setFilters] = useState<Filters>({
    genreId: null,
    certification: null,
    castQuery: ''
  })
  const { genres } = useGetGenres()
  const castQuery = useDebouncedValue(filters.castQuery.trim())
  const { person, isLoading: personLoading } = useSearchPerson(castQuery)
  
  const castPending = castQuery !== filters.castQuery.trim() || personLoading
  const castNotFound = !!castQuery && !castPending && !person
  const { movies, error, isLoading } = useGetMovies(
    sortBy,
    { genreId: filters.genreId, certification: filters.certification, castId: person?.id ?? null },
    // don't fetch unfiltered movies while a cast name is still being looked up
    !castQuery || !!person || !personLoading
  )

  const renderMovies = () => {
    if (error) return <p>Error: {error.message}</p>
    if (castNotFound) return <p>No cast member matches "{castQuery}".</p>
    if (isLoading && !movies.length) return <p>Loading...</p>
    if (!movies.length) return <p>No movies match these filters.</p>

    // keyed so the row restarts from beginning when order or filters change
    const gridKey = [sortBy, filters.genreId, filters.certification, person?.id].join('-')
    return <MovieGrid key={gridKey} movies={movies} />
  }

  return (
    <>
      <FilterBar
        filters={filters}
        genres={genres}
        onChange={setFilters}
        castMatch={person?.name ?? null}
        castSearching={castPending}
      />
      <SortSelect value={sortBy} onChange={setSortBy} />
      {renderMovies()}
    </>
  )
}
