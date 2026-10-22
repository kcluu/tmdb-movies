import { SortBy, SortType } from '../../types'
import { Header, Label, Select, SelectWrapper } from './SortSelect.styles'

const OPTIONS: { value: SortType; label: string }[] = [
  { value: SortType.POPULARITY, label: 'Popularity' },
  { value: SortType.TITLE, label: 'Title' },
  { value: SortType.VOTE, label: 'Vote' }
]

type SortSelectProps = {
  value: SortBy
  onChange: (value: SortBy) => void
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <Header>
      <Label>
        Sort by
        <SelectWrapper>
          <Select value={value} onChange={(e) => onChange(e.target.value as SortBy)}>
            {OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectWrapper>
      </Label>
    </Header>
  )
}
