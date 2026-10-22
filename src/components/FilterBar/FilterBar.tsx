import { Certification, type Filters, type Genre } from '../../types'
import { Label, Select } from '../SortSelect/SortSelect.styles'
import { Bar, ClearButton, Field, Hint, SearchInput } from './FilterBar.styles'

type FilterBarProps = {
  filters: Filters
  genres: Genre[]
  onChange: (filters: Filters) => void
  // name of the actor the cast search resolved to; null when nothing matched
  castMatch: string | null
  castSearching: boolean
}

export const FilterBar = ({
  filters,
  genres,
  onChange,
  castMatch,
  castSearching
}: FilterBarProps) => {
  const update = (changes: Partial<Filters>) => onChange({ ...filters, ...changes })
  
  const castHint = !filters.castQuery.trim()
    ? null
    : castSearching
      ? 'Searching…'
      : castMatch
        ? `Showing movies with ${castMatch}`
        : 'No cast member found'
        
  const hasFilters = filters.genreId || filters.certification || filters.castQuery
  return (
    <Bar>
      <Field>
        <Label>
          Genre
          <Select
            value={filters.genreId ?? ''}
            onChange={(e) => update({ genreId: e.target.value ? Number(e.target.value) : null })}
          >
            <option value="">All</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </Select>
        </Label>
      </Field>

      <Field>
        <Label>
          Rating
          <Select
            value={filters.certification ?? ''}
            onChange={(e) =>
              update({ certification: (e.target.value as Certification) || null })
            }
          >
            <option value="">All</option>
            {Object.values(Certification).map((cert) => (
              <option key={cert} value={cert}>
                {cert}
              </option>
            ))}
          </Select>
        </Label>
      </Field>

      <Field>
        <Label>
          Cast
          <SearchInput
            type="search"
            placeholder="Search by actor"
            value={filters.castQuery}
            onChange={(e) => update({ castQuery: e.target.value })}
          />
        </Label>
        {castHint && <Hint aria-live="polite">{castHint}</Hint>}
      </Field>

      {hasFilters && (
        <ClearButton
          type="button"
          onClick={() => onChange({ genreId: null, certification: null, castQuery: '' })}
        >
          Clear filters
        </ClearButton>
      )}
    </Bar>
  )
}
