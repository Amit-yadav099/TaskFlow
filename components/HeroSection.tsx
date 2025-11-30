import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden px-4">

      {/* Soft Glow Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[-5%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Trust Badge */}
        <Badge
          variant="secondary"
          className="mb-12 px-6 py-3 text-base font-semibold backdrop-blur-sm border border-white/20 bg-white/10 text-white shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Avatar className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/avatars/1.png" />
                <AvatarFallback className="text-xs">T1</AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/avatars/2.png" />
                <AvatarFallback className="text-xs">T2</AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/avatars/3.png" />
                <AvatarFallback className="text-xs">T3</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-white/90">Trusted by</span>
            <span className="text-white font-bold">10,000+</span>
            <span className="text-white/90">teams worldwide</span>
          </div>
        </Badge>

        {/* Main Heading */}
        <div className="space-y-6 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            Project Management
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">
              Made Simple
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-slate-50 leading-relaxed font-light">
            The intelligent platform that helps teams{" "}
            <span className="font-medium text-white">deliver exceptional work</span>{" "}
            without the complexity. Everything you need in one elegant solution.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="gap-3 min-w-[200px] h-14 text-lg font-semibold bg-white text-slate-900 hover:bg-gray-200"
          >
            Get Started Free
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>


<Button
  size="lg"
  variant="outline"
  className="gap-4 min-w-[200px] h-14 text-lg font-semibold 
             border-white/50 text-white 
             bg-white/20 
             hover:bg-white/30 transition-all duration-300 flex items-center"
>
  <div className="w-10 h-10 rounded-lg bg-white/30 border border-white/40 
                  flex items-center justify-center backdrop-blur-sm">
    <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>

  <span className="text-white font-semibold">Watch Demo</span>
</Button>



        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: "2.5M+", label: "Tasks Completed", icon: "✓" },
            { number: "50K+", label: "Active Projects", icon: "📊" },
            { number: "98%", label: "Satisfaction Rate", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition duration-300 mb-4">
                <span className="text-lg text-white">{stat.icon}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
