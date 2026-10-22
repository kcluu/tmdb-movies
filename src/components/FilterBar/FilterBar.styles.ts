import styled from 'styled-components'

export const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px 20px;
  margin: 16px 24px 0;

  padding: 16px 20px 28px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06);
`

export const Field = styled.div`
  position: relative;
`

export const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #777;
`

export const SearchInput = styled.input`
  width: 240px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #dcdce0;
  border-radius: 8px;
  background: #fff;
  color: #1a1a1a;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: #9a9aa0;
  }

  &:hover {
    border-color: #b5b5bb;
  }

  &:focus-visible {
    outline: none;
    border-color: #f4c006;
    box-shadow: 0 0 0 3px rgba(244, 192, 6, 0.3);
  }
`

export const Hint = styled.span`
  position: absolute;
  top: calc(100% + 6px);
  left: 2px;
  font-size: 12px;
  white-space: nowrap;
  color: #777;
`

export const ClearButton = styled.button`
  height: 38px;
  margin-left: auto;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: #f0f0f2;
  color: #444;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #e4e4e8;
    color: #000;
  }

  &:focus-visible {
    outline: none;
    border-color: #f4c006;
    box-shadow: 0 0 0 3px rgba(244, 192, 6, 0.3);
  }
`
