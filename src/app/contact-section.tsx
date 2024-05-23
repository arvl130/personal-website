import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight"

export function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-3 py-2 mb-6">
      <h2 className="text-2xl mb-3 font-mono before:content-['#_']">
        let&apos;s talk
      </h2>
      <p className="mb-3">You can contact me through any of these platforms.</p>
      <ul className="grid grid-cols-[auto_1fr] gap-x-12">
        <li>
          <a
            href="https://twitter.com/ageulin123"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Twitter</p>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/ageulin"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ageulin123"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@ageulin.com"
            target="_blank"
            className="inline-flex gap-x-2 hover:text-gray-500 duration-200 transition-colors"
          >
            <ArrowUpRight size={24} />
            <p>Email</p>
          </a>
        </li>
      </ul>
    </section>
  )
}