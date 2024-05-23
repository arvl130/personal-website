import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo"
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun"
import { TwitterLogo } from "@phosphor-icons/react/dist/ssr/TwitterLogo"

export function Header() {
  return (
    <header className="max-w-2xl mx-auto px-3 pt-12 pb-6 flex justify-between">
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
            className="h-full w-full hover:bg-neutral-100 duration-200 transition-colors rounded-lg flex justify-center items-center"
          >
            <span className="sr-only">GitHub</span>
            <GithubLogo size={24} />
          </a>
        </li>
        <li className="size-8">
          <a
            href="https://twitter.com/ageulin123"
            target="_blank"
            className="h-full w-full hover:bg-neutral-100 duration-200 transition-colors rounded-lg flex justify-center items-center"
          >
            <span className="sr-only">Twitter</span>
            <TwitterLogo size={24} />
          </a>
        </li>
        <li className="size-8">
          <a
            href="https://www.ageulin.com"
            target="_blank"
            className="h-full w-full hover:bg-neutral-100 duration-200 transition-colors rounded-lg flex justify-center items-center"
          >
            <span className="sr-only">A11y</span>
            <Sun size={24} />
          </a>
        </li>
      </ul>
    </header>
  )
}
