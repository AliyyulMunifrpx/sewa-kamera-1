import MainSection from "../../components/home/main-section.jsx";
import CatalogSection from "../../components/home/catalog-section.jsx";
import WhyChooseUsSection from "../../components/home/why-choose-us-section.jsx";
import TestimonialSection from "../../components/home/testimonial-section.jsx";
import HowToRentSection from "../../components/home/how-to-rent-section.jsx";
import CTASection from "../../components/home/cta-section.jsx";
import FAQSection from "../../components/home/faq-section.jsx";
import { store } from "../../data/store.js";

export const metadata = {
  title: `Sewa Kamera Termurah di ${store?.city || "Semarang"} | ${store?.name || "Rental Kamera"}`,
  description:
    store?.description ||
    `Pusat rental dan sewa kamera, iPhone, drone, serta perlengkapan fotografi & videografi terpercaya di ${store?.city || "Semarang"}. Unit 100% prima, terawat, dan harga paling terjangkau.`,
  keywords: [
    `sewa kamera ${store?.city || "Semarang"}`,
    `rental kamera ${store?.city || "Semarang"}`,
    `sewa iphone ${store?.city || "Semarang"}`,
    `sewa drone ${store?.city || "Semarang"}`,
    `sewa kamera murah ${store?.city || "Semarang"}`,
    `rental perlengkapan kamera ${store?.city || "Semarang"}`,
    `sewa lensa ${store?.city || "Semarang"}`,
    store?.name || "Rental Kamera",
  ],
  authors: [{ name: store?.name || "Rental Kamera" }],
  creator: store?.name || "Rental Kamera",
  publisher: store?.name || "Rental Kamera",
  metadataBase: new URL(store?.websiteUrl || "https://rentalkamera.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Sewa Kamera Termurah di ${store?.city || "Semarang"} | ${store?.name || "Rental Kamera"}`,
    description: `Rental kamera & peralatan fotografi terpercaya di ${store?.city || "Semarang"}. Unit terawat dan siap pakai.`,
    url: "/",
    siteName: store?.name || "Rental Kamera",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.webp",
        width: 1200,
        height: 630,
        alt: `Sewa Kamera ${store?.city || "Semarang"} - ${store?.name || "Rental Kamera"}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sewa Kamera Termurah di ${store?.city || "Semarang"} | ${store?.name || "Rental Kamera"}`,
    description: `Sewa kamera, iPhone, dan drone murah terpercaya di ${store?.city || "Semarang"}.`,
    images: ["/assets/opengraph.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  // Schema Structured Data (Local Business) untuk Local SEO Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: store?.name || "Rental Kamera",
    image: `${store?.websiteUrl || "https://rentalkamera.com"}/assets/home/kamera.webp`,
    telephone: store?.phone || "",
    address: {
      "@type": "PostalAddress",
      addressLocality: store?.city || "Semarang",
      addressCountry: "ID",
    },
    url: store?.websiteUrl || "https://rentalkamera.com",
    priceRange: "$$",
  };

  return (
    <div className="w-full h-full">
      {/* Injeksi JSON-LD ke Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MainSection />
      <CatalogSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <HowToRentSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}
