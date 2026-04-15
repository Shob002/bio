"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

export default function ServicesPage() {
  const { data: products = [], isLoading } =
    api.product.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading products...
      </div>
    );
  }

  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  return (
    <main className="py-20 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">
          Solutions
        </h1>
        <p className="text-gray-500 mt-2">
          Precision pest control products for agriculture
        </p>
      </div>

      {/* EMPTY STATE */}
      {products.length === 0 && (
        <p className="text-center text-gray-500">
          No products available
        </p>
      )}

      {/* CATEGORIES + PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {categories.map((category) => {
          const filtered = products.filter(
            (p) => p.category === category
          );

          return (
            <section key={category}>

              <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
                {category}
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                  >

                    {/* SAFE IMAGE (FIXED CRASH) */}
                    <div className="relative h-48 w-full bg-gray-100 rounded-lg overflow-hidden">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.alt || product.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <h3 className="mt-4 font-bold text-lg">
                      {product.title}
                    </h3>

                    {product.scientific && (
                      <p className="text-sm italic text-gray-500">
                        {product.scientific}
                      </p>
                    )}

                    <p className="text-sm text-gray-600 mt-2">
                      {product.description}
                    </p>

                    {/* FEATURED TAG */}
                    {product.featured && (
                      <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}

                  </div>
                ))}

              </div>
            </section>
          );
        })}

      </div>
    </main>
  );
}