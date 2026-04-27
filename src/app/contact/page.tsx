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
    <main className="py-24 px-6 bg-gray-50 min-h-screen">

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
        <div className="p-8 rounded-2xl border bg-white shadow-sm">

          <form onSubmit={submit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="text"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
            />

            <textarea
              placeholder="Your Message *"
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              type="submit"
              disabled={sendMessage.isPending}
              className="w-full py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 disabled:opacity-50"
            >
              {sendMessage.isPending ? "Sending..." : "Send Message"}
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

    </main>
  );
}