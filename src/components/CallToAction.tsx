import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  MessageSquare, 
  Calendar,
  Coffee,
  Sparkles
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.2}
        speed={2}
        roughness={0}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

const callToActionOptions = [
  {
    icon: MessageSquare,
    title: "Let's Collaborate",
    description: "Have an exciting project in mind? Let's bring your vision to life with cutting-edge technology.",
    action: "Start a Conversation",
    className: "hover:border-primary/60"
  },
  {
    icon: Coffee,
    title: "Coffee & Code",
    description: "Want to discuss tech, share ideas, or explore opportunities over a virtual coffee?",
    action: "Schedule a Chat",
    className: "hover:border-secondary/60"
  },
  {
    icon: Sparkles,
    title: "Innovation Partner",
    description: "Looking for someone passionate about AI, full-stack development, and creating impactful solutions?",
    action: "Explore Partnership",
    className: "hover:border-accent/60"
  }
];

import React, { useState } from "react";

const CallToAction = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      if (file) {
        formData.append("file", file);
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSuccess("Message sent! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
        setFile(null);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 animated-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="heading-display text-4xl lg:text-6xl mb-6"
            >
              Ready to Build <span className="text-gradient">Something Amazing?</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-cyber mx-auto rounded-full mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              I'm always excited to connect with fellow innovators, potential collaborators, 
              and anyone passionate about technology. Let's create something extraordinary together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Call to Action Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {callToActionOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`glass-card p-6 magnetic cursor-pointer border-2 border-transparent transition-all duration-300 ${option.className}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 glow-primary flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-display text-xl mb-2">{option.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {option.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="glass-card hover:bg-primary/10 border-primary/30"
                      >
                        {option.action}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form & 3D Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* 3D Background Element */}
              <div className="relative h-40 mb-8">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <AnimatedSphere />
                  </Suspense>
                </Canvas>
              </div>

              {/* Quick Contact Form */}
              <div className="glass-card p-8">
                <h3 className="heading-display text-2xl mb-6 text-center">Quick Connect</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quick-name" className="text-sm">Name</Label>
                      <Input
                        id="quick-name"
                        placeholder="Your name"
                        className="glass-card border-primary/30 focus:border-primary mt-1"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quick-email" className="text-sm">Email</Label>
                      <Input
                        id="quick-email"
                        type="email"
                        placeholder="your@email.com"
                        className="glass-card border-primary/30 focus:border-primary mt-1"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="quick-message" className="text-sm">Quick Message</Label>
                    <Textarea
                      id="quick-message"
                      placeholder="Tell me about your project or idea..."
                      className="glass-card border-primary/30 focus:border-primary min-h-24 mt-1"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quick-file" className="text-sm">Attach a file (optional)</Label>
                    <div className="relative mt-1">
                      <input
                        id="quick-file"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onChange={e => setFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                        aria-label="Attach a file"
                      />
                      <div className="glass-card border-primary/30 flex items-center px-4 py-2 rounded-md cursor-pointer select-none transition-colors hover:bg-primary/10">
                        <span className="text-sm text-muted-foreground flex-1">
                          {file ? file.name : "Choose a file..."}
                        </span>
                        <span className="ml-3 px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium">
                          Browse
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-cyber border-0 glow-primary magnetic"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {success && <div className="text-green-500 text-center mt-2">{success}</div>}
                  {error && <div className="text-red-500 text-center mt-2">{error}</div>}
                </form>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  href="mailto:artharvind18@gmail.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 text-center magnetic hover:bg-primary/5 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Email</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/arth-arvind/"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 text-center magnetic hover:bg-primary/5 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/anuj18x0"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 text-center magnetic hover:bg-primary/5 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">LinkedIn</span>
                </motion.a>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full glow-secondary animate-pulse" />
                  <span className="text-sm font-medium text-green-400">Available for Projects</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Currently accepting new opportunities • Usually responds within 24 hours
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;