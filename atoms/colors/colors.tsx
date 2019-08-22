import * as React from 'react'
import { css, createGlobalStyle } from 'styled-components'

export const palette = {
  taupe100: '#332D2D',
  taupe200: '#453E3D',
  taupe300: '#5D5352',
  taupe400: '#756867',
  taupe500: '#AB9B9A',
  taupe600: '#EBD6D4',

  discord100: '#23272A',
  discord200: '#2C2F33',
  discord400: '#7289DA',
  discord500: '#99AAB5',

  green400: '#46B646',

  red400: '#E95353',

  grey100: '#1C1010',
  grey600: '#EFEFEF',
}

const getPaletteCSS = () =>
  Object.entries(palette).reduce(
    (acc, [key, color]) => ({ ...acc, [`--${key}`]: color }),
    {}
  )

export const colorVars = css(getPaletteCSS())

export const GlobalStyleColors = createGlobalStyle`
    :root {
        ${colorVars}
    }
`
