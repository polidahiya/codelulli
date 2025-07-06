"use client";
import { useState } from "react";
import Login from "./Serveraction";

export default function LoginPage() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password1 || !password2) {
      setmessage("Both fields are required");
      return;
    }
    const res = await Login(password1, password2);
    if (res.message) setmessage(res.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <input
          type="password"
          placeholder="Enter password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Re-enter password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {message && <p>{message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
