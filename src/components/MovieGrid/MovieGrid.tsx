import { useState } from 'react'
import type { Movie } from '../../types'
import { useAutoScroll } from '../../hooks/useAutoScroll'
import { MovieCard } from '../MovieCard'
import { Grid } from './MovieGrid.styles'

type MovieGridProps = {
  movies: Movie[]
}

export const MovieGrid = ({ movies }: MovieGridProps) => {
  const [paused, setPaused] = useState(false)
  const gridRef = useAutoScroll<HTMLDivElement>(paused)

  return (
    <Grid
      ref={gridRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  )
}
