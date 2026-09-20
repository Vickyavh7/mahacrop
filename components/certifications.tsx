import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, CheckCircle, Star } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      logo: <img src="/images/cert-fssai.png" alt="FSSAI Certification" className="h-16 w-auto object-contain" />,
      title: "FSSAI Licensed",
      description: "Food Safety and Standards Authority of India",
      details: "Licensed food business operator with FSSAI compliance",
      category: "Food Safety",
    },
    {
      logo: <img src="/images/cert-kosher.png" alt="Kosher Certification" className="h-16 w-auto object-contain" />,
      title: "Kosher Certified",
      description: "Kosher Compliant Food Products",
      details: "Certified kosher food processing and handling",
      category: "Religious Compliance",
    },
    {
      logo: <img src="/images/cert-apeda.png" alt="APEDA Certification" className="h-16 w-auto object-contain" />,
      title: "APEDA Registered",
      description: "Agricultural & Processed Food Products Export",
      details: "Registered with APEDA for agricultural exports",
      category: "Export Authority",
    },
    {
      logo: <img src="/images/cert-fieo.png" alt="FIEO Membership" className="h-16 w-auto object-contain" />,
      title: "FIEO Member",
      description: "Federation of Indian Export Organisations",
      details: "Member of India's apex export promotion organization",
      category: "Export Promotion",
    },
    {
      logo: <img src="/images/cert-msme.png" alt="MSME Registration" className="h-16 w-auto object-contain" />,
      title: "MSME Registered",
      description: "Micro, Small & Medium Enterprises",
      details: "Government recognized MSME enterprise",
      category: "Government Recognition",
    },
    // Removed ISO 22000:2018 certification
    // {
    //   icon: <img src="/images/cert-globe.png" alt="ISO Certification" className="w-12 h-12" />,
    //   title: "ISO 22000:2018",
    //   description: "Food Safety Management System",
    //   details: "International standard for food safety management systems",
    //   category: "International Standard"
    // },
  ]

  const additionalCertifications = [
    { name: "FSSC 22000", description: "Food Safety System Certification" },
    { name: "LRQA Certified", description: "Lloyd's Register Quality Assurance" },
    { name: "Global GAP", description: "Good Agricultural Practices" },
    { name: "Fairtrade", description: "Ethical Trading Standards" },
    { name: "FDA Registered", description: "US Food and Drug Administration" },
    { name: "BRGS Certified", description: "British Retail Consortium Global Standards" },
    { name: "Tesco Approved", description: "Tesco Supplier Approval" },
    { name: "Product of India", description: "Government of India Certification" },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-100/30 to-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">Quality Assurance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gray-800">Our Licences and </span>
            <span className="text-green-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Committed to maintaining the highest international standards in food safety, quality, and sustainable
            agricultural practices
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {cert.category}
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-green-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/20 to-transparent rounded-full transform translate-x-10 -translate-y-10"></div>

              <CardContent className="relative p-8 text-center">
                {/* Logo/Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 relative overflow-hidden border border-gray-100 p-2">
                    {cert.logo || cert.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-800 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-3">{cert.description}</p>
                <p className="text-xs text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cert.details}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Certifications Banner */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Additional Certifications & Approvals</h3>
            <p className="text-gray-600">Recognized by leading international organizations and retail partners</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="text-center">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
              <div className="text-sm text-green-800 font-semibold">Compliance Rate</div>
              <div className="text-xs text-green-600 mt-1">All certifications current</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl font-bold text-orange-700 mb-2">3+</div>
              <div className="text-sm text-orange-800 font-semibold">Years Certified</div>
              <div className="text-xs text-orange-600 mt-1">Continuous compliance</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-700 mb-2">10+</div>
              <div className="text-sm text-blue-800 font-semibold">International Standards</div>
              <div className="text-xs text-blue-600 mt-1">Global recognition</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-700 mb-2">42+</div>
              <div className="text-sm text-purple-800 font-semibold">Countries Approved</div>
              <div className="text-xs text-purple-600 mt-1">Export authorized</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-gray-800 font-semibold">Trusted by Global Partners Worldwide</span>
            <Star className="w-5 h-5 text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
