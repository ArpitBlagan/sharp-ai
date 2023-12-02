import { easeIn,motion } from "framer-motion"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <motion.div
    initial={{opacity:0,scale:0.4}}
    animate={{opacity:1,scale:1}}
    transition={{duration:2,animate:'easeIn'}}
    className='mx-[40px] my-[20px]  h-[50px] flex 
    justify-center
    items-center bg-white text-sm sm:text-2xl rounded-3xl shadow-2xl sticky top-0 z-[99]'>
      <Link to="/"><motion.h1 whileHover={{scale:1.4}} className='px-[20px]  cursor-pointer'>Home</motion.h1></Link>
      <Link to="/data"><motion.h1 whileHover={{scale:1.4}} className="px-[20px] cursor-pointer">Data</motion.h1></Link>
      <Link to="/transaction"><motion.h1 whileHover={{scale:1.4}} className="px-[20px] cursor-pointer">Transaction</motion.h1></Link>
</motion.div>
  )
}

export default Nav