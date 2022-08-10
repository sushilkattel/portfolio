import { Box, useColorModeValue, Text, Stack, Flex } from "@chakra-ui/react"

export const Skills = () => {
  return (
    <Box
        w={'100%'}
        maxH={"50%"}
        h={"50%"}
        bg={useColorModeValue("#1A212F", "white")}
        boxShadow={"2xl"}
        rounded={25}
        overflow={"hidden"}
        ml={'10%'}
    >
        <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css" />
        <Flex>
            <Text className="Title" p={5}>Skill Set</Text>

        </Flex>
    </Box>
  )
}
