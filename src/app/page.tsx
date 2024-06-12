import type { Metadata } from "next"
import { Header } from "./header"
import { AboutSection } from "./about-section"
import { ProjectsSection } from "./projects-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"

export const metadata: Metadata = {
  title: "Angelo Geulin",
  description: "The personal website of Angelo Geulin.",
}

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="text-neutral-800 dark:text-white flex-grow">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
