"use client";

import Image from "next/image";
import Link from "next/link";

const values = [
  "Chemical Ecology",
  "Pheromone IPM",
  "Kairomone Targeting",
  "Low Chemical Dependency",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#06100b] text-[#f5f1e8]">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center px-6 py-20">
        <Image
          src="/featured-product.jpg"
          alt="Bioorgo pest control innovation"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06100b_0%,#06100be8_48%,#06100b99_100%)]" />
        <div className="bio-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-7 inline-flex rounded-full border border-[#b7ef75]/25 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#b7ef75] backdrop-blur">
            About Bioorgo
          </p>

          <h1 className="max-w-5xl text-[clamp(3.4rem,7vw,7.6rem)] font-black leading-[0.9] tracking-[-0.065em]">
            Biology-Driven
            <br />
            <span className="text-[#b7ef75]">Crop Protection</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#c9d6c6] md:text-lg">
            Advanced Integrated Pest Management through chemical ecology,
            pheromones, kairomones and no-spray crop protection technologies.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#b7ef75]">
              Who We Are
            </p>

            <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
              Precision pest control powered by science.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#c9d6c6]">
              Bioorgo develops pheromone and kairomone based pest management
              solutions that help farmers reduce chemical dependency, protect
              yield quality and support ecologically responsible agriculture.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-white/10 bg-[#0b1a11] p-6 text-xl font-black tracking-[-0.035em] text-white transition hover:-translate-y-1 hover:border-[#b7ef75]/40"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b7ef75]">
              Vision
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
              Sustainable agriculture through biological intelligence.
            </h3>

            <p className="mt-7 leading-8 text-[#c9d6c6]">
              To deliver scientifically developed pest management technologies
              that improve productivity while reducing chemical usage and
              supporting healthier crop ecosystems.
            </p>
          </div>

          <div className="rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b7ef75]">
              Mission
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
              Redefining pest control through chemical ecology.
            </h3>

            <p className="mt-7 leading-8 text-[#c9d6c6]">
              To provide high-performance pheromone and kairomone technologies
              that enable effective pest control, maximize crop productivity and
              support sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#b7ef75]">
            Leadership
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Visionary leadership driving next-generation agriculture.
          </h2>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative h-[620px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#0b1a11] shadow-[0_0_100px_#000]">
              <Image
                src="/vijeth.jpg"
                alt="Vijeth V Arya"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,#06100bdd_100%)]" />
            </div>

            <div>
              <h3 className="text-5xl font-black tracking-[-0.05em] text-white">
                Vijeth V Arya
              </h3>

              <p className="mt-3 text-sm font-black uppercase tracking-[0.25em] text-[#b7ef75]">
                Co-Founder & Managing Director
              </p>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#c9d6c6] md:text-lg">
                <p>
                  Vijeth V Arya leads Bioorgo with a focus on
                  biotechnology-driven sustainable pest management, specializing
                  in pheromone and kairomone based Integrated Pest Management.
                </p>

                <p>
                  Since 2015, he has driven development, commercialization and
                  field validation of innovative crop protection technologies,
                  including female fruit fly targeting systems.
                </p>

                <p>
                  His work integrates research, manufacturing scale-up, quality
                  standardization and global partnerships to position Bioorgo as
                  a leader in precision pest control.
                </p>
              </div>

              <div className="mt-9">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#b7ef75] px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#06100b] shadow-[0_0_60px_#8acb4566] transition hover:-translate-y-1"
                >
                  Connect With Bioorgo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}