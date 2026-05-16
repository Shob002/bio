"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10K+", label: "Acres Covered" },
  { value: "500+", label: "Farmers Impacted" },
  { value: "80–90%", label: "Chemical Reduction" },
];

const features = [
  "Chemical Ecology",
  "Pheromone Intelligence",
  "Kairomone-Based Targeting",
  "Low Chemical Dependency",
  "Field-Ready IPM",
  "Sustainable Crop Protection",
];

const systems = [
  {
    title: "Monitor",
    text: "Track pest activity using field-ready trapping intelligence.",
  },
  {
    title: "Target",
    text: "Use pheromone and kairomone cues to influence pest behaviour.",
  },
  {
    title: "Protect",
    text: "Reduce pest pressure while supporting lower chemical usage.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#120d0a] text-[#f5f1e8]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 py-16">
        <Image
          src="/hero.jpg"
          alt="Bioorgo Agriculture"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,#228B2245,transparent_28%),linear-gradient(90deg,#120d0a_0%,#120d0af2_46%,#120d0ab0_100%)]" />
        <div className="bio-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#228B22]/30 bg-[#228B22]/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.32em] text-[#34a534] backdrop-blur">
              Bioorgo Chemical Ecology
            </p>

            <h1 className="max-w-5xl text-[clamp(2.8rem,5vw,5.8rem)] font-black leading-[0.88] tracking-[-0.055em]">
              Precision Pest Control
              <br />
              <span className="bg-gradient-to-r from-[#228B22] via-[#34a534] to-[#b7ef75] bg-clip-text text-transparent">
                for Sustainable
              </span>
              <br />
              Agriculture
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#c4d8c4] md:text-base">
              Advanced integrated pest management through pheromones,
              kairomones and chemical ecology — reducing chemical dependency
              while protecting every harvest.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#228B22] px-8 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_0_60px_#228B2280] transition hover:-translate-y-1 hover:bg-[#34a534]"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* PRODUCT VISUAL */}
          <div className="relative mx-auto flex h-[560px] w-full max-w-[500px] items-center justify-center">
            <div className="absolute h-[520px] w-[520px] rounded-full bg-[#228B22]/20 blur-[120px]" />
            <div className="absolute h-[360px] w-[360px] rounded-full bg-[#b7ef75]/10 blur-[100px]" />

            <div className="bio-core relative flex h-[470px] w-[340px] items-center justify-center overflow-hidden rounded-[3rem] border border-[#228B22]/25 bg-[#1f1712]/85 shadow-[0_40px_140px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              <div className="dna-orbit orbit-a" />
              <div className="dna-orbit orbit-b" />
              <div className="dna-orbit orbit-c" />

              <div className="crop-signal" />
              <div className="crop-signal signal-delay" />

              <Image
                src="/fruit-fly-trap.png"
                alt="Female Fruit Fly Trap"
                width={260}
                height={320}
                className="relative z-10 h-auto w-60 object-contain drop-shadow-[0_35px_90px_rgba(0,0,0,0.9)]"
              />

              <div className="absolute bottom-8 text-center">
                <p className="text-[9px] font-black uppercase tracking-[0.36em] text-[#34a534]">
                  Pheromone • Kairomone • IPM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-[#228B22]/20 bg-[#1f1712]/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-[#228B22]/45"
            >
              <p className="text-4xl font-black tracking-[-0.05em] text-[#34a534] md:text-5xl">
                {item.value}
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#8db78d]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[430px] overflow-hidden rounded-[3rem] border border-[#228B22]/20 bg-[#1f1712] shadow-[0_35px_100px_rgba(0,0,0,0.65)]">
            <Image
              src="/fruit-fly-trap.png"
              alt="Female Fruit Fly Trap"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-12"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,#120d0aaa_100%)]" />
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#34a534]">
              Flagship Technology
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(2.1rem,4vw,4.2rem)] font-black leading-[0.95] tracking-[-0.05em]">
              Female fruit fly targeting technology.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#c4d8c4] md:text-base">
              Break the pest lifecycle by targeting female fruit flies and
              reducing reproduction pressure. Built for sustainable crop
              protection with lower chemical dependency.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Precision pest targeting",
                "Reduced pesticide dependency",
                "Sustainable farming support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#228B22]/20 bg-white/[0.035] px-5 py-4 text-sm font-bold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#34a534]">
            Why Bioorgo
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.1rem,4vw,4rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Smarter pest control, built for modern agriculture.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-[#228B22]/20 bg-[#1f1712] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 hover:border-[#228B22]/45"
              >
                <p className="text-xl font-black tracking-[-0.04em] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[3.2rem] border border-[#228B22]/20 bg-white/[0.035] p-8 backdrop-blur md:p-14">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#34a534]">
            IPM System
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {systems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#228B22]/20 bg-[#120d0a] p-7"
              >
                <p className="text-xs font-black text-[#34a534]">
                  0{index + 1}
                </p>
                <h3 className="mt-9 text-2xl font-black tracking-[-0.05em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#c4d8c4]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#34a534]">
            Sustainable Crop Protection
          </p>

          <h2 className="mt-6 text-[clamp(2.2rem,4.5vw,4.6rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Protect every harvest.
            <br />
            Reduce chemical load.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#c4d8c4] md:text-base">
            Smart pest control powered by chemical ecology, designed for the
            future of agriculture.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#228B22] px-10 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_0_70px_#228B2280] transition hover:-translate-y-1 hover:bg-[#34a534]"
            >
              Contact Bioorgo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}