import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', description: 'Writing elegant, maintainable solutions' },
  { icon: Palette, label: 'Design Focus', description: 'Pixel-perfect attention to detail' },
  { icon: Sparkles, label: 'Innovation', description: 'Pushing boundaries with new tech' },
  { icon: Zap, label: 'Performance', description: 'Optimized for speed and efficiency' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Turning Ideas Into
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Card with Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative perspective-1000"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform-gpu hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                  <img
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=600&fit=crop"
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute -right-4 top-1/4 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-xl">
                  <p className="text-3xl font-bold text-cyan-400">5+</p>
                  <p className="text-xs text-gray-400">Years Experience</p>
                </div>
                <div className="absolute -left-4 bottom-1/3 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-xl">
                  <p className="text-3xl font-bold text-purple-400">50+</p>
                  <p className="text-xs text-gray-400">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              I'm a passionate full-stack developer and UI/UX designer with a love for creating 
              immersive digital experiences. With expertise spanning from pixel-perfect frontend 
              interfaces to robust backend architectures, I bring ideas to life through code and design.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              My approach combines technical excellence with creative vision, ensuring every project 
              not only functions flawlessly but also delivers an exceptional user experience that 
              leaves a lasting impression.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-medium mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}