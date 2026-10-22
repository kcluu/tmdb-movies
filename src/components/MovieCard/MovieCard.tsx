import type { Movie } from '../../types'
import { IMAGE_BASE_URL } from '../../api'

type MovieCardProps = {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} width="100%" />
      )}
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </div>
  )
}
