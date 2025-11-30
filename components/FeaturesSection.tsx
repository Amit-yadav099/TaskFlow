export default function FeaturesSection() {
  const features = [
    {
      title: "Task Management",
      description: "Create, assign, and track tasks with intuitive drag-and-drop interface",
      icon: "📋",
      highlights: ["Drag & Drop", "Automation", "Deadlines"]
    },
    {
      title: "Team Collaboration",
      description: "Real-time messaging, file sharing, and comments in one place",
      icon: "👥",
       highlights: ["Real-time Chat", "File Sharing", "Comments"]
    },
    {
      title: "Progress Analytics",
      description: "Visual reports and insights to track project health and team performance",
      icon: "📊",
      highlights: ["Dashboards", "Reports", "Insights"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}