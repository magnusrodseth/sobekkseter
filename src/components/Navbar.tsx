"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import Link from "next/link";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
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
import { MenuIcon, SunIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] border-slate-200 p-4">
      <Link className="flex items-center justify-center space-x-2" href="/">
        <SunIcon className="h-5 w-5" />
        <span>Været på Søbekkseter</span>
      </Link>

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
              // TODO: Style links
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
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, target, ...props }, ref) => {
  if (!href) return null;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          href={href}
          target={target || "_blank"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
