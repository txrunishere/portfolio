import { type ProjectType } from "./Projects";
import { Badge } from "./ui/badge";

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="bg-card text-card-foreground flex min-h-[400px] flex-col overflow-hidden rounded-xl border shadow-sm">
      <div className="">
        <img src={project.image} alt="" />
      </div>
      <div className="flex-1 p-2">
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="">
            <h6 className="text-[16px] font-bold">{project.projectName}</h6>
            <p className="text-muted-foreground text-sm">
              {project.projectDescription}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {project.stack.map((item) => (
                <Badge className="rounded-lg" key={item} variant={"outline"}>
                  {item}
                </Badge>
              ))}
            </div>
            <div className="space-x-2">
              {project.source.map(({ href, icon, name }) => (
                <button
                  key={name}
                  className="bg-primary inline-flex rounded-lg px-2 py-1 text-white dark:bg-white dark:text-black"
                >
                  <a
                    target="_blank"
                    className="flex items-center gap-1"
                    href={href}
                  >
                    <span className="">{icon}</span>
                    <span className="text-[12px]">{name}</span>
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
