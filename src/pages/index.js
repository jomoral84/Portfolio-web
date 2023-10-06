import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ScrollButton from "../components/ScrollButton/ScrollButton";

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* <BgAnimation /> */}

      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <ScrollButton />
    </Layout>
  );
};

export default Home;
