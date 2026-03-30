"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import navigation from "@/lib/navigation";
import { MenuIcon } from "lucide-react";
import { Large } from "./ui/typography";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
      <Link
        className="flex items-center justify-center space-x-2 text-[hsl(var(--foreground))]"
        href="/"
      >
        <Image
          src="/img/logo.png"
          alt="Søbekkseter logo"
          width={28}
          height={28}
          className="rounded-md"
        />
        <Large>Været på Søbekkseter</Large>
      </Link>

      <div className="flex items-center space-x-2">
        <ThemeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Nyttige lenker</SheetTitle>
              <SheetDescription>
                Her finner du lenker til nyttige ressurser.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              {navigation.map((item, i) => {
                return (
                  <Link href={item.href} key={i} target="_blank">
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
