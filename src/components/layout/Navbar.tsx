"use client"

import Link from "next/link";
import { BriefcaseBusiness, FileText, LibraryBig, Mail } from "lucide-react";

const Navbar = () => {

  return(
    <nav className="w-full h-20 fixed top-0 left-0 flex justify-center items-center bg-[#e8e4d9]">
      <div className="w-full max-w-5xl h-full flex justify-between items-center px-4">
        <div className="h-full flex items-center">
          <Link href="/" className="text-5xl font-bold">Kyle.</Link>
        </div>
        <div className="h-full w-xl absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex h-12 rounded-xl mono justify-around items-center text-[#544031] px-2 bg-[#dcd5c2] gap-1"
          >
            <Link href="/work" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
              <BriefcaseBusiness />
              Work
            </Link>
            <Link href="/cv" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
              <FileText />
              CV
            </Link>
            <Link href="/literature" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
              <LibraryBig />
              Literature
            </Link>
            <Link href="/contact" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
              <Mail />
              Contact
            </Link>
          </div>
        </div>
        <div className="h-full flex items-center text-lg gap-9">
          <Link href="/login" className="mono font-semibold">
            Login
          </Link>
          <Link href="/signup" className="mono font-semibold bg-[#dcd5c2] px-4 py-2 rounded-xl text-[#544031]">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;