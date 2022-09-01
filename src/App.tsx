import * as React from "react"
import {
  ChakraProvider,
  Box,
  Stack,
  extendTheme, type ThemeConfig, HStack, useColorModeValue, Text, VStack
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import { Logo } from "./components/Logo"
import { Cursor } from "custom-pointer-react"
import './App.css'
import { MenuComponent } from "./components/MenuComponent"
import { Introduction } from "./components/Introduction"
import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"

export const App = () => { 
  const config: ThemeConfig = {
    initialColorMode: 'dark'
  }
  const theme = extendTheme({config})
  return (
  <ChakraProvider theme={theme}>
    <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css" />
    <head>
      <meta charSet="UTF-8" />
      </head>
    <Cursor showRing={false} cursorSize={20} color={'#516B7F'}/>
    <Stack w={'full'} h={'full'} cursor={"none"}>
    <Box textAlign="center" fontSize="xl" _dark={{bg: '#1A212F'}} cursor={'none'}>
      <Stack minH="100vh" p={3}>
        <HStack minW={'full'}>
        <Logo maxH={130}/>
        <HStack width={'full'} justify={'right'} pr={5} alignSelf={'flex-start'} pt={5} cursor={'none'}>
          <ColorModeSwitcher height={10} width={10} cursor={'none'}/>
          <MenuComponent />
        </HStack>
        </HStack>
        <Stack spacing={8} width={'full'} align={'flex-start'} direction={['column', 'row']}>
          <Introduction />
          <VStack pl={'8%'}>
            <Profile />
            <Stack pt={'20%'} w={'full'}>
              <Skills />
            </Stack>
          </VStack>
        </Stack>
      </Stack>
    </Box>
    </Stack>
  </ChakraProvider>
)}
