const process = [
  {
    step: "01",
    title: "Research & Strategy",
    description:
      "We deeply analyze your business, audience, competitors, and goals before starting the project.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Premium interfaces designed for trust, engagement, smooth navigation, and higher conversions.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Fast, scalable, and SEO-friendly applications built using modern technologies and clean architecture.",
    icon: "⚡",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description:
      "Deployment, optimization, analytics, and continuous improvements to help your business grow.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 overflow-hidden bg-zinc-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.25em] uppercase mb-6">
              Our Process
            </span>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              We Create Digital Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                That Feel Premium
              </span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Most agencies only focus on design. We focus on business growth,
              scalability, speed, and long-term digital success.
            </p>

            {/* Extra Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-4xl font-black text-cyan-300 mb-2">
                  100%
                </h3>
                <p className="text-white/60">Modern & Scalable Solutions</p>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-4xl font-black text-cyan-300 mb-2">
                  24/7
                </h3>
                <p className="text-white/60">Support & Optimization</p>
              </div>
            </div>
          </div>

          {/* Right Process Cards */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="group relative flex gap-6 p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/[0.07] transition duration-500"
                >
                  {/* Step Number */}
                  <div className="relative z-10 min-w-[70px] h-[70px] rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-cyan-300 font-bold text-lg">
                        {item.step}
                      </span>

                      <div className="h-[1px] w-12 bg-cyan-400/30" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition">
                      {item.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 bg-cyan-400/5 transition duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}