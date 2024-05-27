import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight"

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-2xl mx-auto px-3 mb-12">
      <h2 className="text-2xl mb-4 font-mono before:content-['#_']">
        my projects
      </h2>
      <ul className="space-y-6">
        <li>
          <a
            href="https://github.com/arvl130/rrg-freight-services-web"
            target="_blank"
            className="block font-medium underline underline-offset-4 text-justify"
          >
            Package Tracking System for RRG Freight Services
          </a>
          <p className="text-neutral-500 my-2">
            An intelligent monitoring system for freight forwarders.
          </p>
          <a
            href="https://www.rrgfreight.services"
            target="_blank"
            className="inline-flex items-center gap-x-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            demo
          </a>
          <a
            href="https://github.com/arvl130/rrg-freight-services-web"
            target="_blank"
            className="ml-2 inline-flex items-center gap-x-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arvl130/filipino-de-cuisine"
            target="_blank"
            className="font-medium underline underline-offset-4 text-justify"
          >
            Ecommerce Website for Filipino de Cuisine
          </a>
          <p className="text-neutral-500 my-2">
            Place orders and schedule reservations online.
          </p>
          <a
            href="https://filipinodecuisine.ageulin.com/"
            target="_blank"
            className="inline-flex items-center gap-x-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            demo
          </a>
          <a
            href="https://github.com/arvl130/filipino-de-cuisine"
            target="_blank"
            className="ml-2 inline-flex items-center gap-x-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arvl130/nuxt-lfi-dental-clinic"
            target="_blank"
            className="font-medium underline underline-offset-4 text-justify"
          >
            Clinic Management System for LFI Dental Clinic
          </a>
          <p className="text-neutral-500 my-2">
            Streamline appointment scheduling and management of patient records.
          </p>
          <a
            href="https://lfidentalclinic.vercel.app"
            target="_blank"
            className="inline-flex items-center gap-x-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            demo
          </a>
          <a
            href="https://github.com/arvl130/nuxt-lfi-dental-clinic"
            target="_blank"
            className="ml-2 inline-flex items-center gap-x-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            code
          </a>
        </li>
      </ul>
      <p className="mt-6">
        You&apos;ll find most of my other projects on{" "}
        <a
          href="https://github.com/arvl130"
          target="_blank"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  )
}
