import { Hero, Navbar, Footer } from "@components/components";
import axios from "axios";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    axios.get("http://localhost:8000/").then(v => {
      console.log(v);
    })
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {/* Section Cara Kerja */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Bagaimana Cara Kerjanya?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Login dengan akun sekolah",
            "Pilih pemilihan sekolahmu",
            "Lihat daftar kandidat",
            "Beri suara pilihanmu",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">Langkah {i + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Pemilihan Aktif */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Pemilihan yang Sedang Berlangsung
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">SMA Negeri {id}</h3>
              <p className="text-gray-600 mb-4">Status: Sedang Berlangsung</p>
              <a
                href={`/schools/${id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
              >
                Ikut
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
