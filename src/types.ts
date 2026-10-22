export type Movie = {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  vote_average: number
}

export type DiscoverResponse = {
  page: number
  results: Movie[]
}
