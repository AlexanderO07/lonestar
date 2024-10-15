import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
    children: ReactNode;
    text: string;
  }
  
  export function Tooltip({ children, text }: TooltipProps) {
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative inline-block"
      >
        {children}
        {isHovering && (
          <div
            className={cn(
              "absolute right-full ml-2 whitespace-nowrap bg-gray-700 text-white text-sm px-2 py-1 rounded"
            )}
          >
            {text}
          </div>
        )}
      </div>
    );
  }
  