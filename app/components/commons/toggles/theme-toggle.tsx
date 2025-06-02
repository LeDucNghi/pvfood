import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export interface IThemeToggleProps {
  theme: "light" | "dark";
}

export function ThemeToggle({ theme }: IThemeToggleProps) {
  const { setTheme } = useTheme();

  //   React.useEffect(() => {
  //     if (isDarkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-2">
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
}
