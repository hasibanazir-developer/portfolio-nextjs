"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

    <h1 className="text-xl font-semibold tracking-widest font-serif"
      style={{
        background: "linear-gradient(90deg, #a855f7, #ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
      Hasiba Nazir
    </h1>

    <div className="space-x-1 text-sm md:text-base">
      <a href="#home" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200">Home</a>
      <a href="#about" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200">About Me</a>
      <a href="#education" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200">Education</a>
      <a href="#skills" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200">Skills</a>
      <a href="#projects" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200">Projects</a>
      <a href="#contact" className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200">Contact</a>
    </div>

  </div>
</nav>
      {/* HERO SECTION */}
      <section id="home" className="flex items-center justify-center h-screen pt-20">

        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6">

          <motion.div
            className="text-center md:text-left space-y-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
           <h1 className="text-5xl font-bold text-purple-500 italic font-serif">
  Hasiba Nazir
</h1>

            <p className="text-gray-400 text-xl">
              <Typewriter
                words={["Next.js Developer", "React Developer", "Python Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <p className="text-white-500 max-w-md">
Hi!👋 I am a creative frontend web developer who enjoys building attractive and responsive websites. I work with technologies like HTML, CSS, JavaScript, React, Next.js, Python, PHP, and Flask to create smooth and modern user experiences. I love exploring new ideas, improving my development skills, and transforming concepts into functional digital products. My aim is to develop websites that are visually appealing, easy to use, and meaningful for users.            </p>
          </motion.div>

        </div>
      </section>

      {/* ABOUT SECTION */}
<section id="about" className="py-20 bg-gray-900 text-white">
  <div className="max-w-4xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, x: 100 }}   // 👈 RIGHT SIDE ENTRY
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="bg-gray-950 border border-gray-800 rounded-2xl p-8 shadow-lg"
    >
      <h2
  className="text-3xl font-bold mb-6 text-center text-purple-500"
  style={{ fontFamily: "Lucida Handwriting, cursive" }}
>
  About Me
</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
I am Hasiba Nazir from Lahore and have completed my Software Engineering studies from Virtual University of Pakistan. Along with my academic journey, I gained professional experience by teaching at college level and working in the telesales department at Zameen.com, where I improved my communication and teamwork abilities. I actively work on online projects and continuously explore advanced technologies to enhance my development skills. Besides coding, I have a strong interest in painting, creative designing, and reading, which inspire me to think creatively and bring unique ideas into my work.      </p>
    </motion.div>

  </div>
</section>
      {/* EDUCATION SECTION */}
<section id="education" className="py-20 text-center bg-black">
  <h2 className="text-3xl font-bold mb-12 text-purple-500"
    style={{ fontFamily: "Lucida Handwriting, cursive" }}>Education</h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">

    {/* Matric */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.07 }}
      className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl mb-3"
      >
        🏫
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
<h2 className="text-3xl font-bold mb-10 text-purple-500"
  style={{ fontFamily: "Lucida Handwriting, cursive" }}>My Skills</h2>
        <div className="max-w-4xl mx-auto space-y-12 px-6">

          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 text-left">
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

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-green-400 text-left">
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

          {/* FRAMEWORKS */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-400 text-left">
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 text-center">

  <h2
    className="text-3xl font-bold mb-8 text-purple-500"
    style={{ fontFamily: "Lucida Handwriting, cursive" }}
  >
    My Projects
  </h2>

  {/* ROW LAYOUT */}
  <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">

    {/* PROJECT 1 */}
    <a href="/1.png" target="_blank" rel="noopener noreferrer">
      <div className="w-full md:w-80 p-4 border border-gray-700 rounded-lg hover:scale-105 transition duration-300 cursor-pointer">

        <Image
          src="/1.png"
          alt="Blood On Click"
          width={300}
          height={180}
          className="rounded-lg mb-3 w-full h-40 object-cover"
        />

        <h3 className="font-semibold">Blood On Click Admin Panel</h3>

        <p className="text-gray-400 text-sm">
          PHP based admin dashboard for managing blood donation system.
        </p>

      </div>
    </a>

    {/* PROJECT 2 */}
    <a href="/2.png" target="_blank" rel="noopener noreferrer">
      <div className="w-full md:w-80 p-4 border border-gray-700 rounded-lg hover:scale-105 transition duration-300 cursor-pointer">

        <Image
          src="/2.png"
          alt="Fake Review Detection"
          width={300}
          height={180}
          className="rounded-lg mb-3 w-full h-40 object-cover"
        />

        <h3 className="font-semibold">Fake Review Detection</h3>

        <p className="text-gray-400 text-sm">
          Python ML project using opinion mining and VADER sentiment analysis.
        </p>

      </div>
    </a>

    {/* PROJECT 3 */}
    <a href="/3.png" target="_blank" rel="noopener noreferrer">
      <div className="w-full md:w-80 p-4 border border-gray-700 rounded-lg hover:scale-105 transition duration-300 cursor-pointer">

        <Image
          src="/3.png"
          alt="Course Activity System"
          width={300}
          height={180}
          className="rounded-lg mb-3 w-full h-40 object-cover"
        />

        <h3 className="font-semibold">Course Activity Management System</h3>

        <p className="text-gray-400 text-sm">
          System for managing courses, students, and instructor activities.
        </p>

      </div>
    </a>

  </div>

</section>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 text-center bg-gray-950">
<h2
  className="text-3xl font-bold mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
  style={{ fontFamily: "Lucida Handwriting, cursive" }}
>
  Contact Me
</h2>
  {/* ICON ROW */}
  <motion.div
    className="flex justify-center items-center gap-12 text-xl"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
  >

    {/* LinkedIn */}
    <a
  href="https://www.linkedin.com/in/hasiba-nazir-0312462a0"
  target="_blank"
  className="flex items-center gap-2 text-[#0A66C2] hover:scale-110 transition"
>
  🔗 LinkedIn
</a>
    {/* GitHub */}
    <a
  href="https://github.com/hasibanazir-developer"
  target="_blank"
  className="flex items-center gap-2 hover:scale-110 transition"
>
  <i className="fa-brands fa-github"></i> GitHub
</a>

  </motion.div>

  {/* EMAIL (SEPARATE LINE) */}
  <motion.p
    className="mt-6 text-gray-300 text-lg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
  >
<span className="text-red-500 font-bold">Email:</span>{" "}
    <a
      href="mailto:hasibanazir@gmail.com"
      className="text-blue-400 hover:underline"
    >
      hasibanazir@gmail.com
    </a>
  </motion.p>
</section>

    </main>
  );
}