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
      projectName: "POV",
      projectDescription:
        "A modern social media app that lets users create posts and engage by liking and saving content.",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1767387684/1230b67c-cebe-46c8-9c10-32e796dbc5ff.png",
      source: [
        {
          name: "Github",
          href: "https://github.com/txrunishere/POV",
          icon: githubIcon,
        },
      ],
      stack: [
        "React",
        "shadcn",
        "react-hook-form",
        "zod",
        "Appwrite",
        "Tanstack Query",
      ],
    },
    {
      projectName: "Job Khojo",
      image:
        "https://res.cloudinary.com/dpp16pzli/image/upload/v1764594472/186fa7c0-855a-41d6-b6ec-9e3fb9c26433.png",
      projectDescription:
        "A full-stack web application that connects job seekers with employers: employers can post job vacancies and seekers can search and apply.",
      source: [
        {
          href: "https://github.com/txrunishere/job-khojo/",
          icon: githubIcon,
          name: "Github",
        },
      ],
      stack: [
        "React",
        "React Router",
        "TailwindCSS",
        "Shadcn",
        "Clerk",
        "Supabase",
        "zod",
        "Tanstack Query",
        "react-hook-form",
        "Recharts",
        "Context API",
      ],
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
