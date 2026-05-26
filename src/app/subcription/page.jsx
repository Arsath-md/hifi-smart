import Link from "next/link";

const plans = [
  
  {
    name: "Standard Plan",
    price: "₹4999",
    duration: "/month",
    description:
      "Best for growing businesses that want optimization, SEO, and performance improvements.",
    highlight: true,
    features: [
      "SEO Basics and Managed Hosting",
      "Monthly Content Updates in Application",
      "Meta ads (Instagram and facebook) * 2",
      "Business Analytics Reports",
      "Google Business Optimization",
      "Performance Monitoring",
    ],
  },
  
];

export default function Subscription() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-black overflow-hidden text-white"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/10 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6">
            Maintenance Plans
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Website Maintenance &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Growth Subscription Plans
            </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Choose the perfect maintenance and growth plan for your business.
            From basic support to full digital scaling solutions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4  scrollbar-hide flex justify-center items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative min-w-[320px] sm:min-w-[380px] lg:min-w-0 rounded-[35px] border p-6 sm:p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 snap-center ${
                plan.highlight
                  ? "border-cyan-400/40 bg-cyan-400/[0.08]"
                  : "border-white/20 bg-white/[0.04]"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-cyan-400 text-black text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed mb-8 text-sm sm:text-base">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-10">
                <h2 className="text-4xl sm:text-5xl font-black text-cyan-300">
                  {plan.price}
                </h2>

                <span className="text-white/50 mb-1 text-sm sm:text-base">
                  {plan.duration}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-5 mb-10">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4"
                  >
                    <div className="min-w-6 w-6 h-6 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-sm">
                      ✓
                    </div>

                    <p className="text-white/70 text-sm sm:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={"/contact"}>
              <button
                className={`w-full py-4 rounded-2xl font-bold transition duration-300 text-sm sm:text-base ${
                  plan.highlight
                    ? "bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                    : "border border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                }`}
              >
                Get Started
              </button></Link>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-[35px] opacity-0 hover:opacity-100 transition duration-500 pointer-events-none ${
                  plan.highlight
                    ? "bg-cyan-400/[0.04]"
                    : "bg-white/[0.02]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-white/40 text-xs sm:text-sm">
            Need a custom solution? We also provide tailored plans for startups,
            agencies, and enterprise businesses.
          </p>
        </div>
      </div>
    </section>
  );
}