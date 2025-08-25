import { Card, CardContent } from "@/components/Card";
import { Footer, Navbar } from "@components/components";
import { useState } from "react";
import { Link } from "react-router";

type Candidate = {
  id: string;
  schoolId: string;
  ketua: { name: string };
  wakil: { name: string };
  visi: string;
  misi: string[];
  totalVotes: number;
  status: "running" | "elected" | "not_elected";
};

type School = {
  id: string;
  name: string;
  status: "not_started" | "ongoing" | "finished";
  candidates: Candidate[];
};

const schools: School[] = [
  {
    id: "s1",
    name: "SMA Negeri 1 Jakarta",
    status: "ongoing",
    candidates: [
      {
        id: "c1",
        schoolId: "s1",
        ketua: {
          name: "Andi",
        },
        wakil: { name: "Budi" },
        visi: "Menjadikan OSIS lebih aktif",
        misi: ["Transparansi", "Program sosial", "Ekstrakurikuler aktif"],
        totalVotes: 120,
        status: "running",
      },
      {
        id: "c2",
        schoolId: "s1",
        ketua: { name: "Citra" },
        wakil: { name: "Dewi" },
        visi: "OSIS kreatif dan inovatif",
        misi: ["Digitalisasi kegiatan", "Festival seni"],
        totalVotes: 95,
        status: "running",
      },
    ],
  },
  {
    id: "s2",
    name: "SMA Negeri 2 Bandung",
    status: "finished",
    candidates: [
      {
        id: "c3",
        schoolId: "s2",
        ketua: { name: "Eko" },
        wakil: { name: "Fajar" },
        visi: "Sekolah ramah lingkungan",
        misi: ["Program hijau", "Pengelolaan sampah"],
        totalVotes: 200,
        status: "elected",
      },
      {
        id: "c4",
        schoolId: "s2",
        ketua: { name: "Gina" },
        wakil: { name: "Hana" },
        visi: "Meningkatkan prestasi akademik",
        misi: ["Belajar kelompok", "Tutor sebaya"],
        totalVotes: 150,
        status: "not_elected",
      },
    ],
  },
];

// Beberapa provider public untuk placeholder avatar.
// Kita pakai urutan fallback: DiceBear -> Pravatar -> RandomUser
// Supaya konsisten antar render, gunakan "seed" (string/number) yang stabil.
function getAvatarUrl(seed: string | number, role?: "ketua" | "wakil") {
  // Biar ketua & wakil tidak sama, tambahkan suffix ke seed
  const s = `${seed}-${role ?? "person"}`;

  // 1) DiceBear (SVG) - sangat stabil dan gratis
  // style: "notionists" (lebih remaja), bisa ganti ke "adventurer", "avataaars", dll.
  const dicebear = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(
    s
  )}&radius=50`;

  // 2) Pravatar (JPG) - butuh angka 1..70
  const num = Math.abs(hashCode(s)) % 70 || 1;
  const pravatar = `https://i.pravatar.cc/200?img=${num}`;

  // 3) RandomUser (JPG) - 0..99, acak gender
  const n = Math.abs(hashCode(s)) % 100;
  const gender = n % 2 === 0 ? "men" : "women";
  const randomuser = `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;

  // Kita kembalikan array untuk digunakan sebagai fallback di <img> onError
  return [dicebear, pravatar, randomuser];
}

// Hash kecil untuk dapatkan angka dari string (stabil antar render)
function hashCode(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

type AvatarImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  sources: string[]; // list URL fallback
  alt: string;
  className?: string;
};

function AvatarImg({ sources, alt, className, ...rest }: AvatarImgProps) {
  const [idx, setIdx] = useState(0);
  const src = sources[Math.min(idx, sources.length - 1)];

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setIdx((i) => Math.min(i + 1, sources.length - 1))}
      {...rest}
    />
  );
}

function Candidates() {
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-8">
        {schools.map((school) => (
          <div key={school.id}>
            <h2 className="text-2xl font-bold mb-4">{school.name}</h2>

            {school.status === "not_started" && (
              <p className="text-gray-500">Pemilihan belum dimulai</p>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {school.candidates.map((candidate) => {
                const ketuaSrc = getAvatarUrl(candidate.id, "ketua");
                const wakilSrc = getAvatarUrl(candidate.id, "wakil");
                return (
                  <Card key={candidate.id} className="rounded-2xl shadow-md">
                    <CardContent className="p-6 space-y-4">
                      {/* Ketua & Wakil */}
                      <div className="flex items-center justify-center gap-8">
                        <div className="text-center">
                          <AvatarImg
                            sources={ketuaSrc}
                            alt={candidate.ketua.name}
                            className="w-24 h-24 rounded-full border object-cover mx-auto bg-white"
                          />
                          <p className="font-semibold mt-2">
                            {candidate.ketua.name}
                          </p>
                          <p className="text-xs text-gray-500">Ketua</p>
                        </div>
                        <div className="text-center">
                          <AvatarImg
                            sources={wakilSrc}
                            alt={candidate.wakil.name}
                            className="w-24 h-24 rounded-full border object-cover mx-auto bg-white"
                          />
                          <p className="font-semibold mt-2">
                            {candidate.wakil.name}
                          </p>
                          <p className="text-xs text-gray-500">Wakil</p>
                        </div>
                      </div>

                      {/* Visi & Misi */}
                      <div>
                        <h3 className="font-bold">Visi</h3>
                        <p className="text-gray-700">{candidate.visi}</p>
                      </div>
                      <div>
                        <h3 className="font-bold">Misi</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                          {candidate.misi.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Status & Aksi */}
                      <div className="flex items-center justify-between">
                        {school.status === "ongoing" && (
                          <Link to="#">Pilih</Link>
                        )}
                        {school.status === "finished" &&
                          candidate.status === "elected" && (
                            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                              Terpilih
                            </span>
                          )}
                        {school.status === "finished" &&
                          candidate.status === "not_elected" && (
                            <span className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">
                              Tidak Terpilih
                            </span>
                          )}
                        <span className="text-sm text-gray-600">
                          {candidate.totalVotes} suara
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Candidates;
