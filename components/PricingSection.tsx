import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: "$19",
    period: "per month",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Basic analytics & reports",
      "Email support",
      "Mobile app access",
      "Basic integrations"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    description: "Everything growing teams need",
    price: "$49",
    period: "per month",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom fields & workflows",
      "Advanced integrations",
      "Time tracking",
      "Automated reports"
    ],
    cta: "Most Popular",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "$99",
    period: "per month",
    features: [
      "Unlimited everything",
      "1TB storage",
      "Custom analytics",
      "24/7 phone support",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced security",
      "Custom onboarding",
      "API access"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            💰 Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start free for 14 days • No credit card required • Cancel anytime
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border border-slate-200 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-4 py-1 text-sm font-semibold bg-blue-500 text-white">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-6">
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600 text-lg">/{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full text-lg font-semibold py-6 ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-slate-600">
            All plans include <span className="font-semibold text-slate-900">14-day free trial</span> • 
            Need a custom plan? <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  )
}