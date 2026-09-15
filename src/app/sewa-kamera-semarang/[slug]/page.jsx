import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../../data/product.js";
import { store } from "../../../../data/store.js";


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Produk Tidak Ditemukan" };
  }

  return {
    title: `Sewa ${product.name} ${store?.city || "Semarang"} | ${store?.name || "Abon Rental Kamera"}`,
    description: `Sewa ${product.name} murah di ${store?.city || "Semarang"} hanya ${product.price}/hari. Kondisi unit 100% prima dan siap pakai.`,
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
    <div className="bg-white text-black min-h-dvh py-12 px-4 lg:pl-40 w-full">
      {/* Breadcrumb & Navigation */}
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase">
        <Link href="/" className="hover:text-primary transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <Link
          href="/katalog-sewa-kamera-semarang"
          className="hover:text-primary transition-colors"
        >
          Katalog
        </Link>
        <span>/</span>
        <span className="text-primary">{product.name}</span>
      </div>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-black p-4 bg-white">
        {/* Left Column: Product Image */}
        <div className="relative w-full aspect-square border border-black bg-black/5 flex items-center justify-center p-4">
          {product.badge && (
            <span className="absolute top-4 left-4 bg-primary text-white font-bold text-xs uppercase px-4 py-2 border border-black z-10">
              {product.badge}
            </span>
          )}
          <Image
            src={product.image}
            alt={`${product.name} - Sewa Kamera ${store?.city || "Semarang"}`}
            width={500}
            height={500}
            priority
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold text-xs uppercase tracking-wider block">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold uppercase text-black tracking-tight">
              {product.name}
            </h1>
            <div className="text-2xl font-bold text-black border-y border-black py-4">
              {product.price}{" "}
              <span className="text-xs font-normal">/ 24 Jam</span>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-black">
              Spesifikasi Unit
            </h2>
            <div className="border border-black">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex justify-between p-4 text-xs font-bold uppercase ${
                    index !== 0 ? "border-t border-black" : ""
                  }`}
                >
                  <span className="text-black/70">{key}</span>
                  <span className="text-black">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-black">
            <Link
              href={`/sewa?unit=${product.slug}`}
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-white font-bold uppercase text-center py-4 border border-black hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
            >
              Sewa unit{" "}
            </Link>
            <Link
              href="/katalog-sewa-kamera-semarang"
              className="px-4 bg-white text-black font-bold uppercase text-center py-4 border border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
