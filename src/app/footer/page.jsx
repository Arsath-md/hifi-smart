


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
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-white/50">
              <li>
                <a
                  href="/"
                  className="hover:text-cyan-300 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/service"
                  className="hover:text-cyan-300 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/portfolio"
                  className="hover:text-cyan-300 transition"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-cyan-300 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>

            <ul className="space-y-4 text-white/50">
              <li className="hover:text-cyan-300 transition cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-cyan-300 transition cursor-pointer">
                Mobile Apps
              </li>

              <li className="hover:text-cyan-300 transition cursor-pointer">
                AI Automation
              </li>

              <li className="hover:text-cyan-300 transition cursor-pointer">
                SEO & Marketing
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          
          {/* Copyright */}
          <div>
            <p className="text-white/40 text-sm">
              © 2026 HIFI SMART. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-cyan-300 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              instagram
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-cyan-300 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              Linkedin
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-cyan-300 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              Twitter
            </a>
          </div>

          {/* Back To Top */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-white/50 hover:text-cyan-300 transition"
          >
            Back To Top
            
          </a>
        </div>
      </div>
    </footer>
  );
}