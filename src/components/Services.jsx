// src/sections/Services.jsx
export default function Services() {
  const items = [
    {
      title: "Calculated Weather",
      text: "As much of information possible with the weather",
      img: "/satellite-dish.png",
    },
    {
      title: "Best Flights",
      text: "Getting cheap best flights",
      img: "/airplane.png",
    },
    {
      title: "Local Events",
      text: "Getting good itinerary based on the events",
      img: "/microphone.png",
    },
    {
      title: "Customization",
      text: "We deliver outsourced services for customers",
      img: "/settings.png",
    },
  ];

  const ServiceIcon = ({ src, alt }) => (
    <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
      {/* Yellow square – visible for all four */}
      <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-[#FFF1DA] rounded-2xl translate-x-2 translate-y-2 -z-10" />
      <img src={src} alt={alt} className="relative w-10 h-10 sm:w-12 sm:h-12 object-contain" />
    </div>
  );

  return (
    <section
      id="services"
      className="w-full bg-white flex items-center py-16 md:py-24 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto w-full text-center px-4 sm:px-6">
        {/* SECTION HEADING */}
        <p className="text-[#5E6282] font-poppins font-semibold tracking-[0.25em] text-xs sm:text-sm">
          CATEGORY
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-[40px] font-poppins font-bold text-[#14183E]">
          We Offer Best Services
        </h2>

        {/* GRID */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-stretch">
          {items.map((item, index) => {
            const isOuter = index === 0 || index === 3;
            const isLeftCard = index === 1;
            const isRightCard = index === 2;

            // OUTER ITEMS
            if (isOuter) {
              return (
                <div
                  key={item.title}
                  className="
                    flex flex-col items-center text-center justify-center gap-4
                    transition-all duration-300 ease-out
                    hover:-translate-y-2
                    cursor-pointer
                  "
                >
                  <div className="transition-transform duration-300 hover:scale-105">
                    <ServiceIcon src={item.img} alt={item.title} />
                  </div>

                  <h3 className="font-poppins font-semibold text-base sm:text-lg text-[#14183E]">
                    {item.title}
                  </h3>
                  <p className="text-[#5E6282] text-sm leading-relaxed max-w-xs">
                    {item.text}
                  </p>
                </div>
              );
            }

            // CENTER ITEMS
            return (
              <div key={item.title} className="relative flex justify-center">
                {/* RED DECORATOR */}
                {isLeftCard && (
                  <div
                    className="
                      hidden md:block
                      absolute
                      -bottom-10 -left-8
                      w-28 h-20
                      bg-[#DF6951]
                      rounded-t-[40px]
                      rounded-br-[40px]
                      z-0
                    "
                  />
                )}

                {/* PURPLE DECORATOR */}
                {isRightCard && (
                  <div
                    className="
                      hidden md:block
                      absolute
                      -top-10 right-0
                      w-28 h-20
                      bg-[#4B40C5]
                      rounded-tr-[40px]
                      rounded-bl-[40px]
                      z-0
                    "
                  />
                )}

                {/* CARD */}
                <div
                  className="
                    relative z-10 bg-white rounded-[30px] md:rounded-[40px] shadow-xl 
                    px-6 md:px-10 py-8 md:py-12 text-center 
                    w-full max-w-sm mx-auto
                    transition-all duration-300 ease-out
                    hover:-translate-y-3 hover:shadow-2xl
                    cursor-pointer
                  "
                >
                  <div className="mb-4 md:mb-6 flex items-center justify-center">
                    <ServiceIcon src={item.img} alt={item.title} />
                  </div>

                  <h3 className="font-poppins font-semibold text-base sm:text-lg text-[#14183E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[#5E6282] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
