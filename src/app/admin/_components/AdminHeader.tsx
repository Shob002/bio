"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminHeader({
  productsCount,
  messagesCount,
}: {
  productsCount: number;
  messagesCount: number;
}) {
  const router = useRouter();

  const logout = async () => {
    await signOut({ redirect: false });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl bg-white p-5 shadow md:flex-row md:items-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-green-700">
          Bioorgo Admin
        </p>
        <h1 className="text-2xl font-bold text-slate-900">
          Product & Contact Management
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {productsCount} products · {messagesCount} messages
        </p>
      </div>

      <button
        type="button"
        onClick={() => void logout()}
        className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}