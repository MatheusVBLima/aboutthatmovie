import React from "react";
import { ThemeSwitcher } from "./Theme-switcher";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <>
      <div className="flex justify-between px-2 py-1">
        <h1>Header</h1>
        <ThemeSwitcher />
      </div>
      <Separator />
    </>
  );
}
