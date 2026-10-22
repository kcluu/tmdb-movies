import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 28px;

  padding: 16px 24px 24px;

  > * {
    flex: 0 0 260px;
  }
`
