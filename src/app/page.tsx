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
    text: "Track pest activity with field-ready trapping intelligence.",
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
    <main className="overflow-hidden bg-[#06100b] text-[#f5f1e8]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 py-14">
        <Image
          src="/hero.jpg"
          alt="Bioorgo Agriculture"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#8acb4540,transparent_30%),linear-gradient(90deg,#06100b_0%,#06100bee_42%,#06100b99_100%)]" />
        <div className="bio-grid absolute inset-0 opacity-35" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-7 inline-flex rounded-full border border-[#8acb45]/30 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#b7ef75] backdrop-blur">
              Bioorgo Chemical Ecology
            </p>

            <h1 className="max-w-5xl text-[clamp(3.4rem,7vw,7.6rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Precision Pest Control
              <br />
              <span className="text-[#b7ef75]">for Sustainable</span>
              <br />
              Agriculture
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#c9d6c6] md:text-lg">
              Advanced integrated pest management through pheromones,
              kairomones and chemical ecology — reducing chemical dependency
              while protecting every harvest.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#b7ef75] px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#06100b] shadow-[0_0_60px_#8acb4566] transition hover:-translate-y-1"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* AGRO SCIENCE VISUAL */}
          <div className="relative mx-auto flex h-[620px] w-full max-w-[520px] items-center justify-center">
            <div className="absolute h-[540px] w-[540px] rounded-full bg-[#8acb45]/10 blur-[120px]" />

            <div className="bio-core relative flex h-[500px] w-[360px] items-center justify-center overflow-hidden rounded-[3rem] border border-[#8acb45]/25 bg-[#0b1a11]/80 shadow-[0_0_120px_#000] backdrop-blur">
              <div className="dna-orbit orbit-a" />
              <div className="dna-orbit orbit-b" />
              <div className="dna-orbit orbit-c" />

              <div className="crop-signal" />
              <div className="crop-signal signal-delay" />

              <Image
                src="/fruit-fly-trap.png"
                alt="Female Fruit Fly Trap"
                width={280}
                height={320}
                className="relative z-10 h-auto w-64 object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
              />

              <div className="absolute bottom-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#b7ef75]">
                  Pheromone • Kairomone • IPM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur"
            >
              <p className="text-5xl font-black tracking-[-0.06em] text-[#b7ef75] md:text-6xl">
                {item.value}
              </p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.28em] text-[#93a18e]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[460px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#0b1a11] shadow-[0_0_100px_#000]">
            <Image
              src="/fruit-fly-trap.png"
              alt="Female Fruit Fly Trap"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-12"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,#06100b99_100%)]" />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#b7ef75]">
              Flagship Technology
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(2.6rem,5vw,5.4rem)] font-black leading-[0.95] tracking-[-0.055em]">
              Female fruit fly targeting technology.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#c9d6c6] md:text-lg">
              Break the pest lifecycle by targeting female fruit flies and
              reducing reproduction pressure. Built for sustainable crop
              protection with lower chemical dependency.
            </p>

            <div className="mt-9 grid gap-3">
              {[
                "Precision pest targeting",
                "Reduced pesticide dependency",
                "Sustainable farming support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-bold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#b7ef75]">
            Why Bioorgo
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Smarter pest control, built for modern agriculture.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-[#0b1a11] p-7 transition hover:-translate-y-2 hover:border-[#b7ef75]/40"
              >
                <p className="text-2xl font-black tracking-[-0.04em] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[3.5rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur md:p-14">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#b7ef75]">
            IPM System
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {systems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-[#06100b] p-7"
              >
                <p className="text-xs font-black text-[#b7ef75]">
                  0{index + 1}
                </p>
                <h3 className="mt-10 text-3xl font-black tracking-[-0.05em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#c9d6c6]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#b7ef75]">
            Sustainable Crop Protection
          </p>

          <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.95] tracking-[-0.055em]">
            Protect every harvest.
            <br />
            Reduce chemical load.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#c9d6c6] md:text-lg">
            Smart pest control powered by chemical ecology, designed for the
            future of agriculture.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#b7ef75] px-10 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#06100b] shadow-[0_0_70px_#8acb4566] transition hover:-translate-y-1"
            >
              Contact Bioorgo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}