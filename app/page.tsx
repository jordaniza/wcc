import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Calendar,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { ServicesGallery } from "@/components/services-gallery";
import { Map } from "@/components/map";
import { ExperienceGallery } from "@/components/experience-gallery";
import { LeafletCSS } from "@/components/leaflet-css";

// At the beginning of your Home component
export default function Home() {
  // Dr. Frantzen's actual booking URL
  const bookingUrl = "https://westcoastchiro.janeapp.com";

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      {/* Add the LeafletCSS component */}
      <LeafletCSS />
      {/* Updated header */}
      <header className="sticky top-0 z-50 w-full border-b bg-black shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-10 w-[150px] md:w-[180px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%201%404x-8-ST9fBIi4lY5D6CPsdulgdGJBRpY64Y.png"
                alt="West Coast Chiropractic logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 pr-4">
              {[
                "About",
                "Experience",
                "Specializations",
                "Certifications",
                "Reviews",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Button className="bg-primary text-foreground hover:bg-primary/80">
                Book Appointment
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}

        <section className="relative h-[240px] sm:h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden pt-0">
          {/* Background Image */}
          <div className="absolute inset-0 top-0">
            <div className="relative h-full w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WCCAST_Banner_4.jpg-q7UYhxmK80SL3qJH77wShCpJK4nFUc.jpeg"
                alt="West Coast Chiropractic and Sport Therapy - Mountain landscape with skier"
                fill
                sizes="100vw"
                className="object-top object-contain md:object-cover md:object-center"
                priority
              />
            </div>
          </div>

          {/* Overlay content for md+ */}
          <div className="hidden md:flex container relative z-10 h-full flex-col items-center justify-end sm:pb-24 text-center">
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-base bg-primary text-foreground hover:bg-primary/80"
                >
                  Book Your Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <button className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md px-6 text-sm font-medium transition-colors border border-white/30 bg-white/80 hover:bg-white/20 hover:text-white hover:border-white/50">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-4 sm:py-8 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                  About Dr. Kristian Frantzen
                </h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    Born and raised in Richmond, BC, Dr. Kristian Frantzen has
                    spent over a decade helping people move better, recover
                    faster, and perform at their best. Whether it's pro
                    athletes, first responders, or anyone just trying to get
                    back to doing what they love, his approach is simple—figure
                    out what's wrong, fix it, and keep it from coming back.
                  </p>
                  <p>
                    Let's face it—great care doesn't have to be complicated.
                    Kristian is committed to providing thoughtful, effective
                    care so you can carry on with your life in the best way
                    possible. He's not about quick fixes; he focuses on
                    long-term solutions that actually make a difference. With
                    experience working in professional sports, Olympic teams,
                    and high-performance environments, he brings real-world
                    expertise to every treatment.
                  </p>
                  <p>
                    He holds a Doctor of Chiropractic degree from the Canadian
                    Memorial Chiropractic College, a Bachelor's in Recreation
                    and Health Education from the University of Victoria, and an
                    MBA. His expertise in performance-based care is further
                    enhanced by advanced training in sport chiropractic.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_7162-8BRDlNiCbC6RJh3owaBfqrqYkrakGK.jpeg"
                  alt="Dr. Kristian Frantzen - Professional headshot"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section id="specializations" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What He Treats
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Dr. Frantzen specializes in a range of chiropractic services to
                help you move better and live pain-free.
              </p>
            </div>
          </div>
          <ServicesGallery />
          <div className="container mt-12 flex justify-center">
            <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-foreground hover:bg-primary/80"
              >
                Book Your Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-secondary/10">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Experience & Expertise
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Kristian has provided chiropractic and medical support for a
                wide range of athletes, teams, and organizations.
              </p>
            </div>
            <ExperienceGallery />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 md:py-24 bg-secondary/10">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Treatment Methods & Certifications
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Kristian integrates a variety of advanced techniques to deliver
                personalized care.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Active Release Techniques® (ART)",
                "Graston Technique®",
                "NeuroKinetic Therapy® (Level 3)",
                "Titleist Performance Institute® Training",
                "Dry Needling & Myofascial Release",
                "Joint Manipulation & Mobilization",
                "Complete Concussion Management",
                "Taping (Levels 1 & 2)",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Kristian Section */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Work With Kristian?
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Dr. Frantzen brings a unique combination of expertise,
                experience, and a patient-centered approach.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "10+ Years of Experience",
                  description:
                    "A decade of hands-on experience treating patients across all levels of sport and activity.",
                },
                {
                  title: "Trusted by Professional & Elite Athletes",
                  description:
                    "The go-to chiropractor for Olympic athletes, professional teams, and elite competitors.",
                },
                {
                  title: "Evidence-Based, Multi-Disciplinary Approach",
                  description:
                    "Treatments based on the latest research and best practices in sports medicine.",
                },
                {
                  title: "Long-Term Solutions, Not Quick Fixes",
                  description:
                    "Focus on addressing root causes rather than just treating symptoms.",
                },
                {
                  title: "Personalized Treatment Plans",
                  description:
                    "Customized care tailored to your specific needs, goals, and lifestyle.",
                },
                {
                  title: "Continued Education & Innovation",
                  description:
                    "Constantly updating skills and knowledge to provide the best possible care.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reviews" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What People Are Saying
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Hear what our patients have to say about their experience with
                Dr. Frantzen.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Kristian doesn't just treat injuries—he educates, empowers, and helps prevent future problems. Highly recommend!",
                  author: "T.J. Sider",
                  title: "Strength Coach, Wrestling Canada",
                },
                {
                  quote:
                    "One of the best chiropractors in the lower mainland. His treatments focus on long-term improvement, not just short-term relief.",
                  author: "Nicole Jordan",
                  title: "Golf Professional",
                },
                {
                  quote:
                    "As an elite athlete, rehab and recovery are critical. Kristian's approach has allowed me to compete at the highest level year after year.",
                  author: "Arjan Bhullar",
                  title:
                    "Commonwealth Games Gold Medalist, Olympian, One FC Heavyweight Champion",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 italic text-foreground">
                    "{review.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary">
                      {review.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {review.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                  Where to Find Us
                </h2>
                <p className="mb-8 text-foreground">
                  Have questions or ready to schedule your appointment? Contact
                  us today to get started on your journey to better health.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "1200 Douglas Crescent, Richmond, BC V7B 1E7",
                    },
                    {
                      icon: Phone,
                      title: "Call/Text/WhatsApp",
                      content: "+1 (778) 803-5545",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "dr.kfrantzen@gmail.com",
                    },
                    {
                      icon: Calendar,
                      title: "Book Online",
                      content: "westcoastchiro.janeapp.com",
                      link: bookingUrl,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-primary">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    {
                      icon: Instagram,
                      label: "@FrantzensForum",
                      href: "https://instagram.com/FrantzensForum",
                    },
                    {
                      icon: Facebook,
                      label: "@DrFrantzen",
                      href: "https://facebook.com/DrFrantzen",
                    },
                    {
                      icon: Linkedin,
                      label: "kristian-frantzen",
                      href: "https://www.linkedin.com/in/kristian-frantzen/",
                    },
                    {
                      icon: Twitter,
                      label: "@DrFrantzen",
                      href: "https://twitter.com/DrFrantzen",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md border border-input bg-white px-3 py-2 text-sm hover:bg-muted"
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="h-[400px] overflow-hidden rounded-lg">
                <Map />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Banner */}

      <section className="relative w-full min-h-[300px] md:min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-bottom-right"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WCCAST_Banner_2.jpg-GcKDmJgFDiHOis86usU74aXgrF7SCo.jpeg')`,
            backgroundPosition: "bottom right",
            backgroundSize: "100% auto",
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Book Your Chiropractic Consultation Today
            </h2>
            <p className="max-w-2xl text-lg mb-8 text-foreground">
              Expert chiropractic care in Richmond, BC, to help people move
              better, recover faster, and optimize performance.
            </p>
            <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-base bg-primary text-foreground hover:bg-primary/80"
              >
                Book Your Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
