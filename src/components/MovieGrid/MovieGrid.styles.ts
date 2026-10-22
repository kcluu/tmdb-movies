import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  /* vertical padding leaves room for the poster hover lift/shadow */
  padding: 16px 24px 24px;

  > * {
    flex: 0 0 200px;
  }
`
