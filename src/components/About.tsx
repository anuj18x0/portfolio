import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
  "Python", "React", "Node.js", "TypeScript", "TensorFlow", 
  "Google Cloud", "MongoDB", "Docker", "FastAPI", "Express.js"
];

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="heading-display text-4xl lg:text-5xl mb-6"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-cyber mx-auto rounded-full"
            />
          </div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-12 magnetic"
          >
            <p className="text-xl font-bold leading-relaxed text-foreground mb-6">
              I help organizations and teams achieve AI implementaion, automation and seamless digital experiences 
              without sacrificing user experience or system reliability.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              As a Computer Science student at LJ University, I specialize in creating AI-powered solutions 
              that solve real-world problems. My expertise spans from developing multi-agent AI systems 
              for business analytics to building immersive 3D therapeutic experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether it's creating intelligent screen assistants with computer vision, developing 
              comprehensive healthcare platforms with predictive analytics, or building engaging 
              3D avatars for mental health support, I focus on delivering scalable, user-centric 
              solutions that make complex technology accessible and impactful.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="heading-display text-2xl mb-6 text-center">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-base py-2 px-4 glass-card border-primary/30 hover:border-primary/60 transition-all duration-300 glow-soft"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;