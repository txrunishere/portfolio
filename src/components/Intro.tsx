import { About } from "./About";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const Intro = () => {
  const handleOpenResume = () => {
    window.open(`${import.meta.env.VITE_FRONTEND_URL}/cv.pdf`, "_blank");
  };

  return (
    <div>
      <div className="space-y-7">
        <div>
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="bg-linear-to-b from-neutral-500/50 to-neutral-700 bg-clip-text font-bold text-transparent dark:from-neutral-50 dark:to-neutral-500">
                    Hi, I'm Tarun
                  </span>{" "}
                  <span>👋</span>
                </h1>
                <p className="font-semibold text-neutral-500 md:text-2xl dark:text-neutral-300">
                  Full Stack Web Developer from India.
                </p>
              </div>
              <Avatar className="size-28 md:size-32">
                <AvatarImage
                  alt="avatar-image"
                  src="https://res.cloudinary.com/dpp16pzli/image/upload/v1762017001/me_fzritj.jpg"
                />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div>
            <Button onClick={handleOpenResume}>RESUME</Button>
          </div>
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};
