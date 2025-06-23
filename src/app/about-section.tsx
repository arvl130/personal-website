import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="max-w-2xl mx-auto px-3 mb-12">
      <div className="text-justify">
        <h2 className="text-2xl mb-4 font-mono before:content-['#_']">
          about me
        </h2>
        <div className="flex flex-col sm:flex-row justify-between gap-x-6">
          <div className="mb-4 sm:mb-0">
            <p>
              My name is{" "}
              <a
                href="https://www.ageulin.com"
                className="underline underline-offset-4"
              >
                Angelo Geulin
              </a>
              . I&apos;m a software developer from the Philippines with
              experience building e-commerce platforms and supply-chain
              management software. I create technical solutions to solve
              business problems using Web, Mobile, Cloud, and AI technologies.
            </p>
            <p className="mt-3">
              In my free time, I contribute to open-source communities as a
              hobby programmer and open-source software advocate. I also like to
              share the new things that I&apos;ve learned on{" "}
              <a
                href="https://blog.ageulin.com"
                target="_blank"
                className="underline underline-offset-4"
              >
                my blog
              </a>
              .
            </p>
          </div>
          <Image
            width={300}
            height={300}
            src="/assets/img/profile-picture.webp"
            alt="Me on a jeepney."
            className="rounded-lg size-32 bg-gray-100 dark:bg-neutral-800"
          />
        </div>
      </div>
    </section>
  )
}
