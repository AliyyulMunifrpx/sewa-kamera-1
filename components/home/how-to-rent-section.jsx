export default function HowToRentSection() {
  const steps = [
    {
      number: "01",
      title: "Pilih Unit & Isi Form",
      description:
        "Pilih gear yang kamu butuhkan di katalog, tentukan tanggal, lalu isi form pemesanan langsung di website.",
    },
    {
      number: "02",
      title: "Verifikasi & Konfirmasi",
      description:
        "Data form akan terhubung ke WhatsApp untuk konfirmasi ketersediaan unit serta verifikasi identitas (KTP/SIM).",
    },
    {
      number: "03",
      title: "Ambil Atau Antar",
      description:
        "Ambil langsung unit di lokasi kami atau manfaatkan kurir untuk pengantaran langsung ke lokasimu.",
    },
    {
      number: "04",
      title: "Gunakan & Kembalikan",
      description:
        "Bebas gunakan gear untuk project kamu, lalu kembalikan unit tepat waktu sesuai jadwal yang disepakati.",
    },
  ];

  return (
    <section className="bg-white text-black py-12 px-4 lg:pl-40 w-full ">
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
          Alur Pelayanan
        </span>
        <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
          Cara Sewa Kamera & Gadget
        </h2>
      </div>

      {/* Grid 4 Langkah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
        {steps.map((item) => (
          <div
            key={item.number}
            className="bg-primary border border-black p-4 flex flex-col justify-between group hover:border-primary transition-colors duration-300"
          >
            <div>
              {/* Badge Langkah */}
              <div className="inline-block bg-black text-white group-hover:bg-white  group-hover:text-black text-xs font-bold px-2 py-1 uppercase tracking-wider mb-4 transition-colors duration-300">
                Langkah {item.number}
              </div>

              {/* Judul Langkah */}
              <h3 className="text-lg font-bold uppercase text-white mb-2">
                {item.title}
              </h3>

              {/* Deskripsi */}
              <p className="text-sm text-white leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
