// src/sections/Destinations.jsx
export default function Destinations() {
  const cards = [
    {
      city: "Rome, Italy",
      price: "₹5.42 Lakh",
      days: "10 Days Trip",
      img: "/rome.png",
    },
    {
      city: "London, UK",
      price: "₹4.21 Lakh",
      days: "12 Days Trip",
      img: "/london.jpg",
    },
    {
      city: "Full Europe",
      price: "₹5.15 Lakh",
      days: "28 Days Trip",
      img: "/europe.png",
    },
  ];

  return (
    <section
      id="destinations"
      className="w-full bg-white flex items-center py-16 md:py-24 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
        {/* TOP LABEL */}
        <p className="text-[#4B40C5] font-poppins font-semibold tracking-[0.25em] text-xs sm:text-sm">
          Top Selling
        </p>

        {/* MAIN HEADING */}
        <h2
          className="
            mt-2
            font-poppins 
            font-bold 
            text-[26px] 
            sm:text-[32px] 
            md:text-[40px] 
            lg:text-[48px]
            leading-tight
            capitalize 
            text-[#14183E]
          "
        >
          Top Destinations
        </h2>

        {/* CARDS GRID */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card) => (
            <div
              key={card.city}
              className="
                group
                bg-white 
                rounded-[24px] md:rounded-[32px] 
                shadow-xl 
                overflow-hidden 
                flex 
                flex-col
                w-full
                max-w-sm
                mx-auto
                transition-all
                duration-300
                ease-out
                hover:-translate-y-3
                hover:shadow-2xl
                cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                src={card.img}
                className="
                  w-full 
                  h-52 sm:h-60 md:h-64 
                  object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                "
                alt={card.city}
              />

              {/* CONTENT */}
              <div className="p-5 md:p-6 text-left">
                <div className="flex items-center justify-between font-poppins font-semibold text-[#14183E] text-sm sm:text-base">
                  <span>{card.city}</span>
                  <span>{card.price}</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#5E6282] text-xs sm:text-sm font-poppins">
                  <span className="text-base sm:text-lg">➤</span>
                  <span>{card.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
