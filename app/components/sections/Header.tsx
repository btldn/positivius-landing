import Button from "@/app/components/ui/Button";
import Logo from "@/app/components/ui/Logo";
import Navigation from "@/app/components/blocks/Navigation";


export default function Header() {
  return (
    <header className='section-wrapper !mt-0 flex justify-between py-5 items-center text-[20px]'>
      <Logo variant='black'/>
      <div className='flex items-center gap-[40px]'>
        <Navigation animation={true}/>
        <Button variant='secondary'>Request a quote</Button>
      </div>
    </header>
  )
}
