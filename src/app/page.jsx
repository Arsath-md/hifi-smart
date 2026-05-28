import dynamic from "next/dynamic";
import FAQSection from "./FAQ/page";
import Link from "next/link";

const Portfolio = dynamic(
  () => import("./portfolio/page"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = dynamic(
  () => import("./process/page"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Service = dynamic(
  () => import("./service/page"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const CTA = dynamic(
  () => import("./CTA/page"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Footer = dynamic(
  () => import("./footer/page"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Subscription = dynamic(
  () => import("./subcription/page"),
  {
    loading: () => <p>Loading....</p>,
  }
);
export default function Home() {
  return (
    <>
      <main className="bg-[#071018] text-white overflow-hidden">
        
        {/* HERO SECTION */}
        <section
          className="relative min-h-screen flex items-center py-24 lg:py-0"
          aria-label="Hero Section"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-blue-500/20 blur-3xl rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <article className="text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-300" />
                Engineering the Future of Local Business
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                Build Premium
                <span className="text-cyan-300"> Digital Products</span>
                <br className="hidden sm:block" />
                That Grow Businesses
              </h1>

              {/* Description */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                We design and develop high-performance web applications,
                mobile apps, AI-powered systems, and modern digital
                experiences for startups and local businesses.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                <Link href={"/contact"}>
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30" >
                  Start Your Project
                </button></Link>
                <Link href={"/subcription"}>
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition duration-300">
                  View Plans
                </button></Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-14 sm:mt-16 max-w-xl mx-auto lg:mx-0">
                
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-cyan-300">
                    2+
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    Projects Completed
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-cyan-300">
                    2+
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    Business Clients
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-cyan-300">
                    90%
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </article>

            {/* RIGHT SIDE */}
            <aside className="relative">
              
              <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

              <div className="relative rounded-[30px] sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-2xl">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Card 1 */}
                  <div className="rounded-3xl border border-white/10 bg-[#0d1720] p-6 hover:-translate-y-1 transition">
                    
                    <div className="text-4xl mb-4">🚀</div>

                    <h3 className="font-bold text-xl text-white">
                      Startup Growth
                    </h3>

                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      Scale your business using modern technology and
                      digital strategies.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 hover:-translate-y-1 transition">
                    
                    <div className="text-4xl mb-4">⚡</div>

                    <h3 className="font-bold text-xl text-white">
                      Fast Performance
                    </h3>

                    <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                      Optimized applications built for speed and
                      scalability.
                    </p>
                  </div>

                  {/* Bottom Card */}
                  <div className="rounded-3xl border border-white/10 bg-[#0d1720] p-6 sm:col-span-2">
                    
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold">
                        AI Automation
                      </h3>

                      <span className="text-cyan-300 font-semibold">
                        Live
                      </span>
                    </div>

                    <div className="space-y-4">
                      
                      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[85%] h-full bg-cyan-300 rounded-full" />
                      </div>

                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Automation Efficiency</span>
                        <span>85%</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Service />
      <Portfolio />
      <Process />
      <Subscription/>
      <FAQSection/>
      <CTA />
      <Footer />
    </>
  );
}