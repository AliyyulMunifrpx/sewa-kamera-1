"use client";

import { motion } from "framer-motion";
import { store } from "../../data/store.js";

const reveal = {
  initial: { y: 24, scale: 0.98 },
  whileInView: { y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function WhyChooseUsSection() {
  const benefits = [
    {
      number: "01",
      title: "Unit 100% Prima",
      description:
        "Setiap kamera dan lensa selalu dirawat rutin, bebas jamur, dan melewati proses pengecekan ketat sebelum diserahkan.",
    },
    {
      number: "02",
      title: "Syarat Anti-Ribet",
      description:
        "Proses verifikasi cepat tanpa prosedur yang berbelit-belit. Cukup gunakan jaminan identitas resmi yang valid.",
    },
    {
      number: "03",
      title: "Harga Transparan",
      description:
        "Tarif sewa jujur tanpa biaya tersembunyi. Dapatkan penawaran harga khusus untuk durasi sewa mingguan atau bulanan.",
    },
    {
      number: "04",
      title: "Dukungan Responsif",
      description:
        "Admin dan teknisi kami siap memberikan konsultasi gratis untuk membantu memilih gear yang paling pas buat kebutuhan project-mu.",
    },
  ];

  return (
    <section className="bg-white text-black py-12 px-4 lg:pl-40 w-full ">
      {/* Section Header */}
      <motion.div {...reveal} className="mb-8">
        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
          Keunggulan Kami
        </span>
        <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
          Kenapa Pilih {store.name}
        </h2>
      </motion.div>

      {/* Grid 4 Poin Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((item, index) => (
          <motion.div
            key={item.number}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.1 }}
            className="bg-white border border-black p-4 flex flex-col justify-between group hover:border-primary transition-colors duration-300"
          >
            <div>
              {/* Indikator Angka */}
              <span className="text-3xl font-bold text-primary mb-4 block group-hover:scale-105 transition-transform duration-300">
                {item.number}
              </span>

              {/* Judul Poin */}
              <h3 className="text-lg font-bold uppercase text-black mb-2">
                {item.title}
              </h3>

              {/* Deskripsi */}
              <p className="text-sm text-black leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
