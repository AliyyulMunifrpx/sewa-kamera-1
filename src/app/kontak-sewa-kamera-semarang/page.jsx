"use client";

import { useState } from "react";
import { store } from "../../../data/store.js";
import CTASection from "../../../components/home/cta-section.jsx";

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
    const waNumber = (
      store?.whatsapp ||
      store?.phone ||
      "+6281234567890"
    ).replace(/[^0-9]/g, "");

    const text =
      `Halo *${store?.name || "Abon Rental Kamera"}*,\n\n` +
      `Saya mau bertanya:\n` +
      `- *Nama:* ${formData.name}\n` +
      `- *No. WA:* ${formData.whatsapp}\n` +
      `- *Pertanyaan:* ${formData.message || "-"}`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const contactInfo = [
    {
      title: "Alamat Toko",
      value: store?.address || "Jl. Pemuda No. 123, Sekayu, Semarang Tengah",
      detail: store?.city || "Kota Semarang",
    },
    {
      title: "Jam Operasional",
      value: store?.day,
      detail: store?.hours,
    },
    {
      title: "Customer Support",
      value: store?.whatsapp || "+62 812-3456-7890",
      detail: "Respon Cepat via WhatsApp",
    },
    {
      title: "Email & Socials",
      value: store?.email || "info@abonrental.com",
      detail: store?.instagram || "@abonrentalkamera",
    },
  ];

  return (
    <>
      <main className="bg-white text-black min-h-dvh py-12 px-4 lg:pl-40 w-full">
        {/* Header Halaman */}
        <div className="flex flex-col gap-4 mb-10">
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
        </div>

        {/* Grid Informasi Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="border border-black p-4 bg-primary flex flex-col justify-between gap-4"
            >
              <span className="text-xs font-bold uppercase text-white tracking-wider">
                {info.title}
              </span>
              <div>
                <h2 className="text-lg font-bold uppercase text-white">
                  {info.value}
                </h2>
                <p className="text-xs font-normal text-white/70 mt-1">
                  {info.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid: Form & Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-black p-4 md:p-4 bg-white">
          {/* Form Kontak / Booking Fast Inquiry */}
          <div className="flex flex-col gap-4">
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
          </div>

          {/* Embedded Map & Syarat Singkat */}
          <div className="flex flex-col justify-between gap-4 border-t lg:border-t-0 lg:border-l border-black pt-4 lg:pt-0 lg:pl-4">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold text-xs uppercase tracking-wider block">
                Petunjuk Arah
              </span>
              <h2 className="text-2xl font-bold uppercase text-black">
                Peta Lokasi Toko
              </h2>
              {/* Google Maps Embed Container */}
              <div className="w-full h-44 md:h-40 border border-black relative bg-black/5 overflow-hidden">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.300729352125!2d110.4184!3d-4.9829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec0000001%3A0x1!2sSemarang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <CTASection></CTASection>
    </>
  );
}
