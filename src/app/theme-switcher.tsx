"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun"
import { Moon } from "@phosphor-icons/react/dist/ssr/Moon"
import { Monitor } from "@phosphor-icons/react/dist/ssr/Monitor"
import { Check } from "@phosphor-icons/react/dist/ssr/Check"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-full w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg flex justify-center items-center">
        <span className="sr-only">Toggle theme</span>
        <Sun
          size={24}
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          size={24}
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={
            theme === "light"
              ? "border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-none dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800"
              : ""
          }
        >
          {theme === "light" ? (
            <Check size={20} className="mr-2" />
          ) : (
            <Sun size={20} className="mr-2" />
          )}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={
            theme === "dark"
              ? "border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-none dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800"
              : ""
          }
        >
          {theme === "dark" ? (
            <Check size={20} className="mr-2" />
          ) : (
            <Moon size={20} className="mr-2" />
          )}
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={
            theme === "system"
              ? "border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-none dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800"
              : ""
          }
        >
          {theme === "system" ? (
            <Check size={20} className="mr-2" />
          ) : (
            <Monitor size={20} className="mr-2" />
          )}
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
