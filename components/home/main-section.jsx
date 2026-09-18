"use client";

import Image from "next/image.js";
import Link from "next/link.js";
import { motion } from "framer-motion";
import { store } from "../../data/store.js";

const reveal = {
  initial: { y: 24, scale: 0.98 },
  whileInView: { y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function MainSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white flex flex-col items-center justify-center gap-8 px-4 py-16 h-[100dvh] lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-0 lg:p-0">
      {/* VISUAL: Kamera + Grid Pattern (numpuk) */}
      <motion.div
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.1 }}
        className="order-2 w-full max-w-sm grid grid-cols-1 grid-rows-1 lg:order-none lg:max-w-none lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:aspect-square lg:my-auto"
      >
        {/* Background Grid Pattern */}
        <div className="col-start-1 row-start-1 z-10 bg-primary w-full aspect-square">
          <Image
            alt="Latar belakang pola grid dekoratif hero section"
            src="/assets/home/grid.webp"
            width={600}
            height={600}
            className="w-full h-full lg:scale-120"
          />
        </div>

        {/* Gambar Utama Kamera */}
        <div className="col-start-1 row-start-1 z-20 w-full aspect-square">
          <Image
            alt={`Kamera DSLR & Mirrorless untuk disewa di ${store.name || " Rental Kamera"} ${store.city || "Semarang"}`}
            src="/assets/home/kamera.webp"
            width={600}
            height={600}
            priority
            className="w-full h-full lg:scale-120 -translate-[5%] translate-y-[3%] lg:translate-y-0 lg:-translate-x-[20%]"
          />
        </div>
      </motion.div>

      {/* Aksen Daun Decorative 1 — hanya xl */}
      <div className="hidden lg:block row-start-2 row-end-4 z-10 col-start-2 w-full aspect-square my-auto">
        <Image
          alt="Aksen visual daun dekoratif"
          src="/assets/home/leaf.webp"
          width={70}
          height={70}
          className="translate-x-[300%] -translate-y-[80%]"
        />
      </div>

      {/* Aksen Daun Decorative 2 — hanya xl */}
      <div className="hidden lg:block row-start-3 row-end-4 z-10 col-start-1 w-full aspect-square my-auto">
        <Image
          alt="Aksen visual elemen estetis"
          src="/assets/home/leaf.webp"
          width={100}
          height={100}
          className="-translate-x-[30%] translate-y-[150%]"
        />
      </div>

      {/* LAPISAN TEKS DAN TOMBOL */}
      <motion.div
        {...reveal}
        className="order-1 relative z-40 w-full flex flex-col items-center gap-8 text-center lg:order-none lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3 lg:my-auto lg:items-start lg:justify-center lg:text-left lg:pl-56"
      >
        <h1 className="text-4xl sm:text-5xl text-black font-semibold uppercase leading-tight lg:text-7xl">
          SEWA <br className="hidden lg:block" /> KAMERA <br />
          TERMURAH <br className="md:hidden lg:block" />{" "}
          {store.city || "SEMARANG"}
        </h1>
        <div className="flex gap-4">
          {/* Tombol Primary (Katalog) */}
          <Link
            href="/katalog-sewa-kamera-surabaya"
            className="bg-primary px-4 py-2 text-white font-bold uppercase transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:brightness-110"
          >
            Katalog
          </Link>

          {/* Tombol Secondary (Hubungi Kami) */}
          <Link
            href="/kontak-sewa-kamera-surabaya"
            className="bg-white px-4 py-2 text-primary font-bold uppercase border border-primary transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
