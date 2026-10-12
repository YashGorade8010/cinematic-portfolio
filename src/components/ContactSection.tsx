import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37]">
            06 / CONTACT
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2
              className="text-6xl sm:text-7xl md:text-8xl uppercase leading-[0.82]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                LET'S
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                TALK.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-[1.9] text-[#A8988B]">
              Looking for a Software Developer who is passionate about
              learning, building practical applications and solving
              real-world problems? Let&apos;s connect and build something
              meaningful together.
            </p>

            <div className="mt-8">
              <span className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-5 py-3 text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                OPEN TO OPPORTUNITIES
              </span>
            </div>
          </motion.div>

          {/* Right Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative border border-[#8C6D4F]/40 bg-[#100D0B]/85 backdrop-blur-xl p-8 sm:p-10"
          >
            {/* Gold Corners */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#D4AF37]" />

            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D4F] mb-8">
              DIRECT CONNECTION
            </p>

            {/* Email */}
            <a
              href="mailto:yashgorade27@gmail.com"
              className="block group border-b border-[#8C6D4F]/20 pb-6 mb-6"
            >
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#8C6D4F] mb-2">
                EMAIL
              </span>

              <span className="text-lg sm:text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                yashgorade27@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918010586766"
              className="block group border-b border-[#8C6D4F]/20 pb-6 mb-6"
            >
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#8C6D4F] mb-2">
                PHONE
              </span>

              <span className="text-lg sm:text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                +91 80105 86766
              </span>
            </a>

            {/* Location */}
            <div className="border-b border-[#8C6D4F]/20 pb-6 mb-6">
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#8C6D4F] mb-2">
                LOCATION
              </span>

              <span className="text-lg text-white">
                Pune, Maharashtra
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">

              <a
                href="https://github.com/YashGorade8010"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#8C6D4F]/50 text-[10px] tracking-[0.2em] uppercase text-[#E8DFD8] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/yash-gorade-750295362"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#8C6D4F]/50 text-[10px] tracking-[0.2em] uppercase text-[#E8DFD8] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:yashgorade27@gmail.com"
                className="px-5 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/5 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
              >
                Send Email ↗
              </a>

            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D4F]">
            YASH GORADE // SOFTWARE DEVELOPER
          </span>

          <span className="text-[10px] text-[#8C6D4F]">
            © {new Date().getFullYear()} YASH GORADE
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;