import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Startify - Get Your Free IT Consultation | Canada's #1 CRM Partner",
  description:
    "Contact Startify for your free IT consultation. Phone: +1 (437) 777-1763, Email: startifymedia1@gmail.com. Located in Brampton, ON. Available 24/7 for urgent support.",
  keywords: [
    "contact Startify",
    "IT consultation Brampton",
    "CRM support Canada",
    "digital transformation consultation",
    "free IT assessment",
    "Brampton IT services",
    "24/7 IT support",
    "Canadian IT agency contact",
  ],
}

export default function ContactPage() {
  return <ContactPageClient />
}
