import Image from "next/image.js";
import Link from "next/link.js";
import { store } from "../../data/store.js";

// Metadata SEO untuk diletakkan/di-import di page.js
export const metadata = {
  title: `Sewa Kamera Termurah di ${store.city || "Semarang"} | ${store.name || "Rental Kamera"}`,
  description: `Pusat rental dan sewa kamera, iPhone, drone, serta aksesoris fotografi/videografi terpercaya di ${store.city || "Semarang"}. Unit 100% prima, terawat, dan harga paling terjangkau.`,
  keywords: [
    `sewa kamera ${store.city || "Semarang"}`,
    `rental kamera ${store.city || "Semarang"}`,
    `sewa iphone ${store.city || "Semarang"}`,
    `sewa drone ${store.city || "Semarang"}`,
    `rental aksesoris kamera ${store.city || "Semarang"}`,
    store.name || " Rental Kamera",
  ],
  openGraph: {
    title: `Sewa Kamera Termurah di ${store.city || "Semarang"} | ${store.name || " Rental Kamera"}`,
    description: `Rental kamera & peralatan fotografi terpercaya di ${store.city || "Semarang"}. Unit terawat dan siap pakai.`,
    url: store.websiteUrl,
    siteName: store.name || " Rental Kamera",
    images: [
      {
        url: "/assets/home/kamera.webp",
        width: 1200,
        height: 630,
        alt: `Sewa Kamera ${store.city || "Semarang"} - ${store.name || " Rental Kamera"}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Sewa Kamera Termurah di ${store.city || "Semarang"} | ${store.name || " Rental Kamera"}`,
    description: `Sewa kamera, iPhone, dan drone murah terpercaya di ${store.city || "Semarang"}.`,
    images: ["/assets/home/kamera.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MainSection() {
  return (
    <section className="h-[100dvh] w-full grid grid-cols-3 grid-rows-3 bg-white overflow-hidden relative">
      {/* Gambar Utama Kamera */}
      <div className="row-start-1 row-end-4 col-start-3 w-full z-20 aspect-square my-auto">
        <Image
          alt={`Kamera DSLR & Mirrorless untuk disewa di ${store.name || " Rental Kamera"} ${store.city || "Semarang"}`}
          src="/assets/home/kamera.webp"
          width={600}
          height={600}
          priority
          className="scale-120 -translate-x-[20%]"
        />
      </div>

      {/* Background Grid Pattern */}
      <div className="row-start-1 row-end-4 z-10 bg-primary col-start-3 w-full aspect-square my-auto">
        <Image
          alt="Latar belakang pola grid dekoratif hero section"
          src="/assets/home/grid.webp"
          width={600}
          height={600}
          className="scale-120"
        />
      </div>

      {/* Aksen Daun Decorative 1 */}
      <div className="row-start-2 row-end-4 z-10 col-start-2 w-full aspect-square my-auto">
        <Image
          alt="Aksen visual daun dekoratif"
          src="/assets/home/leaf.webp"
          width={70}
          height={70}
          className="translate-x-[300%] -translate-y-[80%]"
        />
      </div>

      {/* Aksen Daun Decorative 2 */}
      <div className="row-start-3 row-end-4 z-10 col-start-1 w-full aspect-square my-auto">
        <Image
          alt="Aksen visual elemen estetis"
          src="/assets/home/leaf.webp"
          width={100}
          height={100}
          className="-translate-x-[30%] translate-y-[150%]"
        />
      </div>

      {/* LAPISAN TEKS DAN TOMBOL */}
      <div className="relative z-40 row-start-1 row-end-4 col-start-1 col-end-3 w-full my-auto flex flex-col items-start gap-8 justify-center pl-56 pointer-events-auto">
        <h1 className="text-7xl text-black font-semibold uppercase leading-tight">
          SEWA <br /> KAMERA <br />
          TERMURAH <br /> {store.city || "SEMARANG"}
        </h1>
        <div className="flex gap-4 mr-auto">
          {/* Tombol Primary (Katalog) */}
          <Link
            href="/katalog-sewa-kamera-semarang"
            className="bg-primary px-4 py-2 text-white font-bold uppercase transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:brightness-110"
          >
            Katalog
          </Link>

          {/* Tombol Secondary (Hubungi Kami) */}
          <Link
            href="/kontak-sewa-kamera-semarang"
            className="bg-white px-4 py-2 text-primary font-bold uppercase border border-primary transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>

      {/* LAPISAN BINGKAI / FRAME SUDUT */}
      <div className="pointer-events-none row-start-1 grid grid-cols-1 grid-rows-1 row-end-4 col-start-1 col-end-3 p-40">
        <div className="w-full h-full row-start-1 col-start-1" />
        <div className="relative w-full h-full row-start-1 col-start-1">
          {/* TOP LEFT */}
          <span className="absolute top-0 left-0 w-[50px] h-[5px] bg-primary" />
          <span className="absolute top-0 left-0 w-[5px] h-[50px] bg-primary" />

          {/* TOP RIGHT */}
          <span className="absolute top-0 right-0 w-[50px] h-[5px] bg-primary" />
          <span className="absolute top-0 right-0 w-[5px] h-[50px] bg-primary" />

          {/* BOTTOM LEFT */}
          <span className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-primary" />
          <span className="absolute bottom-0 left-0 w-[5px] h-[50px] bg-primary" />

          {/* BOTTOM RIGHT */}
          <span className="absolute bottom-0 right-0 w-[50px] h-[5px] bg-primary" />
          <span className="absolute bottom-0 right-0 w-[5px] h-[50px] bg-primary" />
        </div>
      </div>
    </section>
  );
}
