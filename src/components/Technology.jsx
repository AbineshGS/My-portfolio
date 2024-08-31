import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";
const iconvarient =(duration) =>({
    initial:{y : -10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
    }
)
const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-22">
        <h2 className="my-20 text-center text-4xl">TECHOLOGIES</h2>
        <div className="flex flex-wrap item justify-center gap-4 ">
            <motion.div
            variants={iconvarient(2.5)}
            initial="intitial"
            animate="animate"
             className="border-4 rounded-2xl p-4 border-neutral-800 mb-5">
                <RiReactjsLine className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div
            variants={iconvarient(3.5)}
            initial="intitial"
            animate="animate"
             className="border-4 rounded-2xl p-4 border-neutral-800 mb-5">
                <TbBrandNextjs className="text-7xl text-neutral-600"/>
            </motion.div>
            <motion.div
            variants={iconvarient(4.5)}
            initial="intitial"
            animate="animate"
            className="border-4 rounded-2xl p-4 border-neutral-800 mb-5">
                <SiMysql className="text-7xl text-cyan-800"/>
            </motion.div>
            <motion.div
            variants={iconvarient(5.5)}
            initial="intitial"
            animate="animate"
            className="border-4 rounded-2xl p-4 border-neutral-800 mb-5">
                <SiPowerbi className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div
            variants={iconvarient(4.5)}
            initial="intitial"
            animate="animate"
            className="border-4 rounded-2xl p-4 border-neutral-800 mb-5">
                <RiTailwindCssFill className="text-7xl text-sky-600"/>
            </motion.div>
            <motion.div
            
            variants={iconvarient(3.5)}
            initial="intitial"
            animate="animate"className="border-4 rounded-2xl p-4 border-neutral-800 mb-5">
                <FaNodeJs className="text-7xl text-green-600"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technology