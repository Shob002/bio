"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center">

      {/* HERO FULL SCREEN */}
      <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

        {/* IMAGE (Responsive: cover on desktop, contain on mobile) */}
        <Image
          src="/hero.jpg"
          alt="Bioorgo Agriculture"
          fill
          priority
          className="object-contain md:object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl px-6">

          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Advanced Integrated Pest Management
            <br />
            <span className="text-green-400">
              through Chemical Ecology
            </span>
          </h1>

          <p className="mt-4 text-gray-200">
            Precision pest control using pheromones and kairomones to disrupt pest activity and reduce chemical dependence.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/20 transition"
            >
              Explore Solutions
            </Link>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            { value: "10K+", label: "Acres Covered" },
            { value: "500+", label: "Farmers Impacted" },
            { value: "90%", label: "Chemical Reduction" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <p className="text-4xl font-bold text-green-600">
                {item.value}
              </p>
              <p className="text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl bg-white">
          <Image
            src="/fruit-fly-trap.jpg"
            alt="Fruit Fly Trap"
            fill
            className="object-contain p-6"
          />
        </div>

        {/* TEXT */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Female Fruit Fly Targeting Technology
          </h2>

          <p className="mt-4 text-gray-600">
            Break the pest lifecycle by targeting female fruit flies. This reduces reproduction and ensures long-term crop protection.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Precision targeting</li>
            <li>✔ Reduced pesticide usage</li>
            <li>✔ Sustainable farming</li>
          </ul>

          <Link
            href="/services"
            className="inline-block mt-6 text-green-600 font-medium hover:underline"
          >
            Learn more →
          </Link>
        </div>

      </div>

      {/* FEATURES */}
      <div className="bg-gray-50 w-full py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Chemical Ecology",
              desc: "Uses pest communication systems to control behavior naturally.",
            },
            {
              title: "Low Chemical Usage",
              desc: "Reduces harmful pesticide dependency.",
            },
            {
              title: "Scalable",
              desc: "Works for small farms and large agriculture.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="relative w-full py-24 text-center overflow-hidden">

        {/* GLOW */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 -translate-x-1/2 w-125 h-125 bg-green-300 blur-3xl opacity-20 rounded-full" />
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold">
          Protect Every Harvest Sustainably
        </h2>

        <p className="mt-4 text-gray-600">
          Smart pest control powered by science.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </div>

    </section>
  );
}