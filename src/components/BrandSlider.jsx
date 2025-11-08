import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const brands = [
  {
    name: "Yamaha",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/16.svg",
  },
  {
    name: "Extramarks",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/14.svg",
  },
  {
    name: "Oliv Space",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/13.svg",
  },
  {
    name: "Vedantu",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/15.svg",
  },
  {
    name: "Aakash",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/17.svg",
  },
  {
    name: "OneDios",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/12.svg",
  },
  {
    name: "Fresh Bus",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/11.svg",
  },
  {
    name: "Farmley",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/10.svg",
  },
  {
    name: "NaturePro",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/9.svg",
  },
  {
    name: "Hyundai",
    logo: "https://wabaconnect.com/wp-content/uploads/2025/02/Hyundai_Motor_Company_logo.svg.png",
  },
  {
    name: "Amber",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/8.svg",
  },
  {
    name: "Coca-Cola",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/6.svg",
  },
  {
    name: "Honda",
    logo: "https://wabaconnect.com/wp-content/uploads/2025/02/Honda_Logo.svg-1-e1738577265617.png",
  },
  {
    name: "Yamaha",
    logo: "https://wabaconnect.com/wp-content/uploads/2024/07/2.svg",
  },
  {
    name: "Indira Gas",
    logo: "https://wabaconnect.com/wp-content/uploads/2025/02/4_indira_gas-1-1-1.svg",
  },
];

export default function BrandSlider() {
  return (
    <div className="w-full bg-gray-100 py-6 px-4">
      <h3 className="text-3xl font-extrabold text-center uppercase text-gray-500">
        Trusted by the leading brands on the planet
      </h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="flex"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="w-40!">
            <div className=" rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-32 w-auto object-contain mb-2"
              />
              <p className="text-lg font-semibold text-gray-700 text-center">
                {brand.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
