import { Globe } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export type ProjectType = {
  projectName: string;
  image: string;
  projectDescription: string;
  stack: string[];
  source: {
    name: "Website" | "Github";
    icon: React.ReactNode;
    href: string;
  }[];
};

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github-icon lucide-github size-3"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const globeIcon = <Globe size={12} />;

export const Projects = () => {
  const projectsData: ProjectType[] = [
    {
      projectName: "Gupt Chat",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1762017000/gupt-chat_t3vmmh.png",
      projectDescription:
        "Features private room chats, instant messaging, and a clean, responsive design for both mobile and desktop users.",
      source: [
        {
          name: "Website",
          href: "https://gupt-chat.vercel.app",
          icon: globeIcon,
        },
      ],
      stack: ["React", "Express", "Tailwind CSS", "DaisyUI", "Pusher channels"],
    },
    {
      projectName: "Anonymous Review",
      projectDescription:
        "A platform for anonymous peer feedback and open review, enabling users to submit and receive honest commentary without revealing their identities.",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1762017000/anonymous-review_bqroms.png",
      stack: [
        "Next.js",
        "Typescript",
        "Shadcn",
        "react-hook-form",
        "zod",
        "MongoDB",
        "Tailwind CSS",
      ],
      source: [
        {
          name: "Website",
          href: "https://anonymous-review-y4cf.vercel.app/",
          icon: globeIcon,
        },
        {
          name: "Github",
          href: "https://github.com/txrunishere/anonymous-review",
          icon: githubIcon,
        },
      ],
    },
    {
      projectName: "Shopcom",
      projectDescription:
        "ShopCom is a full-stack e-commerce web application. It features user authentication, product management, cart functionality, and order processing",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1762017001/shopcom_lsiguk.png",
      source: [
        {
          name: "Github",
          href: "https://github.com/txrunishere/shopcom",
          icon: githubIcon,
        },
      ],
      stack: [
        "Express",
        "Prisma",
        "Postgresql",
        "Cloudinary",
        "React",
        "Tailwind CSS",
        "Apex Charts",
        "React Redux",
        "RTK Query",
      ],
    },
    {
      projectName: "Ai Code Generator",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1762524478/daba0af2-587e-49f2-bf07-de04de92a7fc.png",
      projectDescription:
        "An AI-powered web app that generates complete, responsive websites from user inputs. It helps users instantly create and customize modern designs without any coding.",
      source: [
        {
          name: "Website",
          icon: globeIcon,
          href: "https://ai-website-generator-delta.vercel.app/",
        },
        {
          name: "Github",
          href: "https://github.com/txrunishere/ai-website-generator-frontend",
          icon: githubIcon,
        },
      ],
      stack: ["React", "Express", "Shadcn", "TailwindCSS", "Gemini API"],
    },
    {
      projectName: "Job Portal",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1762533741/919cec3d-9e22-4df6-9a13-78db4fb196ec.png",
      projectDescription:
        "A job search platform built with React and Vite, featuring dynamic listings, advanced filtering, and a responsive UI for seamless job browsing and applications.",
      source: [
        {
          href: "https://github.com/txrunishere/job-portal-react/",
          icon: githubIcon,
          name: "Github",
        },
      ],
      stack: ["React", "json-server", "React Router", "TailwindCSS"],
    },
  ];

  return (
    <div className="space-y-4">
      <h6 className="text-xl font-bold">My Projects</h6>
      <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.projectName} project={project} />
        ))}
      </section>
    </div>
  );
};
