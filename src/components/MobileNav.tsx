"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Menu, Clapperboard } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={36} className="cursor-pointer lg:hidden" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Link
            href={"/"}
            className="flex items-center gap-1"
            aria-label="logo"
          >
            <Clapperboard size={32} className="max-sm:size-10" />
            <p className="text-[26px] font-extrabold text-secondary-foreground">
              About That Movie
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-secondary-foreground">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        aria-label="navigation button"
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex w-full max-w-60 items-center gap-4 rounded-lg p-4",
                          { "bg-primary": isActive },
                        )}
                      >
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
