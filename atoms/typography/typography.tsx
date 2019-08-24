import styled, { css } from 'styled-components'

const reset = css`
  margin: 0;
  line-height: 163%;
  padding: 0;
  font-weight: 400;
  text-decoration: none;
`

export const text900 = css`
  ${reset}
  font-size: 2.3rem;
`

export const text800 = css`
  ${reset}
  font-size: 2rem;
`

export const text700 = css`
  ${reset}
  font-size: 1.7rem;
`

export const text600 = css`
  ${reset}
  font-size: 1.4rem;
`

export const text500 = css`
  ${reset}
  font-size: 1.2rem;
`

export const text400 = css`
  ${reset}
  font-size: 1rem;
`

export const text300 = css`
  ${reset}
  font-size: 0.9rem;
`

export const text200 = css`
  ${reset}
  font-size: 0.7rem;
`

export const text100 = css`
  ${reset}
  font-size: 0.5rem;
`

export const LargeTitle = styled.h1`
  ${text900}
`

export const MediumTitle = styled.h2`
  ${text800}
`

export const SmallTitle = styled.h3`
  ${text700}
`

export const AccentTitle = styled.h4`
  ${text600}
`

export const LargeText = styled.p`
  ${text500}
`

export const Text = styled.p`
  ${text400}
`

export const AmbientLarge = styled.p`
  ${text200}
`

export const AmbientSmall = styled.p`
  ${text100}
`
