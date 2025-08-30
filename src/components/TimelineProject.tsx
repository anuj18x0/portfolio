import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Share2, 
  Calendar, 
  Users, 
  TrendingUp,
  Award,
  ChevronRight
} from "lucide-react";
import { TimelineProject as ProjectType } from "@/lib/timelineData";
import { useState } from "react";
import { toast } from "sonner";

interface TimelineProjectProps {
  project: ProjectType;
  index: number;
  isVisible: boolean;
}

const TimelineProject = ({ project, index, isVisible }: TimelineProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${project.title} - Arth Arvind Portfolio`,
      text: project.caption,
      url: `${window.location.origin}#project-${project.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Project link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast.error("Failed to share project");
    }
  };

  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    planned: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  };

  return (
    <motion.div
      id={`project-${project.id}`}
      data-timeline-section={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0.3, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`relative ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background glow-primary z-10 lg:block hidden" />
      
      {/* Project Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className={`${index % 2 === 0 ? "lg:text-left" : "lg:text-left"} mb-16`}
      >
        <Card className="glass-card magnetic border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden group">
          <CardHeader className="pb-4">
            <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col lg:flex-row`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 justify-start">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <Badge className={`text-xs ${statusColors[project.status]}`}>
                    {project.status.replace("-", " ")}
                  </Badge>
                </div>
                
                <h3 className="heading-display text-2xl mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.caption}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 justify-start">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="glass-card border-primary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {project.metrics.users && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{project.metrics.users}</span>
                      </div>
                    )}
                    {project.metrics.performance && (
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{project.metrics.performance}</span>
                      </div>
                    )}
                    {project.metrics.impact && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{project.metrics.impact}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Expandable Description */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ChevronRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:bg-primary/10"
              >
                {isExpanded ? "Show Less" : "Learn More"}
                <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
              </Button>

              <div className="flex items-center gap-2">
                {project.links?.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}

                {project.links?.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="hover:bg-primary/10"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TimelineProject;