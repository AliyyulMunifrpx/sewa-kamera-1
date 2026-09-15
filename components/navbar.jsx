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
      url: "/katalog-sewa-kamera-semarang",
    },
    {
      name: "Kontak",
      url: "/kontak-sewa-kamera-semarang",
    },
  ];

  return (
    <>
      {/* Tombol Burger khusus Mobile & Tablet (muncul sampai layar di bawah lg / 1024px) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        // 👇 md:hidden diubah menjadi lg:hidden
        className="pointer-events-auto lg:hidden fixed top-6 right-6 z-50 p-2 bg-white border border-black flex flex-col gap-1.5"
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

      {/* Wrapper Navbar Utama */}
      <div
        className={`bg-[#fff1f1] lg:bg-transparent fixed lg:relative top-0 left-0 z-40 h-full w-full lg:w-fit transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none lg:translate-x-0 lg:pointer-events-auto"
        }`}
      >
        <div className="h-full w-full flex flex-col items-start px-8 py-16">
          <Image
            alt={`Logo ${store?.name || "Rental"} Kamera`}
            src="/assets/logo.webp"
            width={50}
            height={50}
          />

          <div className="flex flex-col mt-auto mb-auto w-full">
            {menu.map((item, index) => (
              <Fragment key={item.name}>
                {/* Menu Link */}
                <Link
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="text-black w-24 text-xl font-medium hover:translate-x-4 transition-transform duration-300 ease-out py-2"
                >
                  {item.name}
                </Link>

                {/* Garis Penggaris Lensa */}
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
