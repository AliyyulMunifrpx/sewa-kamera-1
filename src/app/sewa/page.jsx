"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "../../../data/product.js";

function FormSewaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil ID produk dari URL (misal: /sewa?unit=sony-a7-iii)
  const initialUnitId = searchParams.get("unit");

  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    duration: 1, // dalam hari
    notes: "",
  });

  // State untuk keranjang sewa (isinya hanya ID produk, BUKAN harganya)
  const [selectedUnitIds, setSelectedUnitIds] = useState(
    initialUnitId ? [initialUnitId] : [],
  );

  // State untuk dropdown tambah unit
  const [selectedNewUnit, setSelectedNewUnit] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUnit = () => {
    if (selectedNewUnit && !selectedUnitIds.includes(selectedNewUnit)) {
      setSelectedUnitIds((prev) => [...prev, selectedNewUnit]);
      setSelectedNewUnit(""); // Reset dropdown
    }
  };

  const handleRemoveUnit = (idToRemove) => {
    setSelectedUnitIds((prev) => prev.filter((id) => id !== idToRemove));
  };

  // AMAN: Kalkulasi dilakukan murni berdasarkan data products.js
  // Menggunakan parseInt dan membuang non-digit untuk mengubah "Rp 175.000" jadi 175000
  const getSelectedUnitsData = () => {
    return selectedUnitIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);
  };

  const calculateTotal = () => {
    const units = getSelectedUnitsData();
    const totalPerDay = units.reduce((sum, unit) => {
      const priceNumber = parseInt(unit.price.replace(/[^0-9]/g, ""), 10);
      return sum + priceNumber;
    }, 0);
    return totalPerDay * (formData.duration || 1);
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUnitIds.length === 0) {
      alert("Pilih minimal 1 unit untuk disewa!");
      return;
    }

    const unitsData = getSelectedUnitsData();
    const unitListString = unitsData
      .map((u) => `- ${u.name} (${u.price}/hari)`)
      .join("\n");
    const grandTotal = formatRupiah(calculateTotal());

    // Format WA
    const waNumber = "+6281234567890"; // Ganti dengan nomor asli
    const text =
      `*FORM BOOKING RENTAL*\n\n` +
      `*Nama:* ${formData.name}\n` +
      `*No. WA:* ${formData.whatsapp}\n` +
      `*Durasi:* ${formData.duration} Hari\n\n` +
      `*Unit yang disewa:*\n${unitListString}\n\n` +
      `*Total Estimasi:* ${grandTotal}\n` +
      `*Catatan:* ${formData.notes || "-"}\n\n` +
      `Apakah unit-unit tersebut tersedia?`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <main className="bg-white text-black min-h-dvh py-12 px-4 lg:pl-40 w-full flex flex-col gap-4">
      <div>
        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
          Formulir Pemesanan
        </span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
          Detail Sewa Unit
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Kolom Kiri: Form Data Diri */}
        <div className="lg:col-span-2 border border-black p-4 md:p-4 flex flex-col gap-4">
          <h2 className="text-2xl font-bold uppercase border-b border-black pb-4">
            Data Penyewa
          </h2>
          <form
            id="sewa-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-black p-3 text-sm font-bold uppercase placeholder:text-black/40 focus:outline-none focus:border-primary"
                  placeholder="NAMA SESUAI KTP"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full border border-black p-3 text-sm font-bold uppercase placeholder:text-black/40 focus:outline-none focus:border-primary"
                  placeholder="CONTOH: 081234567890"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase">
                Durasi Sewa (Hari) *
              </label>
              <input
                type="number"
                name="duration"
                min="1"
                required
                value={formData.duration}
                onChange={handleChange}
                className="w-full md:w-1/3 border border-black p-3 text-sm font-bold uppercase focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase">
                Catatan / Tanggal Pengambilan
              </label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                className="w-full border border-black p-3 text-sm font-bold uppercase placeholder:text-black/40 focus:outline-none focus:border-primary resize-none"
                placeholder="CONTOH: DIAMBIL HARI JUMAT JAM 15:00"
              />
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Keranjang Unit & Total */}
        <div className="flex flex-col gap-4">
          <div className="border border-black p-4 flex flex-col gap-4">
            <h2 className="text-xl font-bold uppercase border-b border-black pb-4">
              Keranjang Unit
            </h2>

            {/* List Unit Terpilih */}
            <div className="flex flex-col gap-4">
              {getSelectedUnitsData().length === 0 ? (
                <p className="text-xs font-bold uppercase text-black/50">
                  Belum ada unit dipilih.
                </p>
              ) : (
                getSelectedUnitsData().map((unit) => (
                  <div
                    key={unit.id}
                    className="flex justify-between items-center bg-black/5 p-3 border border-black"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold uppercase line-clamp-1">
                        {unit.name}
                      </span>
                      <span className="text-xs font-bold text-primary">
                        {unit.price}/hari
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveUnit(unit.id)}
                      className="text-xl font-bold text-black hover:text-red-600 px-2"
                      title="Hapus Unit"
                    >
                      &times;
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Tambah Unit Baru */}
            <div className="flex flex-col gap-2 border-t border-black pt-4">
              <label className="text-xs font-bold uppercase">
                Tambah Unit Lainnya
              </label>
              <div className="flex flex-col gap-2">
                <select
                  value={selectedNewUnit}
                  onChange={(e) => setSelectedNewUnit(e.target.value)}
                  className="flex-1 border border-black p-2 text-xs font-bold uppercase focus:outline-none focus:border-primary cursor-pointer bg-white truncate"
                >
                  <option value="">-- PILIH UNIT --</option>
                  {products
                    .filter((p) => !selectedUnitIds.includes(p.id)) // Sembunyikan yang sudah dipilih
                    .map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} - {p.price}
                      </option>
                    ))}
                </select>
                <button
                  type="button"
                  onClick={handleAddUnit}
                  className="bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-primary transition-colors"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>

          {/* Ringkasan Biaya */}
          <div className="border border-black p-4 bg-primary text-white flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Ringkasan Biaya
            </h3>
            <div className="flex justify-between items-end border-b border-white/30 pb-4">
              <span className="text-xs font-bold uppercase">Durasi</span>
              <span className="text-lg font-bold">
                {formData.duration} Hari
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs font-bold uppercase">
                Total Estimasi
              </span>
              <span className="text-2xl font-bold tracking-tight">
                {formatRupiah(calculateTotal())}
              </span>
            </div>
            <button
              form="sewa-form"
              type="submit"
              className="mt-4 w-full bg-white text-primary border border-white py-4 font-bold uppercase hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              Lanjutkan ke WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Dibungkus dengan Suspense karena menggunakan useSearchParams dari Next.js Router
export default function SewaPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center font-bold uppercase">
          Memuat Form...
        </div>
      }
    >
      <FormSewaContent />
    </Suspense>
  );
}
