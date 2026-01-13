"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LandingBackground from "@/app/components/LandingBackground";

const heroText = "I build high-impact AI, Web3, and real-time systems.";

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(heroText.slice(0, i));
      i++;
      if (i > heroText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <LandingBackground />

      <div className="relative z-10">
      
        

       

        {/* Hero */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
          <p className="text-green-500 mb-4">root@hrishikesh:~$</p>

          <h1 className="text-5xl font-bold mb-6">
            {displayed}
            <span className="animate-pulse">█</span>
          </h1>

          <p className="text-gray-300 max-w-2xl">
            A 19-year-old builder focused on shipping real products, not demos driven by problem-solving, speed, and ownership.
          </p>

          <div className="mt-10 flex gap-6">
            <Link
              href="/projects"
              className="px-8 py-4 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition"
            >
              Enter Systems
            </Link>

            <a
              href="#contact"
              className="px-8 py-4 border border-green-500 text-green-400 rounded hover:bg-green-500/10 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* About */}
<section id="about" className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold text-green-400 mb-10">
    About Me
  </h2>

  <div className="space-y-4">
    {/* Who am I */}
    <details className="border border-green-500 rounded-lg p-5 group">
      <summary className="cursor-pointer text-green-400 font-bold">
        ▸ Who am I?
      </summary>
      <p className="text-gray-300 mt-4">
        I’m Hrishikesh, a 19-year-old builder obsessed with creating products that ship and scale. I don’t just write code; I take ownership of what I build, from idea to execution. I’m actively looking for opportunities to work with teams that want to move fast and build things that actually matter.

      </p>
    </details>

    {/* What I build */}
    <details className="border border-green-500 rounded-lg p-5 group">
      <summary className="cursor-pointer text-green-400 font-bold">
        ▸ What do I build?
      </summary>
      <p className="text-gray-300 mt-4">
        I build software across web, AI, and real-time systems, using a strong foundation in problem-solving and competitive programming. I enjoy tackling complex challenges and turning them into clean, scalable products from AI-powered SaaS platforms to full-stack applications that solve real user and business problems.

      </p>
    </details>

    {/* How I think */}
    <details className="border border-green-500 rounded-lg p-5 group">
      <summary className="cursor-pointer text-green-400 font-bold">
        ▸ How do I think?
      </summary>
      <p className="text-gray-300 mt-4">
        I approach problems by breaking them down into smaller, solvable pieces. My mind works almost like recursion. I start with the core problem, decompose it into parts, solve each layer, and then build the complete system back up. This helps me design software that is both logically sound and easy to scale.

      </p>
    </details>

    {/* What I’m aiming for */}
    <details className="border border-green-500 rounded-lg p-5 group">
      <summary className="cursor-pointer text-green-400 font-bold">
        ▸ What am I aiming for?
      </summary>
      <p className="text-gray-300 mt-4">
        I’m aiming to build technology that makes a real impact, products that help people, teams, and businesses do better work. While financial success matters, what drives me most is learning, growing, and contributing to something meaningful. I’m always eager to take on new opportunities that push me forward.

      </p>
    </details>
  </div>
</section>



        {/* Skills */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold text-green-400 mb-10">
    Tech Loadout
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="border border-green-500 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <h3 className="text-green-400 font-bold mb-3">🤖 AI & Intelligence</h3>
      <p className="text-gray-300">OpenAI APIs, UX Heuristics, AI Automation</p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <h3 className="text-green-400 font-bold mb-3">⚡ Real-Time Systems</h3>
      <p className="text-gray-300">WebSockets, WebRTC, Live Sync, Event Systems</p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <h3 className="text-green-400 font-bold mb-3">🌐 Frontend</h3>
      <p className="text-gray-300">React, Next.js, Tailwind CSS, Framer Motion</p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <h3 className="text-green-400 font-bold mb-3">🧩 Backend</h3>
      <p className="text-gray-300">Node.js, Express, REST APIs, Python</p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <h3 className="text-green-400 font-bold mb-3">🗄 Databases</h3>
      <p className="text-gray-300">MongoDB, Firebase, Supabase</p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <h3 className="text-green-400 font-bold mb-3">🔗 Web3</h3>
      <p className="text-gray-300">Solidity, Wallets, Stablecoins, Blockchain APIs</p>
    </div>
  </div>
</section>


        {/* Experience */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold text-green-400 mb-10">
    Experience Log
  </h2>

  <div className="space-y-8">
    <div className="border border-green-500 p-6 rounded-lg">
      <h3 className="text-green-400 font-bold text-xl">
        Growth Intern — AlgoUniversity (YC S21)
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        YC-backed EdTech startup
      </p>
      <p className="text-gray-300">
        Worked directly with a fast-moving startup team to analyze product
        experience, identify user friction, and improve engagement. Found and
        documented critical UX and product bugs, helping improve user flow and
        conversion across the platform.
      </p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg">
      <h3 className="text-green-400 font-bold text-xl">
        Founder & Product Engineer — Multiple Startups
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        Self-initiated SaaS & platform projects
      </p>
      <p className="text-gray-300">
        Built and launched multiple production-grade platforms including an
        AI-powered UX audit system, a real-time collaborative coding platform,
        and a Web3-based payment gateway. Responsible for product design,
        system architecture, full-stack engineering, and shipping MVPs to real
        users.
      </p>
    </div>

    <div className="border border-green-500 p-6 rounded-lg">
      <h3 className="text-green-400 font-bold text-xl">
        Independent Developer
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        Web, AI & real-time systems
      </p>
      <p className="text-gray-300">
        Designed and engineered full-stack applications across web, AI. Focused on building scalable systems, optimizing
        performance, and creating products that feel fast, intuitive, and
        powerful.
      </p>
    </div>
  </div>
</section>


        {/* Contact */}
       <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold text-green-400 mb-10">
    Connect with Me
  </h2>

  <p className="text-gray-300 mb-10 max-w-2xl">
    Whether you want to collaborate, hire me, or talk about building something
    ambitious, these are the best ways to reach me.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=work.hrishikeshbhatia@gmail.com"
      className="border border-green-500 p-6 rounded-lg hover:bg-green-500/10 transition block"
    >
      <h3 className="text-green-400 font-bold mb-2">📧 Email</h3>
      <p className="text-gray-300">Private channel for serious conversations. Replies within 2 business days.</p>
    </a>

    <a
      href="https://www.linkedin.com/in/hrishikesh-bhatia/"
      target="_blank"
      className="border border-green-500 p-6 rounded-lg hover:bg-green-500/10 transition block"
    >
      <h3 className="text-green-400 font-bold mb-2">🔗 LinkedIn</h3>
      <p className="text-gray-300">
        My primary communication channel. I respond within 24 hours.
  5,000+ builders and founders follow my journey.
      </p>
    </a>

    <a
      href="https://github.com/hrishikesh-bhatia"
      target="_blank"
      className="border border-green-500 p-6 rounded-lg hover:bg-green-500/10 transition block"
    >
      <h3 className="text-green-400 font-bold mb-2">💻 GitHub</h3>
      <p className="text-gray-300">
        Source code for all my shipped products
      </p>
    </a>
  </div>
</section>

      </div>
    </main>
  );
}
