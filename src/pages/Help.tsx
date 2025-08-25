import { Card, CardContent } from "@/components/Card";
import { Footer, Navbar } from "@components/components";
import { ChevronRight } from "lucide-react";

function Help() {
  const steps = [
    {
      title: "Login atau Register",
      description:
        "Masuk dengan akun yang sudah terdaftar. Jika belum memiliki akun, silakan daftar dengan username, email, dan password.",
    },
    {
      title: "Pilih Sekolah",
      description:
        "Setelah login, pilih sekolah yang sesuai agar bisa melihat daftar kandidat yang tersedia.",
    },
    {
      title: "Lihat Kandidat",
      description:
        "Halaman kandidat menampilkan semua calon yang mengikuti pemilihan beserta profil singkat mereka.",
    },
    {
      title: "Lakukan Voting",
      description:
        "Buka halaman Pilih, pilih kandidat yang Anda dukung, lalu konfirmasi suara Anda. Setiap akun hanya bisa memilih satu kali.",
    },
    {
      title: "Lihat Hasil",
      description:
        "Setelah voting selesai, Anda bisa melihat hasil perolehan suara secara real-time pada halaman Hasil.",
    },
  ];

  const faqs = [
    {
      q: "Apakah saya bisa mengganti pilihan setelah voting?",
      a: "Tidak, setelah suara dikonfirmasi, Anda tidak bisa mengubah pilihan.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Ya, semua data pengguna disimpan dengan aman di server Evodka.",
    },
    {
      q: "Apakah saya bisa login di perangkat berbeda?",
      a: "Bisa, selama menggunakan Email/NIS dan Password yang terdaftar dan benar.",
    },
    {
      q: "Bagaimana jika seseorang menggunakan akun ke 2 (second account) untuk memilih?",
      a: "Hal tersebut memungkinkan dan dapat dikategorikan sebagai kelemahan sistem, namun jika kedapatan pengguna/pelaku melakukan hal serupa maka laporkan kepada admin/pihak penyelengara agar dapat ditindak lanjuti",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <h1 className="text-2xl font-bold text-indigo-600">Bantuan Evodka</h1>
        <p className="text-gray-600">
          Panduan ini akan membantu Anda memahami cara menggunakan aplikasi
          Evodka untuk melakukan pemilihan secara mudah dan aman.
        </p>

        {/* Langkah-langkah */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Langkah-langkah Penggunaan</h2>
          {steps.map((step, idx) => (
            <Card key={idx} className="shadow-sm border">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-medium flex items-center gap-1">
                    {step.title} <ChevronRight size={16} />
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pertanyaan Umum (FAQ)</h2>
          {faqs.map((faq, idx) => (
            <Card key={idx} className="shadow-sm border">
              <CardContent className="p-4">
                <p className="font-medium text-indigo-600">{faq.q}</p>
                <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Kontak */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-gray-600">
            Jika masih mengalami kendala, silakan hubungi tim support kami di{" "}
            <span className="text-indigo-600 font-medium cursor-pointer">
              support@evodka.com
            </span>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Help;
