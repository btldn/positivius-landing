
type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial ({ quote, author, role }: TestimonialProps) {
  return (
    <div className=''>
      <div className='px-[52px] py-[48px] border border-(--color-accent) rounded-[45px] mb-[45px] min-h-[200px] box-border'>
        <p className='text-p h-full'>&#34;{quote}&#34;</p>
      </div>
      <div>
        <p className='text-p text-(--color-accent)'>{author}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}