import Link from "next/link";

const services = [
  {
    title: "Web Application Development",
    description:
      "Modern, scalable web applications built for startups, local businesses, and fast-growing brands.",
    icon: "🌐",
    routes:"Web-development"
  },
  {
    title: "Mobile App Development",
    description:
      "Premium Android & iOS applications with smooth performance and modern user experience.",
    icon: "📱",
    routes:"App-development"

  },
  {
    title: "AI Automation",
    description:
      "AI-powered chatbots, workflow automation, smart dashboards, and business process systems.",
    icon: "🤖",
    routes:"Ai-automation"

  },
  {
    title: "Digital Marketing",
    description:
      "SEO, branding, social media growth, performance marketing, and lead generation strategies.",
    icon: "📈",
    routes:"Marketing"

  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[#071018] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.25em] uppercase mb-6">
            Our Services
          </span>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
            Digital Solutions Built
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              For Modern Businesses
            </span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            We help startups and businesses launch powerful digital products,
            automate operations, and scale faster online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-[1px] rounded-[32px] text-white bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-400/40 transition duration-500"
            >
              <div className="h-full rounded-[32px] bg-zinc-950/90 backdrop-blur-xl p-8 border border-white/5 hover:border-cyan-400/20 transition duration-500">
                {/* Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-3xl">
                    {service.icon}
                  </div>

                  <span className="text-white/10 text-5xl font-black">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Button */}
                <Link href={`/service/${service.routes}`}>
                <button className="flex items-center gap-2 text-cyan-300 font-medium group-hover:gap-4 transition-all">
                  Learn More
                  <span>→</span>
                </button></Link>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/5 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}