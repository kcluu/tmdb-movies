import { useState } from 'react'
import { SortBy, SortType } from './types'
import { useGetMovies } from './hooks/useGetMovies'
import { MovieGrid } from './components/MovieGrid'
import { SortSelect } from './components/SortSelect'

export const App = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortType.VOTE)
  const { movies, error, isLoading } = useGetMovies(sortBy)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <SortSelect value={sortBy} onChange={setSortBy} />
      {/* keyed so the row restarts from beginning when order changes */}
      <MovieGrid key={sortBy} movies={movies} />
    </>
  )
}
