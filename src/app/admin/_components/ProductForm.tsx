"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

type ProductFormState = {
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

const emptyForm: ProductFormState = {
  title: "",
  scientific: "",
  category: "",
  image: "",
  alt: "",
  description: "",
  featured: false,
};

export default function ProductForm() {
  const utils = api.useUtils();

  const [form, setForm] = useState<ProductFormState>(emptyForm);
  const [uploading, setUploading] = useState(false);

  const create = api.product.create.useMutation({
    onSuccess: () => {
      void utils.product.getAll.invalidate();
      setForm(emptyForm);
    },
  });

  const uploadImage = async (file: File) => {
    try {
      setUploading(true);

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        alert("Cloudinary ENV missing");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData },
      );

      const data = (await res.json()) as CloudinaryResponse;

      if (!data.secure_url) {
        alert("Upload failed");
        return;
      }

      setForm((prev) => ({ ...prev, image: data.secure_url ?? "" }));
    } catch {
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const submit = () => {
    if (!form.title || !form.category || !form.image || !form.description) {
      alert("Title, Category, Image, Description required");
      return;
    }

    create.mutate(form);
  };

  return (
    <section className="mb-8 rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-4 text-lg font-semibold">Add Product</h2>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          placeholder="Product title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="rounded border p-3"
        />

        <input
          placeholder="Scientific name"
          value={form.scientific}
          onChange={(e) =>
            setForm({ ...form, scientific: e.target.value })
          }
          className="rounded border p-3"
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="rounded border p-3"
        />

        <input
          placeholder="Alt text"
          value={form.alt}
          onChange={(e) => setForm({ ...form, alt: e.target.value })}
          className="rounded border p-3"
        />
      </div>

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        className="mt-3 min-h-28 w-full rounded border p-3"
      />

      <div className="mt-4 rounded-xl border border-dashed p-4">
        <label className="mb-2 block text-sm font-medium">
          Product Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void uploadImage(file);
          }}
          className="w-full rounded border p-2"
        />

        {uploading && (
          <p className="mt-2 text-sm text-gray-500">Uploading...</p>
        )}

        {form.image && (
          <div className="mt-4 flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-100">
            <img
              src={form.image}
              className="max-h-full max-w-full object-contain p-3"
              alt={form.alt || "preview"}
            />
          </div>
        )}
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.featured}
          onChange={(e) =>
            setForm({ ...form, featured: e.target.checked })
          }
        />
        Featured Product
      </label>

      <button
        type="button"
        onClick={submit}
        disabled={create.isPending || uploading}
        className="mt-5 w-full rounded-xl bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
      >
        {create.isPending ? "Creating..." : "Create Product"}
      </button>
    </section>
  );
}