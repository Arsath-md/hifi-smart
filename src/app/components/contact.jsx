"use client";

const services = [
  "Website Development",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media Management",
  "Branding",
  "AI Automation",
  "Custom Software",
  "Maintenance",
];

const goals = [
  "More Sales",
  "More Local Customers",
  "Online Presence",
  "Booking System",
  "Better Branding",
];

const timelineOptions = [
  "Immediately",
  "Within 1 Week",
  "Within 1 Month",
  "Flexible",
];

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6">
            Project Inquiry
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Let’s Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Great Together
            </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Tell us about your business and project requirements.
            We’ll contact you with the best solution for your goals.
          </p>
        </div>

        {/* Form */}
        <form className="rounded-[35px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10 backdrop-blur-sm">
          
          {/* Basic Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            
            <div>
              <label className="block mb-3 text-sm text-white/70">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="block mb-3 text-sm text-white/70">
                Business Name
              </label>

              <input
                type="text"
                placeholder="Your business/company name"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="block mb-3 text-sm text-white/70">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="block mb-3 text-sm text-white/70">
                WhatsApp Number
              </label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="block mb-3 text-sm text-white/70">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="block mb-3 text-sm text-white/70">
                City / Location
              </label>

              <input
                type="text"
                placeholder="Your city or location"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6">
              What Service Do You Need?
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 cursor-pointer hover:border-cyan-400/30 transition"
                >
                  <input
                    type="checkbox"
                    className="accent-cyan-400 w-5 h-5"
                  />

                  <span className="text-white/80 text-sm">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6">
              Project Goals
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {goals.map((goal) => (
                <label
                  key={goal}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 cursor-pointer hover:border-cyan-400/30 transition"
                >
                  <input
                    type="checkbox"
                    className="accent-cyan-400 w-5 h-5"
                  />

                  <span className="text-white/80 text-sm">
                    {goal}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="mb-10">
            <label className="block mb-3 text-sm text-white/70">
              Approximate Budget
            </label>

            <input
              type="text"
              placeholder="Example: ₹10,000 - ₹50,000"
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
            />
          </div>

          {/* Timeline */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6">
              When Do You Want This Completed?
            </h3>

            {/* Radio buttons are better here because only ONE option should be selected */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {timelineOptions.map((time) => (
                <label
                  key={time}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 cursor-pointer hover:border-cyan-400/30 transition"
                >
                  <input
                    type="radio"
                    name="timeline"
                    className="accent-cyan-400 w-5 h-5"
                  />

                  <span className="text-white/80 text-sm">
                    {time}
                  </span>
                </label>
              ))}
            </div>

            {/* Custom Date */}
            <input
              type="date"
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 text-white"
            />
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block mb-3 text-sm text-white/70">
              Tell Us More About Your Project
            </label>

            <textarea
              rows={6}
              placeholder="Describe your project, business goals, required features, inspirations, or anything important..."
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30 resize-none"
            />
          </div>

          {/* Consent */}
          <div className="mb-10">
            <label className="flex items-start gap-4">
              <input
                type="checkbox"
                className="accent-cyan-400 w-5 h-5 mt-1"
              />

              <span className="text-white/60 text-sm leading-relaxed">
                I agree to be contacted regarding this inquiry and
                understand that my information will be used only for
                communication related to this project.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.01] transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}