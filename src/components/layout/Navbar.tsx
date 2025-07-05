"use client"

import Link from "next/link";
import { BriefcaseBusiness, FileText, LibraryBig, Mail, Search } from "lucide-react";

const Navbar = () => {

  return(
    <nav className="w-full h-20 fixed top-0 left-0 flex justify-center items-center bg-[#e8e4d9] border-b-[1.5px] border-b-[#cec5b9]">
      <div className="w-full max-w-5xl h-full flex justify-between items-center px-4">
        <div className="h-full flex items-center">
          <Link href="/" className="text-5xl font-bold">Kyle.</Link>
        </div>
        <div className="h-full w-xl absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <div className="rounded-full p-px glass-edge absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div 
            className="flex h-12 rounded-full mono justify-around items-center text-[#544031] px-2 bg-[#d9d3c0] gap-1 glass-shadow"
            >
              <Link href="/work" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
                <BriefcaseBusiness />
                Work
              </Link>
              <Link href="/cv" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
                <FileText />
                CV
              </Link>
              <Link href="/literature" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
                <LibraryBig />
                Literature
              </Link>
              <Link href="/contact" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-[#7e6c5e] hover:text-[#efece3] transition-colors">
                <Mail />
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center font-semibold mono text-md">
          <div className="rounded-full p-px glass-edge">
            <button className="cursor-pointer py-2.5 px-4 flex gap-2 rounded-full text-[#544031] bg-[#d9d3c0] glass-shadow">
              <Search size={20} className="relative top-px"/>
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;