import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, color = "bg-green-500" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`h-85 flex flex-col items-center text-center p-6 rounded-2xl border border-white shadow-md ${color} text-white transition-all duration-300`}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
        {icon}
      </div>
      <h3 className="text-2xl sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-lg sm:text-base opacity-90">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
