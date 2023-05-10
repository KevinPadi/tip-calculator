import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `'Space Mono', monospace`,
        bg: 'hsl(185, 41%, 84%)',
        color: 'black',
      },
    },
  },
})

export default extendTheme(theme)