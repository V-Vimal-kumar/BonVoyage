// src/sections/Hero.jsx
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navIds = ["destinations", "services", "steps", "why"];
  const navLabels = ["Destinations", "Hotels", "Flights", "Bookings"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const authBtnBase =
    "px-5 py-2 bg-[#EC682C] text-white font-poppins font-semibold rounded-lg shadow text-sm leading-none flex-shrink-0 whitespace-nowrap transition-all duration-300 hover:scale-[1.05] hover:shadow-xl";

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      {/* NAVBAR ON TOP OF HERO */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 md:px-10 py-4 md:py-6">
          {/* LOGO */}
          <h1 className="font-peralta text-[26px] sm:text-[32px] md:text-[40px] leading-none text-black">
          BonVoyage
          </h1>

          {/* NAV LINKS (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[#212832] font-poppins font-semibold text-sm lg:text-lg">
            {navIds.map((id, index) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-[#4B40C5] transition-colors"
              >
                {navLabels[index]}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE: AUTH + HAMBURGER */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* AUTH BUTTONS (DESKTOP / TABLET) */}
            <div className="hidden sm:flex items-center gap-2 md:gap-3">
              <button className={authBtnBase}>Login</button>
              <button className={authBtnBase}>Sign up</button>
            </div>

            {/* HAMBURGER (MOBILE ONLY) */}
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 text-white shadow-sm"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={`
            md:hidden absolute left-0 right-0 top-full
            transition-all duration-200
            ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          <div className="mx-4 mt-2 rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 text-white shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-3">
              {/* NAV LINKS MOBILE */}
              <nav className="flex flex-col gap-2 font-poppins font-medium text-sm">
                {navIds.map((id, index) => (
                  <button
                    key={id}
                    onClick={() => {
                      scrollTo(id);
                      setIsMenuOpen(false);
                    }}
                    className="text-left py-1 hover:text-[#FFCF99] transition-colors"
                  >
                    {navLabels[index]}
                  </button>
                ))}
              </nav>

              {/* AUTH BUTTONS MOBILE */}
              <div className="mt-2 flex flex-col xs:flex-row gap-2">
                <button
                  className={`${authBtnBase} w-full text-center bg-white/10 border border-white/20 shadow-none hover:shadow-lg`}
                >
                  Login
                </button>
                <button
                  className={`${authBtnBase} w-full text-center bg-[#EC682C] border border-transparent`}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl flex flex-col items-start gap-4">
          {/* MAIN TEXT */}
          <p
            className="
              font-poppins font-bold 
              text-[22px] sm:text-[28px] md:text-[48px] 
              leading-snug tracking-[-0.04em] 
              text-[#4B40C5]
            "
          >
            Travel, enjoy and live a new and full life
          </p>

          {/* SUBHEADING */}
          <h2
            className="
              font-poppins font-bold 
              text-[14px] sm:text-[18px] md:text-[28px] 
              text-white 
              uppercase
            "
          >
            Best destinations around the world
          </h2>

          {/* CTA BUTTON */}
          <button
            className="
              mt-4 
              px-8 md:px-10 py-3 
              bg-[#4B40C5] 
              text-white font-poppins font-semibold text-sm md:text-lg
              rounded-lg
              shadow-lg
              transition-all duration-300
              hover:scale-[1.05] hover:shadow-xl
            "
          >
            Find out more
          </button>
        </div>
      </div>
    </section>
  );
}
