import Card from "@/app/components/ui/Card";
import Link from "@/app/components/ui/Link";
import Heading from "@/app/components/blocks/Heading";

export default function Cases() {
  return (
    <div className='section-wrapper'>
      <Heading title='Case Studies' subtitle='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies' />
      <Card className='!p-[60px] flex [&>*]:flex-1 [&>*]:min-w-0 [&>*]:px-[64px] [&>*:first-child]:pl-0 [&>*:last-child]:pr-0 [&>*+*]:border-l [&>*+*]:border-white' variant='black'>
        <div>
          <p className='text-p mb-[20px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <Link arrow='green'>Learn more</Link>
        </div>
        <div>
          <p className='text-p mb-[20px]'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <Link arrow='green'>Learn more</Link>
        </div>
        <div>
          <p className='text-p mb-[20px]'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <Link arrow='green'>Learn more</Link>
        </div>
      </Card>
    </div>
  )
}