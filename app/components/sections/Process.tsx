"use client"

import Heading from "@/app/components/blocks/Heading";
import Card from "@/app/components/ui/Card";
import {useState} from "react";
import ProcessStep from "@/app/components/blocks/ProcessStep";

type CardContent = {
  title: string;
  description: string;
}

const workingProcessCards: CardContent[] = [
  {
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Research and Strategy Development',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Implementation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Monitoring and Optimization',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Reporting and Communication',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Continual Improvement',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
]

export default function Process () {


  return (
    <section id="process" className='section-wrapper'>
      <Heading title='Our Working Process ' subtitle='Step-by-Step Guide to Achieving Your Business Goals' />
      {workingProcessCards.map((card, index) => {
        return (
          <ProcessStep title={card.title} description={card.description} index={index} key={`processStep-${index}`} />
        )
      })}
    </section>
  )
}