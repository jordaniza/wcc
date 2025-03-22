"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Service {
  title: string
  description: string
  image: string
  emoji?: string
}

export function ServicesGallery() {
  const services: Service[] = [
    {
      title: "Sports Injuries & Rehabilitation",
      description:
        "Targeted treatment for athletes and active individuals recovering from injuries and improving performance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bench-press-assistance-WhKYewNwkIRDySkJwiyjTSD9lewhlX.jpeg",
      emoji: "🔹",
    },
    {
      title: "Functional Movement & Training",
      description: "Assessing movement patterns to identify and fix imbalances.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deadlift-form-check-jtyia6ZzxSkzUwsIejMZ0PO14uTKpT.jpeg",
      emoji: "🔹",
    },
    {
      title: "Strength, Mobility & Recovery",
      description: "Personalized programs to keep people strong and injury-free.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lower-back-4R4NsiTmPR8ChoAOy9qomVSpzP9iro.jpeg",
      emoji: "🔹",
    },
    {
      title: "Concussion Management",
      description: "Evidence-based protocols for assessment, treatment, and return to activity.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ankle-manipulation-djsjgHqoF7iLHHabGYUZdpROJb7Itm.jpeg",
      emoji: "🔹",
    },
    {
      title: "Neck, Back & Joint Pain",
      description: "Effective strategies for pain relief and long-term solutions.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leg-hip-flexor-ukE8jKM75xpvA4fBd5XJlbYQd053Zk.jpeg",
      emoji: "🔹",
    },
    {
      title: "Shoulder, Elbow, Hip & Knee Injuries",
      description: "Specialized care for joint-specific injuries and chronic conditions.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/back-posture-swZdw9rwfKbafbnjsYsefCFiB8Qt9R.jpeg",
      emoji: "🔹",
    },
  ]

  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                {service.title}
              </h3>
              <p className="text-sm text-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

