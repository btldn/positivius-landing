import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import cardProposal from './images/card-proposal.svg'

export default function Proposal() {
  return (
    <section id="proposal" className="section-wrapper">
      <Card variant='gray' className='shadow-none border-none relative !p-[60px]'>
        <div className='flex flex-col max-w-[470px] gap-[26px]'>
          <h3 className='text-h3'>Let&#39;s make things happen</h3>
          <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <Button className='self-start'>Get your free proposal</Button>
        </div>
        <Image src={cardProposal} alt="" className="absolute -top-[24px] right-[156px] z-10" />
      </Card>
    </section>
  )
}