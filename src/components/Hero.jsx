import profilepic from "../assests/assets/profile1.jpg";
import { motion } from "framer-motion";
const container = (delay) =>({
  hidden :{ x:-100, opacity:0},
  visible:{
    x:0 ,opacity:1,transition:{duration:0.5 ,delay:delay},
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                variants={container(0)}
                initial = "hidden"
                animate="visible"
                 className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"> Abinesh G</motion.h1>
                <motion.span
                variants={container(0.5)}
                initial = "hidden"
                animate="visible"
                 className="bg-gradient from-black via-slate-500 to-black bg-clip-text text-2xl mt-0 pt-0 tracking-tight ">AN Ariticial Intelligence and Data Science Engineer</motion.span>
                <motion.p
                variants={container(1)}
                initial = "hidden"
                animate="visible"
                className="my-2 py-6 tracking-tighter font-light max-w-2xl">Artificial Intelligence and Data Science Engineer with a strong foundation in AI, machine learning, and data science. Passionate about developing innovative web applications and leveraging data-driven solutions to solve complex problems. Skilled in Python, JavaScript, and modern web frameworks. Enthusiastic about exploring new technologies and driving impactful projects in both AI and web development.</motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center">
                <motion.img
                initial={{x:100, opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1, delay:1.2}}  
                src={profilepic} alt="profile picture"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero