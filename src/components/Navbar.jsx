import React from "react";
import  Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="border-b border-white/5 bg-[#0d0e10] text-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl text-lime-400">
            <Image src="/assets/logo.png" alt="FITLOG logo" width={32} height={32} />
          </span>

          <h1 className="text-xl font-bold tracking-wide">
            FITLOG
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="rounded-full bg-[#1d2d0d] px-5 py-2 text-sm font-semibold text-lime-400"
          >
            Workouts
          </a>

          <a
            href="#"
            className="rounded-full px-5 py-2 text-sm text-gray-400 transition hover:text-white"
          >
            My Plan
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Plan */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-300">Plan</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Saved</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-400">
              0
            </span>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;