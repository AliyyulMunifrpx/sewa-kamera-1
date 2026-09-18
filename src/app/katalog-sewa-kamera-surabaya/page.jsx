import CatalogPage from "../../../components/catalog/page.jsx";
import { store } from "../../../data/store.js";

export const metadata = {
  title: `Katalog Sewa Kamera & Gear | ${store?.name || "Rental Kamera"} ${store?.city || "Semarang"}`,
  description: `Lihat katalog lengkap sewa kamera, iPhone, drone, lensa, dan perlengkapan fotografi terpercaya di ${store?.name || "Rental Kamera"} ${store?.city || "Semarang"}. Unit terawat, 100% prima, dan harga terjangkau.`,
  keywords: [
    `katalog sewa kamera ${store?.city || "Semarang"}`,
    `daftar harga rental kamera ${store?.city || "Semarang"}`,
    `sewa lensa ${store?.city || "Semarang"}`,
    `sewa iphone ${store?.city || "Semarang"}`,
    `sewa drone ${store?.city || "Semarang"}`,
    store?.name || "Rental Kamera",
  ],
  alternates: {
    canonical: "/katalog-sewa-kamera-surabaya",
  },
  openGraph: {
    title: `Katalog Sewa Kamera & Gear | ${store?.name || "Rental Kamera"} ${store?.city || "Semarang"}`,
    description: `Katalog lengkap sewa kamera, iPhone, drone, dan perlengkapan terpercaya di ${store?.city || "Semarang"}.`,
    url: "/assets/opengraph.webp",
    siteName: store?.name || "Rental Kamera",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Katalog Sewa Kamera & Gear | ${store?.name || "Rental Kamera"} ${store?.city || "Semarang"}`,
    description: `Katalog lengkap sewa kamera, iPhone, drone, dan perlengkapan terpercaya di ${store?.city || "Semarang"}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CatalogPage />;
}
