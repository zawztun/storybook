import React from 'react';
import {addDecorator,addParameters} from '@storybook/react'
import { ThemeProvider, Box} from "@chakra-ui/react"
import {withConsole} from '@storybook/addon-console'
import {withKnobs} from '@storybook/addon-knobs'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {withA11y} from '@storybook/addon-a11y'

//import Center from '../src/components/Center/Center'

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   //copy from naming Naming components and hierarchy
//   options: {
//     storySort: (a, b) =>
//       a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
//   },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

//addDecorator(story => <Center>{story()}</Center>)

addDecorator(story => (
<ThemeProvider >
 <Box m = '20'>{story()}</Box> 
  </ThemeProvider>))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
addDecorator(withA11y)
addParameters({
  viewport:{
    viewport:INITIAL_VIEWPORTS,
  }
})



