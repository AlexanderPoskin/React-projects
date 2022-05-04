import React from 'react';
import home1 from '../img/home1.png';
import { About, Decscription, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from './animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Decscription>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <div>
          <motion.p variants={fade}>Contact us for any ideas that you have!</motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </div>
      </Decscription>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="a guy with camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
