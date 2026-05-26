import ServiceDetailsCard from "@/app/components/service_card";

export default function Page(){
   const service = {
  title: "Digital Marketing",
  subtitle:
    "Performance-driven digital marketing solutions to help businesses grow online, generate leads, and increase brand visibility.",

  offerings: [
    "Google Ads Campaign Management",
    "Meta Ads (Facebook & Instagram)",
    "Google Business Profile Optimization",
    "Local SEO & Location Ranking",
    "Social Media Management",
    "Lead Generation Campaigns",
    "Landing Page Optimization",
    "Basic Content & Creative Strategy",
  ],

  technologies: [
    "Google Ads",
    "Meta Business Suite",
    "Google Analytics",
    "Google Search Console",
    "Canva",
    "WordPress",
    "Mailchimp",
    "HubSpot",
  ],

  process: [
    "Business Analysis",
    "Audience Research",
    "Campaign Setup",
    "Creative & Content Preparation",
    "Launch & Optimization",
  ],

  benefits: [
    "Increase Local Visibility",
    "Generate Quality Leads",
    "Improve Brand Awareness",
    "Affordable Marketing Solutions",
    "Data-Driven Campaign Decisions",
  ],

  portfolio: [
    {
      title: "Local Restaurant Promotion",
      description:
        "Ran Facebook and Instagram ad campaigns to increase local customer visits and online orders.",
    },
    {
      title: "Google Business Optimization",
      description:
        "Optimized Google Business Profile for a local business to improve map ranking and customer reach.",
    },
  ],

  pricing: "Starting from ₹10,000",
};

    return(
        <>
        <ServiceDetailsCard service={service}/>
        
        </>
    )
}