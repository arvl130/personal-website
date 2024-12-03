import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight"

export function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-3 mb-8">
      <h2 className="text-2xl mb-4 font-mono before:content-['#_']">
        let&apos;s talk
      </h2>
      <p className="mb-2">You can contact me through any of these platforms.</p>
      <ul className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] gap-x-8">
        <li>
          <a
            href="https://twitter.com/ageulin123"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 dark:hover:text-neutral-400 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Twitter</p>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/ageulin"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 dark:hover:text-neutral-400 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@ageulin.com"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 dark:hover:text-neutral-400 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Email</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ageulin123"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 dark:hover:text-neutral-400 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/arvl130"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 dark:hover:text-neutral-400 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Instagram</p>
          </a>
        </li>
      </ul>
    </section>
  )
}
