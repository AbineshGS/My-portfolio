import about from "../assests/assets/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500 ">me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div
               whileInView={{opacity:1 ,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration: 0.5}}
              className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-3xl float-left" src={about} alt="About me"/>
              </div>
            
            </motion.div>
            <motion.div
            whileInView={{opacity:1 ,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-4 max-w-2xl py-6 text-left text-xl">I'm an Artificial Intelligence and Data Science Engineer with a deep passion for harnessing the power of data to create intelligent, innovative solutions. My expertise lies at the intersection of AI, machine learning, and web development, where I enjoy crafting dynamic, data-driven applications that solve real-world problems.

With a strong foundation in Python, JavaScript, and modern web frameworks, I thrive in environments that challenge me to think creatively and analytically. Whether it's developing web applications that offer seamless user experiences or designing algorithms that uncover hidden insights in data, I am committed to pushing the boundaries of what's possible with technology.

Beyond coding, I'm always eager to explore new technologies and stay at the forefront of industry trends. My goal is to contribute to projects that not only showcase technical excellence but also make a meaningful impact.</p>
             
            </div>
           </motion.div>
        </div>
      </div>
  )
}

export default About;