"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { y: 24, scale: 0.98 },
  whileInView: { y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Bagas Rian",
      role: "Wedding Photographer",
      unit: "Sony A7 IV + 24-70mm GM II",
      comment:
        "Unit benar-benar bersih, sensor bebas debu, dan baterai masih sangat sehat. Sangat menyelamatkan pas butuh cadangan kamera H-1 acara!",
    },
    {
      name: "Dinda Kirana",
      role: "Content Creator",
      unit: "iPhone 15 Pro Max",
      comment:
        "Proses sewa anti ribet buat kebutuhan event weekend kemarin. Fisik mulus, performa kamera mantap buat rekam video ProRes Log.",
    },
    {
      name: "Reza Pratama",
      role: "Pilot Drone / Videographer",
      unit: "DJI Avata 2 Combo",
      comment:
        "Sewa drone FPV di sini perlengkapannya lengkap banget. Kondisi unit prima dan adminnya sangat paham teknis pas diajak konsultasi.",
    },
  ];

  return (
    <section className="bg-white text-black py-12 px-4 lg:pl-40 w-full">
      {/* Header Section */}
      <motion.div {...reveal} className="mb-8">
        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
          Testimoni Pelanggan
        </span>
        <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
          Apa Kata Mereka?
        </h2>
      </motion.div>

      {/* Grid Testimonial */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.1 }}
            className="bg-white border border-black flex flex-col justify-between group hover:border-primary transition-colors duration-300"
          >
            <div className="p-4">
              {/* Badge Unit yang Disewa */}
              <div className="inline-block bg-primary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider mb-4">
                {item.unit}
              </div>

              {/* Isi Komentar */}
              <p className="text-sm font-medium leading-relaxed text-black">
                {item.comment}
              </p>
            </div>

            {/* Profil Customer */}
            <div className="border-t border-black mt-auto p-4 bg-primary">
              <h3 className="text-base font-bold uppercase text-white">
                {item.name}
              </h3>
              <p className="text-xs font-bold uppercase text-white mt-1">
                {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
