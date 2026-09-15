"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/product.js";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Semua", "Kamera", "iPhone", "Lensa", "Lainnya"];

  // Filter berdasarkan kategori dan pencarian nama (menampilkan semua hasil tanpa limit)
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      activeCategory === "Semua" ||
      item.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getImagePath = (item) => {
    if (item.image) return item.image;
    const cleanName = item.name.toLowerCase().replace(/\s+/g, "");
    return `/assets/home/products/${cleanName}.webp`;
  };

  return (
    <div className="bg-white text-black min-h-dvh py-12 px-4 lg:pl-40 w-full">
      {/* Header Halaman */}
      <div className="flex flex-col gap-4 mb-10">
        <div>
          <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
            Katalog Lengkap
          </span>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
            Semua Unit Kamera & Gadget
          </h1>
        </div>

        {/* Control Bar: Input Search & Tab Kategori */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4  py-4">
          {/* Input Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari Unit"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-black border border-black px-4 py-2 text-sm font-bold placeholder:text-black/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Filter Kategori */}
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

      {/* Grid Produk */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((item, index) => {
            const imageSrc = getImagePath(item);

            return (
              <div
                key={item.id || index}
                className="bg-white border border-black flex flex-col justify-between p-4 relative group hover:border-primary transition-colors duration-300"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                  {item.badge || item.category || "Tersedia"}
                </div>

                {/* Area Gambar */}
                <div className="relative w-full h-48 my-4 flex items-center justify-center overflow-hidden bg-white">
                  <Image
                    src={imageSrc}
                    alt={item.name || "Foto Produk"}
                    width={280}
                    height={280}
                    className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Detail Produk */}
                <div className="flex flex-col gap-2 mt-2">
                  <h2 className="text-lg font-bold uppercase text-black line-clamp-1">
                    {item.name}
                  </h2>

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
      ) : (
        /* Empty State */
        <div className="border border-black p-12 text-center flex flex-col items-center justify-center gap-4 my-8">
          <p className="text-lg font-bold uppercase text-black/60">
            Unit yang kamu cari tidak ditemukan.
          </p>
          <button
            onClick={() => {
              setActiveCategory("Semua");
              setSearchQuery("");
            }}
            className="bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-primary transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
