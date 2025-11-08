import {
  Megaphone,
  Send,
  Bot,
  Share2,
  Users,
  BarChart3,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import Card from "./Card";

export default function CardGrid() {
  const cards = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Broadcast Communication",
      description:
        "Push out your campaigns and engage with high-response WhatsApp messages.",
    },
    {
      icon: <Send className="w-10 h-10" />,
      title: "Send Bulk Campaigns & Broadcast",
      description:
        "Broadcast promotional offers that get 90%+ open rates and boost engagement.",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Chatbots",
      description:
        "Create no-code chatbots to provide instant responses to customer requests.",
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Easy API",
      description:
        "Pre-built integrations let you connect your stack and configure in minutes.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Collaborate using Team Inbox & Chat",
      description:
        "Enable multi-agent chat with team inbox and real-time collaboration tools.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Monitor Chat & Campaign Analytics",
      description:
        "Get insights into message performance and campaign analytics instantly.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Green Tick Verification",
      description:
        "WABA Connect helps you apply for the Green tick on WhatsApp alongside your brand name to help you build credibility",
    },
    {
      icon: <Waypoints className="w-10 h-10" />,
      title: "Share Product Catalogs at Scale",
      description:
        "Send product catalogs at scale to customers on WhatsApp as part of campaigns & auto-replies Automate Business",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-7xl md:text-4xl font-extrabold text-gray-900">
          Comprehensive WhatsApp API and Marketing Solutions
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto font-semibold text-2xl">
          WABA Connect offers comprehensive WhatsApp API solutions and WhatsApp
          marketing services to boost your business. As a top WhatsApp Business
          API provider and trusted Meta WhatsApp Solution Provider, we deliver
          seamless integration and effective WhatsApp business marketing
          strategies. Choose us for reliable WhatsApp Verified Service with the
          WhatsApp Green Tick and innovative WhatsApp promotion solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
