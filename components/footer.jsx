import Image from "next/image";
import Link from "next/link";
import { store } from "../data/store.js";

export default function Footer() {
  const navLinks = [
    { name: "Beranda", url: "/" },
    { name: "Katalog", url: "/katalog-sewa-kamera-semarang" },
    { name: "Kontak", url: "/kontak-sewa-kamera-semarang" },
  ];

  return (
    <footer className="bg-primary text-white border-t border-black w-full py-12 px-8 min-h-dvh flex flex-col justify-between">
      {/* Top Footer Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-black">
        {/* Brand & Logo Info */}
        <div className="flex flex-col gap-4 max-w-md">
          <Image
            alt={`Logo ${store?.name || "Rental Kamera"}`}
            src="/assets/logo.webp"
            width={50}
            height={50}
          />
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              {store?.name || "Rental Kamera"}
            </h3>
            <p className="text-xs font-bold uppercase mt-1 text-white/70">
              {store?.city || "Semarang"}
            </p>
          </div>
          <p className="text-sm text-white leading-relaxed">
            {store?.description ||
              `Penyedia sewa kamera, iPhone, drone, dan aksesoris fotografi / videografi terpercaya di ${store?.city} dengan unit terawat dan siap pakai.`}
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs uppercase tracking-wider mb-2 block text-white">
            Navigasi
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-sm font-bold uppercase text-white hover:underline transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Operational & Contact Info */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs uppercase tracking-wider mb-2 block text-white">
            Kontak & Jam Operasional
          </span>
          <a
            className="text-sm font-bold uppercase text-white"
            href={`https://wa.me/${store.whatsapp}`}
          >
            Whatsapp
          </a>
          <a
            className="text-sm font-bold uppercase text-white"
            href={`https://instagram.com/${store.instagram}`}
          >
            Instagram
          </a>
          <p className="text-sm text-white mt-2">
            {store?.operationalHours || "Buka Setiap Hari: 08.00 - 22.00 WIB"}
          </p>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="py-8 border-b border-black flex flex-col gap-4">
        <span className="font-bold text-xs uppercase tracking-wider block text-white">
          Lokasi Toko
        </span>
        <div className="w-full h-64 md:h-80 border border-black overflow-hidden bg-black/10">
          {store?.map ? (
            <iframe
              src={store.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Toko"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs font-bold uppercase text-white/60 p-4 text-center">
              Peta lokasi tidak tersedia
            </div>
          )}
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase">
        <span>
          © 2026 {store?.name ? store.name.toUpperCase() : "RENTAL KAMERA"}. ALL
          RIGHTS RESERVED.
        </span>
        <span className="tracking-widest text-white">[ READY TO SHOOT ]</span>
      </div>
    </footer>
  );
}
