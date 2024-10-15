"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Tooltip } from "./tooltip";

export function ColorModeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <>
      <Tooltip text="Switch to dark mode">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("dark")}
          className="dark:hidden"
        >
          <Moon />
        </Button>
      </Tooltip>

      <Tooltip text="Switch to light mode">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("light")}
          className="hidden dark:flex"
        >
          <Sun />
        </Button>
      </Tooltip>
    </>
  );
}
