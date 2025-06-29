import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "Our Projects - Startify Success Stories | CRM & Digital Solutions Portfolio",
  description:
    "Explore Startify's portfolio of successful CRM implementations and digital transformation projects. See how we've helped 100+ Canadian businesses scale smarter with our reliable IT solutions.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
