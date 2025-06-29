import type { Metadata } from "next"
import CareersClientPage from "./CareersClientPage"

export const metadata: Metadata = {
  title: "Careers at Startify - Join Canada's Fastest-Growing IT Agency",
  description:
    "Join the team at Canada's fastest-growing IT agency. We're hiring talented developers, CRM specialists, and digital innovation experts. Great benefits, remote work, and growth opportunities.",
}

export default function CareersPage() {
  return <CareersClientPage />
}
