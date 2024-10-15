import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Logo(props: { className?: string, link?: string }) {
  // Detect if the user is in dark or light theme (assuming you have a way to determine this)
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    // Assuming you're using a theme management system, set the theme accordingly
    const userTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(userTheme as 'dark' | 'light');
  }, []);

  return (
    <Link
      href={props.link ?? '/'}
      className={cn("items-center space-x-2", props.className)}
    >
      <span
        className={`font-bold sm:inline-block text-5xl logo ${
          theme === 'dark' ? 'dark-mode' : 'light-mode'
        }`}
      >
        ◈

      </span>
      {/* header name */}
    </Link>
  );
}
