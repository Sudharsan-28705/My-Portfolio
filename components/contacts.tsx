"use client";

import React from "react";
import { motion } from "framer-motion";

const iconWrapper =
  "flex items-center justify-center w-12 h-12 transition-all duration-300";
const iconClass =
  "w-7 h-7 text-gray-300 transition-all duration-300 group-hover:text-white group-hover:-translate-x-1";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Contact Me
          </h2>
          <div className="mt-4 mx-auto w-20 md:w-24 h-[2px] bg-white/30" />
        </div>

        {/* Description */}
        <div className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          <p>
            I’m currently looking for opportunities such as internships and
            freelance projects where I can apply my skills and grow through
            real‑world experience.
          </p>
          <p className="mt-4">
            If you think we could work together, feel free to reach out.
          </p>
        </div>

        {/* Icons */}
        <motion.div
          className="flex items-center justify-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/Sudharsan-28705"
            target="_blank"
            aria-label="GitHub"
            className="group"
          >
            <div className={iconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 6.8c.85 0 1.71.12 2.51.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.57 5.1.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.48A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sudharsan-s-a374aa293"
            target="_blank"
            aria-label="LinkedIn"
            className="group"
          >
            <div className={iconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6v10h-4v-9c0-2.1 0-4.8-2.9-4.8s-3.4 2.3-3.4 4.7v9.1h-4V8z" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:sudharsan.panimalarit@gmail.com"
            aria-label="Email"
            className="group"
          >
            <div className={iconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919345404660" // TODO: add your WhatsApp link here
            aria-label="WhatsApp"
            className="group"
          >
            <div className={iconWrapper}>
              <svg viewBox="0 0 32 32" fill="currentColor" className={iconClass}>
                <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.646.86 5.093 2.316 7.082L4 29l7.168-2.28a12.94 12.94 0 004.835.95C22.623 27.67 28 22.288 28 15.67 28 9.05 22.623 3 16.003 3zm0 22.003a10.9 10.9 0 01-4.63-1.02l-.332-.155-4.25 1.35 1.39-4.14-.215-.34a10.88 10.88 0 01-1.67-5.72c0-6.02 4.9-10.92 10.92-10.92s10.92 4.9 10.92 10.92-4.9 10.92-10.92 10.92z" />
              </svg>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_._iam_soos_._/" // TODO: add your Instagram link here
            aria-label="Instagram"
            className="group"
          >
            <div className={iconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
