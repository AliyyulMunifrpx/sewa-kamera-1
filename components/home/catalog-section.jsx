"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/product";

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Kamera", "iPhone", "Lensa", "Lainnya"];

  // Filter produk berdasarkan kategori aktif & ambil max 8 item
  const filteredProducts = products
    .filter((item) => {
      if (activeCategory === "Semua") return true;
      return item.category?.toLowerCase() === activeCategory.toLowerCase();
    })
    .slice(0, 8);


  return (
    <section className="bg-white text-black py-12 px-4 lg:pl-40 w-full">
      {/* Header & Tab Filter */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
              Katalog Pilihan
            </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
              Sewa Unit Populer
            </h2>
          </div>
          {/* Tab Tombol Kategori */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-bold uppercase transition-colors duration-300 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-black border border-black hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid 8 Produk */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((item, index) => {

          return (
            <div
              key={item.id || index}
              className="bg-white border border-black flex flex-col justify-between p-4 relative group hover:border-primary transition-colors duration-300"
            >
              {/* Badge (Dinamis dari category / badge) */}
              <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                {item.badge || item.category || "Tersedia"}
              </div>

              {/* Area Gambar */}
              <div className="relative w-full h-48 my-4 flex items-center justify-center overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.name || "Foto Produk"}
                  width={280}
                  height={280}
                  className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {console.log(item.image)}

              {/* Detail Produk */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-lg font-bold uppercase text-black line-clamp-1">
                  {item.name}
                </h3>

                <p className="text-sm font-bold text-primary">
                  {item.price}{" "}
                  <span className="text-xs text-black font-normal">
                    / 24 jam
                  </span>
                </p>

                <Link
                  href={`/sewa-kamera-semarang/${item.slug}`}
                  className="mt-4 w-full bg-primary text-white text-center py-2 font-medium hover:bg-black transition-colors duration-300"
                >
                  Lihat detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/katalog-sewa-kamera-semarang"
          className="bg-black text-white px-8 py-3 text-sm font-bold uppercase hover:bg-primary transition-colors duration-300"
        >
          Jelajahi Semua Unit Kamera & Gadget
        </Link>
      </div>
    </section>
  );
}
