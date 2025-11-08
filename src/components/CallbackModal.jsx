import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, X } from "lucide-react";

import Button from "./Button";

export default function CallbackModal({ onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const templateParams = {
        from_name: formData.name,
        company: formData.company,
        from_email: formData.email,
        phone: formData.phone,
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll call you soon.",
        });
        setFormData({ name: "", company: "", email: "", phone: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error?.text ?? "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key="modal"
          className="relative w-full max-w-lg bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 sm:p-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            type="outline"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-2xl"
          >
            <X size={20} className="text-green-600" />
          </Button>

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
            Get a Call Back
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
            Fill out your details and our team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "company", "email", "phone"].map((field) => (
              <input
                key={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                name={field}
                placeholder={
                  field === "name"
                    ? "Your Name"
                    : field === "company"
                    ? "Company Name"
                    : field === "email"
                    ? "Your Email"
                    : "Phone Number"
                }
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            ))}

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 rounded-xl text-white font-semibold transition ${
                isLoading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>

          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-4 p-3 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <XCircle size={18} />
                )}
                {submitStatus.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
