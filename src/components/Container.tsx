import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "mx-auto min-h-screen max-w-2xl px-4 py-6 md:px-0 md:py-24",
      )}
    >
      <TooltipProvider>
        <div className="space-y-7">{children}</div>
        <Navbar />
      </TooltipProvider>
    </div>
  );
};
