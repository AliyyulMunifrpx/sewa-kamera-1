import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import { store } from "../../data/store.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: `Sewa Kamera Termurah ${store?.city || "Semarang"} | ${store?.name || " Rental Kamera"}`,
    template: `%s | ${store?.name || " Rental Kamera"}`,
  },
  description:
    store?.description ||
    `Pusat sewa kamera, iPhone, drone, dan aksesoris fotografi/videografi terpercaya di ${store?.city || "Semarang"}. Unit terawat, 100% prima, dan harga terjangkau.`,
  keywords: [
    `sewa kamera ${store?.city || "Semarang"}`,
    `rental kamera ${store?.city || "Semarang"}`,
    `sewa iphone ${store?.city || "Semarang"}`,
    `sewa drone ${store?.city || "Semarang"}`,
    `rental aksesoris kamera ${store?.city || "Semarang"}`,
    `sewa lensa ${store?.city || "Semarang"}`,
    store?.name || " Rental Kamera",
  ],
  authors: [{ name: store?.name || " Rental Kamera" }],
  creator: store?.name || " Rental Kamera",
  publisher: store?.name || " Rental Kamera",
  metadataBase: new URL(store?.websiteUrl || "https://rentalkamera.com"),
  openGraph: {
    title: `Sewa Kamera Termurah ${store?.city || "Semarang"} | ${store?.name || " Rental Kamera"}`,
    description: `Penyedia sewa kamera, iPhone, drone, dan aksesoris terpercaya di ${store?.city || "Semarang"} dengan unit terawat dan siap pakai.`,
    url: store?.websiteUrl || "https://rentalkamera.com",
    siteName: store?.name || " Rental Kamera",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/home/kamera.webp",
        width: 1200,
        height: 630,
        alt: `Sewa Kamera ${store?.city || "Semarang"} - ${store?.name || " Rental Kamera"}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sewa Kamera Termurah ${store?.city || "Semarang"} | ${store?.name || " Rental Kamera"}`,
    description: `Pusat sewa kamera, iPhone, drone, dan aksesoris terpercaya di ${store?.city || "Semarang"}.`,
    images: ["/assets/home/kamera.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fff1f1] relative flex flex-col">
        {/* Layer 1: Main Content (z-0) - Di belakang Navbar */}
        <main className="flex-1 relative z-0 pointer-events-auto">
          {children}
        </main>

        {/* Layer 2: Navbar (z-10) - Di atas Content, di bawah Footer */}
        <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
          <Navbar />
        </div>

        {/* Layer 3: Footer (z-20) - Di paling atas saat di-scroll ke bawah */}
        <div className="relative z-20 pointer-events-auto bg-white">
          <Footer store={store} />
        </div>
      </body>
    </html>
  );
}
