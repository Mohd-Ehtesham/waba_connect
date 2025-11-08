import FAQItem from "./FAQitem";

const faqs = [
  {
    question: "What is WhatsApp API and how does WABA Connect help with it?",
    answer:
      "The WhatsApp API allows businesses to communicate with customers through the WhatsApp platform. WABA Connect specializes in seamless WhatsApp API integration, ensuring your business can send and receive messages efficiently.",
  },
  {
    question:
      "How does WABA Connect support WhatsApp Business API integration?",
    answer:
      "WABA Connect provides comprehensive WhatsApp Business API integration services. Our team ensures that your business can leverage the powerful features of the WhatsApp Business API for better customer interaction and engagement.",
  },
  {
    question: "What are WhatsApp marketing services offered by WABA Connect?",
    answer:
      "WABA Connect offers a range of WhatsApp marketing services designed to boost your brand’s visibility and engagement. From sending promotional messages to running comprehensive WhatsApp marketing campaigns, we help you reach your target audience effectively.",
  },
  {
    question: "Why choose WABA Connect as your WhatsApp Business API provider?",
    answer:
      "As one of the top WhatsApp Business API providers, WABA Connect ensures reliable and secure API integrations. Our solutions are tailored to your business needs, making us a trusted choice for seamless WhatsApp Business API experiences.",
  },
  {
    question: "Does WABA Connect help with obtaining the WhatsApp Green Tick?",
    answer:
      "Yes, WABA Connect assists businesses in obtaining the WhatsApp Green Tick. This verification badge adds credibility to your business profile, enhancing customer trust and engagement.",
  },
  {
    question: "What makes WABA Connect a top WhatsApp marketing company?",
    answer:
      "WABA Connect is considered a top WhatsApp marketing company due to our comprehensive and strategic approach to WhatsApp marketing. We offer solutions that are designed to maximize your reach and impact on the platform.",
  },
  {
    question: "How can WABA Connect help with WhatsApp promotional campaigns?",
    answer:
      "WABA Connect specializes in creating and managing WhatsApp promotion campaigns. We use targeted strategies to ensure your promotional messages reach the right audience, boosting your marketing efforts and ROI.",
  },
];

export default function FAQList() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
