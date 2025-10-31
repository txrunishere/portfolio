import { About } from "./About";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Intro = () => {
  return (
    <div>
      <div className="space-y-7">
        <div>
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Tarun 👋
              </h1>
              <p className="font-semibold text-neutral-500 md:text-2xl dark:text-neutral-300">
                Full Stack Web Developer from India.
              </p>
            </div>
            <Avatar className="size-28 md:size-32">
              <AvatarImage alt="avatar-image" src="./src/assets/me.jpeg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};
