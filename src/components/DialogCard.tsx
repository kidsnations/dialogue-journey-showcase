import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface DialogCardProps {
  message: string;
  delay: number;
  className?: string;
}

const DialogCard = ({ message, delay, className = "" }: DialogCardProps) => {
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
      } ${className}`}
    >
      <Card className="professional-card max-w-4xl mx-auto">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-foreground font-medium">
            {message}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DialogCard;