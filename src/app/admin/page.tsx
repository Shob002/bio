"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

// TYPES
type ProductForm = {
  title: string;
  scientific: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  featured: boolean;
};

type CloudinaryResponse = {
  secure_url?: string;
};

type Product = ProductForm & {
  id: string;
};

const emptyForm: ProductForm = {
  title: "",
  scientific: "",
  category: "",
  image: "",
  alt: "",
  description: "",
  featured: false,
};

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const utils = api.useUtils();

  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [uploading, setUploading] = useState(false);

  // ✅ AUTH GUARD (FIXED)
  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.replace("/admin/login");
      return;
    }

    if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.replace("/");
    }
  }, [status, session, router]);

  // ⛔ Block render until auth ready
  if (status !== "authenticated") {
    return <div className="p-10 text-center">Checking auth...</div>;
  }

  // 📦 DATA
  const { data: products = [], isLoading } =
    api.product.getAll.useQuery();

  const refresh = () => utils.product.getAll.invalidate();

  // ⚡ MUTATIONS
  const create = api.product.create.useMutation({
    onSuccess: () => {
      refresh();
      reset();
    },
  });

  const update = api.product.update.useMutation({
    onSuccess: () => {
      refresh();
      reset();
    },
  });

  const remove = api.product.delete.useMutation({
    onSuccess: refresh,
  });

  // 🖼️ IMAGE UPLOAD (FINAL FIX)
  const uploadImage = async (file: File) => {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data: CloudinaryResponse = await res.json();
    setUploading(false);

    // ✅ IMPORTANT FIX (Type-safe)
    const url = data.secure_url;

    if (!url) {
      alert("Upload failed");
      return;
    }

    setForm((prev) => ({
      ...prev,
      image: url, // ✅ guaranteed string
    }));
  };

  // HELPERS
  const reset = () => {
    setEditId(null);
    setForm(emptyForm);
  };

  const submit = () => {
    if (!form.title || !form.category || !form.image) {
      alert("Title, Category, Image required");
      return;
    }

    if (editId) {
      update.mutate({ id: editId, ...form });
    } else {
      create.mutate(form);
    }
  };

  const edit = (p: Product) => {
    setEditId(p.id);
    setForm({ ...emptyForm, ...p });
  };

  if (isLoading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-bold">Admin Panel</h1>

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* FORM */}
      <div className="bg-white p-4 rounded shadow space-y-2 mb-6">
        <h2 className="font-semibold">
          {editId ? "Edit Product" : "Add Product"}
        </h2>

        {["title", "category", "description"].map((key) => (
          <input
            key={key}
            placeholder={key}
            value={form[key as keyof ProductForm] as string}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
            className="border p-2 w-full rounded"
          />
        ))}

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) uploadImage(file);
          }}
          className="border p-2 w-full"
        />

        {uploading && <p>Uploading...</p>}

        {form.image && (
          <img
            src={form.image}
            className="h-32 rounded object-cover"
            alt="preview"
          />
        )}

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              setForm({ ...form, featured: e.target.checked })
            }
          />
          Featured
        </label>

        <div className="flex gap-2">
          <button
            onClick={submit}
            className="bg-black text-white flex-1 py-2 rounded"
          >
            {editId ? "Update" : "Create"}
          </button>

          {editId && (
            <button
              onClick={reset}
              className="bg-gray-400 text-white px-4 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* PRODUCTS */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((p: Product) => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <img
                src={p.image}
                className="h-40 w-full object-cover rounded"
                alt={p.title}
              />

              <h3 className="font-bold mt-2">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => edit(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    confirm("Delete?") &&
                    remove.mutate({ id: p.id })
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}