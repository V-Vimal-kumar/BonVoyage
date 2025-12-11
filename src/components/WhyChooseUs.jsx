// src/sections/WhyChooseUs.jsx
import { FaStar, FaGlobe, FaThumbsUp } from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Handpicked Hotels",
      text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
      icon: FaStar,
      color: "#4B40C5",
    },
    {
      title: "World Class Service",
      text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
      icon: FaGlobe,
      color: "#F1A501",
    },
    {
      title: "Best Price Guarantee",
      text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
      icon: FaThumbsUp,
      color: "#DF6951",
    },
  ];

  return (
    <section
      id="why"
      className="w-full bg-white flex items-center py-16 md:py-24 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
        {/* HEADING */}
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-[32px] font-bold">
          <span className="text-[#DF6951]">Why </span>
          <span className="text-[#14183E]">Choose Us</span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-[#5E6282] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>

        {/* CARDS */}
        <div
          className="
            mt-10 md:mt-16 
            grid grid-cols-1 md:grid-cols-3 
            gap-y-14 md:gap-y-10 
            gap-x-6 md:gap-x-10
          "
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  bg-white 
                  rounded-[24px] md:rounded-[32px] 
                  shadow-md 
                  pt-12 md:pt-14 pb-8 md:pb-10 px-6 md:px-8 
                  flex flex-col items-center text-center
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 md:hover:-translate-y-3
                  hover:shadow-2xl
                  cursor-pointer
                "
              >
                {/* BADGE CIRCLE */}
                <div
                  className="
                    absolute 
                    -top-7 md:-top-8 
                    left-1/2 
                    -translate-x-1/2
                    w-14 h-14 md:w-16 md:h-16 
                    rounded-full 
                    flex items-center justify-center
                    shadow-md
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="text-white text-xl md:text-2xl" />
                </div>

                {/* CARD CONTENT */}
                <h3 className="mt-4 md:mt-6 font-poppins font-semibold text-base md:text-xl text-[#14183E]">
                  {item.title}
                </h3>
                <p className="mt-3 md:mt-4 text-[#5E6282] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
