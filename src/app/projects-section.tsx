import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight"

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-2xl mx-auto px-3 py-2 mb-6">
      <h2 className="text-2xl mb-3 font-mono before:content-['#_']">
        my projects
      </h2>
      <ul className="space-y-3">
        <li>
          <a
            href="https://github.com/arvl130/rrg-freight-services-web"
            target="_blank"
            className="block font-medium underline underline-offset-4"
          >
            Package Tracking System for RRG Freight Services
          </a>
          <p className="text-neutral-500 mt-1">
            An intelligent monitoring system for freight forwarders.
          </p>
          <a
            href="https://www.rrgfreight.services"
            target="_blank"
            className="inline-flex items-center gap-x-1 hover:bg-neutral-100 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            demo
          </a>
          <a
            href="https://github.com/arvl130/rrg-freight-services-web"
            target="_blank"
            className="ml-1 inline-flex items-center gap-x-1 hover:bg-neutral-100 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arvl130/filipino-de-cuisine"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Restaurant Management System for Filipino de Cuisine
          </a>
          <p className="text-neutral-500 mt-1">
            Track orders and manage reservations online.
          </p>
          <a
            href="https://filipinodecuisine.ageulin.com/"
            target="_blank"
            className="inline-flex items-center gap-x-1 hover:bg-neutral-100 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            demo
          </a>
          <a
            href="https://github.com/arvl130/filipino-de-cuisine"
            target="_blank"
            className="ml-1 inline-flex items-center gap-x-1 hover:bg-neutral-100 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arvl130/nuxt-lfi-dental-clinic"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Clinic Management System for LFI Dental Clinic
          </a>
          <p className="text-neutral-500 mt-1">
            Streamlined scheduling of appointments and managing of patient
            records.
          </p>
          <a
            href="https://lfidentalclinic.vercel.app"
            target="_blank"
            className="inline-flex items-center gap-x-1 hover:bg-neutral-100 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            demo
          </a>
          <a
            href="https://github.com/arvl130/nuxt-lfi-dental-clinic"
            target="_blank"
            className="ml-1 inline-flex items-center gap-x-1 hover:bg-neutral-100 px-2 py-1 rounded-full duration-200 transition-colors"
          >
            <ArrowUpRight size={18} />
            code
          </a>
        </li>
      </ul>
      <p className="mt-3">
        You&apos;ll find most of my projects on{" "}
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
