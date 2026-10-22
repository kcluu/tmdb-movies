export type Movie = {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  vote_average: number
  popularity: number
}

export enum SortType {
  POPULARITY = 'popularity',
  TITLE = 'title',
  VOTE = 'vote'
}

export type SortBy = SortType.POPULARITY | SortType.TITLE | SortType.VOTE

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

export type Genre = {
  id: number
  name: string
}

export type GenresResponse = {
  genres: Genre[]
}

export type Person = {
  id: number
  name: string
  known_for_department: string
}

export type SearchPersonResponse = {
  results: Person[]
}

export enum Certification {
  G = 'G',
  PG = 'PG',
  PG_13 = 'PG-13',
  R = 'R',
  NC_17 = 'NC-17'
}

export type Filters = {
  genreId: number | null
  certification: Certification | null
  castQuery: string
}

export type MovieQuery = {
  genreId: number | null
  certification: Certification | null
  castId: number | null
}
