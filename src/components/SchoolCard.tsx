import { Link } from "react-router";

interface SchoolCardProps {
  school: {
    id: string;
    name: string;
    image: string;
    address: string;
    candidateCount: number;
    endAt: number;
    voting?: {
      id: string;
    };
  };
}

export type { SchoolCardProps };

function SchoolCard({ school }: SchoolCardProps) {
  const { id, address, candidateCount, endAt, image, name, voting } = school;
  return (
    <div className="flex flex-col space-y-1 items-center shadow-xl w-2xs rounded-xl p-5 bg-gray-100">
      <img
        className="text-sm text-gray-400 w-3/5 rounded-md "
        src={image}
        alt={`Gambar logo ${name}`}
      />
      <h3>{name}</h3>
      <p className="text-sm text-gray-500">{address}</p>
      <div className="w-full space-y-0.5">
        <p className="text-sm text-gray-500">
          Total kandidat: {candidateCount}
        </p>
        <p className="text-sm text-gray-500">Berakhir {endAt} jam lagi</p>
      </div>
      <div className="flex items-center justify-between w-full space-x-1.5">
        {voting && (
          <Link
            to={`/vote/${voting.id}`}
            className="rounded-2xl  bg-emerald-500 w-full text-center p-2 text-white"
          >
            Ikut Voting!
          </Link>
        )}
        <Link
          to={`/schools/${id}`}
          className="rounded-2xl bg-yellow-500 w-full text-center p-2 text-white"
        >
          Profile
        </Link>
      </div>
    </div>
  );
}

export default SchoolCard;
