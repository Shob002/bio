"use client";

import { api } from "~/trpc/react";
import AdminHeader from "./_components/AdminHeader";
import ContactMessages from "./_components/ContactMessages";
import ProductForm from "./_components/ProductForm";
import ProductGrid from "./_components/ProductGrid";

export default function AdminClient() {
  const utils = api.useUtils();

  const productsQuery = api.product.getAll.useQuery();
  const messagesQuery = api.contact.getAll.useQuery();

  if (productsQuery.isLoading || messagesQuery.isLoading) {
    return <div className="p-10 text-center">Loading admin...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <AdminHeader
          productsCount={productsQuery.data?.length ?? 0}
          messagesCount={messagesQuery.data?.length ?? 0}
        />

        <ContactMessages
          messages={messagesQuery.data ?? []}
          utils={utils}
        />

        <ProductForm utils={utils} />

        <ProductGrid
          products={productsQuery.data ?? []}
          utils={utils}
        />
      </div>
    </main>
  );
}