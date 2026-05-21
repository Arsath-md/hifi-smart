export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-black text-white"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[45px] border border-cyan-400/20 bg-white/[0.04] backdrop-blur-2xl">
          
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-[45px] border border-white/10 pointer-events-none" />

          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="p-12 md:p-16 lg:p-20">
              <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.25em] uppercase mb-6">
                Let’s Build Together
              </span>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                Ready To Scale Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Business Digitally?
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
                We help startups and businesses launch premium digital
                products, automate operations, improve branding, and grow
                faster using modern technology solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mb-12">
                <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300">
                  Book A Strategy Call
                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-black/40 hover:border-cyan-300/40 hover:bg-white/5 transition duration-300">
                  Explore Services
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-black text-cyan-300 mb-2">
                    100+
                  </h3>
                  <p className="text-white/50 text-sm">
                    Projects Delivered
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-cyan-300 mb-2">
                    24/7
                  </h3>
                  <p className="text-white/50 text-sm">
                    Support & Growth
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-cyan-300 mb-2">
                    99%
                  </h3>
                  <p className="text-white/50 text-sm">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative h-full min-h-[500px] hidden lg:flex items-center justify-center border-l border-white/10">
              
              {/* Main Circle */}
              <div className="relative w-[320px] h-[320px] rounded-full border border-cyan-400/20 bg-cyan-400/5 flex items-center justify-center">
                
                {/* Inner Circle */}
                <div className="w-[220px] h-[220px] rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 flex items-center justify-center text-8xl">
                  🚀
                </div>

                {/* Floating Cards */}
                <div className="absolute top-0 left-0 px-5 py-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
                  <p className="text-cyan-300 text-sm">Web Development</p>
                </div>

                <div className="absolute bottom-10 -left-10 px-5 py-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
                  <p className="text-cyan-300 text-sm">AI Automation</p>
                </div>

                <div className="absolute top-16 -right-10 px-5 py-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
                  <p className="text-cyan-300 text-sm">SEO Growth</p>
                </div>

                <div className="absolute bottom-0 right-0 px-5 py-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
                  <p className="text-cyan-300 text-sm">Mobile Apps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}