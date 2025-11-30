import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Heading */}
            <h1 className="max-w-4xl text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Streamline your projects, <span className="text-muted-foreground">empower your team</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              The complete platform to plan, track, and deliver projects on time. Collaborate seamlessly with your team
              and stay organized with powerful tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button size="lg" className="group gap-2 px-8 text-base font-medium">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-base font-medium bg-transparent">
                Watch Demo
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="mt-4 text-sm text-muted-foreground">Trusted by 10,000+ teams worldwide</p>
          </div>
        </div>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </section>
    </main>
  )
}
