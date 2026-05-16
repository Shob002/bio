"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sendMessage = api.contact.sendMessage.useMutation({
    onSuccess: () => {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    },

    onError: () => {
      alert("Failed to send message");
    },
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill required fields");
      return;
    }

    sendMessage.mutate(form);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06100b] px-6 py-24 text-[#f5f1e8]">
      <div className="bio-grid absolute inset-0 opacity-30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,#8acb4530,transparent_30%),linear-gradient(180deg,#06100b,#08150f)]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center">

          <p className="inline-flex rounded-full border border-[#b7ef75]/25 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#b7ef75] backdrop-blur">
            Contact Bioorgo
          </p>

          <h1 className="mt-7 text-[clamp(3rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]">
            Let's Build
            <br />
            <span className="text-[#b7ef75]">
              Sustainable Agriculture
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#c9d6c6] md:text-lg">
            Enquiries, partnerships, distribution opportunities
            and agricultural innovation collaborations.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr]">

          {/* FORM */}

          <div className="rounded-[3rem] border border-white/10 bg-[#0d1a12]/90 p-8 shadow-[0_0_120px_#000] backdrop-blur md:p-10">

            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b7ef75]">
              Send Message
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">
              Tell us how we can help.
            </h2>

            <form
              onSubmit={submit}
              className="mt-10 space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#06100b] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#b7ef75]/50"
              />

              <input
                type="email"
                placeholder="Your Email *"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#06100b] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#b7ef75]/50"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#06100b] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#b7ef75]/50"
              />

              <textarea
                rows={6}
                placeholder="Your Message *"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#06100b] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#b7ef75]/50"
              />

              <button
                type="submit"
                disabled={sendMessage.isPending}
                className="w-full rounded-full bg-[#b7ef75] py-4 text-sm font-black uppercase tracking-[0.25em] text-[#06100b] shadow-[0_0_60px_#8acb4566] transition hover:-translate-y-1 disabled:opacity-50"
              >
                {sendMessage.isPending
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}

          <div className="space-y-6">

            {[
              {
                title: "Location",
                value: "Karnataka, India",
              },
              {
                title: "Email",
                value: "vijeth.arya@bioorgo.com",
              },
              {
                title: "Phone",
                value: "+91 9980908084",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b7ef75]">
                  {item.title}
                </p>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  {item.value}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}