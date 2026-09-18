"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { store } from "../data/store.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Katalog",
      url: "/katalog-sewa-kamera-surabaya",
    },
    {
      name: "Kontak",
      url: "/kontak-sewa-kamera-surabaya",
    },
    {
      name: "S&K",
      url: "/syarat-dan-ketentuan",
    },
  ];

  return (
    <>
      {/* MOBILE & TABLET TOP BAR */}
      <div className="pointer-events-auto lg:hidden fixed top-0 left-0 z-50 w-full h-20 bg-white border-b border-black/10 flex items-center justify-between px-6">
        <Image
          alt={`Logo ${store?.name || "KJ Multimedia"} Kamera`}
          src="/assets/kj-logo.webp"
          width={55}
          height={55}
          className="object-contain"
        />

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="p-2 bg-white border border-black flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`w-6 h-[2px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="pointer-events-auto hidden lg:flex fixed top-0 left-0 h-full w-fit">
        <div className="h-full flex flex-col items-start px-8 py-16">
          <Image
            alt={`Logo ${store?.name || "Rental"} Kamera`}
            src="/assets/kj-logo.webp"
            width={70}
            height={70}
          />

          <div className="flex flex-col mt-auto mb-auto">
            {menu.map((item, index) => (
              <Fragment key={item.name}>
                <Link
                  href={item.url}
                  className="text-black w-24 text-xl font-medium hover:translate-x-4 transition-transform duration-300 ease-out py-2"
                >
                  {item.name}
                </Link>

                {index !== menu.length - 1 && (
                  <div className="flex flex-col gap-2 my-4 ml-1">
                    <span className="w-5 h-[2px] bg-black/50 rounded-full" />
                    <span className="w-2 h-[2px] bg-black/50 rounded-full" />
                    <span className="w-2 h-[2px] bg-black/50 rounded-full" />
                    <span className="w-2 h-[2px] bg-black/50 rounded-full" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#fff1f1] transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none"
        }`}
      >
        <div className="h-full w-full flex flex-col items-start px-8 py-16">
          <div className="flex flex-col mt-auto mb-auto w-full">
            {menu.map((item, index) => (
              <Fragment key={item.name}>
                <Link
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="text-black w-24 text-xl font-medium hover:translate-x-4 transition-transform duration-300 ease-out py-2"
                >
                  {item.name}
                </Link>

                {index !== menu.length - 1 && (
                  <div className="flex flex-col gap-2 my-4 ml-1">
                    <span className="w-5 h-[2px] bg-black/50 rounded-full" />
                    <span className="w-2 h-[2px] bg-black/50 rounded-full" />
                    <span className="w-2 h-[2px] bg-black/50 rounded-full" />
                    <span className="w-2 h-[2px] bg-black/50 rounded-full" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
