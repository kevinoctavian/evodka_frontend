import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import InputField from "@components/InputField";

function Register() {
  const [nis, setNis] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("0");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    // TODO: sambungkan ke API register
  };

  return (
    <div className="h-svh flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-6 shadow-md">
        <Link
          className="flex items-center gap-2 mb-6 text-sky-500 hover:underline self-start"
          to="/"
        >
          <ChevronLeft />
          <p>Kembali</p>
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-2xl w-full max-w-sm space-y-4"
        >
          <InputField
            label="NIK/NISN/NIS"
            id="NIS"
            type="text"
            maxLength={20}
            value={nis}
            onValueChange={(value) => setNis(value)}
          />

          <InputField
            label="Username"
            id="username"
            type="text"
            value={username}
            onValueChange={(value) => setUsername(value)}
          />

          <InputField
            label="Email"
            id="email"
            type="email"
            value={email}
            onValueChange={(value) => setEmail(value)}
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            value={password}
            onValueChange={(value) => setPassword(value)}
          />

          {/* TODO: Tambahkan nama sekolah */}
          <div className="">
            <label htmlFor="school" className="sr-only">
              Sekolah
            </label>
            <select
              name="school"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-600  focus:outline-none focus:ring-0 focus:border-slate-200 peer"
              id="school"
              onChange={(e) => setSchool(e.target.value)}
              value={school}
            >
              <option value="0" disabled>
                Pilih Sekolah/Kampus saat ini
              </option>
              {/* TODO: get list school from backend */}
              <option value="1">SMAN 1 Palangka Raya</option>
              <option value="2">SMAN 2 Palangka Raya</option>
              <option value="3">SMAN 3 Palangka Raya</option>
              <option value="4">SMAN 4 Palangka Raya</option>
              <option value="5">SMAN 5 Palangka Raya</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500"
          >
            Register
          </button>
        </form>

        <p className="mt-4  text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
