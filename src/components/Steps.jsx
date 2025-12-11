// src/sections/Steps.jsx
import { FaMapMarkerAlt, FaWallet, FaPlaneDeparture } from "react-icons/fa";

export default function Steps() {
  const steps = [
    {
      title: "Choose Destination",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: <FaMapMarkerAlt className="text-white text-xl" />,
      color: "#F1A501",
    },
    {
      title: "Make Payment",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: <FaWallet className="text-white text-xl" />,
      color: "#DF6951",
    },
    {
      title: "Reach Airport on Selected Date",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: <FaPlaneDeparture className="text-white text-xl" />,
      color: "#4B40C5",
    },
  ];

  return (
    <section
      id="steps"
      className="w-full bg-white flex items-center py-16 md:py-24 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: TITLE + STEPS */}
          <div className="space-y-8">
            {/* Label */}
            <p className="font-poppins font-semibold text-xs sm:text-sm text-[#5E6282]">
              Easy and Fast
            </p>

            {/* Main Heading */}
            <h2 className="font-poppins font-bold text-[26px] sm:text-[32px] md:text-[40px] leading-[120%] text-[#14183E]">
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>

            {/* Steps list */}
            <div className="space-y-6">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="
                    flex gap-4 items-start
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    cursor-pointer
                  "
                >
                  {/* colored rounded square icon */}
                  <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.icon}
                  </div>

                  <div>
                    <h3 className="font-poppins font-semibold text-sm sm:text-base md:text-lg text-[#14183E]">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-[14px] text-[#5E6282] leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: TRIP CARD + FLOATING CARD */}
          <div className="relative flex justify-center mt-6 md:mt-0">
            {/* softer purple glow */}
            <div className="pointer-events-none absolute w-[85%] h-[85%] bg-gradient-to-br from-white via-[#F4F0FF] to-white rounded-[50px] blur-2xl opacity-80 z-0" />

            {/* MAIN TRIP CARD */}
            <div
              className="
                relative z-10 bg-white rounded-[30px] md:rounded-[40px] shadow-xl 
                p-4 md:p-5 
                pb-12 md:pb-16
                w-full max-w-xs sm:max-w-sm
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl
                cursor-pointer
              "
            >
              <img
                src="/greece.jpg"
                className="w-full h-44 sm:h-52 md:h-60 object-cover rounded-[24px] md:rounded-[30px]"
                alt="Trip to Greece"
              />

              <div className="mt-4 text-left">
                <h3 className="font-poppins font-semibold text-base md:text-lg text-[#14183E]">
                  Trip To Greece
                </h3>

                <div className="flex items-center text-[#5E6282] text-xs md:text-sm gap-3 mt-2">
                  <span>14-29 June</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span>by Robbin Joseph</span>
                </div>

                {/* ICONS ROW */}
                <div className="flex gap-3 sm:gap-4 mt-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#F5F5F5] rounded-full flex justify-center items-center text-[#84829A] text-sm">
                    📍
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#F5F5F5] rounded-full flex justify-center items-center text-[#84829A] text-sm">
                    🧭
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#F5F5F5] rounded-full flex justify-center items-center text-[#84829A] text-sm">
                    ✈️
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-[#5E6282] text-xs sm:text-sm">
                  <span className="text-base">🏛️</span>
                  <span>24 people going</span>
                </div>
              </div>
            </div>

            {/* FLOATING SMALL CARD */}
            <div
              className="
                absolute
                z-20
                bottom-0 sm:bottom-1 md:bottom-4
                right-0 sm:right-[-6px] md:right-[-12px]
                bg-white shadow-xl rounded-2xl
                w-44 sm:w-52 md:w-56
                p-3 sm:p-4
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl
                cursor-pointer
              "
            >
              <p className="text-[10px] sm:text-xs text-[#84829A] font-poppins font-semibold">
                Ongoing
              </p>

              <div className="flex items-center gap-2 sm:gap-3 mt-2">
                <img
                  src="/europe2.png"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  alt="Trip to Rome"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-xs sm:text-sm text-[#14183E]">
                    Trip to Rome
                  </h4>
                </div>
              </div>

              <p className="text-[10px] sm:text-xs text-[#84829A] mt-2">
                <span className="text-[#4B40C5] font-semibold">40%</span> completed
              </p>

              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                <div
                  className="bg-[#4B40C5] h-1.5 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
