import {ReactNode} from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string;
}

const variantClasses = {
  primary: 'bg-(--color-primary) text-white hover:opacity-70',
  secondary: 'bg-transparent border-[1px] hover:bg-(--color-primary) hover:text-white',
  tertiary: 'bg-(--color-accent)'
}

export default function Button({
  children,
  variant = 'primary',
  className
}: ButtonProps) {
  return (
    <>
      <button
        className={`px-[35px] py-[20px] text-button rounded-[14px] cursor-pointer duration-400  ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    </>
  )
}