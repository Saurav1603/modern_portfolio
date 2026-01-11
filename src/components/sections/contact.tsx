import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Sparkles, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding py-[120px] bg-[#111827] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[3rem] font-bold mb-4 tracking-tight leading-[1.2]">
            <span className="text-gradient relative">
              Get In Touch
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mt-6">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#2563EB] rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-full self-center"></div>
            <div className="w-3 h-3 bg-[#9333EA] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: CTA & Connect */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                Let's work together
              </h3>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Card */}
                <a 
                  href="mailto:contact@sauravraj.com" 
                  className="glass-card group p-6 flex items-start space-x-4 hover:translate-y-[-8px] transition-all duration-300"
                >
                  <div className="p-3 bg-blue-900/30 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-sm text-[#9CA3AF]">raj.saurav@niet.co.in</p>
                  </div>
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+910000000000" 
                  className="glass-card group p-6 flex items-start space-x-4 hover:translate-y-[-8px] transition-all duration-300"
                >
                  <div className="p-3 bg-purple-900/30 rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-[#9CA3AF]">+91 123 456 7890</p>
                  </div>
                </a>

                {/* Location Card (Full Width in Inner Grid) */}
                <div 
                  className="glass-card group p-6 flex items-start space-x-4 sm:col-span-2 hover:translate-y-[-8px] transition-all duration-300"
                >
                  <div className="p-3 bg-cyan-900/30 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-sm text-[#9CA3AF]">Muzaffarpur, Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connectivity */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect with me on social media</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/Saurav1603", label: "GitHub" },
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
                  { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[rgba(31,41,55,0.5)] border border-[rgba(255,255,255,0.1)] rounded-2xl text-[#9CA3AF] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mini Lead Capture / Interactive Form Placeholder */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[1.6rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <Sparkles size={20} className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Send Message</h3>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF] ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#111827] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-[#111827] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF] ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="w-full bg-[#111827] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;