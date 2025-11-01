import { HomeIcon, Github, Twitter, Mail, Linkedin } from "lucide-react";
import { Dock, DockIcon } from "./ui/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export const Navbar = () => {
  const DATA = {
    navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
    social: [
      { name: "GitHub", url: "https://github.com/txrunishere", icon: Github },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tarun-soni-246213390/",
        icon: Linkedin,
      },
      { name: "X", url: "https://x.com/devtarunhere", icon: Twitter },
      {
        name: "Email",
        url: "mailto:tson9286@gmail.com",
        icon: Mail,
      },
    ],
  };

  return (
    <div className="fixed inset-x-0 bottom-0 mb-4">
      <Dock className="rounded-4xl" direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  <item.icon className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator
          orientation="vertical"
          className="h-full w-px bg-[#E5E5E5] dark:bg-[#222323]"
        />
        {DATA.social.map((item) => {
          const Icon = item.icon;

          return (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                    aria-label={item.name}
                  >
                    <Icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-full w-px bg-[#E5E5E5] dark:bg-[#222323]"
        />
        <AnimatedThemeToggler className="px-2" />
      </Dock>
    </div>
  );
};
