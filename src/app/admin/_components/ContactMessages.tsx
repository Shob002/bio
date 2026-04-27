"use client";

import { api } from "~/trpc/react";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
};

export default function ContactMessages({
  messages,
}: {
  messages: ContactMessage[];
}) {
  const utils = api.useUtils();

  const deleteMessage = api.contact.delete.useMutation({
    onSuccess: () => {
      void utils.contact.getAll.invalidate();
    },
  });

  return (
    <section className="mb-8 rounded-2xl bg-white p-5 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          Contact Messages
        </h2>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          {messages.length} Messages
        </span>
      </div>

      {messages.length === 0 ? (
        <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-500">
          No contact messages yet.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {messages.map((msg) => (
            <div key={msg.id} className="rounded-xl border p-4">
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {msg.name}
                  </h3>
                  <p className="text-sm text-gray-500">{msg.email}</p>
                  {msg.phone && (
                    <p className="text-sm text-gray-500">{msg.phone}</p>
                  )}
                </div>

                <button
                  type="button"
                  disabled={deleteMessage.isPending}
                  onClick={() => {
                    if (confirm("Delete this message?")) {
                      deleteMessage.mutate({ id: msg.id });
                    }
                  }}
                  className="h-fit rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 disabled:opacity-50"
                >
                  Delete
                </button>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-700">
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}