import Button from "@/app/components/ui/Button";
import Image from 'next/image'
import illustration from './images/Illustration.svg'
import amazonLogo from './images/amazon-logo.svg'
import drizzleLogo from './images/drizzle-logo.svg'
import hubspotLogo from './images/hubspot-logo.svg'
import notionLogo from './images/notion-logo.svg'
import netflixLogo from './images/netflix-logo.svg'
import zoomLogo from './images/zoom-logo.svg'

export default function HeroSection () {
  return (
    <div className="!mt-[70px] section-wrapper">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[35px] max-w-[530px]">
          <h1 className="text-h1">Navigating the digital landscape for success</h1>
          <p className="text-p max-w-[498px] !leading-[28px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <Button className='self-start'>Book a consultation</Button>
        </div>
        <Image src={illustration} width="600" height="515" alt="Illustration" />
      </div>
      <div className="flex flex-row justify-between mt-[70px]">
        <Image className="grayscale" src={amazonLogo} width={125} height={48} alt="Amazon logo" />
        <Image className="grayscale" src={drizzleLogo} width={127} height={48} alt="Drizzle logo" />
        <Image className="grayscale" src={hubspotLogo} width={129} height={48} alt="Hubspot logo" />
        <Image className="grayscale" src={notionLogo} width={146} height={48} alt="Notion logo" />
        <Image className="grayscale" src={netflixLogo} width={126} height={48} alt="Netflix logo" />
        <Image className="grayscale" src={zoomLogo} width={111} height={48} alt="Zoom logo" />
      </div>
    </div>
  )

}