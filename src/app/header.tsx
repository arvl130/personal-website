import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo"
import { ThemeSwitcher } from "./theme-switcher"
import { TwitterLogo } from "@phosphor-icons/react/dist/ssr/TwitterLogo"

export function Header() {
  return (
    <header className="max-w-2xl mx-auto w-full px-3 pt-12 pb-8 flex justify-between">
      <div className="flex items-center">
        <a href="https://www.ageulin.com">
          <h1 className="font-semibold">Angelo Geulin</h1>
        </a>
      </div>
      <ul className="flex justify-between gap-x-1">
        <li className="size-8">
          <a
            href="https://github.com/arvl130"
            target="_blank"
            className="h-full w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 transition-colors rounded-lg flex justify-center items-center"
          >
            <span className="sr-only">GitHub</span>
            <GithubLogo size={24} />
          </a>
        </li>
        <li className="size-8">
          <a
            href="https://twitter.com/ageulin123"
            target="_blank"
            className="h-full w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 transition-colors rounded-lg flex justify-center items-center"
          >
            <span className="sr-only">Twitter</span>
            <TwitterLogo size={24} />
          </a>
        </li>
        <li className="size-8">
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  )
}
