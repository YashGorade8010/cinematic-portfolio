import React from 'react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-black text-[#E8DFD8] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-8"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            05 / EDUCATION
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-[0.85] mb-14"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
            EDUCATION
          </span>

          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            & QUALIFICATION.
          </span>
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -5 }}
          className="relative border border-[#8C6D4F]/40 bg-[#100D0B]/80 backdrop-blur-xl p-8 sm:p-10"
        >
          {/* Gold Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

            {/* Main Info */}
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] mb-3">
                2022 - 2026
              </p>

              <h3
                className="text-4xl sm:text-5xl text-white mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                B.TECH IN INFORMATION TECHNOLOGY
              </h3>

              <p className="text-sm text-[#C99E5D] uppercase tracking-[0.15em] mb-5">
                DR. D. Y. PATIL SCHOOL OF ENGINEERING AND TECHNOLOGY
              </p>

              <p className="text-sm text-[#A8988B] leading-[1.8] max-w-2xl">
                Pursuing a Bachelor of Technology in Information Technology
                with a focus on software development, programming, web
                technologies, databases and problem-solving.
              </p>
            </div>

            {/* Degree Badge */}
            <div className="shrink-0 border border-[#8C6D4F]/40 px-6 py-5 text-center">
              <span
                className="block text-4xl text-[#D4AF37]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                B.TECH
              </span>

              <span className="text-[10px] tracking-[0.25em] text-[#A8988B]">
                INFORMATION TECHNOLOGY
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;