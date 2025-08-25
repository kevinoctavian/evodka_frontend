import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import InputField from "@components/InputField";

function Register() {
  const [nis, setNis] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    // TODO: sambungkan ke API register
  };

  return (
    <div className="h-svh flex items-center justify-center bg-gradient-to-br  from-indigo-500 via-purple-500 to-fuchsia-500">
      <div className="w-full max-w-md p-6 shadow-md">
        <Link
          className="flex items-center gap-2 mb-6 text-rose-200 hover:underline self-start"
          to="/"
        >
          <ChevronLeft />
          <p>Kembali</p>
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-2xl w-full max-w-sm space-y-4"
        >
          <div className="space-y-2">
            <InputField
              label="NIS"
              id="NIS"
              type="text"
              maxLength={20}
              value={nis}
              onValueChange={(value) => setNis(value)}
            />
            <p className="text-xs">
              *{" "}
              <span className="text-sky-300">
                NIS: Nomor Induk Siswa Negeri/Swasta
              </span>
            </p>
          </div>

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

          {/* TODO: Tambahkan nama sekolah */}

          <InputField
            label="Password"
            id="password"
            type="password"
            value={password}
            onValueChange={(value) => setPassword(value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500"
          >
            Register
          </button>
        </form>

        <p className="mt-4  text-center text-white">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-sky-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
