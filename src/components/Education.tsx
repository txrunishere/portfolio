import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export const Education = () => {
  const DATA = [
    {
      image: "./src/assets/school-img.jpeg",
      name: "V.M. Public Sr. Sec. School",
      qualification: "12th Standard",
      yearString: "2020 - 2023",
    },
    {
      image: "./src/assets/college-img.jpg",
      name: "Baby Happy Modern P.G. College",
      qualification: "BCA (Bachelor in Computer Applications)",
      yearString: "2024 - present",
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold">Education</h3>
      {DATA.map(({ image, name, qualification, yearString }) => (
        <section className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div>
                <Avatar className="size-12 md:size-16">
                  <AvatarImage className="object-cover" src={image} />
                  <AvatarFallback>SDI</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h6 className="text-sm font-bold">{name}</h6>
                <p className="text-[10px] md:text-sm">{qualification}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[12px] md:text-sm">{yearString}</p>
          </div>
        </section>
      ))}
    </div>
  );
};
