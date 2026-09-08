import Card from "@/app/components/ui/Card";
import {useState} from "react";

type StepProps = {
  title: string;
  description: string;
  index: number;
}


export default function ProcessStep({title, description, index}: StepProps) {

  const [openId, setOpenId] = useState(0);

  return (
    <Card  className='px-[60px] py-[41px] mb-[30px] transition-all duration-200 ease-in-out last:mb-0' variant={`${openId === index ? 'green' : 'gray'}`} key={`working-card-${index}`}>
      <div onClick={() => setOpenId(openId === index ? -1 : index)} className='flex items-center justify-between cursor-pointer'>
        <div className='flex items-center gap-[25px]'>
          <h2 className='text-h2'>{'0' + index}</h2>
          <h3 className='text-h4'>{title}</h3>
        </div>
        <div className="w-[58px] h-[58px] bg-white rounded-[999px] border relative">
          <div className={`
            before:absolute before:content-[''] before:w-[25px] before:h-[5px] before:bg-black before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2
            after:absolute after:content-[''] after:w-[5px] after:h-[25px] after:bg-black after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300
            ${openId === index && 'after:-rotate-90'}
          `}>
          </div>
        </div>
      </div>
      <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
        openId === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}>
        <div className='overflow-hidden'>
          <hr className='mt-[30px] mb-[30px]' />
          <p>{description}</p>
        </div>
      </div>
    </Card>
  )
}