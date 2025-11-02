import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "mx-auto mb-16 min-h-screen max-w-2xl px-4 py-6 md:mb-2 md:px-0 md:py-24",
      )}
    >
      <TooltipProvider>
        <Toaster position="top-center" closeButton={true} />
        <QueryClientProvider client={queryClient}>
          <div className="space-y-8">{children}</div>
        </QueryClientProvider>
        <Navbar />
      </TooltipProvider>
    </div>
  );
};
