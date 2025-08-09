import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
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
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Meet Our Leadership Team</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our dedicated team of experts drives innovation and excellence in every aspect of our operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-md">
                  <Image
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-top" // Changed object-position to object-top for better framing
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.title}</p>
                {member.linkedinUrl && (
                  <Link
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
