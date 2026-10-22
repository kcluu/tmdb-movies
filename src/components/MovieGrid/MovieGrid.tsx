import type { Movie } from '../../types'
import { MovieCard } from '../MovieCard'
import { Grid } from './MovieGrid.styles'

type MovieGridProps = {
  movies: Movie[]
}

export const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  )
}
