"use client";

import Image from "next/image";
import React from "react";

import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { toast } from "sonner";

function Documents() {
  const { user } = useUser();
  console.log({ user });

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    console.log({ promise });

    toast.promise(promise, {
      loading: "Create a new note..",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="border-red-200 border-2 h-full flex flex-col space-y-4 items-center justify-center">
      <Image
        src={"/empty.png"}
        width={300}
        height={300}
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src={"/empty-dark.png"}
        width={300}
        height={300}
        alt="empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default Documents;
