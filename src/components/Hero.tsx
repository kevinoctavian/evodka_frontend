import { Link } from "react-router";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Pemilihan Ketua & Wakil OSIS Nasional
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Ikut serta dalam pemilihan OSIS sekolahmu dengan mudah, cepat, dan
        transparan. Yuk, gunakan hak suaramu sekarang!
      </p>
      <div className="md:space-x-4 flex md:block flex-col space-y-2">
        <Link
          to="/vote"
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300"
        >
          Mulai Memilih
        </Link>
        <Link
          to="/candidates"
          className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
        >
          Lihat Kandidat
        </Link>
      </div>
    </section>
  );
}

export default Hero;
