export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Roadmap", href: "#" },
        { name: "Changelog", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Project Management", href: "#" },
        { name: "Remote Teams", href: "#" },
        { name: "Marketing Teams", href: "#" },
        { name: "Development Teams", href: "#" },
        { name: "Startups", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Community", href: "#" },
        { name: "Support", href: "#" },
        { name: "API Status", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "GitHub", icon: "🐙", href: "#" },
    { name: "Discord", icon: "💬", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-blue-500 to-purple-500 text-white overflow-hidden">
    

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
             
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                TaskFlow
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              The all-in-one project management platform that helps remote teams deliver work faster and more efficiently.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-6 text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
              <p className="text-gray-200">
                Get the latest updates, tips, and news delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {currentYear} TaskFlow. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Security
              </a>
            </div>

            {/* App Badges */}
            <div className="flex gap-4">
              <button className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm hover:bg-black/50 transition-colors flex items-center gap-2">
                <span>📱</span>
                App Store
              </button>
              <button className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm hover:bg-black/50 transition-colors flex items-center gap-2">
                <span>🤖</span>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}