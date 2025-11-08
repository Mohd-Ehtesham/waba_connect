import { motion } from "framer-motion";

export default function Card({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
    >
      <div className="shrink-0 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-green-500 mb-1">{title}</h3>
        <p className="text-gray-600 text-md leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
