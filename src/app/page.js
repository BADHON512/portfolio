
import Hero from './../components/layout/Hero';
import Contact from './../components/Contact';
import About from './../components/About';
import Expertise from '@/components/Expertise';
import Work from '@/components/Work';
import Feedback from '@/components/Feedback';
import MERN from '@/components/MERN';



export default function Home() {

  return (
    <div className='bg-[#050816] text-white'>
      <Hero />
      <About />
      <MERN/>
      <Expertise />
      <Work />
      <Feedback />
      <Contact />
    </div>
  )



}
