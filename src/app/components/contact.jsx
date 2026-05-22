"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    const toastId = toast.loading(
      "Submitting your inquiry...",
      {
        position: "bottom-center",
      }
    );

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.update(toastId, {
        render: "🚀 Inquiry submitted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      formRef.current.reset();

    } catch (error) {
      console.error(error);

      toast.update(toastId, {
        render: "❌ Failed to submit inquiry.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }

    setLoading(false);
  };

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

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="rounded-[35px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10 backdrop-blur-sm"
        >

          {/* BASIC DETAILS */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <Input
              label="Full Name"
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              required
            />

            <Input
              label="Business Name"
              type="text"
              name="business_name"
              placeholder="Your business/company name"
            />

            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
            />

            <Input
              label="WhatsApp Number"
              type="tel"
              name="whatsapp"
              placeholder="+91 XXXXX XXXXX"
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <Input
              label="City / Location"
              type="text"
              name="location"
              placeholder="Your city or location"
            />

          </div>

          {/* SERVICES */}
          <CheckboxSection
            title="What Service Do You Need?"
            items={services}
            name="services"
          />

          {/* GOALS */}
          <CheckboxSection
            title="Project Goals"
            items={goals}
            name="goals"
          />

          {/* BUDGET */}
          <div className="mb-10">

            <label className="block mb-3 text-sm text-white/70">
              Approximate Budget
            </label>

            <input
              type="text"
              name="budget"
              placeholder="Example: ₹10,000 - ₹50,000"
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
            />

          </div>

          {/* TIMELINE */}
          <div className="mb-10">

            <h3 className="text-2xl font-bold mb-6">
              When Do You Want This Completed?
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">

              {timelineOptions.map((time) => (
                <label
                  key={time}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 cursor-pointer hover:border-cyan-400/30 transition"
                >

                  <input
                    type="radio"
                    name="timeline"
                    value={time}
                    className="accent-cyan-400 w-5 h-5"
                  />

                  <span className="text-white/80 text-sm">
                    {time}
                  </span>

                </label>
              ))}

            </div>

            <input
              type="date"
              name="completion_date"
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 text-white"
            />

          </div>

          {/* MESSAGE */}
          <div className="mb-10">

            <label className="block mb-3 text-sm text-white/70">
              Tell Us More About Your Project
            </label>

            <textarea
              rows={6}
              name="message"
              placeholder="Describe your project, business goals, required features..."
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30 resize-none"
            />

          </div>

          {/* CONSENT */}
          <div className="mb-10">

            <label className="flex items-start gap-4">

              <input
                type="checkbox"
                name="consent"
                value="Accepted"
                required
                className="accent-cyan-400 w-5 h-5 mt-1"
              />

              <span className="text-white/60 text-sm leading-relaxed">
                I agree to be contacted regarding this inquiry and
                understand that my information will be used only for
                communication related to this project.
              </span>

            </label>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.01] transition duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

        </form>

      </div>

      {/* TOAST */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastStyle={{
          background: "#0f172a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px",
          fontSize: "14px",
          width: "min(90vw, 420px)",
          padding: "14px 16px",
        }}
      />

    </section>
  );
}

/* INPUT COMPONENT */
function Input({
  label,
  type,
  name,
  placeholder,
  required = false,
}) {
  return (
    <div>

      <label className="block mb-3 text-sm text-white/70">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 placeholder:text-white/30"
      />

    </div>
  );
}

/* CHECKBOX COMPONENT */
function CheckboxSection({ title, items, name }) {
  return (
    <div className="mb-10">

      <h3 className="text-2xl font-bold mb-6">
        {title}
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {items.map((item) => (
          <label
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 cursor-pointer hover:border-cyan-400/30 transition"
          >

            <input
              type="checkbox"
              name={name}
              value={item}
              className="accent-cyan-400 w-5 h-5"
            />

            <span className="text-white/80 text-sm">
              {item}
            </span>

          </label>
        ))}

      </div>

    </div>
  );
}