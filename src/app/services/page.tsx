"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Red Palm Weevil Lure",
    scientific: "Rhynchophorus ferrugineus",
    image: "/products/red-palm-weevil.jpg",
    alt: "Bioorgo Red Palm Weevil pheromone lure pack",
    description:
      "High-performance pheromone lure developed for early detection, monitoring, and mass trapping of red palm weevils in arecanut, coconut, date, and oil palm plantations. Helps farmers identify infestation pressure early and strengthen integrated pest management strategies.",
  },
  {
    title: "Rhinoceros Beetle Lure",
    scientific: "Oryctes rhinoceros",
    image: "/products/rhinoceros-beetle.jpg",
    alt: "Bioorgo Rhinoceros Beetle pheromone lure pack",
    description:
      "Precision lure for monitoring and controlling rhinoceros beetles in coconut, arecanut, and palm crops. Designed to support trap-based field surveillance, reduce crop damage, and improve timely pest management decisions.",
  },
  {
    title: "Fall Army Worm Lure",
    scientific: "Spodoptera frugiperda",
    image: "/products/fall-army-worm.jpg",
    alt: "Bioorgo Fall Army Worm pheromone lure pack",
    description:
      "Specialized pheromone lure for tracking fall armyworm activity in maize, corn, millet, and related field crops. Ideal for early warning systems, regular monitoring, and better timing of control measures before severe infestation spreads.",
  },
  {
    title: "Oriental Fruit Fly Lure",
    scientific: "Bactrocera dorsalis",
    image: "/products/oriental-fruit-fly.jpg",
    alt: "Bioorgo Oriental Fruit Fly pheromone lure pack",
    description:
      "Targeted lure for monitoring oriental fruit fly populations in mango, guava, chikoo, papaya, and other fruit crops. Supports orchard protection through timely detection and efficient trap-based pest surveillance.",
  },
  {
    title: "Tomato Leaf Miner Lure",
    scientific: "Tuta absoluta",
    image: "/products/tomato-leaf-miner.jpg",
    alt: "Bioorgo Tomato Leaf Miner pheromone lure pack",
    description:
      "Advanced monitoring lure for tomato leaf miner management in tomato-growing systems. Useful for detecting moth activity early, improving trap-based monitoring, and reducing losses through faster intervention planning.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-green-100 opacity-20 blur-3xl" />
      </div>

      {/* HEADER */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Our Products
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Advanced pheromone lure solutions for precise pest monitoring,
          early detection, and smarter crop protection.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="mx-auto mt-20 grid max-w-7xl gap-8 px-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="group overflow-hidden rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative aspect-4/3 bg-gray-50">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-contain p-6 transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-green-600">
                Pheromone Lure
              </p>

              <h2 className="mt-2 text-xl font-semibold text-gray-900 transition group-hover:text-green-600">
                {product.title}
              </h2>

              <p className="mt-2 text-sm italic text-gray-500">
                {product.scientific}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {product.description}
              </p>

              <p className="mt-5 text-sm font-medium text-green-600 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 px-6 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Ready to protect your crops?
        </h2>

        <p className="mt-4 text-gray-600">
          Partner with Bioorgo for science-backed pest monitoring and field-ready pest control solutions.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800 active:scale-95"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
