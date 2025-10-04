'use client'

import { useState, useEffect, useRef } from 'react'

// Revolutionary Team Section
const AboutTeam = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & Director",
      specialization: "Mechanical Engineering",
      experience: "20+ Years",
      description: "Visionary leader with extensive industry experience in designing complex mechanical systems for Fortune 500 companies.",
      avatar: "👨‍🏫",
      gradient: "from-indigo-500 to-blue-500",
      skills: ["Leadership", "Innovation", "Strategy"]
    },
    {
      name: "Prof. Priya Sharma", 
      position: "Head of Academics",
      specialization: "Electrical Engineering",
      experience: "15+ Years",
      description: "Expert in electrical design and automation with a passion for innovative teaching methodologies.",
      avatar: "👩‍🏫",
      gradient: "from-indigo-500 to-blue-500",
      skills: ["Teaching", "Automation", "Research"]
    },
    {
      name: "Er. Amit Patel",
      position: "Industry Relations Head",
      specialization: "Structural Engineering",
      experience: "18+ Years",
      description: "Bridge between academia and industry, ensuring our curriculum meets current market demands.",
      avatar: "👨‍💼",
      gradient: "from-sky-500 to-indigo-500",
      skills: ["Industry Connect", "Curriculum", "Strategy"]
    },
    {
      name: "Dr. Sneha Gupta",
      position: "Research & Development",
      specialization: "HVAC & MEP",
      experience: "12+ Years",
      description: "Leading researcher in sustainable engineering solutions and green building technologies.",
      avatar: "👩‍🔬",
      gradient: "from-blue-500 to-sky-500",
      skills: ["Research", "Sustainability", "Innovation"]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-4 border-blue-300/50 rounded-full px-12 py-6 shadow-2xl">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xl flex items-center gap-3">
                <span className="text-2xl">👥</span>
                Meet Our Team
                <span className="text-2xl">🌟</span>
              </span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-8">
            Expert Faculty & Leadership
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the passionate educators and industry experts who make our institution a 
            <span className="text-blue-600 font-bold"> center of excellence</span>
          </p>
        </div>

        {/* Enhanced Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-blue-200/50 hover:border-blue-300 transform ${hoveredMember === index ? 'scale-105 z-10' : ''}`}>
                
                {/* Enhanced Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Top Accent with Animation */}
                <div className={`h-3 bg-gradient-to-r ${member.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
                
                {/* Enhanced Card Content */}
                <div className="relative p-8 text-center">
                  {/* Enhanced Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-5xl">{member.avatar}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Name & Position */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>

                  {/* Enhanced Specialization & Experience */}
                  <div className="space-y-2 mb-4">
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300">
                      {member.specialization}
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-300">
                      {member.experience}
                    </div>
                  </div>

                  {/* New Skills Section */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Interactive Connect Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <button className={`w-full py-2 bg-gradient-to-r ${member.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm`}>
                      Connect with {member.name.split(' ')[0]} 💬
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Want to Learn from Industry Experts? 🎓
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Our experienced faculty is ready to guide you to success with 
                <span className="font-bold"> personalized mentorship</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Meet Our Faculty</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="/courses"
                  className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-blue-400 flex items-center justify-center gap-2"
                >
                  <span>📚</span>
                  <span>Explore Courses</span>
                  <span className="transform group-hover:rotate-12 transition-transform">�</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam