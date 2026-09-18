"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const reveal = {
  initial: { y: 24, scale: 0.98 },
  whileInView: { y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const revealLeft = {
  initial: { x: -24, scale: 0.98 },
  whileInView: { x: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const revealRight = {
  initial: { x: 24, scale: 0.98 },
  whileInView: { x: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function ProductDetailContent({ product, store, waUrl }) {
  return (
    <main className="bg-white text-black min-h-dvh py-12 px-4 lg:pl-40 w-full">
      {/* Breadcrumb & Navigation */}
      <motion.div
        {...reveal}
        className="mb-4 flex items-center gap-2 text-xs font-bold uppercase"
      >
        <Link href="/" className="hover:text-primary transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <Link
          href="/katalog-sewa-kamera-surabaya"
          className="hover:text-primary transition-colors"
        >
          Katalog
        </Link>
        <span>/</span>
        <span className="text-primary">{product.name}</span>
      </motion.div>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-black p-4 bg-white">
        {/* Left Column: Product Image */}
        <motion.div
          {...revealLeft}
          className="relative w-full aspect-square border border-black bg-black/5 flex items-center justify-center p-4"
        >
          {product.badge && (
            <span className="absolute top-4 left-4 bg-primary text-white font-bold text-xs uppercase px-4 py-2 border border-black z-10">
              {product.badge}
            </span>
          )}
          <Image
            src={product.image}
            alt={`${product.name} - Sewa Kamera ${store?.city || "Semarang"}`}
            width={500}
            height={500}
            priority
            className="object-contain w-full h-full"
          />
        </motion.div>

        {/* Right Column: Product Details */}
        <motion.div
          {...revealRight}
          className="flex flex-col justify-between gap-4"
        >
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold text-xs uppercase tracking-wider block">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold uppercase text-black tracking-tight">
              {product.name}
            </h1>
            <div className="text-2xl font-bold text-black border-y border-black py-4">
              {product.price}{" "}
              <span className="text-xs font-normal">/ 24 Jam</span>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-black">
              Spesifikasi Unit
            </h2>
            <div className="border border-black">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex justify-between p-4 text-xs font-bold uppercase ${
                    index !== 0 ? "border-t border-black" : ""
                  }`}
                >
                  <span className="text-black/70">{key}</span>
                  <span className="text-black">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-black">
            <Link
              href={`/sewa?unit=${product.slug}`}
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-white font-bold uppercase text-center py-4 border border-black hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
            >
              Sewa unit{" "}
            </Link>
            <Link
              href="/katalog-sewa-kamera-surabaya"
              className="px-4 bg-white text-black font-bold uppercase text-center py-4 border border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Kembali
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
