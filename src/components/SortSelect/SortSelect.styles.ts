import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px 0;
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
`

// draws the dropdown chevron, since appearance: none removes the native one
export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 14px;
    width: 6px;
    height: 6px;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;
    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }
`

export const Select = styled.select`
  appearance: none;
  height: 38px;
  min-width: 140px;
  padding: 0 36px 0 12px;
  border: 1px solid #dcdce0;
  border-radius: 8px;
  background: #fff;
  color: #1a1a1a;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #b5b5bb;
  }

  &:focus-visible {
    outline: none;
    border-color: #f4c006;
    box-shadow: 0 0 0 3px rgba(244, 192, 6, 0.3);
  }
`
