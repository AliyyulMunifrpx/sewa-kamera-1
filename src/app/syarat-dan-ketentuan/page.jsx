import { store } from "../../../data/store.js";
import CTASection from "../../../components/home/cta-section.jsx";
import TermsContent from "../../../components/terms/page.jsx";

export const metadata = {
  title: `Syarat & Ketentuan | ${store?.name || "Rental Kamera"} ${store?.city || "Semarang"}`,
  description: `Syarat dan ketentuan resmi rental kamera, iPhone, drone, dan perlengkapan kamera di ${store?.name || "Rental Kamera"} ${store?.city || "Semarang"}.`,
  alternates: {
    canonical: "/syarat-dan-ketentuan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="bg-white text-black min-h-dvh py-8  lg:py-12 w-full flex flex-col gap-4">
      <TermsContent store={store} />
      <CTASection></CTASection>
    </main>
  );
}
