"use client"

import Link from "next/link";

const Navbar = () => {
  return(
    <nav className="w-full h-24 fixed top-0 left-0 flex justify-center items-center border-b-[1px] border-b-black bg-[#e8e4d9]">
      <div className="w-full max-w-5xl h-full flex justify-between items-center">
        <div className="h-full flex items-center">
          <Link href="/" className="text-5xl font-bold">Kyle.</Link>
        </div>
        <div className="h-full w-xl absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex h-12 max-w-md rounded-xl shadow-[inset_0px_4px_10px_5px_rgba(255,255,255,0.25)] bg-[rgba(217,211,192,0.25)] border-white border-[0.75px] mono justify-around items-center text-stone-700 gap-8 px-6">
            <Link href="/work" className="mono font-semibold">
              Work
            </Link>
            <Link href="/cv" className="mono font-semibold">
              CV
            </Link>
            <Link href="/literature" className="mono font-semibold">
              Literature
            </Link>
            <Link href="/contact" className="mono font-semibold">
              Contact
            </Link>
          </div>
        </div>
        <div className="h-full flex items-center text-lg gap-9">
          <Link href="/login" className="mono font-semibold">
            Login
          </Link>
          <Link href="/signup" className="mono shadow-[inset_0px_4px_10px_5px_rgba(255,255,255,0.25)] bg-[rgba(217,211,192,0.25)] px-4 py-2 rounded-xl font-semibold border-white border-[0.75px]">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;