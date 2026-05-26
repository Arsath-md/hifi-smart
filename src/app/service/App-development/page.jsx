import ServiceDetailsCard from "@/app/components/service_card";

export default function Page(){
  const service = {
  title: "Mobile App Development",
  subtitle:
    "Modern Android and iOS applications designed for startups, businesses, and digital products with smooth performance and premium user experience.",

  offerings: [
    "Android App Development",
    "iOS App Development",
    "Cross-Platform Applications",
    "Booking & Service Apps",
    "App UI/UX Design",
    "App Maintenance & Updates",
  ],

  technologies: [
    "React Native",
    "Expo",
    "Firebase",
    "Node.js",
    "MongoDB",
    "Redux",
    "REST APIs",
    "Google Maps API",
     "Figma",
    "Google stitch",
    "Vibe coding with claude , chatgpt"
  ],

  process: [
    "Requirement Analysis",
    "UI/UX Design",
    "App Development",
    "Testing & Optimization",
    "Launch & Support",
  ],

  benefits: [
    "Fast & Smooth Performance",
    "Modern UI/UX Experience",
    "Cross-Platform Compatibility",
    "Scalable Architecture",
    "Secure & Reliable Backend",
  ],

  portfolio: [
    {
      title: "Food Delivery Application",
      description:
        "Mobile app with live order tracking, payment integration, and restaurant dashboard.",
    },
    {
      title: "Service Booking Platform",
      description:
        "Appointment booking app with user authentication and real-time notifications.",
    },
  ],

  pricing: "Starting from ₹3,000",
};

    return(
        <>
        <ServiceDetailsCard service={service}/>
        
        </>
    )
}