import { Avatar, Flex, useColorModeValue } from "@chakra-ui/react"
import img from '../imgs/profile3.jpeg'

export const Profile = () => {
    const outlineColor = useColorModeValue("#1A212F", "#516B7F")
  return (
    <Flex pl={'10%'}>
    <Avatar 
        boxSize={"280"}
        src={img}
        css={{
        border: `4px solid ${outlineColor}`
        }}
    />
    </Flex>
  )
}