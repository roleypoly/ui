import { create } from '@storybook/theming'
import { palette } from '../atoms/colors'

export const roleypolyTheme = create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: palette.taupe500,

  // UI
  appBg: palette.taupe300,
  appContentBg: palette.taupe200,
  appBorderColor: palette.taupe100,
  appBorderRadius: 0,

  // Typography
  fontBase: 'system-ui, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#efefef',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: palette.taupe500,
  barSelectedColor: palette.taupe600,
  barBg: palette.taupe300,

  // Form colors
  inputBg: 'rgba(0,0,0,0.24)',
  inputBorder: palette.taupe100,
  inputTextColor: palette.grey600,
  inputBorderRadius: 0,
})
