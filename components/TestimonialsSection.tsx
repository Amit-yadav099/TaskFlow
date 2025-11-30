import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content: "TaskFlow reduced our project planning time by 60%. The intuitive interface and powerful analytics helped us deliver projects faster than ever before. Our team's productivity has increased significantly since we started using this platform.",
    rating: 5,
    avatar: "SC",
    industry: "Technology"
  },
  {
    name: "Mike Rodriguez",
    role: "Startup Founder",
    company: "InnovateLabs",
    content: "As a remote-first company, TaskFlow became our digital office. The collaboration features are absolutely game-changing for distributed teams. We've seen a 40% improvement in project delivery times.",
    rating: 5,
    avatar: "MR",
    industry: "Startup"
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "CreativeMinds",
    content: "Finally, a tool that actually makes project management enjoyable. The automation features saved us 15 hours per week on administrative tasks. Our campaign planning has never been smoother.",
    rating: 5,
    avatar: "EW",
    industry: "Marketing"
  },
  {
    name: "Alex Thompson",
    role: "CTO",
    company: "DevStack",
    content: "The API integration and custom workflow capabilities allowed us to tailor TaskFlow perfectly to our development process. Our engineering team's velocity increased by 25% in the first month.",
    rating: 4,
    avatar: "AT",
    industry: "Development"
  },
  {
    name: "Jessica Lee",
    role: "Operations Manager",
    company: "GrowthInc",
    content: "TaskFlow's reporting features gave us insights we never had before. We can now track project health in real-time and make data-driven decisions. It's been a game-changer for our operations.",
    rating: 5,
    avatar: "JL",
    industry: "Operations"
  },
  {
    name: "David Kim",
    role: "Team Lead",
    company: "DataSystems",
    content: "The learning curve was minimal and the impact was immediate. Our team adopted TaskFlow in days, not weeks. The customer support has been exceptional throughout our journey.",
    rating: 5,
    avatar: "DK",
    industry: "Data Analytics"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-white">
            💬 Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Amazing Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See why teams across industries choose TaskFlow to power their projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white hover:border-slate-300">
              <CardContent className="p-6">
                {/* Top Section: Left (Avatar & Info) + Right (Rating) */}
                <div className="flex items-start justify-between mb-4">
                  {/* Left: Avatar and Basic Info */}
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border-2 border-slate-100">
                      <AvatarImage src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`} />
                      <AvatarFallback className="bg-slate-900 text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm leading-tight truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-tight mt-0.5">
                        {testimonial.role}
                      </p>
                      <Badge variant="outline" className="mt-2 text-xs px-2 py-0 h-5">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>

                  {/* Right: Rating */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? "fill-green-400 text-green-400" 
                              : "fill-slate-200 text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {testimonial.rating}.0/5.0
                    </span>
                  </div>
                </div>

                {/* Content Section - Below */}
                <div className="mt-4">
                  <blockquote className="text-slate-700 text-sm leading-relaxed relative">
                    <span className="absolute -top-2 -left-1 text-2xl text-slate-200">"</span>
                    <span className="relative z-10 pl-3">
                      {testimonial.content}
                    </span>
                  </blockquote>
                  
                  {/* Industry Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4.9", label: "Average Rating" },
              { number: "10K+", label: "Happy Teams" },
              { number: "98%", label: "Would Recommend" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl px-8 py-6 shadow-lg border border-slate-200">
            <div className="text-left">
              <p className="font-semibold text-slate-900 text-lg">Ready to join them?</p>
              <p className="text-slate-600 text-sm">Start your free trial today — no credit card required</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Start Free Trial
              </button>
              <button className="bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold text-sm border border-slate-300 hover:border-slate-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}