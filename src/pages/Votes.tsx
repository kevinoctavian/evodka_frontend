import { Footer, Navbar } from "@components/components";

function Votes() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Pemilihan</h1>
        <p>Halaman untuk melakukan voting ketua & wakil OSIS.</p>
      </div>
      <Footer />
    </>
  );
}

export default Votes;
