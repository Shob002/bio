"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const { status } = useSession();
  const router = useRouter();

  // auto redirect if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/admin");
    }
  }, [status, router]);

  const login = async () => {
    if (!password) return;

    const res = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (res?.ok) router.replace("/admin");
    else alert("Invalid password");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="w-64 space-y-3">

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className="w-full border p-2 rounded"
        />

        <button
          onClick={login}
          className="w-full bg-black text-white p-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}