import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export const Skills = () => {
  const skillImagePrefix = "https://cdn.simpleicons.org";

  const skills: string[] = [
    "Javascript",
    "Typescript",
    "Python",
    "React",
    "Next.js",
    "TailwindCSS",
    "Appwrite",
    "Firebase",
    "Node.js",
    "Express",
    "MongoDB",
    "Postgresql",
    "MySQL",
    "Prisma",
    "Postman",
    "GraphQl",
    "Linux",
    "Supabase",
    "Docker",
  ];

  return (
    <div className="mt-10 space-y-4">
      <h6 className="text-xl font-bold">Skills</h6>
      <section className="flex flex-wrap gap-2 leading-none">
        {skills.map((skill) => (
          <Badge
            variant={"secondary"}
            key={skill}
            className="gap- flex items-center"
          >
            <Avatar className="size-5 md:size-6">
              <AvatarImage
                className="object-contain"
                src={`${skillImagePrefix}/${skill.trim().toLowerCase()}`}
              />
              <AvatarFallback>{skill[0]}</AvatarFallback>
            </Avatar>
            <span>{skill}</span>
          </Badge>
        ))}
      </section>
    </div>
  );
};
