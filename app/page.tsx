import Header from './components/sections/Header'
import Hero from "@/app/components/sections/Hero";
import Services from "@/app/components/sections/Services";
import Proposal from "@/app/components/sections/Proposal";
import Cases from "@/app/components/sections/Cases";
import Process from "@/app/components/sections/Process";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Proposal />
      <Cases />
      <Process />
    </>
  );
}
