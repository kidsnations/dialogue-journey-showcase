import { useEffect, useState } from "react";
import projectDiagram from "@/assets/project-diagram.png";

interface DiagramDisplayProps {
  delay: number;
}

const DiagramDisplay = ({ delay }: DiagramDisplayProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`dialog-enter ${
        isVisible ? "dialog-enter-active" : ""
      } mt-12`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="professional-card p-6">
          <h2 className="text-2xl font-semibold text-center mb-6 gradient-text">
            Project Architecture Overview
          </h2>
          <div className="relative">
            <img
              src={projectDiagram}
              alt="DevOps Project Architecture Diagram showing the migration from monolithic to containerized environment using Azure Kubernetes Services"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagramDisplay;