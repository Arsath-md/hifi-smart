import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Top Footer */}
        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-black font-black flex items-center justify-center text-lg">
                H
              </div>

              <h2 className="text-3xl font-black tracking-tight">
                HIFI SMART
              </h2>
            </div>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
              We build premium digital products, scalable applications, and
              AI-powered systems that help businesses grow faster online.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 text-white placeholder:text-white/30"
              />

              <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/50">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-300 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-300 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-cyan-300 transition"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-300 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-white/50">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-cyan-300 transition"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/mobile-app-development"
                  className="hover:text-cyan-300 transition"
                >
                  Mobile Apps
                </Link>
              </li>

              <li>
                <Link
                  href="/services/ai-automation"
                  className="hover:text-cyan-300 transition"
                >
                  AI Automation
                </Link>
              </li>

              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-cyan-300 transition"
                >
                  SEO & Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          {/* Copyright */}
          <div>
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 HIFI SMART. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-lg text-white/50 hover:text-cyan-300 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-lg text-white/50 hover:text-cyan-300 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-lg text-white/50 hover:text-cyan-300 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Back To Top */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-white/50 hover:text-cyan-300 transition"
          >
            Back To Top

            <span className="group-hover:-translate-y-1 transition">
              <FaArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}