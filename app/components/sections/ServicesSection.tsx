import Heading from "@/app/components/blocks/Heading";
import Image, {StaticImageData} from 'next/image'
import Card from "@/app/components/ui/Card";
import LinkIcon from "@/app/components/ui/LinkIcon";
import cardMarketing from './images/card-marketing.png'
import cardSearch from './images/card-search.png'
import cardContent from './images/card-content.png'
import cardClick from './images/card-click.png'
import cardEmail from './images/card-email.png'
import cardAnalysis from './images/card-analysis.png'
import Title from "@/app/components/ui/Title";

type CardContent = {
  title: string;
  titleColor: 'white' | 'green';
  bg: 'black' | 'green' | 'gray';
  bgLink: 'white' | 'black';
  arrowColor: 'black' | 'green';
  image: StaticImageData;
}

const serviceCardsContent: CardContent[] = [
  {
    title: 'Search Engine Optimization',
    titleColor: 'green',
    bg: 'gray',
    bgLink: 'black',
    arrowColor: 'green',
    image: cardSearch
  },
  {
    title: 'Pay-per-click Advertising',
    titleColor: 'white',
    bg: 'green',
    bgLink: 'black',
    arrowColor: 'green',
    image: cardClick
  },
  {
    title: 'Social Media Marketing',
    titleColor: 'white',
    bg: 'black',
    bgLink: 'white',
    arrowColor: 'black',
    image: cardMarketing
  },
  {
    title: 'Email Marketing',
    titleColor: 'green',
    bg: 'gray',
    bgLink: 'black',
    arrowColor: 'green',
    image: cardEmail
  },
  {
    title: 'Content Creation',
    titleColor: 'white',
    bg: 'green',
    bgLink: 'black',
    arrowColor: 'green',
    image: cardContent
  },
  {
    title: 'Analytics and Tracking',
    titleColor: 'green',
    bg: 'black',
    bgLink: 'white',
    arrowColor: 'black',
    image: cardAnalysis
  }
]

export default function ServicesSection () {
  return (
    <div className='section-wrapper'>
      <Heading
        title="Services"
        subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className='grid grid-cols-2 gap-[40px]'>
        {serviceCardsContent.map((card) => (
          <Card key='card' variant={card.bg} className='max-w-[600px] min-h-[310px] flex justify-between'>
            <div className='flex flex-col justify-between'>
              <Title className='text-h3 text-black' variant={card.titleColor}>{card.title}</Title>
              <LinkIcon arrow={card.arrowColor} bg={card.bgLink} />
            </div>

            <Image className='self-center' src={card.image} width='210' height='200' alt='абобик'/>
          </Card>
        ))}

      </div>

    </div>

  )

}