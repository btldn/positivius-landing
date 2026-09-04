import Button from "@/app/components/ui/Button";
import Image from 'next/image'
import illustration from './images/Illustration.svg'

export default function HeroSection () {
  return (
    <div className="!mt-[70px] section-wrapper flex justify-between items-center">
      <div className="flex flex-col gap-[35px] max-w-[530px]">
        <h1 className="text-h1">Navigating the digital landscape for success</h1>
        <p className="text-p max-w-[498px] !leading-[28px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <Button className='self-start'>Book a consultation</Button>
      </div>
      <Image src={illustration} width="600" height="515" alt="Illustration" />
    </div>
  )

}