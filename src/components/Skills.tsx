import { Box, useColorModeValue, Text, Stack, Flex, Image } from "@chakra-ui/react"
import img1 from "../imgs/1.png"
import img2 from "../imgs/2.png"
import img3 from "../imgs/3.png"
import img4 from "../imgs/4.png"
import img5 from "../imgs/5.png"
import img6 from "../imgs/6.png"
import img7 from "../imgs/7.png"
import img8 from "../imgs/8.png"
import img9 from "../imgs/9.png"
import img10 from "../imgs/10.png"

export const Skills = () => {
  const textColor = useColorModeValue("#FF4655","#1A212F")
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
        pb={'5%'}
    >
        <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css" />
        <Flex direction={'column'}>
            <Text className="Title" p={5} color={textColor}>Skill Set</Text>
            <Stack ml={'10%'}>
            <Stack direction={'row'}>
            <Image src={img1} w={"40px"}/>
            <Image src={img2} w={"40px"}/>
            <Image src={img3} w={"40px"}/>
            <Image src={img4} w={"40px"}/>
            <Image src={img5} w={"40px"}/>
            </Stack>
            <Stack direction={'row'}>
            <Image src={img6} w={"35px"} h={"40px"} objectFit={'contain'}/>
            <Image src={img7} w={"50px"} h={"40px"} objectFit={'contain'}/>
            <Image src={img8} w={"40px"}/>
            <Image src={img9} w={"40px"}/>
            <Image src={img10} w={"40px"} h={"40px"}/>
            </Stack>
            </Stack>
        </Flex>
    </Box>
  )
}
