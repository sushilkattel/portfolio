import { Box, useColorModeValue, Text, HStack, Stack, Button } from "@chakra-ui/react"
import "../App.css"

export const Introduction = () => {
    const textColor = useColorModeValue("white", "black")
    const descColor = useColorModeValue("white", "#6B6868")
  return (
    <Box 
        maxW={'max-content'}
        w={'max-content'}
        maxH={"50%"}
        h={"50%"}
        maxWidth={'50%'}
        bg={useColorModeValue("#1A212F", "white")}
        boxShadow={"2xl"}
        rounded={25}
        overflow={"hidden"}
        ml={'10%'}
        pr={'10%'}
    >
        <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css" />
        <Stack padding={10} align={'flex-start'}>
        <HStack>
        <Text color={textColor} className={'BigText'}>Hey</Text>
        <Text color={textColor} className={"BigText"} pl={4}> <span className="wave">&#128075;</span>,</Text>
        </HStack>
        <HStack>
        <Text color={textColor} className={"BigText"}>I'm </Text>
        <Text color={'#516B7F'} className={"BigText"} pl={4}>Sushil</Text>
        </HStack>
        <Text className="Title">Developer</Text>
        <Stack maxWidth={'100%'} align={'flex-start'}>
        <Text className="Desc" align={'start'} color={descColor}>I design and develop applications using my<br />
        imagination and bring it to life using React,<br /> NextJS, Express, Kotlin, and many more!
            </Text>
        </Stack>
        <Button size={'lg'} bgColor={'#516B7F'} color={'white'} colorScheme={'twitter'}>Projects</Button>
        </Stack>
    </Box>
  )
}
