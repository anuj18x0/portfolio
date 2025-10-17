import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "LJ University",
    period: "2023 - Present",
    score: "CGPA: 9.44",
    status: "current"
  },
  {
    degree: "12th Grade",
    institution: "Edunova High School",
    period: "2023",
    score: "72 Percentile",
    status: "completed"
  },
  {
    degree: "10th Grade", 
    institution: "SDA Hr. Sr. School",
    period: "2021",
    score: "88%",
    status: "completed"
  }
];

const Education = () => {
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
              Education <span className="text-gradient">Timeline</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-cyber mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full glow-primary border-4 border-background" />
                  
                  {/* Timeline Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 magnetic"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <h3 className="heading-display text-xl">{item.degree}</h3>
                          {item.status === "current" && (
                            <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-secondary mb-2">{item.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                          <div className="text-primary font-medium">
                            {item.score}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;