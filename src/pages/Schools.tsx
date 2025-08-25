import { Card, CardContent } from "@/components/Card";
import { Footer, Navbar } from "@components/components";
import { CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Schools() {
  const [schoolLists, setSchoolLists] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const list = [
      {
        id: "asdj",
        name: "SMAN 1 Palangka Raya",
        image: "https://sman1palangkaraya.sch.id/images/30203479.jpg",
        address:
          "Jl. AIS Nasution No.2, Langkai, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah 74874",
        candidateCount: 4,
        endAt: 2,
      },
      {
        id: "sad",
        name: "SMAN 2 Palangka Raya",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/cdn.e-ujian.com/lembaga-logo/blob_4494_phph0E9ks_1613911323.jpg",
        address:
          "Jl. K.S. Tubun No.2, Langkai, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah 73111",
        candidateCount: 7,
        endAt: 7,
        isVoting: true,
      },
      {
        id: "asidsai",
        name: "SMAN 3 Palangka Raya",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYYepPfbm2Ozy5x7v_gPLA6DoW4h0LvEpiA&s",
        address:
          "Jl. G. Obos No.12, Menteng, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah 73112",
        candidateCount: 2,
        endAt: 9,
      },
      {
        id: "asidsai",
        name: "SMAN 4 Palangka Raya",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYYepPfbm2Ozy5x7v_gPLA6DoW4h0LvEpiA&s",
        address:
          "Jl. G. Obos No.12, Menteng, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah 73112",
        candidateCount: 2,
        endAt: 9,
      },
      {
        id: "asidsai",
        name: "SMAN 5 Palangka Raya",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYYepPfbm2Ozy5x7v_gPLA6DoW4h0LvEpiA&s",
        address:
          "Jl. G. Obos No.12, Menteng, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah 73112",
        candidateCount: 2,
        endAt: 9,
      },
    ];

    setSchoolLists(list);
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Daftar Sekolah</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolLists.map((school) => (
            <Card
              key={school.id}
              className="shadow-md hover:shadow-lg transition rounded-2xl"
            >
              <CardContent className="space-y-1">
                <div className="flex items-start gap-5">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-20 h-20 object-cover rounded-full mb-4 border"
                  />
                  <h2 className="text-lg font-semibold">{school.name}</h2>
                  {school.isVoting && (
                    <CalendarClock
                      fontVariant="destructive"
                      className="text-red-600"
                    >
                      Sedang Pemilihan
                    </CalendarClock>
                  )}
                </div>
                <p className="text-sm text-gray-500">{school.address}</p>
                {/* Jika sedang voting */}
                {school.isVoting ? (
                  <div className="mt-3 text-sm text-gray-600">
                    <p className="mb-1">
                      Jumlah Kandidat:{" "}
                      <span className="font-medium">
                        {school.candidateCount}
                      </span>
                    </p>
                    <p className="mb-2">
                      Sisa Waktu:{" "}
                      <span className="font-medium">{school.endAt}</span>
                    </p>
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-gray-500 italic">
                    Belum ada pemilihan aktif
                  </p>
                )}
                <div className="flex justify-between items-end h-full">
                  {school.isVoting ? (
                    <Link
                      className="hover:underline underline-offset-8"
                      to={`/vote/${school.id}`}
                    >
                      Lihat Pemilihan
                    </Link>
                  ) : (
                    <div />
                  )}
                  <Link
                    className="hover:underline underline-offset-8"
                    to={`/school/${school.id}`}
                  >
                    Lihat Profil
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schools;
