"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const menuItems = ["About", "Experience", "Specializations", "Certifications", "Reviews", "Contact"]
  const bookingUrl = "https://westcoastchiro.janeapp.com"

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="md:hidden flex items-center justify-center text-white border border-transparent hover:border-white/30 rounded-md p-2 transition-all bg-transparent hover:bg-transparent"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white">
        <div className="flex flex-col gap-6 mt-8">
          <nav className="flex flex-col gap-4">
            {[
              { label: "About Dr. Frantzen", href: "#about" },
              { label: "Experience & Expertise", href: "#experience" },
              { label: "What He Treats", href: "#specializations" },
              { label: "Certifications", href: "#certifications" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary text-foreground hover:bg-primary/80">Book Appointment</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

