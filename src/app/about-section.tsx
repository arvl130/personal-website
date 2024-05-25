import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-2xl mx-auto px-3 mb-12 sm:flex justify-between items-end gap-x-6"
    >
      <div className="text-justify mb-4 sm:mb-0">
        <h2 className="text-2xl mb-4 font-mono before:content-['#_']">
          about me
        </h2>
        <p>
          My name is{" "}
          <a
            href="https://www.ageulin.com"
            className="underline underline-offset-4"
          >
            Angelo Geulin
          </a>
          . I&apos;m a software developer from the Philippines focusing on
          cross-platform technologies and open-source software. I like making
          things and sharing the things that I&apos;ve learned on{" "}
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
        className="rounded-lg size-32 bg-gray-100"
      />
    </section>
  )
}
