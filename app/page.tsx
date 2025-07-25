import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

export const metadata = {
  title: "Harry Xue",
  description: "Product Manager at Datadog in NYC",
}

// Add custom X.com icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header with Headshot */}
          <div className="text-center space-y-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <Image
                src="https://media.licdn.com/dms/image/v2/C5603AQFFWvCf5YNo8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565083877468?e=1755734400&v=beta&t=uQTvoeenoEPKaH6O5Yd_JjN-j1rBcVoHtei2aNrd4cI"
                alt="Professional headshot"
                fill
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Harry Xue</h1>
              <p className="text-lg text-gray-600">Product Manager</p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.linkedin.com/in/harryxue/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/HarryXue18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                I'm currently a Product Manager at Datadog in NYC. Previously, I worked at NexHealth, Wish, and Lyft. I occasionally angel invest.
                
                <br/>
                <br/>
                In my spare time, I'm building{" "}
                <Link
                  href="https://subtleasianweddings.com"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Subtle Asian Weddings
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center pt-8">
            <p className="text-sm text-gray-500">© 2025 Harry Xue</p>
          </div>
        </div>
      </div>
    </div>
  )
}
