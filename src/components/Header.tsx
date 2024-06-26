import React from "react";
import { ThemeSwitcher } from "./Theme-switcher";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { sidebarLinks } from "@/constants";
import { Button } from "./ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <nav className="fixed top-0 flex w-full items-center justify-between border-b-2 bg-background px-6 py-4 lg:px-10">
        <Link href={"/"} className="flex items-center gap-1" aria-label="Logo">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={80}
            height={80}
            className="max-sm:hidden"
          />
          <p className="text-center text-2xl font-extrabold md:text-[26px] ">
            About That Movie
          </p>
        </Link>
        <div className=" flex items-center justify-between gap-5">
          <div className="hidden gap-2 lg:flex">
            {sidebarLinks.map((link) => (
              <Button asChild key={link.label}>
                <Link
                  href={link.route}
                  className="font-semibold"
                  aria-label="navigation button"
                >
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
          <ThemeSwitcher />
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
