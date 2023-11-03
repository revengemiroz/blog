"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

function Navigation() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResetting, setIsResetting] = useState(isMobile);

  
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar bg-secondary overflow-y-auto relative w-60 flex-col z-[999999] h-full",

          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className="w-6 h-6 text-muted-foreground rounded-sm absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition hover:bg-neutral-300 dark:hover:bg-neutral-600"
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <p>Action items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 border right-0 top-0 bg-primary/10" />
      </aside>
    </>
  );
}

export default Navigation;
