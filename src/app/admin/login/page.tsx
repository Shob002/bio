"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login() {
    if (!password) {
      alert("Enter admin password");
      return;
    }

    setLoading(true);

    const res = await signIn("credentials", {
      password,
      redirect: false,
      callbackUrl: "/admin",
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      alert("Invalid password");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-1 text-2xl font-bold text-slate-900">
          Admin Login
        </h1>

        <p className="mb-5 text-sm text-gray-500">
          Enter password to access Bioorgo admin panel.
        </p>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") void login();
          }}
          className="mb-3 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
        />

        <button
          onClick={() => void login()}
          disabled={loading}
          className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </div>
    </main>
  );
}