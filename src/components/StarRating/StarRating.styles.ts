import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const Stars = styled.div`
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 1px;
  white-space: nowrap;
  color: #d0d0d0;
`

export const FilledStars = styled.div<{ $percent: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $percent }) => $percent}%;
  overflow: hidden;
  color: #f4c006;
`

export const Score = styled.span`
  font-size: 14px;
  font-weight: 600;
`
