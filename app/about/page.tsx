import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Startify - Canada's Most Trusted IT Solutions Partner | Proven Digital Excellence",
  description:
    "Discover Startify's journey from startup to Canada's most trusted IT agency. 500+ successful projects, 98% client satisfaction, and industry-leading expertise in CRM solutions and digital transformation since 2023.",
  keywords: [
    "trusted IT agency Canada",
    "proven digital solutions",
    "reliable technology partner",
    "certified IT professionals",
    "award-winning digital agency",
    "enterprise-grade security",
    "scalable business solutions",
    "Canadian IT excellence",
    "digital transformation experts",
    "industry-leading CRM solutions",
  ],
}

export default function AboutPage() {
  return <AboutPageClient />
}
