import Link from "next/link"

export default function Nav(){
    return(<>
<header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
  <nav
    className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between"
    aria-label="Main Navigation"
  >
    {/* Logo */}
    <a
      href="/"
      className="flex items-center gap-3"
      aria-label="HIFI SMART Home"
    >
      <div className="w-11 h-11 rounded-2xl bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center">
        <span className="text-cyan-300 font-black text-xl">H</span>
      </div>

      <div>
        <h1 className="text-lg font-black tracking-wide text-white">
          HIFI SMART
        </h1>

        <p className="text-xs text-white/50">
          Web & Mobile App Agency
        </p>
      </div>
    </a>

    {/* Navigation Links */}
    <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">
      <li>
        <a
          href="/"
          className="text-white/70 hover:text-cyan-300 transition"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="/about"
          className="text-white/70 hover:text-cyan-300 transition"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="/services"
          className="text-white/70 hover:text-cyan-300 transition"
        >
          Services
        </a>
      </li>

      <li>
        <a
          href="/projects"
          className="text-white/70 hover:text-cyan-300 transition"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="/blog"
          className="text-white/70 hover:text-cyan-300 transition"
        >
          Blog
        </a>
      </li>

      <li>
        <a
          href="/contact"
          className="text-white/70 hover:text-cyan-300 transition"
        >
          Contact
        </a>
      </li>
    </ul>

    {/* CTA Button */}
    <div className="flex items-center gap-4">
      <a
        href="/contact"
        className="hidden md:flex px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300"
      >
        Start Project
      </a>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col gap-1"
        aria-label="Open Menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>
    </div>
  </nav>
</header>

</>)}