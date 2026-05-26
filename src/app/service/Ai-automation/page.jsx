import ServiceDetailsCard from "@/app/components/service_card";

export default function Page(){
const service = {
  title: "AI Automation",
  subtitle:
    "Smart AI-powered systems and automation solutions designed to save time, reduce manual work, and improve business productivity.",

  offerings: [
    "AI Chatbot Development",
    "Customer Support Automation",
    "WhatsApp & Telegram Bots",
    "Workflow Automation Systems",
    "AI Content Generation Tools",
    "CRM & Lead Automation",
    "Dashboard & Reporting Systems",
  ],

  technologies: [
    "Gemini flash API",
    "Node.js",
    "Python",
    "Firebase",
    "MongoDB",
    "Zapier",
    "Make.com",
    "n8n"
  ],

  process: [
    "Business Workflow Analysis",
    "Automation Planning",
    "AI System Development",
    "Testing & Integration",
    "Deployment & Optimization",
  ],

  benefits: [
    "Reduce Manual Work",
    "Save Business Time",
    "Improve Customer Response Speed",
    "Increase Productivity",
    "Scalable Automation Systems",
  ],

  portfolio: [
    {
      title: "AI Customer Support Chatbot",
      description:
        "Built an AI chatbot that automatically answered customer queries and generated support tickets.",
    },
    {
      title: "Lead Management Automation",
      description:
        "Created an automated lead tracking system integrated with forms, WhatsApp, and email notifications.",
    },
  ],

  pricing: "Starting from ₹2,500",
};

    return(
        <>
        <ServiceDetailsCard service={service}/>
        
        </>
    )
}