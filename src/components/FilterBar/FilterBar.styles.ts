import styled from 'styled-components'

export const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px 24px;
  padding: 16px 24px 0;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SearchInput = styled.input`
  width: 220px;
  padding: 8px 12px 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  font: inherit;
  font-weight: 400;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #999;
  }

  &:focus-visible {
    outline: none;
    border-color: #f4c006;
    box-shadow: 0 0 0 3px rgba(244, 192, 6, 0.3);
  }
`

export const Hint = styled.span`
  font-size: 12px;
  color: #777;
`

export const ClearButton = styled.button`
  align-self: center;
  padding: 8px 4px;
  border: none;
  background: none;
  color: #555;
  font: inherit;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`
