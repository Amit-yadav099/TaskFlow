import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, Calendar, TrendingUp } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content: "TaskFlow reduced our project planning time by 60%. The intuitive interface and powerful analytics helped us deliver projects faster than ever before. Our team's productivity has increased significantly.",
    rating: 5,
    avatar: "SC",
    industry: "Technology",
    stats: "62% faster planning",
    duration: "1.5 years"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Startup Founder",
    company: "InnovateLabs",
    content: "As a remote-first company, TaskFlow became our digital office. The collaboration features are absolutely game-changing for distributed teams. We've seen a 40% improvement in project delivery times.",
    rating: 5,
    avatar: "MR",
    industry: "Startup",
    stats: "40% faster delivery",
    duration: "8 months"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Marketing Director",
    company: "CreativeMinds",
    content: "Finally, a tool that actually makes project management enjoyable. The automation features saved us 15 hours per week on administrative tasks. Our campaign planning has never been smoother.",
    rating: 5,
    avatar: "EW",
    industry: "Marketing",
    stats: "15+ hours saved weekly",
    duration: "1 year"
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "CTO",
    company: "DevStack",
    content: "The API integration and custom workflow capabilities allowed us to tailor TaskFlow perfectly to our development process. Our engineering team's velocity increased by 25% in the first month.",
    rating: 4,
    avatar: "AT",
    industry: "Development",
    stats: "25% velocity increase",
    duration: "10 months"
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Operations Manager",
    company: "GrowthInc",
    content: "TaskFlow's reporting features gave us insights we never had before. We can now track project health in real-time and make data-driven decisions. It's been a game-changer for our operations.",
    rating: 5,
    avatar: "JL",
    industry: "Operations",
    stats: "Real-time insights",
    duration: "1.2 years"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Team Lead",
    company: "DataSystems",
    content: "The learning curve was minimal and the impact was immediate. Our team adopted TaskFlow in days, not weeks. The customer support has been exceptional throughout our journey.",
    rating: 5,
    avatar: "DK",
    industry: "Data Analytics",
    stats: "Immediate adoption",
    duration: "6 months"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700"
          >
            <Quote className="w-4 h-4 mr-2" />
            Loved by Teams Worldwide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Don't Just Take <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Word</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join 10,000+ teams who have transformed their workflow with TaskFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-blue-200/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl"></div>

              <CardContent className="p-6 relative z-10">
                {/* Top Section */}
                <div className="flex items-start justify-between mb-4">
                  {/* Left: Avatar and Basic Info */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm group-hover:border-blue-100 transition-colors duration-300">
                      <AvatarImage src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-900 text-sm leading-tight truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-tight mt-0.5">
                        {testimonial.role}
                      </p>
                      <Badge 
                        variant="secondary" 
                        className="mt-2 text-xs px-2 py-0 h-5 bg-slate-100 text-slate-700 border-slate-200"
                      >
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>

                  {/* Right: Rating */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-3">
                    <div className="flex items-center gap-0.5 bg-white rounded-full px-2 py-1 shadow-sm border border-slate-200">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < testimonial.rating 
                              ? "fill-green-400 text-green-400" 
                              : "fill-slate-200 text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {testimonial.rating}.0/5.0
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="mt-4">
                  <blockquote className="text-slate-700 text-sm leading-relaxed relative">
                    <Quote className="absolute -top-2 -left-1 w-6 h-6 text-blue-100/80 group-hover:text-blue-200/80 transition-colors duration-300" />
                    <span className="relative z-10 pl-4">
                      {testimonial.content}
                    </span>
                  </blockquote>
                  
                  {/* Stats and Info */}
                  <div className="mt-4 pt-4 border-t border-slate-100/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-semibold text-slate-700">
                          {testimonial.stats}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3 h-3" />
                        <span className="text-xs">{testimonial.duration}</span>
                      </div>
                    </div>
                    
                    {/* Industry Tag */}
                    <div className="mt-3">
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-blue-50/50 text-blue-700 border-blue-200/50"
                      >
                        {testimonial.industry}
                      </Badge>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4.9/5", label: "Average Rating", icon: "⭐" },
              { number: "10K+", label: "Happy Teams", icon: "👥" },
              { number: "98%", label: "Would Recommend", icon: "💚" },
              { number: "24/7", label: "Support Available", icon: "🛟" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm border border-slate-200/60 group-hover:shadow-md transition-all duration-300 mb-4">
                  <span className="text-lg">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50/50 rounded-2xl px-8 py-8 shadow-sm border border-blue-200/30">
            <div className="text-left">
              <p className="font-bold text-slate-900 text-lg">Ready to experience the difference?</p>
              <p className="text-slate-600 text-sm mt-1">Join thousands of productive teams today</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}