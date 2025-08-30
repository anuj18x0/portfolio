import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { timelineProjects, categories } from "@/lib/timelineData";
import TimelineProject from "./TimelineProject";
import TimelineFilters from "./TimelineFilters";
import TimelineProgress from "./TimelineProgress";

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());

  // Filter projects based on selected category and tech stack
  const filteredProjects = timelineProjects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const techMatch = selectedTech.length === 0 || 
      selectedTech.some(tech => project.techStack.includes(tech));
    return categoryMatch && techMatch;
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-timeline-section') || '0');
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px" }
    );

    const timelineElements = document.querySelectorAll('[data-timeline-section]');
    timelineElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
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
              Project <span className="text-gradient">Timeline</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-cyber mx-auto rounded-full mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore my journey through innovative projects, from AI-powered applications 
              to scalable web platforms. Each milestone represents growth, learning, and impact.
            </motion.p>
          </div>

          {/* Filters */}
          <TimelineFilters
            selectedCategory={selectedCategory}
            selectedTech={selectedTech}
            onCategoryChange={setSelectedCategory}
            onTechChange={setSelectedTech}
            projectCount={filteredProjects.length}
          />

          {/* Timeline Container */}
          <div 
            id="timeline-container" 
            className="relative"
          >
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-cyber opacity-30 h-full hidden lg:block" />

            {/* Timeline Projects */}
            <div className="space-y-0">
              {filteredProjects.map((project, index) => (
                <TimelineProject
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={visibleProjects.has(index)}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="glass-card p-12 max-w-md mx-auto">
                  <h3 className="heading-display text-xl mb-4">No projects found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to see more projects.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedTech([]);
                    }}
                    className="text-primary hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <TimelineProgress />
    </section>
  );
};

export default Timeline;