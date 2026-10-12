import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/6 w-[30rem] h-[30rem] bg-[#D4AF37] rounded-full blur-[180px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-10"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            01 / ABOUT ME
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >

            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88] mb-7"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                I BUILD
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                WITH CODE.
              </span>
            </h2>

            {/* About Text */}
            <p className="text-sm md:text-[15px] font-light text-[#B3A497] leading-[1.9] tracking-wide max-w-2xl mb-8">
              I&apos;m <span className="text-[#F3DBB3] font-medium">Yash Pandurang Gorade</span>,
              a Software Developer and B.Tech Information Technology graduate
              from Dr. D. Y. Patil School of Engineering and Technology.
            </p>

            <p className="text-sm md:text-[15px] font-light text-[#B3A497] leading-[1.9] tracking-wide max-w-2xl mb-10">
              I enjoy building practical software applications and learning
              modern technologies. I have knowledge of Java, JavaScript,
              React.js, Python, SQL, HTML, CSS, PHP, AWS and Git.
            </p>

            {/* Information Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-[#8C6D4F]/25">

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#D4AF37]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  2026
                </span>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#A8988B] mt-1">
                  Graduation
                </p>
              </div>

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#F4EBE2]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  B.TECH
                </span>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#A8988B] mt-1">
                  IT
                </p>
              </div>

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#D4AF37]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  FRESHER
                </span>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#A8988B] mt-1">
                  Experience
                </p>
              </div>

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#F4EBE2]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  PUNE
                </span>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#A8988B] mt-1">
                  Location
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center"
          >

            <div className="relative p-3 border border-[#8C6D4F]/50 bg-[#120F0C]/80 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">

              {/* Gold Corners */}
              <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#D4AF37]" />

              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5]">

                <img
                  src="/yash-photo.png"
                  alt="Yash Gorade"
                  className="w-full h-full object-cover object-top brightness-[0.95] contrast-[1.05]"
                />

                {/* Dark Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Name */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
                    SOFTWARE DEVELOPER
                  </p>

                  <p
                    className="text-3xl text-white mt-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    YASH GORADE
                  </p>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;