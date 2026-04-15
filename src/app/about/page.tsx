"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section>

      {/* 🔥 HERO FULL SCREEN */}
      <div className="relative w-full h-[90vh]">
        <Image
          src="/featured-product.jpg"
          alt="Bioorgo"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* TEXT ON IMAGE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            About Bioorgo
          </h1>

          <p className="mt-6 text-white/90 max-w-2xl text-lg">
            Advanced Integrated Pest Management through Chemical Ecology
          </p>
        </div>
      </div>

      {/* CONTENT START */}
      <div className="py-24">

        {/* ABOUT TEXT */}
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-lg">
            Bioorgo (Kempmann Bioorganics LLP) is a biotechnology-driven company focused on 
            developing pheromone- and kairomone-based solutions that reduce chemical dependency 
            and enable sustainable crop protection.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10K+", label: "Farmers Reached" },
            { value: "5+", label: "Countries" },
            { value: "3+", label: "Patents" },
            { value: "8+ Years", label: "Experience" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 border rounded-2xl bg-white/80 backdrop-blur"
            >
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* VISION + MISSION */}
        <div className="mt-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="p-6 border rounded-2xl">
            <h2 className="text-xl font-semibold text-green-700">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              To promote ecological farming systems that enhance biodiversity and sustainability.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h2 className="text-xl font-semibold text-green-700">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To deliver advanced pest management solutions using chemical ecology and IPM.
            </p>
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="mt-24 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center">Leadership</h2>

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-112.5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/vijeth.jpg"
                alt="Vijeth V Arya"
                fill
                className="object-cover object-top"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Vijeth V Arya</h3>
              <p className="text-sm text-gray-500 mt-2">
                Co-founder & Managing Director · Bengaluru, India
              </p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>✔ Pioneer in pheromone-based pest control</li>
                <li>✔ Developed patented fruit fly trap</li>
                <li>✔ Invited speaker at All India Radio (AIR)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}