"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

export default function ServicesPage() {
  const { data: products = [], isLoading } = api.product.getAll.useQuery();

  if (isLoading) {
    return <div className="py-24 text-center text-gray-500">Loading products...</div>;
  }

  const groupedProducts = products.reduce<Record<string, typeof products>>(
    (groups, product) => {
      const category = product.category?.trim() || "Other";
      groups[category] ??= [];
      groups[category].push(product);
      return groups;
    },
    {},
  );

  const categories = Object.keys(groupedProducts).sort();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            Bioorgo Solutions
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Solutions
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Precision pest control products arranged by category.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <p className="text-gray-500">No products available</p>
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map((category) => (
              <section key={category}>
                <h2 className="mb-8 text-center text-2xl font-bold text-green-700">
                  {category}
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {groupedProducts[category]?.map((product) => (
                    <article
                      key={product.id}
                      className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
                        {product.featured && (
                          <span className="absolute left-4 top-4 z-10 rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">
                            Featured
                          </span>
                        )}

                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.alt || product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-contain p-4"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <h3 className="text-lg font-bold text-slate-900">
                          {product.title}
                        </h3>

                        {product.scientific && (
                          <p className="mt-1 text-sm italic text-gray-500">
                            {product.scientific}
                          </p>
                        )}

                        <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-600">
                          {product.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}