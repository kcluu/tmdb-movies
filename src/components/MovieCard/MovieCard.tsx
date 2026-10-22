import type { Movie } from '../../types'
import { IMAGE_BASE_URL } from '../../api'
import { useGetMovieDetails } from '../../hooks/useGetMovieDetails'
import { StarRating } from '../StarRating'
import {
  Rating,
  Footer,
  NoPoster,
  Overlay,
  Overview,
  Poster,
  Title
} from './MovieCard.styles'

type MovieCardProps = {
  movie: Movie
}

const formatRuntime = (minutes: number) => {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h ? `${h}h ${m}m` : `${m}m`
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { runtime, rating } = useGetMovieDetails(movie.id)

  return (
    <div>
      <Poster tabIndex={0}>
        {movie.poster_path ? (
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        ) : (
          <NoPoster>{movie.title}</NoPoster>
        )}
        <Overlay>
          <Overview>{movie.overview || 'No description available.'}</Overview>
          <Footer>
            <span>{runtime ? formatRuntime(runtime) : 'Runtime N/A'}</span>
            <Rating>{rating ?? 'NR'}</Rating>
          </Footer>
        </Overlay>
      </Poster>
      <Title>{movie.title}</Title>
      <StarRating rating={movie.vote_average} />
    </div>
  )
}
