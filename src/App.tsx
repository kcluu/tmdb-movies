import { useGetMovies } from './hooks/useGetMovies'
import { MovieGrid } from './components/MovieGrid'

export const App = () => {
  const { movies, error, isLoading } = useGetMovies()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return <MovieGrid movies={movies} />
}
