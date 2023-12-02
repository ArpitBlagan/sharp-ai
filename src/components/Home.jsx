import Particle from './Particle';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className='relative h-[600px] '>
      <div className='hidden md:table'><Particle/></div>
      <div className='absolute top-[2dvh] md:top-[20dvh] left-[5dvh]'>
        <h2 className='font-thin text-[90px] mb-3'>Arpit Blagan</h2>
        <h2 className='font-thin text-[50px]'>An Aspiring Software Developer</h2>
        <p className='font-thin'>with hands on experience in MERN stack.</p>
        <div className=' flex flex-row justify-between m-3'>
        <a href="https://654f5e5d8de2e11ec5ae6c51--tiny-sfogliatella-c52d9f.netlify.app/" target='_blank'>
        <motion.button whileHover={{scale:1.2}} transition={{duration:1}} className='bg-black font-thin  text-white py-5 px-10 rounded-2xl'>About Me</motion.button></a>
        <a href="https://github.com/ArpitBlagan" target='_blank'>
        <motion.button whileHover={{scale:1.2}} transition={{duration:1}} className='bg-black font-thin text-white  py-5 px-10 rounded-2xl'>My Work</motion.button></a>  
        </div>
      </div>
    </div>
  )
}

export default Home