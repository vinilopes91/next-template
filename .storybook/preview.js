// import { addDecorator } from '@storybook/react'
// import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
