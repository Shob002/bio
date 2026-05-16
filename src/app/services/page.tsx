"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

export default function ServicesPage() {
  const { data: products = [], isLoading } =
    api.product.getAll.useQuery();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#06100b] text-[#c9d6c6]">
        <div className="space-y-4 text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-2 border-[#b7ef75] border-t-transparent" />
          <p className="text-lg">
            Loading products...
          </p>
        </div>
      </main>
    );
  }

  const groupedProducts = products.reduce<
    Record<string, typeof products>
  >((groups, product) => {
    const category =
      product.category?.trim() || "Other";

    groups[category] ??= [];

    groups[category].push(product);

    return groups;
  }, {});

  const categories =
    Object.keys(groupedProducts).sort();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06100b] px-6 py-20 text-[#f5f1e8]">

      <div className="bio-grid absolute inset-0 opacity-30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,#8acb4530,transparent_30%),linear-gradient(180deg,#06100b,#08150f)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-20 text-center">

          <p className="inline-flex rounded-full border border-[#b7ef75]/25 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#b7ef75] backdrop-blur">
            Bioorgo Solutions
          </p>

          <h1 className="mt-8 text-[clamp(3rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]">
            Precision Pest
            <br />
            <span className="text-[#b7ef75]">
              Solutions
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#c9d6c6] md:text-lg">
            Integrated pest management products
            arranged intelligently by category.
          </p>

        </div>

        {products.length === 0 ? (
          <div className="rounded-[3rem] border border-white/10 bg-[#0d1a12]/90 p-16 text-center shadow-[0_0_100px_#000]">

            <h2 className="text-3xl font-black">
              No Products Found
            </h2>

            <p className="mt-4 text-[#c9d6c6]">
              Products will appear here once
              added from admin dashboard.
            </p>

          </div>
        ) : (
          <div className="space-y-24">

            {categories.map((category) => (
              <section key={category}>

                <div className="mb-12">

                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b7ef75]">
                    Category
                  </p>

                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">
                    {category}
                  </h2>

                </div>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                  {groupedProducts[
                    category
                  ]?.map((product) => (
                    <article
                      key={product.id}
                      className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d1a12]/90 shadow-[0_0_80px_#000] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#b7ef75]/40"
                    >
                      {/* IMAGE */}

                      <div className="relative h-72 overflow-hidden">

                        {product.featured && (
                          <span className="absolute left-5 top-5 z-20 rounded-full bg-[#b7ef75] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#06100b]">
                            Featured
                          </span>
                        )}

                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={
                              product.alt ||
                              product.title
                            }
                            fill
                            sizes="(max-width:768px)100vw,33vw"
                            className="object-contain p-8 transition duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-[#7b8878]">
                            No Image
                          </div>
                        )}

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,#06100b99_100%)]" />
                      </div>

                      {/* CONTENT */}

                      <div className="p-7">

                        <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                          {product.title}
                        </h3>

                        {product.scientific && (
                          <p className="mt-2 text-sm italic text-[#93a18e]">
                            {product.scientific}
                          </p>
                        )}

                        <p className="mt-5 line-clamp-4 leading-7 text-[#c9d6c6]">
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