"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { y: 24, scale: 0.98 },
  whileInView: { y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function TermsContent({ store }) {
  const terms = [
    {
      title: "1. Persyaratan Identitas",
      items: [
        "Penyewa wajib menunjukkan sekurang-kurangnya 2 Identitas Asli yang masih berlaku (KTP / SIM / NPWP / Kartu Pelajar).",
        "Salah satu identitas utama asli (KTP/SIM) disimpan oleh pihak rental sebagai jaminan selama masa sewa.",
        "Penyewa bersedia diverifikasi data pendukung seperti domisili atau akun media sosial aktif.",
      ],
    },
    {
      title: "2. Alur Pemesanan & Pembayaran",
      items: [
        "Pemesanan diawali dengan mengisi Form Pemesanan di website resmi, lalu dilanjutkan dengan konfirmasi via WhatsApp.",
        "Tanggal sewa dianggap terkunci (booking lock) setelah penyewa membayar DP minimal 50% atau pelunasan.",
        "Pembatalan sewa H-1 dari tanggal booking mengakibatkan DP hangus.",
      ],
    },
    {
      title: "3. Serah Terima & Pengembalian",
      items: [
        "Pemeriksaan fisik dan fungsi unit dilakukan bersama saat serah terima.",
        "Keterlambatan pengembalian unit tanpa konfirmasi dikenakan denda overtime per jam.",
        "Keterlambatan lebih dari 3 jam tanpa pemberitahuan dihitung sewa tambahan 1 hari penuh.",
      ],
    },
    {
      title: "4. Tanggung Jawab & Kerusakan",
      items: [
        "Penyewa bertanggung jawab penuh menjaga kebersihan dan keselamatan unit selama masa sewa.",
        "Kerusakan akibat kelalaian (terjatuh, terkena air, benturan) sepenuhnya ditanggung penyewa.",
        "Jika unit hilang atau rusak total, penyewa wajib mengganti unit tipe yang sama atau membayar ganti rugi sesuai harga pasar.",
      ],
    },
    {
      title: "5. Larangan & Ketentuan Hukum",
      items: [
        "Unit dilarang dipindahtangankan, disewakan ulang ke pihak ketiga, atau dijadikan jaminan utang.",
        "Tindakan penggelapan atau penyalahgunaan unit akan langsung diproses ke jalur hukum.",
      ],
    },
  ];

  return (
    <>
      {/* Header Section */}
      <motion.div {...reveal} className="flex flex-col gap-2 px-4 lg:pl-40">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">
          {store?.name || "Rental Kamera"} {store?.city || "Semarang"}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
          Syarat & Ketentuan
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:pl-40 pr-4">
        {/* Kolom Kiri: Daftar Ketentuan */}
        <div className="lg:col-span-3 rounded-lg p-4 flex flex-col gap-4 bg-white">
          {terms.map((section, idx) => (
            <motion.div
              key={idx}
              {...reveal}
              transition={{ ...reveal.transition, delay: idx * 0.08 }}
              className="flex flex-col gap-3 border-b border-black/10 pb-6 last:border-none last:pb-0"
            >
              <h2 className="text-lg font-bold uppercase text-black">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2 text-xs font-semibold text-black/70">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
