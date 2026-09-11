import Heading from "@/app/components/blocks/Heading";
import {Member} from "@/app/components/blocks/Member";
import {StaticImageData} from "next/image";
import johnSmith from "./images/john-smith.png";
import janeDoe from "./images/jane-doe.png";
import michaelBrown from "./images/michael-brown.png";
import emilyJohnson from "./images/emily-johnson.png";
import brianWilliams from "./images/brian-williams.png";
import sarahKim from "./images/sarah-kim.png";
import Button from "@/app/components/ui/Button";

type Member = {
  name: string;
  position: string;
  description: string;
  avatar: StaticImageData;
}

const members: Member[] = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    avatar: johnSmith,
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    avatar: janeDoe,
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    avatar: michaelBrown,
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    avatar: emilyJohnson,
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    avatar: brianWilliams,
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    avatar: sarahKim,
  },
]

export default function Team() {
  return (
    <section id="about" className='section-wrapper'>
      <Heading title='Team' subtitle='Meet the skilled and experienced team behind our successful digital marketing strategies'/>
      <div className='grid grid-cols-3 gap-[40px] mb-[40px]'>
        {members.map((member: Member) => (
          <Member key={member.name} name={member.name} position={member.position} description={member.description} avatar={member.avatar}/>
        ))}
      </div>
      <div className='flex justify-end'>
        <Button variant='primary' className='px-[76px]'>See all team</Button>
      </div>

    </section>
  )
}