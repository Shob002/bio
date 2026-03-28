export default function ContactPage() {
  return (
    <div className="py-24">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Let’s Talk
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Enquiries, partnerships, or distribution — we’re ready.
        </p>
      </div>

      {/* FORM */}
      <div className="mt-14 max-w-xl mx-auto">
        <div className="p-8 rounded-2xl border bg-white/80 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="mt-14 text-center text-gray-500 space-y-2 text-sm">
        <p>Tumakuru, Karnataka, India</p>
        <p>vijeth.arya@bioorgo.com</p>
        <p>+91 9980908084</p>
      </div>

    </div>
  );
}