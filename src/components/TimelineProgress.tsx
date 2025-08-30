import { motion } from "framer-motion";
import { useTimelineProgress } from "@/hooks/useTimelineProgress";
import { timelineProjects } from "@/lib/timelineData";
import { Button } from "@/components/ui/button";

const TimelineProgress = () => {
  const { progress, activeSection, scrollToSection } = useTimelineProgress();

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="glass-card p-4 w-16">
        {/* Progress Bar */}
        <div className="relative w-2 h-64 bg-muted/30 rounded-full mx-auto mb-4">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-cyber rounded-full origin-top"
            style={{ height: `${progress}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Section Dots */}
        <div className="flex flex-col items-center space-y-3">
          {timelineProjects.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${
                activeSection === index 
                  ? "bg-primary glow-primary" 
                  : "bg-muted hover:bg-primary/50"
              }`}
              onClick={() => scrollToSection(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Text */}
        <div className="text-center mt-4">
          <span className="text-xs text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineProgress;