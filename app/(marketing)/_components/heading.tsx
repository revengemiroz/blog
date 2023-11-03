"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import { ArrowRight } from "lucide-react";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas,Documents & Plans, Unified. Wwlcome to{" "}
        <span className="underline">Jotion.</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where better,aster work happens.
      </h3>

      <div className="flex items-center justify-center">
        {isLoading && <Spinner size={"lg"} />}

        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href={"/documents"}>
              Enter Jotion
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button className="flex gap-2">
              <span>Get Jotion free</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Heading;
