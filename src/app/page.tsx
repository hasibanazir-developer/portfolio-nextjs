"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const [open, setOpen] = useState(false);
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      {/* NAVBAR */}
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1
          className="text-xl font-semibold tracking-widest font-serif"
          style={{
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hasiba Nazir
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 text-sm md:text-base">
          <a href="#home" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5">Home</a>
          <a href="#about" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5">About Me</a>
          <a href="#education" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5">Education</a>
          <a href="#skills" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5">Skills</a>
          <a href="#expertise" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5">Expertise</a>
          <a href="#contact" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5">Contact</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-2">
          <a onClick={() => setOpen(false)} href="#home" className="block text-gray-400 hover:text-white py-2">Home</a>
          <a onClick={() => setOpen(false)} href="#about" className="block text-gray-400 hover:text-white py-2">About Me</a>
          <a onClick={() => setOpen(false)} href="#education" className="block text-gray-400 hover:text-white py-2">Education</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block text-gray-400 hover:text-white py-2">Skills</a>
          <a onClick={() => setOpen(false)} href="#expertise" className="block text-gray-400 hover:text-white py-2">Expertise</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block text-gray-400 hover:text-white py-2">Contact</a>
        </div>
      )}
    </nav>
      {/* HERO SECTION */}
    <section
  id="home"
  className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden pt-20"
>
  <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
    
    {/* Left Side */}
    <motion.div
      className="text-center md:text-left space-y-5 max-w-xl"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-purple-500 italic font-serif">
        Hasiba Nazir
      </h1>

      <p className="text-gray-400 text-2xl font-medium">
        <Typewriter
          words={[
            "React Developer",
            "Python Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <p className="text-gray-300 leading-relaxed">
        Hi! 👋 I am a creative frontend web developer who enjoys building
        attractive and responsive websites. I work with technologies like
        HTML, CSS, JavaScript, React, Next.js, Python, PHP, and Flask to
        create smooth and modern user experiences. I love exploring new ideas,
        improving my development skills, and transforming concepts into
        functional digital products.
      </p>

      {/* Buttons */}
    <div className="flex gap-4 justify-center md:justify-start pt-3">
  
  <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30">
    Hire Me
  </button>

  <a
    href="https://github.com/hasibanazir-developer"
    target="_blank"
    rel="noopener noreferrer"
    className="px-7 py-3 rounded-full border border-purple-500 hover:bg-purple-500 transition duration-300"
  >
    View Projects
  </a>

</div>
    </motion.div>

    {/* Right Side Image */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="flex justify-center"
    >
      <div className="relative group">
        
        {/* Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

        {/* Image */}
       <img
  src="/4.png"
  alt="Hasiba Nazir"
  className="
    relative
    w-[220px] h-[220px]
    sm:w-[260px] sm:h-[260px]
    md:w-[350px] md:h-[350px]
    object-cover
    rounded-full
    border-4
    border-purple-500
    shadow-2xl
    transition-all
    duration-500
    grayscale
    hover:grayscale-0
    hover:scale-105
  "
/>
      </div>
    </motion.div>
  </div>
</section>

      {/* ABOUT SECTION */}
<section
  id="about"
  className="py-24 bg-black text-white overflow-hidden"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Main Heading */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="text-center mb-16"
    >
      <h2
        className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        About Me
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
    </motion.div>

    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="flex justify-center"
      >
        <div className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

          <img
            src="/5.png"
            alt="Hasiba Nazir"
            className="
              relative
              w-[320px]
              md:w-[380px]
              rounded-3xl
              border border-gray-800
              grayscale
              group-hover:grayscale-0
              group-hover:scale-105
              transition-all
              duration-700
              shadow-2xl
            "
          />
        </div>
      </motion.div>

      {/* Right Side Journey */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="
          bg-white/5
          backdrop-blur-lg
          border border-purple-500/20
          rounded-3xl
          p-8
          shadow-2xl
        "
      >
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          My Journey
        </h3>

        <p className="text-gray-300 leading-8 text-lg">
          I am Hasiba Nazir from Lahore and have completed my Software
          Engineering studies from Virtual University of Pakistan.
          Along with my academic journey, I gained professional
          experience by teaching at college level and working in the
          telesales department at Zameen.com, where I improved my
          communication and teamwork abilities.I actively work on online projects and continuously explore
          advanced technologies to enhance my development skills.
          Besides coding, I have a strong interest in painting,
          creative designing, and reading, which inspire me to think
          creatively and bring unique ideas into my work.
        </p>
      </motion.div>

    </div>
  </div>
</section>
      {/* EDUCATION SECTION */}
<section id="education" className="py-20 text-center bg-black">
  <h2
  className="text-3xl md:text-4xl font-bold mb-4 
             bg-gradient-to-r from-purple-400 to-pink-500 
             bg-clip-text text-transparent font-sans"
>
  Education</h2>

<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">

    {/* Matric */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.07 }}
      className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl mb-3"
      >
       🔬
      </motion.div>

      <h3 className="text-lg font-semibold text-blue-400">Matric (Science)</h3>
      <p className="text-gray-300 mt-2 text-sm">
        Tayyab Islamia High School<br />
        Strong foundation in science subjects and basic computer skills.
      </p>
    </motion.div>

    {/* ICS */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.07 }}
      className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl mb-3"
      >
        💻
      </motion.div>

      <h3 className="text-lg font-semibold text-green-400">ICS</h3>
      <p className="text-gray-300 mt-2 text-sm">
        Government Post Graduate Islamia College for Women<br />
        Studied programming fundamentals, math and computer science concepts.
      </p>
    </motion.div>

    {/* BSSE */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.07 }}
      className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl mb-3"
      >
       🎓
      </motion.div>

      <h3 className="text-lg font-semibold text-purple-400">
        BS Software Engineering
      </h3>
      <p className="text-gray-300 mt-2 text-sm">
        Virtual University of Pakistan<br />
        Focused on web development, software engineering and modern technologies.
      </p>
    </motion.div>

  </div>
</section>

      {/* SKILLS SECTION (UNCHANGED - EXACT SAME) */}
      <section id="skills" className="py-20 text-center bg-gray-950">

  <h2
    className="text-3xl md:text-4xl font-bold mb-4 
               bg-gradient-to-r from-purple-400 to-pink-500 
               bg-clip-text text-transparent font-sans"
  >
    My Skills
  </h2>

  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-10 rounded-full"></div>

  <div className="max-w-4xl mx-auto space-y-12 px-6 text-left">

    {/* FRONTEND → LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h3 className="text-xl font-semibold mb-6 text-blue-400">
        Frontend
      </h3>

      <div className="grid grid-cols-2 gap-6">

        {[
          ["HTML", "90%"],
          ["CSS", "85%"],
          ["JavaScript", "80%"],
          ["React", "75%"],
        ].map(([name, percent]) => (
          <div key={name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{name}</span>
              <span>{percent}</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: percent }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}

      </div>
    </motion.div>

    {/* BACKEND → RIGHT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h3 className="text-xl font-semibold mb-6 text-green-400">
        Backend
      </h3>

      <div className="grid grid-cols-2 gap-6">

        {[
          ["Python", "70%"],
          ["PHP", "65%"],
        ].map(([name, percent]) => (
          <div key={name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{name}</span>
              <span>{percent}</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-green-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: percent }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}

      </div>
    </motion.div>

    {/* FRAMEWORKS → LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h3 className="text-xl font-semibold mb-6 text-purple-400">
        Frameworks
      </h3>

      <div className="grid grid-cols-2 gap-6">

        {[
          ["Flask", "60%"],
          ["Django", "65%"],
        ].map(([name, percent]) => (
          <div key={name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{name}</span>
              <span>{percent}</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: percent }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}

      </div>
    </motion.div>

  </div>
</section>

      {/* Expertise */}
 <section id="expertise" className="py-20 text-center">

 <h2
  className="text-3xl md:text-4xl font-bold mb-4 
             bg-gradient-to-r from-purple-400 to-pink-500 
             bg-clip-text text-transparent"
>
  My Expertise
</h2>

<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-10 rounded-full"></div>

  {/* CARDS ROW */}
  <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto px-4">

    {/* UI/UX DESIGN */}
    <div className="w-full md:w-80 p-5 border border-gray-700 rounded-xl 
                    bg-white/5 backdrop-blur-md 
                    hover:scale-105 
                    hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 
                    hover:border-pink-400 
                    hover:text-white 
                    transition-all duration-300 cursor-pointer">

      <div className="text-4xl mb-3">🎨</div>

      <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>

      <p className="text-gray-400 text-sm hover:text-white transition">
        Designing modern, clean, and visually appealing user interfaces with a strong focus on usability and user experience. Creating intuitive layouts that are easy to navigate, engaging, and accessible across all devices.
      </p>

    </div>

    {/* FRONTEND */}
    <div className="w-full md:w-80 p-5 border border-gray-700 rounded-xl 
                    bg-white/5 backdrop-blur-md 
                    hover:scale-105 
                    hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 
                    hover:border-blue-400 
                    hover:text-white 
                    transition-all duration-300 cursor-pointer">

      <div className="text-4xl mb-3">💻</div>

      <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>

      <p className="text-gray-400 text-sm hover:text-white transition">
        Building fast, responsive, and interactive user interfaces using modern frontend technologies like React and Tailwind CSS. Focused on creating clean UI designs, smooth user experience, and mobile-friendly layouts that work seamlessly across all devices.
      </p>

    </div>

    {/* WEB DEVELOPMENT */}
    <div className="w-full md:w-80 p-5 border border-gray-700 rounded-xl 
                    bg-white/5 backdrop-blur-md 
                    hover:scale-105 
                    hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-700 
                    hover:border-emerald-400 
                    hover:text-white 
                    transition-all duration-300 cursor-pointer">

      <div className="text-4xl mb-3">&lt;/&gt;</div>

      <h3 className="font-semibold text-lg mb-2">Web Development</h3>

      <p className="text-gray-400 text-sm hover:text-white transition">
        Building modern, responsive, and fully functional websites using both frontend and backend technologies. Focused on creating fast, scalable, and user-friendly web applications.
      </p>

    </div>

  </div>

</section>
      {/* CONTACT SECTION */}
 <section
  id="contact"
  className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
>
  {/* TITLE */}
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 
             bg-gradient-to-r from-purple-400 to-pink-500 
             bg-clip-text text-transparent">Contact Me</h2>

<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-16 rounded-full"></div>

  {/* MAIN GRID */}
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div className="space-y-6">

      {/* SOCIAL CARD */}
      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">

        {/* HEADING */}
        <h3
          className="text-lg font-semibold mb-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          style={{ fontFamily: "Lucida Handwriting, cursive" }}
        >
          Connect With Me
        </h3>

        <div className="flex gap-4 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hasiba-nazir-0312462a0"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-black/30 border border-white/10 
                       hover:bg-white/10 hover:scale-105 transition"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#0A66C2] hover:text-white transition">
              🔗
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hasibanazir-developer"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-black/30 border border-white/10 
                       hover:bg-white/10 hover:scale-105 transition"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-white hover:text-black transition">
              <i className="fa-brands fa-github"></i>
            </div>
            <span className="font-medium">GitHub</span>
          </a>

        </div>
      </div>

      {/* EMAIL CARD */}
      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
        <p className="text-gray-400 text-sm mb-3">Email</p>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 flex items-center justify-center rounded-full 
                          bg-gray-800 text-gray-300 
                          hover:bg-pink-500 hover:text-white 
                          transition duration-300 cursor-pointer">
            ✉️
          </div>

          <a
            href="mailto:hasibanazir@gmail.com"
            className="text-gray-300 hover:text-blue-400 text-lg font-medium transition"
          >
            hasibanazir@gmail.com
          </a>

        </div>
      </div>
    </div>

    {/* RIGHT SIDE - FORM */}
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">

      <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
        />

        <textarea
          rows={4}
          placeholder="Your Message"
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                     hover:scale-105 transition"
          style={{ fontFamily: "Lucida Handwriting, cursive" }}
        >
          Send Message
        </button>
      </form>

    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="mt-16 text-center text-xs text-gray-500">
  <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
    <span className="text-gray-400 hover:text-gray-200 transition">
      © 2026 Hasiba Nazir. All rights reserved.
    </span>
  </div>
</div>
</section>
    </main>
  );
}