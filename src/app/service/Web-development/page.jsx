import ServiceDetailsCard from "@/app/components/service_card";

export default function Page(){
    const service = {
  title: "Web Application Development",
  subtitle:
    "Scalable modern web apps for startups and businesses.",

  offerings: [
    "Custom Dashboards",
    "Admin Panels",
    "E-commerce Systems",
    "SaaS Platforms",
    "Business Websites",
    "CRM Systems",
  ],

  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Vercel",
    "Render",
    "HTML, CSS and JS ",
    "Figma",
    "Google stitch",
    "Vibe coding with claude , chatgpt"
  ],

  process: [
    "Discovery",
    "UI/UX Design",
    "Development",
    "Testing",
    "Launch",
  ],

  benefits: [
    "Fast Performance",
    "SEO Optimized",
    "Mobile Responsive",
    "Secure Architecture",
    "Scalable Backend",
  ],

  portfolio: [
    {
      title: "Startup SaaS Dashboard",
      description:
        "Analytics dashboard with authentication and subscription system.",
    },
    {
      title: "E-commerce Platform",
      description:
        "Modern online store with payment integration and admin management.",
    },
  ],

  pricing: "Starting from ₹4,000",
};

    return(
        <>
        <ServiceDetailsCard service={service}/>
        
        </>
    )
}