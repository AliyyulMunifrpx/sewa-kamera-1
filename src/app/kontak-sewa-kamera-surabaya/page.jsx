"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { store } from "../../../data/store.js";
import CTASection from "../../../components/home/cta-section.jsx";

const revealUp = {
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Membersihkan format nomor jika ada karakter non-angka
    const waNumber = (store?.whatsapp || "").replace(/[^0-9]/g, "");

    const text =
      `Halo *${store?.name}*,\n\n` +
      `Saya mau bertanya:\n` +
      `- *Nama:* ${formData.name}\n` +
      `- *No. WA:* ${formData.whatsapp}\n` +
      `- *Pertanyaan:* ${formData.message || "-"}`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <>
      <main className="bg-white text-black min-h-dvh py-12 px-4 lg:pl-40 w-full">
        {/* Header Halaman */}
        <motion.div {...revealUp} className="flex flex-col gap-4 mb-10">
          <span className="text-primary font-bold text-sm uppercase tracking-wider block">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
            Lokasi & Bantuan Sewa
          </h1>
          <p className="text-sm font-bold uppercase text-black/70 max-w-2xl">
            Punya pertanyaan seputar ketersediaan unit, syarat sewa, atau ingin
            booking secara langsung? Datang ke toko atau hubungi kami via
            WhatsApp.
          </p>
        </motion.div>

        {/* Main Content Grid: Form & Informasi Kontak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-black p-4 md:p-4 bg-white">
          {/* Bagian Kiri: Form Kontak / Booking Fast Inquiry */}
          <motion.div {...revealLeft} className="flex flex-col gap-4">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                Pesan Instan
              </span>
              <h2 className="text-2xl font-bold uppercase text-black">
                Ada pertanyaan?
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-black">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="NAMA ANDA"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-black p-3 text-sm font-bold uppercase placeholder:text-black/40 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-black">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="081234567890"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full border border-black p-3 text-sm font-bold uppercase placeholder:text-black/40 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-black">
                  Tulis pertanyaan kamu di sini
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="TULIS PESAN ATAU TANGGAL PENGGUNAAN..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-black p-3 text-sm font-bold uppercase placeholder:text-black/40 focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-primary text-white font-bold uppercase py-4 border border-black hover:bg-black transition-colors duration-300"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Bagian Kanan: Informasi Kontak Lengkap */}
          <motion.div
            {...revealRight}
            className="flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-black pt-6 lg:pt-0 lg:pl-6"
          >
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                Informasi Kontak
              </span>
              <h2 className="text-2xl font-bold uppercase text-black">
                Detail Toko
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {/* Alamat */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-black/50">
                  Alamat Toko
                </span>
                <p className="text-sm font-bold uppercase text-black leading-relaxed">
                  {store?.address}
                </p>
              </div>

              {/* Jam Operasional */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-black/50">
                  Jam Operasional
                </span>
                <p className="text-sm font-bold uppercase text-black">
                  {store?.day} • {store?.hours}
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-black/50">
                  WhatsApp
                </span>

                <a
                  href={`https://wa.me/${store?.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase text-primary hover:text-black hover:underline transition-colors w-fit"
                >
                  +{store?.whatsapp}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-black/50">
                  Instagram
                </span>

                <a
                  href={`https://instagram.com/${store?.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase text-primary hover:text-black hover:underline transition-colors w-fit"
                >
                  @{store?.instagram}
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-black/50">
                  Email
                </span>

                <a
                  href={`mailto:${store?.email}`}
                  className="text-sm font-bold uppercase text-primary hover:text-black hover:underline transition-colors w-fit"
                >
                  {store?.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <CTASection />
    </>
  );
}
