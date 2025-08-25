import { Footer, Navbar } from "@components/components";

function Results() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hasil Pemilihan</h1>
        <p>
          Tampilkan hasil real-time atau final dari setiap pemilihan sekolah.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Results;
