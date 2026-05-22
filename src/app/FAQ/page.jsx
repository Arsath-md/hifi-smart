const faqs = [
  {
    question: "What services does HIFI SMART provide?",
    answer:
      "We provide web development, mobile app development, AI automation, SEO, digital marketing, and custom business software solutions.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites take between 1–3 weeks depending on features and design complexity.",
  },
  {
    question: "Do you develop mobile apps for Android and iOS?",
    answer:
      "Yes. We develop high-performance mobile applications for both Android and iOS platforms.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign outdated websites with modern UI/UX, better speed, SEO, and mobile responsiveness.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We optimize websites for Google ranking, performance, local SEO, and user experience.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. We provide maintenance, updates, backups, security, and technical support plans.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
            FAQ
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-white/50 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before starting your project with HIFI SMART.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 transition duration-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <h3 className="text-lg md:text-xl font-bold">
                  {faq.question}
                </h3>

                <span className="text-cyan-300 text-2xl transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* FAQ SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}