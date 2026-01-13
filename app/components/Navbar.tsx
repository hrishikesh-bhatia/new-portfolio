"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-green-500 bg-black/70 backdrop-blur-lg">


      <h1 className="text-green-400 font-bold text-xl">
        Hrishikesh.exe
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6 text-green-300">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        {/* <a href="/#about">About</a> */}
        <a href="/#skills">Skills</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
      </div>

      {/* Mobile */}
      <button
        className="md:hidden text-green-400 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-green-500 flex flex-col text-green-300 md:hidden">
          <Link href="/" className="px-6 py-4 border-b border-green-500">
            Home
          </Link>
          <Link href="/projects" className="px-6 py-4 border-b border-green-500">
            Projects
          </Link>
          {/* <a href="/#about" className="px-6 py-4 border-b border-green-500">
            About
          </a> */}
          <a href="/#skills" className="px-6 py-4 border-b border-green-500">
            Skills
          </a>
          <a href="/#experience" className="px-6 py-4 border-b border-green-500">
            Experience
          </a>
          <a href="/#contact" className="px-6 py-4">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
