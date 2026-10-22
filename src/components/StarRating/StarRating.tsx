import { FilledStars, Score, Stars, Wrapper } from './StarRating.styles'

type StarRatingProps = {
  rating: number
  max?: number
}

export const StarRating = ({ rating, max = 10 }: StarRatingProps) => {
  const stars = '★'.repeat(max)
  const percent = Math.min(Math.max(rating / max, 0), 1) * 100

  return (
    <Wrapper>
      <Stars role="img" aria-label={`Rated ${rating.toFixed(1)} out of ${max}`}>
        {stars}
        <FilledStars $percent={percent} aria-hidden="true">
          {stars}
        </FilledStars>
      </Stars>
      <Score aria-hidden="true">{rating.toFixed(1)}</Score>
    </Wrapper>
  )
}
