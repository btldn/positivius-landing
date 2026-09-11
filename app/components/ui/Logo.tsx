import Image from "next/image"
import logoBlack from './images/logo-black.svg'
import logoWhite from './images/logo-white.svg'

type LogoProps = {
  variant: "white" | "black"
  width?: number
  height?: number
}

const logoVariant = {
  white: logoWhite,
  black: logoBlack,
}

export default function Logo ({variant, width, height}: LogoProps) {
  return (
    <div>
      <Image src={logoVariant[variant]} alt="logo" width={width} height={height} />
    </div>
  )
}