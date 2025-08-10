"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../assets/logo.png";

export default function MainHeader() {
  const [open, setOpen] = useState(false);

  const BrowsingMenu: { link: string; label: string }[] = [
    { link: "/meals", label: "Browse meals" },
    { link: "/community", label: "Foodie community" },
  ];

  return (
    <header className="w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[10%] py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-6 text-[#ddd6cb] font-bold font-montserrat uppercase tracking-widest"
          >
            <Image
              src={logoImg}
              alt="A plate with food on it"
              className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain [filter:drop-shadow(0_0_0.75rem_rgba(0,0,0,0.5))]"
              priority
            />
            <span className="text-lg sm:text-xl md:text-2xl">NextLevel food</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="m-0 p-0 flex gap-4 lg:gap-6 text-base lg:text-xl">
              {BrowsingMenu.map((br) => (
                <li key={br.link}>
                  <Link
                    href={br.link}
                    className="text-[#ddd6cb] font-bold px-2 py-2 rounded-lg
                               hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
                               hover:bg-clip-text hover:text-transparent
                               hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8))] 
                               focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#ff8a05]"
                  >
                    {br.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-[#ddd6cb]
                       focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#ff8a05]"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* simple burger / close */}
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"}`}/>
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}/>
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"}`}/>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-3">
            <ul className="flex flex-col gap-1 text-base">
              {BrowsingMenu.map((br) => (
                <li key={br.link}>
                  <Link
                    href={br.link}
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-xl px-3 py-3 text-[#ddd6cb] font-semibold
                               hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
                               hover:bg-clip-text hover:text-transparent
                               hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]"
                  >
                    {br.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
