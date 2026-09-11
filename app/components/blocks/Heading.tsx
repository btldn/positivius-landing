import Title from "@/app/components/ui/Title";

type HeadingProps = {
  title: string;
  subtitle: string;
}

export default function Heading({title, subtitle}: HeadingProps) {
  return (
    <div className='flex gap-[40px] items-center mb-[80px]'>
      <Title>{title}</Title>
      <p className='max-w-[580px] text-p'>{subtitle}</p>
    </div>

  )
}