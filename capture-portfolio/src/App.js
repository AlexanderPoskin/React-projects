import React from 'react';
import AboutUs from './components/pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './components/pages/ContactUs';
import OurWork from './components/pages/OurWork';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieDetail from './components/pages/MovieDetail';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
