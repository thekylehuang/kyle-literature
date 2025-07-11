/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link";
import { BriefcaseBusiness, FileText, LibraryBig, Mail, Search, Menu } from "lucide-react";
import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleToggle = () => {
    setOpenModal(prevState => !prevState)
  }
  return(
    <>
      <nav className="w-full h-18 fixed top-0 left-0 flex justify-center items-center bg-[#e8e4d9] z-50 border-b-[1px] border-b-black">
        <div className="w-full max-w-5xl h-full flex justify-between items-center px-6">
          <div className="h-full flex items-center">
            <Link href="/" className="text-4xl font-bold">Kyle.</Link>
          </div>
          <div className="h-full w-xl absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center">
            <div className="rounded-full p-px glass-edge absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div 
              className="flex h-12 rounded-full mono justify-around items-center text-[#635f56] px-2 bg-[#e2ded3] gap-1 glass-shadow"
              >
                <Link href="/work" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:text-[#343331] transition-colors">
                  <BriefcaseBusiness />
                  Work
                </Link>
                <Link href="/cv" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:text-[#343331] transition-colors">
                  <FileText />
                  CV
                </Link>
                <Link href="/literature" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:text-[#343331] transition-colors">
                  <LibraryBig />
                  Literature
                </Link>
                <Link href="/contact" className="mono font-semibold flex items-center gap-2 px-4 py-1.5 rounded-full hover:text-[#343331] transition-colors">
                  <Mail />
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full hidden lg:flex items-center justify-center font-semibold mono text-md">
            <div className="rounded-full p-px glass-edge">
              <button className="cursor-pointer py-2.5 px-4 flex gap-2 rounded-full text-[#635f56] bg-[#e2ded3] glass-shadow">
                <Search size={20} className="relative top-px"/>
                Search
              </button>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button onClick={handleToggle}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed lg:hidden top-0 left-0 w-full h-full backdrop-blur-sm z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleToggle}
          />
        )}
      </AnimatePresence>
      <Sheet detent="content-height" isOpen={openModal} onClose={() => setOpenModal(false)} disableDrag={true} >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Link href="/">
              <div className="bg-[#fff7e4] w-11/12 mx-auto px-4 py-4 rounded-xl flex mb-2">
                <div className="flex items-center">
                  <img src="/images/navbar/home-icon.svg" alt="Home Icon" className="w-14"/>
                </div>
                <div className="flex-grow flex flex-col justify-center px-4">
                  <h1 className="font-bold text-xl leading-none">Home</h1>
                  <h2 className="font-medium text-xl leading-none text-[#a88e78]">All about me</h2>
                </div>
              </div>
            </Link>
            <Link href="/work">
              <div className="bg-[#fff7e4] w-11/12 mx-auto px-4 py-4 rounded-xl flex mb-2">
                <div className="flex items-center">
                  <img src="/images/navbar/work-icon.svg" alt="Work Icon" className="w-14"/>
                </div>
                <div className="flex-grow flex flex-col justify-center px-4">
                  <h1 className="font-bold text-xl leading-none">Work</h1>
                  <h2 className="font-medium text-xl leading-none text-[#a88e78]">Projects and impact</h2>
                </div>
              </div>
            </Link>
            <Link href="/cv">
              <div className="bg-[#fff7e4] w-11/12 mx-auto px-4 py-4 rounded-xl flex mb-2">
                <div className="flex items-center">
                  <img src="/images/navbar/cv-icon.svg" alt="CV Icon" className="w-14"/>
                </div>
                <div className="flex-grow flex flex-col justify-center px-4">
                  <h1 className="font-bold text-xl leading-none">CV</h1>
                  <h2 className="font-medium text-xl leading-none text-[#a88e78]">Education and history</h2>
                </div>
              </div>
            </Link>
            <Link href="/literature">
              <div className="bg-[#fff7e4] w-11/12 mx-auto px-4 py-4 rounded-xl flex mb-2">
                <div className="flex items-center">
                  <img src="/images/navbar/literature-icon.svg" alt="Literature Icon" className="w-14"/>
                </div>
                <div className="flex-grow flex flex-col justify-center px-4">
                  <h1 className="font-bold text-xl leading-none">Literature</h1>
                  <h2 className="font-medium text-xl leading-none text-[#a88e78]">Articles and media</h2>
                </div>
              </div>
            </Link>
            <Link href="/contact">
              <div className="bg-[#fff7e4] w-11/12 mx-auto px-4 py-4 rounded-xl flex mb-4">
                <div className="flex items-center">
                  <img src="/images/navbar/cv-icon.svg" alt="Contact Icon" className="w-14"/>
                </div>
                <div className="flex-grow flex flex-col justify-center px-4">
                  <h1 className="font-bold text-xl leading-none">Contact</h1>
                  <h2 className="font-medium text-xl leading-none text-[#a88e78]">Reach out to me</h2>
                </div>
              </div>
            </Link>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default Navbar;