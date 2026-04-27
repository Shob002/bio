"use client";

import { api } from "~/trpc/react";

type Product = {
  id: string;
  title: string;
  scientific: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  featured: boolean;
};

export default function ProductGrid({
  products,
}: {
  products: Product[];
}) {
  const utils = api.useUtils();

  const remove = api.product.delete.useMutation({
    onSuccess: () => {
      void utils.product.getAll.invalidate();
    },
  });

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-slate-900">
        Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex h-full flex-col rounded-2xl bg-white p-4 shadow"
            >
              <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={product.image}
                  className="max-h-full max-w-full object-contain p-3"
                  alt={product.alt || product.title}
                />
              </div>

              <div className="mt-3 flex flex-1 flex-col">
                <h3 className="font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                {product.scientific && (
                  <p className="mt-1 text-sm italic text-gray-500">
                    {product.scientific}
                  </p>
                )}

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  {product.description}
                </p>

                {product.featured && (
                  <span className="mt-3 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Featured
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (confirm("Delete this product?")) {
                      remove.mutate({ id: product.id });
                    }
                  }}
                  disabled={remove.isPending}
                  className="mt-auto rounded bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600 disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}