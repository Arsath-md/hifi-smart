"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ServiceDetailsCard({service}) {
    const route = useRouter();
  return (
    <section className="relative py-28 bg-[#071018] overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16">

          {/* HERO */}
          <div className="mb-20">
            <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.25em] uppercase mb-6">
              Premium Service
            </span>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed mb-10">
              {service.subtitle}
            </p>
            <Link href={"/contact"}>
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300">
              Book Consultation
            </button></Link>
          </div>

          {/* WHAT YOU OFFER */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {service.offerings.map((item) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              Technologies We Use
            </h2>

            <div className="flex flex-wrap gap-4">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* PROCESS */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10">
              Our Process
            </h2>

            <div className="grid md:grid-cols-5 gap-5">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <span className="text-cyan-300 text-sm font-semibold">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-3 text-lg font-bold">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  ✅ {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* PORTFOLIO */}
          {/* <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              Portfolio & Case Studies
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {service.portfolio.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]"
                >
                  <div className="h-56 bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* PRICING */}
          <div className="mb-20">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-10 text-center">
              <p className="text-white/60 mb-3">
                Pricing
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-cyan-300">
                {service.pricing}
              </h2>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Build Your Project
            </h2>

            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Ready to launch your next digital product? Let’s create
              something powerful, scalable, and modern together.
            </p>

              <Link href={`/contact`}>
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300">
              Contact Us
            </button></Link>
          </div>

        </div>
        <button
      onClick={() => route.back()}
      className="px-5 py-3  m-9 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
    >
      ← Back
    </button>
      </div>
          

    </section>
  );
}