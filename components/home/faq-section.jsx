"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Apa saja syarat utama untuk menyewa kamera atau gadget?",
      answer:
        "Cukup melampirkan identitas asli yang masih berlaku (KTP/SIM/KTM) dan akun media sosial aktif untuk verifikasi kilat tanpa prosedur yang rumit.",
    },
    {
      question: "Apakah ada sistem jaminan deposit uang tunai?",
      answer:
        "Tidak ada deposit uang tunai. Seluruh proses penyewaan hanya membutuhkan jaminan dokumen identitas asli yang disepakati saat pengambilan unit.",
    },
    {
      question: "Bagaimana jika terjadi kerusakan pada unit yang disewa?",
      answer:
        "Seluruh unit dicek bersama sebelum dan sesudah sewa. Jika terjadi kerusakan akibat kelalaian, penyewa bertanggung jawab atas biaya perbaikan sesuai standar service center resmi.",
    },
    {
      question: "Apakah tersedia layanan antar-jemput unit ke lokasi?",
      answer:
        "Ya, kami melayani pengantaran dan penjemputan unit langsung ke lokasi Anda melalui kurir internal atau layanan ojek online.",
    },
    {
      question: "Berapa minimal durasi waktu penyewaan?",
      answer:
        "Minimal durasi sewa adalah 12 jam atau 24 jam tergantung paket yang dipilih. Tersedia juga paket hemat untuk sewa mingguan atau bulanan.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-12 px-4 lg:pl-40 w-full">
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
          Pertanyaan Umum
        </span>
        <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion FAQ List */}
      <div className="flex flex-col gap-4 ">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-black bg-white transition-colors duration-300"
            >
              {/* Question Toggle Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="text-base font-bold uppercase text-black">
                  {faq.question}
                </span>
                <span className="text-xl font-bold text-white bg-primary flex items-center justify-center w-4 h-4 border border-primary shrink-0">
                  {isOpen ? "-" : "+"}
                </span>
              </button>

              {/* Answer Box */}
              {isOpen && (
                <div className="px-4  py-2 border-t border-black bg-primary">
                  <p className="text-sm text-white leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}