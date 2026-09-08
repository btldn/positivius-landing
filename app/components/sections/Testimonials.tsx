"use client"

import Heading from "@/app/components/blocks/Heading";
import Card from "@/app/components/ui/Card";
import Testimonial from "@/app/components/blocks/Testimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
  return (
    <div className='section-wrapper'>
      <Heading title="Testimonials" subtitle='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services' />
      <Card variant='black' className='px-0'>
        <div className='overflow-hidden'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            slidesOffsetBefore={260}
            slidesOffsetAfter={260}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
          >
            {testimonials.map((testimonial: TestimonialCard, index) => (
              <SwiperSlide key={index}><Testimonial author={testimonial.author} quote={testimonial.quote} role={testimonial.role}/></SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Card>
    </div>
  )
}
