import { notFound } from "next/navigation";
import { products } from "../../../../data/product.js";
import { store } from "../../../../data/store.js";
import CTASection from "../../../../components/home/cta-section.jsx";
import ProductDetailContent from "../../../../components/product-detail/page.jsx";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Produk Tidak Ditemukan" };
  }

  return {
    title: `Sewa ${product.name} ${store?.city || "Semarang"} | ${store?.name || "Abon Rental Kamera"}`,
    description: `Sewa ${product.name} murah di ${store?.city || "Semarang"} hanya ${product.price}/hari. Kondisi unit 100% prima dan siap pakai.`,
    alternates: {
      canonical: `/sewa-kamera-surabaya/${slug}`,
    },
    openGraph: {
      title: `Sewa ${product.name} - ${product.price}`,
      description: `Sewa ${product.name} di ${store?.city || "Semarang"}. Lengkap dan terawat.`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Format pesan WhatsApp
  const waMessage = encodeURIComponent(
    `Halo ${store?.name || "Abon Rental Kamera"}, saya mau tanya ketersediaan sewa unit *${product.name}* (${product.price}). Apakah ready?`,
  );
  const waNumber = (
    store?.whatsapp ||
    store?.phone ||
    "+6281234567890"
  ).replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <>
      <ProductDetailContent product={product} store={store} waUrl={waUrl} />
      <CTASection></CTASection>
    </>
  );
}
