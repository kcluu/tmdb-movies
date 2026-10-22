export type Movie = {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  vote_average: number
}

export type DiscoverResponse = {
  page: number
  results: Movie[]
}

export type MovieDetailsResponse = Movie & {
  runtime: number | null
  release_dates: {
    results: {
      iso_3166_1: string
      release_dates: { certification: string }[]
    }[]
  }
}
