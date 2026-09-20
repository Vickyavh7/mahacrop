import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  title: string
  imageSrc: string
  linkedinUrl?: string
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Mr. Nikhil Balaso Bhandare",
      title: "Chief Financial Officer",
      imageSrc: "/images/team-cfo.jpeg",
    },
    {
      name: "Mr. Gaurav Kaluram Gundal",
      title: "Chief Operating Officer",
      imageSrc: "/images/team-coo.jpeg",
    },
  ]

  return (
    <section className="py-16">
      <p className="section-kicker mb-3">Line leads</p>
      <h2 className="font-display text-3xl sm:text-4xl uppercase text-chamber mb-10">Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {teamMembers.map((member) => (
          <article key={member.name} className="border border-chamber/15 bg-white p-6">
            <div className="relative w-full h-56 mb-5 overflow-hidden">
              <Image src={member.imageSrc || "/placeholder.svg"} alt={member.name} fill className="object-cover object-top" />
            </div>
            <h3 className="font-display text-xl uppercase text-chamber mb-1">{member.name}</h3>
            <p className="crate-stamp text-[11px] text-pulp mb-3">{member.title}</p>
            {member.linkedinUrl && (
              <Link
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-chamber hover:text-pulp text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
