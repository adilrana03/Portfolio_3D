
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Profile1, Profile2, Profile3, Profile4 } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
        <Tilt className='xs:w-[250px] w-full'>
                <motion.div
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                >
                        <div

                                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                        >
                                <img
                                        src={icon}
                                        alt='web-development'
                                        className='w-16 h-16 object-contain'
                                />

                                <h3 className='text-white text-[20px] font-bold text-center'>
                                        {title}
                                </h3>
                        </div>
                </motion.div>
        </Tilt>
);

const About = () => {
        return (
                <>
                        <motion.div variants={textVariant()}>
                                <p className={styles.sectionSubText}>Introduction</p>
                                <h2 className={styles.sectionHeadText}>Overview.</h2>
                        </motion.div>

                        <motion.p
                                variants={fadeIn("", "", 0.1, 1)}
                                className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] block  md:flex lg:flex '
                        >
                                <p className='mr-10'>
                                        I am a <strong className='text-orange-400'>passionate developer</strong> My
                                        Portfolio is the representation of all that I've learned
                                        and accomplished as a web developer. I'm comfortable
                                        working 12 hours if I find the project is worth it. You
                                        can imagine me focused on the laptop screen and typing
                                        or taking down notes. Apart from technical things, I
                                        enjoy comics and playing cricket
                                        <br></br>
                                        Now that you know me a bit, please feel free to drop a
                                        text because{' '}
                                        <strong className='text-orange-400'>Communication is a two-way street.</strong>
                                </p>
                                <img src={Profile3} alt="" className='h-[350px] w-[350px] p-2 md:mt-[-80px] rounded-full ml-8 mr-[-60px] hover:h-[500px] hover:w-[500px] hover:rounded-[30%] ' />
                        </motion.p>

                        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                                {services.map((service, index) => (
                                        <ServiceCard key={service.title} index={index} {...service} />
                                ))}
                        </div>
                </>
        );
};

export default SectionWrapper(About, "about");



