"use client"

import Heading from "@/app/components/blocks/Heading";
import Card from "@/app/components/ui/Card";
import Testimonial from "@/app/components/blocks/Testimonial";
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useState} from "react";


type TestimonialCard = {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialCard[] = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote: "Positivus rebuilt our SEO strategy from the ground up and the results speak for themselves — we now rank on the first page for every keyword that matters to us. What stood out was how clearly they explained each decision along the way.",
    author: "Emily Carter",
    role: "Head of Growth at BrightPath",
  },
  {
    quote: "Our paid search spend was bleeding money before we brought Positivus on board. Within two months they cut our cost per lead in half while doubling volume. I wish we had found them sooner.",
    author: "Daniel Reyes",
    role: "Founder at Loop Interiors",
  },
  {
    quote: "The content team at Positivus just gets our voice. Every article reads like someone from our company wrote it, and organic traffic has climbed every single month since we started.",
    author: "Priya Nair",
    role: "Content Lead at Northwind Analytics",
  },
  {
    quote: "Working with Positivus feels less like hiring an agency and more like adding a marketing department. They are proactive, transparent with reporting, and genuinely invested in our numbers going up.",
    author: "Marcus Feld",
    role: "CEO at Harbor & Co",
  },
]

export default function Testimonials () {

  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const syncEdges = (s: SwiperClass) => {
    setIsBeginning(s.isBeginning)
    setIsEnd(s.isEnd)
  }

  return (
    <section id="testimonials" className='section-wrapper'>
      <Heading title="Testimonials" subtitle='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services' />
      <Card variant='black' className='px-0'>
        <div className='overflow-hidden'>
          <Swiper
            onSwiper={(s) => { setSwiper(s); syncEdges(s); }}
            onSlideChange={syncEdges}
            modules={[Mousewheel, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            slidesOffsetBefore={315}
            slidesOffsetAfter={315}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              thresholdDelta: 30,
              thresholdTime: 700,
            }}
            pagination={{
              el: ".testimonials-dots",
              clickable: true,
              renderBullet: (index, className) => `
              <span class="${className}" >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="currentColor"/>
                 </svg>
               </span>`,
            }}
          >
            {testimonials.map((testimonial: TestimonialCard, index) => (
              <SwiperSlide key={index}><Testimonial author={testimonial.author} quote={testimonial.quote} role={testimonial.role}/></SwiperSlide>
            ))}
            <div className="mt-[100px] flex items-center justify-center gap-[180px]">
              <button className='cursor-pointer duration-200 hover:opacity-70 disabled:opacity-30 disabled:cursor-default' onClick={() => swiper?.slidePrev()} disabled={isBeginning} aria-label="Previous">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 12.5459C22.3284 12.5459 23 11.8743 23 11.0459C23 10.2175 22.3284 9.5459 21.5 9.5459L21.5 12.5459ZM0.439341 9.98524C-0.146446 10.571 -0.146446 11.5208 0.43934 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97483 12.6924 1.02508 12.1066 0.439296C11.5208 -0.146491 10.5711 -0.146491 9.98528 0.439296L0.439341 9.98524ZM21.5 9.5459L1.5 9.5459L1.5 12.5459L21.5 12.5459L21.5 9.5459Z" fill="white"/>
                </svg>
              </button>
              <div className="testimonials-dots flex gap-[16px]" />
              <button className='cursor-pointer duration-200 hover:opacity-70 disabled:opacity-30 disabled:cursor-default' onClick={() => swiper?.slideNext()} disabled={isEnd} aria-label="Next" >
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 12.5459L21.5 12.5459L21.5 9.5459L1.5 9.5459L1.5 12.5459Z" fill="white"/>
                </svg>
              </button>
            </div>
          </Swiper>

        </div>
      </Card>
    </section>
  )
}
