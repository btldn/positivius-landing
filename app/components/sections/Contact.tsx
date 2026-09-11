"use client"

import Heading from "@/app/components/blocks/Heading";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Image from "next/image"
import decor from './images/contact-decorative.svg'
import {useForm, SubmitHandler} from 'react-hook-form'
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object ({
  topic: z.enum(["hi", "quote"]),
  name: z.string().min(2).optional(),
  email: z.string().email(),
  message: z.string().min(5),
})

type FormFields = z.infer<typeof schema>

export default function Contact() {
  const {register, handleSubmit, formState: { errors, isSubmitting}} = useForm<FormFields>({resolver: zodResolver(schema)})
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
  }

  return (
    <section id="pricing" className="section-wrapper">
      <Heading title='Contact Us' subtitle='Connect with Us: Let&#39;s Discuss Your Digital Marketing Needs'/>
      <Card variant='gray'
            className="px-[100px] pt-[60px] pb-[80px] border-none shadow-none flex justify-between relative ">
        <form className='flex flex-col gap-[25px] min-w-[556px]' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-[35px]'>
            <label className='flex gap-[14px] cursor-pointer'>
              <input {...register("topic")} className='radio' type="radio" name='topic' value='hi' defaultChecked/>
              <p className='text-p'>Say Hi</p>
            </label>
            <label className='flex gap-[14px] cursor-pointer'>
              <input {...register("topic")} className='radio' type="radio" name='topic' value='quote'/>
              <p className='text-p'>Get a Quote</p>
            </label>
          </div>

          <label>
            <p className='text-[16px] mb-[5px]'>Name</p>
            <input {...register("name")}
                   className='px-[30px] py-[18px] bg-white rounded-[14px] border w-full' type="text"
                   placeholder="Name"/>
          </label>
          <label>
            <p className='text-[16px] mb-[5px]'>Email*</p>
            <input {...register("email")}
                   className='px-[30px] py-[18px] bg-white rounded-[14px] border w-full' type="text"
                   placeholder="Email"/>
          </label>
          {errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
          <label>
            <p className='text-[16px] mb-[5px]'>Message*</p>
            <textarea {...register("message")}
                      cols={30} rows={7}
                      className='px-[30px] py-[18px] bg-white rounded-[14px] w-full border resize-none'
                      placeholder="Message"></textarea>
          </label>
          {errors.message && (<div className="text-red-500">{errors.message.message}</div>)}
          <Button disabled={isSubmitting} variant='primary'>{isSubmitting ? 'Loading...' : 'Send Message'}</Button>
        </form>
        <Image className='absolute right-0' src={decor} alt=''/>
      </Card>
    </section>
  )
}