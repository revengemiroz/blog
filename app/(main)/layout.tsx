"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";

export default function MainLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full flex border h-screen items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="h-full dark:bg-[#1f1f1f] flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
