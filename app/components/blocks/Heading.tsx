import {ReactNode} from "react";

type TitleProps = {
  children: ReactNode;
  variant?: 'black' | 'green' | 'white'
  subtitle?: string;
}

const variantClasses = {
  black: 'bg-(--color-primary) text-white',
  white: 'bg-white',
  green: 'bg-(--color-accent)'
}


export default function Heading({children, variant='green', subtitle}: TitleProps) {
  return (
    <div className='flex gap-[40px] items-center'>

      <p className='max-w-[580px] text-(length:--text-size-p)'>{subtitle}</p>
    </div>

  )
}