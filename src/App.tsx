import {
  Container,
  Education,
  GithubCalendar,
  Intro,
  Projects,
  Skills,
  LeaveANote,
} from "./components";
import { BlurFade } from "./components/ui/blur-fade";

export const App = () => {
  return (
    <Container>
      <BlurFade delay={0.3} duration={0.5}>
        <Intro />
      </BlurFade>
      <BlurFade delay={0.3} duration={0.5}>
        <GithubCalendar />
      </BlurFade>
      <BlurFade delay={0.3} duration={0.5}>
        <Education />
      </BlurFade>
      <BlurFade delay={0.3} duration={0.5}>
        <Skills />
      </BlurFade>
      <BlurFade delay={0.3} duration={0.5}>
        <Projects />
      </BlurFade>
      <BlurFade delay={0.3} duration={0.5}>
        <LeaveANote />
      </BlurFade>
    </Container>
  );
};
