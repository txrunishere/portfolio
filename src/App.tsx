import { Container, Education, Intro } from "./components";
import { BlurFade } from "./components/ui/blur-fade";

export const App = () => {
  return (
    <Container>
      <BlurFade delay={0.3} duration={0.5}>
        <Intro />
      </BlurFade>
      <BlurFade delay={0.3} duration={0.5}>
        <Education />
      </BlurFade>
    </Container>
  );
};
