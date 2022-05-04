import React from 'react';
import AboutSection from '../AboutSection';
import FaqSection from '../FaqSection';
import ServicesSection from '../ServicesSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
