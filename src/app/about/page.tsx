import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-24">

      {/* HEADER */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          About Bioorgo
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Bioorgo (Kempmann Bioorganics LLP) is a biotechnology-driven company
          focused on sustainable pest management solutions. We specialize in
          pheromone- and kairomone-based Integrated Pest Management (IPM),
          helping reduce chemical dependency while improving crop productivity.
        </p>
      </div>

      {/* STATS */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "10K+", label: "Farmers Reached" },
          { value: "5+", label: "Countries" },
          { value: "3+", label: "Patents" },
          { value: "8+ Years", label: "Experience" },
        ].map((item) => (
          <div
            key={item.label}
            className="p-6 border rounded-2xl text-center bg-white/80 backdrop-blur"
          >
            <p className="text-2xl font-semibold">{item.value}</p>
            <p className="text-sm text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* MISSION + VISION */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="p-6 border rounded-2xl bg-white/80 backdrop-blur">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-gray-600">
            To revolutionize agriculture through biology-based pest control
            solutions that protect crops, farmers, and the environment.
          </p>
        </div>

        <div className="p-6 border rounded-2xl bg-white/80 backdrop-blur">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-3 text-gray-600">
            To become a global leader in precision pest management and
            sustainable agriculture.
          </p>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">
          Leadership
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
            <Image
              src="/vijeth.jpg"
              alt="Vijeth V Arya"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* DETAILS */}
          <div>
            <h3 className="text-xl font-semibold">
              Vijeth V Arya
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Co-founder & Managing Director · Oct 2015 – Present · Bengaluru, India
            </p>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>
                Leads development and commercialization of biotechnology-driven IPM solutions.
              </li>

              <li>
                Spearheaded patented female fruit fly trap technology deployed across India and global markets.
              </li>

              <li>
                Drives field trials, farmer adoption, and collaborations with FPOs and agri-networks.
              </li>

              <li>
                Oversees manufacturing scale-up and quality standardization.
              </li>

              <li>
                Leads global partnerships, licensing, and strategic collaborations.
              </li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}