import * as React from "react"
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
  Image
} from "@chakra-ui/react"
import logo from "./logo.png"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const jump = keyframes`
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,5%,0) scale3d(.9,1.1,1);}
  100% {transform: translate3d(0,10%,0) scale3d(1.1,.9,1);}
`

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `
        ${jump} 0.4s linear alternate infinite
      `

  return <Image _hover={{animation}} src={logo} ref={ref} {...props} />
})
