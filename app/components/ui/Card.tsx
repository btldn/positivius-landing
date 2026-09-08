import {ReactNode} from "react";

type CardProps = {
  children: ReactNode;
  variant?: 'gray' | 'green' | 'black' | 'white';
  className?: string;
}

const variantClasses = {
  gray: 'bg-(--color-bright)',
  green: 'bg-(--color-accent)',
  black: 'bg-(--color-primary) text-white',
  white: 'bg-white ',
}


export default function Card ({children, variant = 'gray', className}: CardProps) {
  return (
    <div className={`p-[50px] shadow-[0px_5px_0px_#191A23] border border-[#191A23] rounded-[45px] ${variantClasses[variant]} ${className}`}>{children}</div>

  )

}