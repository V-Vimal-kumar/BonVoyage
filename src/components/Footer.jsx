// src/sections/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-14 md:pt-16 pb-8 md:pb-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* TOP GRID */}
        <div
          className="
            grid 
            grid-cols-2 md:grid-cols-4
            gap-x-4 gap-y-10 
            md:gap-x-10
            items-start 
            text-left
          "
        >
          {/* EVERY column will stretch full width now */}
          {/* Intro */}
          <div className="w-full text-[#5E6282] text-sm leading-relaxed">
            <p>
              Book your trip in minutes, get full
              <br />
              control for much longer.
            </p>
          </div>

          {/* Company */}
          <div className="w-full">
            <h3 className="font-poppins font-semibold text-base md:text-lg text-[#080809]">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-[#5E6282] text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            <h3 className="font-poppins font-semibold text-base md:text-lg text-[#080809]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-[#5E6282] text-sm">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>

          {/* More + Social + Apps */}
          <div className="w-full space-y-5">
            <div>
              <h3 className="font-poppins font-semibold text-base md:text-lg text-[#080809]">
                More
              </h3>
              <ul className="mt-4 space-y-2 text-[#5E6282] text-sm">
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#080809] hover:shadow-md">
                  <FaFacebookF />
                </button>
                <button className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF946D] via-[#FF5E93] to-[#4B40C5] text-white shadow flex items-center justify-center hover:shadow-md">
                  <FaInstagram />
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#080809] hover:shadow-md">
                  <FaTwitter />
                </button>
              </div>

              <p className="text-[#5E6282] text-sm font-poppins">
                Discover our app
              </p>

              {/* Store badges */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2 text-xs hover:opacity-90">
                  <div className="text-[10px] leading-none">
                    GET IT ON
                    <br />
                    <span className="font-semibold text-sm">Google Play</span>
                  </div>
                </button>

                <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2 text-xs hover:opacity-90">
                  <div className="text-[10px] leading-none">
                    Download on the
                    <br />
                    <span className="font-semibold text-sm">App Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <p className="text-center text-[#5E6282] text-xs md:text-sm">
          All rights reserved@bonvoyage.co
        </p>
      </div>
    </footer>
  );
}
