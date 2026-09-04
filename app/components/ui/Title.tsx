import {ReactNode} from "react";

type TitleProps = {
  children: ReactNode;
  variant?: 'black' | 'green' | 'white'
}

const variantClasses = {
  black: 'bg-(--color-primary) text-white',
  white: 'bg-white',
  green: 'bg-(--color-accent)'
}


export default function Title({children, variant='green'}: TitleProps) {
  return (
    <h2 className={`text-h2 px-[7px] rounded-[7px] ${variantClasses[variant]}`}>{children}</h2>
  )
}