import {ReactNode} from "react";

type CardProps = {
  children: ReactNode;
  variant?: 'gray' | 'green' | 'black'
  className?: string;
}

const variantClasses = {
  gray: 'bg-(--color-bright) border border-[#191A23]',
  green: 'bg-(--color-accent) border border-[#191A23]',
  black: 'bg-(--color-primary) border border-[#191A23] text-white'
}


export default function Card ({children, variant = 'gray', className}: CardProps) {
  return (
    <div className={`p-[50px] shadow-[0px_5px_0px_#191A23] rounded-[45px] ${variantClasses[variant]} ${className}`}>{children}</div>

  )

}