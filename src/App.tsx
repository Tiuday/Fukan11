/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  LineChart, 
  Mail, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp,
  Users
} from "lucide-react";
import { useRef } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary flex items-center justify-center">
        <span className="text-black font-bold text-xs">DS</span>
      </div>
      <span className="font-bold tracking-tighter text-xl text-white">DERMASCALE AI</span>
    </div>
    <div className="hidden md:flex gap-8 items-center">
      <a href="#services" className="text-[14px] hover:text-primary transition-colors uppercase tracking-widest">Services</a>
      <a href="#testimonials" className="text-[14px] hover:text-primary transition-colors uppercase tracking-widest">Success</a>
      <a href="#contact" className="px-6 py-2 bg-primary text-white text-[14px] uppercase tracking-widest hover:bg-blue-700 transition-colors">Get Started</a>
    </div>
  </nav>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Human Figurine/Face Vibe */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" 
          alt="Dermatology Concept" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </motion.div>

      {/* Healing Glow Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "10%", "-10%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-primary">SCALE YOUR PRACTICE</h1>
          <h2 className="mb-8 text-5xl md:text-7xl lg:text-8xl tracking-tighter">
            AI-EMBEDDED <br />
            <span className="text-primary italic">HEALING</span> TECHNOLOGY
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
            We provide dermatologists with proven frameworks and AI-driven solutions to scale patient care and business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-2 group">
              Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-white/20 hover:bg-white/10 transition-all uppercase tracking-widest">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Nav Reference Style */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center z-30">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 flex gap-8 items-center rounded-full">
          <span className="text-[10px] uppercase tracking-widest text-gray-500">The System</span>
          <div className="w-[1px] h-4 bg-white/20" />
          <span className="text-[10px] uppercase tracking-widest text-white">Built for Precision</span>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "AI Diagnostics Engine",
      desc: "Integrate advanced computer vision for preliminary skin analysis and patient triage.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Scale Frameworks",
      desc: "Proven operational systems designed specifically for high-growth dermatology clinics.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Patient Lifecycle AI",
      desc: "Automated follow-ups and personalized treatment plans powered by predictive modeling.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Revenue Optimization",
      desc: "Smart billing and resource allocation tools to maximize clinic profitability.",
      icon: <LineChart className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-primary mb-4">OUR SOLUTIONS</h1>
            <h2 className="text-4xl md:text-6xl">ENGINEERED FOR <br />PRECISION CARE</h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            Bridging the gap between traditional clinical excellence and modern technological efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(0, 0, 238, 0.05)" }}
              className="p-10 bg-black transition-colors group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Elena Vance",
      role: "Founder, Vance Derma",
      content: "DermaScale's AI framework transformed our patient onboarding. We've seen a 40% increase in efficiency within 3 months.",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. Marcus Thorne",
      role: "Chief Surgeon, Thorne Clinic",
      content: "The precision of their diagnostic integration is unmatched. It's not just technology; it's a scaling partner.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-center mb-16">SUCCESS STORIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center p-8 border border-white/5 bg-white/[0.02]"
            >
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-32 h-32 object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-3 h-3 text-primary" />)}
                </div>
                <p className="text-lg italic mb-6 text-gray-300">"{t.content}"</p>
                <h4 className="font-bold uppercase tracking-widest text-sm">{t.name}</h4>
                <p className="text-xs text-primary uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h1 className="text-primary mb-4">GET IN TOUCH</h1>
          <h2 className="mb-8">READY TO <br />SCALE?</h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Schedule a consultation with our technology experts to see how AI can transform your dermatology practice.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Email Us</p>
                <p className="font-bold">hello@dermascale.ai</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Call Us</p>
                <p className="font-bold">+1 (555) 0123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/20 p-12 border border-white/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="w-full bg-black border-b border-white/20 p-3 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-black border-b border-white/20 p-3 focus:border-primary outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500">Practice Name</label>
              <input type="text" className="w-full bg-black border-b border-white/20 p-3 focus:border-primary outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-black border-b border-white/20 p-3 focus:border-primary outline-none transition-colors resize-none" />
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-8 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-primary flex items-center justify-center">
          <span className="text-black font-bold text-[10px]">DS</span>
        </div>
        <span className="font-bold tracking-tighter text-sm">DERMASCALE AI</span>
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
        © 2026 DERMASCALE AI. ALL RIGHTS RESERVED.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-gray-500 hover:text-white transition-colors"><MessageSquare className="w-4 h-4" /></a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors"><ShieldCheck className="w-4 h-4" /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_4601kn9jwwa5f6prcmvxgkkwtrfk"></elevenlabs-convai>

      {/* Global Background Animation - Minimal & Calm */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0000EE11_0%,transparent_50%)]" />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
        />
      </div>
    </div>
  );
}
