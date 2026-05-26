import Link from "next/link";

const projects = [
  {
    title: "HIFI Smart Agency",
    category: "Web Development",
    description:
      "Modern startup agency website with premium UI, SEO optimization, and responsive design with high performence.",
    icon: "🚀",
    link:"https://hifi-smart.vercel.app/"
  },
  {
    title: "Blog website",
    category: "Web App",
    description:
      "High-performance online creating and uploading platform with secure admin dashboard.",
    icon: "📝",
    link:"https://github.com/Arsath-md/my-blog"
  },
  {
    title: "Homecare Website",
    category: "Webite",
    description:
      "High-performance and mordern application for the Home care nursing company called velan homecare",
    icon: "⚕️",
    link:"https://homecare-alpha.vercel.app/"

  }
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 bg-black overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.25em] uppercase mb-6">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Recent Projects &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Products
            </span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            We create premium digital experiences designed for growth,
            scalability, and real business impact.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-cyan-400/30 transition duration-500"
            >
              {/* Image Area */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20" />

                <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-700">
                  {project.icon}
                </div>

                {/* Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/10">
                  0{index + 1}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-cyan-300 text-sm uppercase tracking-[0.2em]">
                    {project.category}
                  </p>

                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition">
                    ↗
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-4 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <Link href={project.link}>
                  <button className="flex items-center gap-2 text-white/70 group-hover:text-cyan-300 transition-all">
                    View Project
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </button></Link>

                  <span className="text-white/20 text-sm">
                    Premium Project
                  </span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-cyan-400/[0.03]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}