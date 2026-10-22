import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px 0;
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
`

export const Select = styled.select`
  appearance: none;
  padding: 8px 32px 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  font: inherit;
  font-weight: 400;
  cursor: pointer;
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
