'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Course Testimonials Component
const CourseTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "TechCorp Solutions",
      course: "Full Stack Web Development",
      image: "👩‍💻",
      rating: 5,
      testimonial: "The comprehensive curriculum and hands-on projects at Trinkets Institute transformed me from a complete beginner to a confident full-stack developer. The placement support was exceptional - I landed my dream job within 2 weeks of course completion!",
      salary: "₹8.5 LPA",
      previousRole: "Fresher",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Data Scientist",
      company: "Analytics Pro",
      course: "Data Science & Machine Learning",
      image: "👨‍🔬",
      rating: 5,
      testimonial: "The practical approach to teaching complex machine learning concepts was incredible. Real industry datasets, live projects, and 1-on-1 mentoring helped me transition from manual testing to data science seamlessly.",
      salary: "₹12 LPA",
      previousRole: "Manual Tester (₹3.5 LPA)",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Cybersecurity Analyst",
      company: "SecureNet India",
      course: "Cybersecurity Specialist",
      image: "👩‍🔒",
      rating: 5,
      testimonial: "The ethical hacking labs and real-world penetration testing scenarios gave me confidence to handle security challenges. The instructors are industry veterans who shared invaluable insights.",
      salary: "₹9.2 LPA",
      previousRole: "Support Engineer (₹4 LPA)",
      gradient: "from-red-500 to-pink-600"
    },
    {
      id: 4,
      name: "Amit Verma",
      role: "React Native Developer",
      company: "MobileFirst Tech",
      course: "React Native Development",
      image: "👨‍📱",
      rating: 5,
      testimonial: "Building 3 complete mobile apps during the course gave me a strong portfolio. The cross-platform development skills I learned here made me stand out in interviews. Excellent placement guidance!",
      salary: "₹7.8 LPA",
      previousRole: "Fresher",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      id: 5,
      name: "Kavya Reddy",
      role: "DevOps Engineer",
      company: "CloudScale Solutions",
      course: "DevOps Engineering",
      image: "👩‍⚙️",
      rating: 5,
      testimonial: "The hands-on experience with Docker, Kubernetes, and CI/CD pipelines was exactly what the industry demands. The cloud platform training with AWS was comprehensive and practical.",
      salary: "₹11.5 LPA",
      previousRole: "System Admin (₹5 LPA)",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      name: "Arjun Singh",
      role: "AI Engineer",
      company: "DeepTech Innovations",
      course: "Artificial Intelligence & ML",
      image: "👨‍🤖",
      rating: 5,
      testimonial: "The advanced AI curriculum with deep learning, computer vision, and NLP opened doors to cutting-edge opportunities. Working on real AI projects during the course was incredible!",
      salary: "₹15 LPA",
      previousRole: "Software Engineer (₹6 LPA)",
      gradient: "from-emerald-500 to-teal-600"
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying, testimonials.length])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who transformed their careers and achieved their dream jobs 
            with our comprehensive training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Testimonial */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Main Card */}
              <div className={`relative p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${currentTestimonial.gradient}`}></div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 text-6xl text-gray-200 font-serif">&ldquo;</div>

                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${currentTestimonial.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                      {currentTestimonial.image}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentTestimonial.name}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">{currentTestimonial.role}</p>
                      <p className="text-gray-600 mb-2">{currentTestimonial.company}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    {currentTestimonial.testimonial}
                  </blockquote>

                  {/* Career Transformation */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Course Completed</div>
                      <div className="font-semibold text-gray-800">{currentTestimonial.course}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Career Growth</div>
                      <div className="font-semibold text-gray-800">{currentTestimonial.previousRole} → {currentTestimonial.role}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">New Salary</div>
                      <div className={`font-bold text-lg bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                        {currentTestimonial.salary}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevTestimonial}
                  className="group p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:-translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`group p-3 rounded-full shadow-lg border transition-all duration-300 transform hover:scale-110 ${
                    isPlaying ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-600'
                  }`}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={nextTestimonial}
                  className="group p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">More Success Stories</h3>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`group p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeTestimonial === index
                    ? `bg-gradient-to-r ${testimonial.gradient} text-white shadow-lg`
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                    activeTestimonial === index 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-br ${testimonial.gradient}`
                  }`}>
                    <span className={activeTestimonial === index ? 'text-white' : 'text-white'}>
                      {testimonial.image}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      activeTestimonial === index ? 'text-white' : 'text-gray-800'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      activeTestimonial === index ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {testimonial.role}
                    </p>
                    <p className={`text-xs ${
                      activeTestimonial === index ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {testimonial.salary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? `bg-gradient-to-r ${currentTestimonial.gradient} scale-125`
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Success Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseTestimonials