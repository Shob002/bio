"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/featured-product.jpg"
          alt="Bioorgo pest control innovation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-3xl mt-16 md:mt-24">
            <p className="text-lg leading-8 text-white/90 md:text-xl">
              Advanced Integrated Pest Management through chemical ecology,
              pheromones, kairomones, and no-spray crop protection technology.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Biology-driven solutions for sustainable agriculture
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bioorgo develops pheromone- and kairomone-based pest management
            solutions that help farmers reduce chemical dependency, protect
            yield quality, and support ecologically responsible crop protection.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green-700">
              Our Vision
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Kempmann Bioorganics LLP, through its premium brand Bioorgo,
              offers innovative pheromone, kairomone, and trap-based solutions
              for sustainable pest management. Our products are scientifically
              developed and economically designed to deliver high efficiency
              while reducing chemical usage, helping farmers achieve better
              yields and healthier crops.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green-700">
              Our Mission
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              To redefine crop protection through innovation-led,
              environmentally responsible solutions. We aim to provide
              high-performance pheromone and kairomone technologies that enable
              effective pest control, maximize productivity, and support
              sustainable farming practices.
            </p>
          </div>

        </div>
      </section>

      {/* LEADERSHIP (UPDATED) */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Visionary leadership driving innovation
            </h2>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* IMAGE */}
            <div className="relative h-130 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/vijeth.jpg"
                alt="Vijeth V Arya"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Vijeth V. Arya
              </h3>

              <p className="mt-2 text-green-700 font-medium">
                Co-founder & Managing Director, Bioorgo
              </p>

              <div className="mt-6 space-y-5 text-gray-700 leading-7">

                <p>
                  Vijeth V. Arya leads Bioorgo with a focus on biotechnology-driven,
                  sustainable pest management solutions, specializing in
                  pheromone- and kairomone-based Integrated Pest Management (IPM).
                  Since 2015, he has driven the development, commercialization,
                  and global expansion of innovative crop protection technologies.
                </p>

                <p>
                  He has spearheaded breakthrough innovations such as a female
                  fruit fly trap system, supported by patented technologies,
                  helping reduce pesticide dependency while improving crop
                  productivity. His work integrates research, field validation,
                  manufacturing scale-up, and global partnerships.
                </p>

                <p>
                  With strong contributions in research and intellectual property,
                  he is advancing precision, eco-friendly agriculture—positioning
                  Bioorgo as a leader in next-generation pest control.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}