import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, techFilters } from "@/lib/timelineData";
import { Filter, X } from "lucide-react";
import { useState } from "react";

interface TimelineFiltersProps {
  selectedCategory: string;
  selectedTech: string[];
  onCategoryChange: (category: string) => void;
  onTechChange: (tech: string[]) => void;
  projectCount: number;
}

const TimelineFilters = ({
  selectedCategory,
  selectedTech,
  onCategoryChange,
  onTechChange,
  projectCount
}: TimelineFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      onTechChange(selectedTech.filter(t => t !== tech));
    } else {
      onTechChange([...selectedTech, tech]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange("All");
    onTechChange([]);
  };

  const hasActiveFilters = selectedCategory !== "All" || selectedTech.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-20 z-30 mb-8"
    >
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="heading-display text-lg">Filter Projects</h3>
            <Badge variant="secondary" className="text-xs">
              {projectCount} projects
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-primary"
              >
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="lg:hidden"
            >
              {isExpanded ? "Less" : "More"}
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className={`magnetic transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-cyber border-0 glow-primary"
                    : "glass-card hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tech Stack Filters */}
        <AnimatePresence>
          <motion.div
            initial={{ height: isExpanded ? "auto" : 0 }}
            animate={{ height: isExpanded || window.innerWidth >= 1024 ? "auto" : 0 }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techFilters.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant={selectedTech.includes(tech) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedTech.includes(tech)
                        ? "bg-secondary glow-secondary border-secondary"
                        : "hover:bg-secondary/20 border-muted"
                    }`}
                    onClick={() => toggleTech(tech)}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TimelineFilters;