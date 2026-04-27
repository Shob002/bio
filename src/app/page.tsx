"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10K+", label: "Acres Covered" },
  { value: "500+", label: "Farmers Impacted" },
  { value: "80–90%", label: "Chemical Reduction" },
];

const features = [
  {
    title: "Chemical Ecology",
    desc: "Uses pest communication systems to control pest behavior naturally.",
  },
  {
    title: "Low Chemical Usage",
    desc: "Supports crop protection with reduced pesticide dependency.",
  },
  {
    title: "Scalable Solutions",
    desc: "Designed for small farms, commercial growers, and large agriculture.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 text-center">
        <Image
          src="/hero.jpg"
          alt="Bioorgo Agriculture"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center md:object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
            Bioorgo
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Advanced Integrated Pest Management
            <span className="block text-green-400">
              through Chemical Ecology
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
            Precision pest control using pheromones and kairomones to disrupt
            pest activity, reduce chemical dependency, and protect every
            harvest sustainably.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-green-100"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/70 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-4xl font-bold text-green-700">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT HIGHLIGHT */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="relative h-105 overflow-hidden rounded-4xl border bg-white shadow-xl">
          <Image
            src="/fruit-fly-trap.jpg"
            alt="Female Fruit Fly Trap"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>

        <div className="text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            Flagship Technology
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Female Fruit Fly Targeting Technology
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Break the pest lifecycle by targeting female fruit flies. This helps
            reduce reproduction pressure and supports long-term crop protection
            with lower chemical dependence.
          </p>

          <div className="mt-7 grid gap-3 text-slate-700">
            <p>✔ Precision pest targeting</p>
            <p>✔ Reduced pesticide usage</p>
            <p>✔ Sustainable farming support</p>
          </div>

          <Link
            href="/services"
            className="mt-8 inline-block rounded-full bg-green-700 px-7 py-3 text-sm font-bold text-white transition hover:bg-green-800"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Why Bioorgo
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Smarter pest control, built for modern agriculture
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200 blur-3xl" />

        <h2 className="text-3xl font-bold md:text-5xl">
          Protect Every Harvest Sustainably
        </h2>

        <p className="mt-4 text-slate-600">
          Smart pest control powered by science.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-green-700 px-8 py-3 text-sm font-bold text-white transition hover:bg-green-800"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}