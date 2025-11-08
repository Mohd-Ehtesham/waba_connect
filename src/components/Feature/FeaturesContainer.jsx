import FeatureShowcase from "../FeatureShowcase";
import broadcastImg from "/broadcast.png";
import chatbotImg from "/chatbox.png";
import analyticsImg from "/whatsappAdds.png";
import bookingImg from "/bookingImage.png";

const FeaturesContainer = () => {
  const features = [
    {
      image: broadcastImg,
      title: "Run Broadcasts",
      description:
        "Drive campaigns and boost engagement with high-response WhatsApp messages.",
      points: [
        "Tag, categorize, and target contacts in personalized groups.",
        "Cultivate lasting relationships to fuel future sales.",
        "Engage effectively with your audience on WhatsApp.",
      ],
    },
    {
      image: chatbotImg,
      title: "Setup Chatbots",
      description:
        "Automate responses and provide instant support using intelligent WhatsApp chatbots.",
      points: [
        "Reduce human intervention with automated responses.",
        "Provide 24/7 support for customer satisfaction.",
        "Easily integrate chatbot workflows with your CRM.",
      ],
      reverse: true,
    },
    {
      image: analyticsImg,
      title: "Click to Whatsapp Ads",
      description:
        "Gain valuable insights into your WhatsApp campaign performance.",
      points: [
        "Track message open rates and engagement metrics.",
        "Optimize campaigns based on user interactions.",
        "Make data-driven marketing decisions.",
      ],
    },
    {
      image: bookingImg,
      title: "Manage Appointments & Bookings",
      description:
        "Allow customers to schedule appointments directly through WhatsApp.",
      points: [
        "Simplify booking with automated reminders.",
        "Sync appointments with your internal calendar.",
        "Boost efficiency for service-based businesses.",
      ],
      reverse: true,
    },
  ];

  return (
    <div className="bg-gray-50">
      {features.map((feature, index) => (
        <FeatureShowcase key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesContainer;
