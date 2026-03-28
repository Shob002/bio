"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-green-100 blur-3xl opacity-20 rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Our Solutions
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Precision pest management solutions designed for modern agriculture.
        </p>
      </div>

      {/* SERVICES GRID WITH IMAGES */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">

        {[
          {
            title: "Fruit Fly Trap System",
            desc: "Female-targeted trapping for precision pest control.",
            img: "/trap.png",
          },
          {
            title: "Protein Bait Technology",
            desc: "Scientifically formulated bait for effective suppression.",
            img: "/bait.png",
          },
          {
            title: "Pheromone Lures",
            desc: "Species-specific monitoring and control systems.",
            img: "/lure.png",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group border rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition"
          >

            {/* IMAGE */}
            <div className="relative aspect-4/3">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 text-left">
              <h2 className="text-lg font-semibold group-hover:text-green-600 transition">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>

              <p className="mt-4 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-24 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to transform your pest control strategy?
        </h2>

        <p className="mt-4 text-gray-600">
          Partner with Bioorgo for scalable, science-backed solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 active:scale-95 transition"
        >
          Get in Touch
        </Link>
      </div>

    </section>
  );
}