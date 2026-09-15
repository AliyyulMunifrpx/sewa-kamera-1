import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white text-black py-12 px-4 lg:pl-40 w-full ">
      <div className="relative bg-primary text-white p-8 md:p-12 border border-black flex flex-col items-center text-center gap-4 overflow-hidden">
        {/* Ornamen Corner Bracket / Frame Viewfinder Kamera (4 Sudut) */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white" />

        {/* Subtitle / Focus Indicator */}
        <div className="text-white text-xs font-bold tracking-widest uppercase mb-2">
          [ + ] READY TO SHOOT
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white max-w-2xl">
          Siap Abadikan Momen Terbaikmu Hari Ini?
        </h2>

        {/* Deskripsi */}
        <p className="text-sm md:text-base text-white max-w-xl leading-relaxed">
          Konsultasikan kebutuhan gear kamera, iPhone, drone, atau aksesori
          milikmu. Admin kami siap membantu booking unit dengan cepat.
        </p>

        {/* Tombol Aksi Utama */}
        <div className="mt-2">
          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold uppercase text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300 border border-primary"
          >
            Lihat detail Via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
