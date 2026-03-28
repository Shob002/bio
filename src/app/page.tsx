"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center">

      {/* HERO WITH IMAGE */}
      <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

        {/* IMAGE */}
        <Image
          src="/hero.jpg"
          alt="Bioorgo Agriculture"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Precision Pest Control.
            <br />
            <span className="text-green-400">Powered by Biology.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Advanced pest management solutions that reduce chemical dependency and protect every harvest at scale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 active:scale-95 transition"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white/20 active:scale-95 transition"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

      </div>

      {/* AUTHORITY STATS */}
      <div className="w-full border-y py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "10K+", label: "Acres Covered" },
            { value: "500+", label: "Farmers Impacted" },
            { value: "90%", label: "Chemical Reduction" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-green-600">
                {item.value}
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center text-left">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Female Fruit Fly Targeting Technology
          </h2>

          <p className="mt-4 text-gray-600">
            Our system targets female fruit flies directly, breaking the reproduction cycle and ensuring long-term pest suppression.
          </p>

          <ul className="mt-6 space-y-2 text-gray-600 text-sm">
            <li>✔ Precision targeting</li>
            <li>✔ Reduced pesticide usage</li>
            <li>✔ Scalable across crops</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
          <Image
            src="/product.png"
            alt="Fruit Fly Trap"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10 text-left">
        {[
          {
            title: "No-Spray Technology",
            desc: "Reduce chemical dependency with biology-driven solutions.",
          },
          {
            title: "Scientific Validation",
            desc: "Field-tested and proven in real agricultural environments.",
          },
          {
            title: "Scalable Deployment",
            desc: "Designed for small farms and large-scale operations.",
          },
        ].map((item) => (
          <div key={item.title}>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div className="w-full bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl font-semibold text-center">
            Trusted by Farmers & Partners
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                quote: "Significant reduction in fruit fly damage within one season.",
                name: "Farmer – Karnataka",
              },
              {
                quote: "Reliable and scalable solution for large-scale farming.",
                name: "Agri Distributor",
              },
              {
                quote: "Strong scientific backing and consistent field performance.",
                name: "Agri Consultant",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white border rounded-2xl hover:shadow-md transition"
              >
                <p className="text-gray-600 text-sm">
                  “{item.quote}”
                </p>

                <p className="mt-4 text-sm font-semibold">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Protect Every Harvest
        </h2>

        <p className="mt-4 text-gray-600">
          Partner with Bioorgo to build sustainable and profitable farming systems.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 active:scale-95 transition"
        >
          Contact Us
        </Link>
      </div>

    </section>
  );
}