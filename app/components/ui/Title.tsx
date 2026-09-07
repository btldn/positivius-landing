import {ReactNode} from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
  variant?: 'black' | 'green' | 'white'
}

const variantClasses = {
  black: 'bg-(--color-primary) text-white',
  white: 'bg-white',
  green: 'bg-(--color-accent)'
}


export default function Title({children, variant='green', className='text-h2'}: TitleProps) {
  return (
    <div className='max-w-[221px]'>
      <h2 className={`inline box-decoration-clone px-[7px] rounded-[7px] ${variantClasses[variant]} ${className}`}>{children}</h2>
    </div>

  )
}