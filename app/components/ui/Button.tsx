import {ReactNode} from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string;
}

const variantClasses = {
  primary: 'bg-(--color-primary) text-white',
  secondary: 'bg-transparent border-[1px]',
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
        className={`px-[35px] py-[20px] text-button rounded-[14px] cursor-pointer ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    </>
  )
}