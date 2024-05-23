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
    <main className="text-neutral-800">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
