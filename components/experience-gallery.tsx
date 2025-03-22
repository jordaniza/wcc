"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceCategory {
  title: string
  items: string[]
  image: string
  icon: string
  emoji?: string
}

const categories: ExperienceCategory[] = [
  {
    title: "Professional Sports",
    items: [
      "BC Lions Football",
      "Canada Men's Field Hockey",
      "Canada Women's Volleyball",
      "BC Wheelchair Basketball",
      "BC Wrestling",
      "UBC Varsity Rowing",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professional-sports.jpg-dsqvYAZubmP7tCKPQG4sE6P7qKyRTD.jpeg",
    icon: "clipboard",
    emoji: "🏈",
  },
  {
    title: "Martial Arts & Motor Sports",
    items: [
      "World-class UFC athletes",
      "Professional MMA fighters",
      "Elite boxing athletes",
      "Olympic Wrestling",
      "Tour car professional athletes",
      "Racing professionals",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/combat-sports.jpg-DZA31rEsdV56kcmjwwmMgvodqXyjUK.jpeg",
    icon: "boxing-glove",
    emoji: "🥊",
  },
  {
    title: "Olympics & International",
    items: [
      "Vancouver Olympic Committee (VANOC)",
      "International Olympic Committee",
      "Public health & wellness initiatives",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/olympics.jpg-c2R3GxMDAzXh4E61URhe5EuvTPhKNw.jpeg",
    icon: "globe",
    emoji: "🏅",
  },
  {
    title: "Strength & Endurance",
    items: ["CrossFit Games competitors", "International strongmen", "Elite endurance athletes"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strength-and-endurance-y15t0a4RVollNjr16X0IsWDto1x5bz.jpeg",
    icon: "dumbbell",
    emoji: "🏋️",
  },
  {
    title: "First Responders",
    items: ["Police Officers", "Firefighters", "Paramedics", "Emergency Medical Services"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first-responders-itHRsf89CLdV7SIpHZtIllBDtNakgF.jpeg",
    icon: "shield",
    emoji: "🚑",
  },
  {
    title: "Other Notable Clients",
    items: ["Royal families in the UAE", "Keynote speaker at health & leadership conferences"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/distinguished-clients.jpg-cedjldYwGS7Vcjendyk4Cu0pEWV1mh.jpeg",
    icon: "users",
    emoji: "👑",
  },
]

export function ExperienceGallery() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover"
              priority={index < 3} // Prioritize loading of first 3 images
            />
          </div>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
    
              <h3 className="text-xl font-bold text-primary">{category.title}</h3>
            </div>
            <ul className="space-y-1 text-foreground">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

