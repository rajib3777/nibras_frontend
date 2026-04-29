import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import flowerImg from '../../assets/flower.png';

const HeroDecoration = () => {
  const flowerRefs = useRef([]);

  useEffect(() => {
    flowerRefs.current.forEach((flower, i) => {
      gsap.to(flower, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating Flowers/Patterns */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={el => flowerRefs.current[i] = el}
          className="absolute opacity-10 md:opacity-20"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: `${Math.random() * 100 + 100}px`
          }}
        >
          <img src={flowerImg} alt="Pattern" className="w-full h-auto" />
        </div>
      ))}

      {/* Circular Badge Element */}
      <div className="absolute top-1/3 right-[15%] hidden lg:block">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[10px] font-bold fill-accent tracking-[2px] uppercase">
              <textPath xlinkHref="#circlePath">
                Join Our Quran Family • Join Our Quran Family •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary font-bold">N</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroDecoration;
