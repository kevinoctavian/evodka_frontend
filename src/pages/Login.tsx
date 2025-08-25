import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import InputField from "@components/InputField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // TODO: sambungkan ke API login
  };

  return (
    <div className="h-svh flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500">
      <div className="w-full max-w-md p-6 shadow-md">
        <Link
          className="flex items-center gap-2 mb-6 text-rose-200 hover:underline self-start"
          to="/"
        >
          <ChevronLeft />
          <p>Kembali</p>
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-xl w-full max-w-sm space-y-4"
        >
          <InputField
            label="Email/NIS"
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

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          Belum punya akun?{" "}
          <Link to="/register" className="text-sky-200 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
