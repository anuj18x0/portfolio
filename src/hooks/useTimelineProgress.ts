import { useState, useEffect, useCallback } from "react";

export const useTimelineProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const updateProgress = useCallback(() => {
    const timelineElement = document.getElementById("timeline-container");
    if (!timelineElement) return;

    const rect = timelineElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineHeight = timelineElement.offsetHeight;
    
    // Calculate how much of the timeline is visible
    const visibleTop = Math.max(0, -rect.top);
    const visibleBottom = Math.min(timelineHeight, windowHeight - rect.top);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    
    // Calculate progress as percentage
    const progressPercentage = Math.min(100, Math.max(0, (visibleTop / timelineHeight) * 100));
    setProgress(progressPercentage);

    // Find active section based on scroll position
    const sections = document.querySelectorAll('[data-timeline-section]');
    let currentSection = 0;
    
    sections.forEach((section, index) => {
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top <= windowHeight / 2 && sectionRect.bottom >= windowHeight / 2) {
        currentSection = index;
      }
    });
    
    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollToSection = useCallback((sectionIndex: number) => {
    const section = document.querySelector(`[data-timeline-section="${sectionIndex}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return {
    progress,
    activeSection,
    scrollToSection,
  };
};