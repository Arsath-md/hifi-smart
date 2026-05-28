"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center">
            {/* <span className="text-cyan-300 font-black text-xl">H</span> */}
            <img src="/image.png" className="rounded" alt="" />
          </div>

          <div>
            <h1 className="text-lg font-black tracking-wide text-white">
              HIFI SMART
            </h1>

            <p className="text-xs text-white/50">
              Web & Mobile App Agency
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">

          <li>
            <Link
              href="/"
              className="text-white/70 hover:text-cyan-300 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/process"
              className="text-white/70 hover:text-cyan-300 transition"
            >
              About
            </Link>
          </li>

          {/* Desktop Services Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-2 text-white/70 hover:text-cyan-300 transition">
              Services
              <span className="text-xs">▼</span>
            </button>

            <div className="absolute text-white top-full left-0 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-72 rounded-3xl border border-white/10 bg-black/95 backdrop-blur-2xl p-4">

                <Link
                  href="/service/Web-development"
                  className="block p-4 rounded-2xl hover:bg-white/5"
                >
                  <button>web development</button>
                </Link>

                <Link
                  href="/service/App-development"
                  className="block p-4 rounded-2xl hover:bg-white/5"
                >
                  App Development
                </Link>

                <Link
                  href="/service/Marketing"
                  className="block p-4 rounded-2xl hover:bg-white/5"
                >
                  Digital Marketing
                </Link>

                <Link
                  href="/service/Ai-automation"
                  className="block p-4 rounded-2xl hover:bg-white/5"
                >
                  AI Automation
                </Link>

              </div>
            </div>
          </li>

          <li>
            <Link
              href="/portfolio"
              className="text-white/70 hover:text-cyan-300 transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/subcription"
              className="text-white/70 hover:text-cyan-300 transition"
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-white/70 hover:text-cyan-300 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            href="/contact"
            className="hidden md:flex px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
          >
            Start Project
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1"
            aria-label="Open Menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black px-5 py-6">

          <div className="flex flex-col gap-5 text-white/70">

            <Link href="/">Home</Link>

            <Link href="/process">About</Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-between w-full"
              >
                Services
                <span>{serviceOpen ? "-" : "+"}</span>
              </button>

              {serviceOpen && (
                <div className="mt-4 ml-4 flex flex-col gap-4 text-sm text-white/50">

                  <Link href="/services/web-development">
                    Web Development
                  </Link>

                  <Link href="/services/app-development">
                    App Development
                  </Link>

                  <Link href="/services/digital-marketing">
                    Digital Marketing
                  </Link>

                  <Link href="/services/ai-automation">
                    AI Automation
                  </Link>

                </div>
              )}
            </div>

            <Link href="/projects">Projects</Link>

            <Link href="/subcription">plans</Link>

            <Link href="/contact">Contact</Link>

          </div>
        </div>
      )}
    </header>
  );
}