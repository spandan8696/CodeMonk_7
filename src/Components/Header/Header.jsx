import { useScroll, useTransform } from 'framer-motion';
import plane from "../Images/jet3.png";
import { motion } from "framer-motion";
import "./Header.css"
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import Logo from "../Images/pilgrim.png"

const Header = () => {

  const [isListVisible, setListVisibility] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleList = () => {
    setListVisibility(!isListVisible);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };


  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const x = useTransform(scrollYProgress, [0, 1], [-500, 1200]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);
  // const z = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const width = useTransform(scrollYProgress, [0, 1], [300, 500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 0]);
  return (
    <div className='header'>
      <div className="n-wrapper">
        <div div className="n-left" >
        </div >
        <motion.section
          className="n-right"
          initial={{ opacity: -20, y: -150, x: 0 }}
          animate={{ opacity: 5, y: 20, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <ul>
            <li>
              <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                Home
              </Link>
            </li>
            <li>
              <Link spy={true} to="Services" smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link spy={true} to="ChatBox" smooth={true}>
                ChatBox
              </Link>
            </li>
            <li>
              <Link spy={true} to="Portfolio" smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link spy={true} to="Testimonials" smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </motion.section>
      </div>
      <div className='container'>
        <motion.section className="n-name"
          initial={{ opacity: -20, y: -150, x: 0 }}
          animate={{ opacity: 5, y: 20, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src={Logo}
            width={800}
            // height={300}
            alt="Logo"
          />
        </motion.section>
        {/* <div className="n-name">
          <img src={Logo} width={800} alt="Logo" />
        </div> */}
        <motion.img
          className='plane'
          style={{ scale, x, y, width: "600px", rotate: rotate }}
          src={plane}
          alt="Scrolling Image"
        />
      </div>
      <motion.section
        className="text"
        initial={{ opacity: -20, y: -150, x: 0 }}
        animate={{ opacity: 5, y: 20, x: 0 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <div className="t-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, eos?</div>
        <div className='Button'>
          <button>Explore</button>
        </div>
      </motion.section>
      <div className="black-line"></div>
    </div>
  );
}

export default Header;