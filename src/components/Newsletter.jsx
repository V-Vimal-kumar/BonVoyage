// src/sections/Newsletter.jsx
import { FiSend, FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Purple rounded card */}
        <div className="relative bg-[#F4F0FF] rounded-[32px] md:rounded-[40px] px-4 sm:px-6 md:px-16 py-8 md:py-14 text-center">
          {/* Top-right send icon circle */}
          <div className="hidden sm:flex absolute -top-4 right-4 md:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#4B40C5] text-white items-center justify-center shadow-lg">
            <FiSend className="text-lg md:text-2xl" />
          </div>

          {/* Main text */}
          <p className="font-poppins text-[#5E6282] text-base md:text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
            Subscribe to get information, latest news and other interesting
            offers at Bon Voyage
          </p>

          {/* Email form */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Email input with icon */}
            <div className="flex items-center bg-white rounded-[10px] shadow-sm px-3 sm:px-4 py-3 w-full md:w-[360px]">
              <FiMail className="text-[#5E6282] mr-2 sm:mr-3" />
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent outline-none text-sm text-[#5E6282] placeholder:text-[#9A9EA6]"
              />
            </div>

            {/* Subscribe button */}
            <button
              className="
                w-full md:w-auto
                px-8 md:px-10 py-3 
                rounded-[10px]
                bg-gradient-to-r from-[#FF946D] to-[#FF7D68]
                text-white 
                font-poppins font-semibold text-sm
                shadow-lg
                transition-all duration-300
                hover:opacity-90
                hover:-translate-y-0.5
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
