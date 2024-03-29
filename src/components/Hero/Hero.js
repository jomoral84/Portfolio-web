import React from "react";
import Zoom from "react-reveal/Zoom";

import {
  MainSection,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { AnimatedHeart, LeftSection } from "./HeroStyles";
import FadeIn from "react-fade-in/lib/FadeIn";
import Header from "../Header/Header";
import DownloadCv from "./DownloadCv";

const Hero = (props) => (
  <MainSection>
    <Header />
    <LeftSection>
      <Zoom>
        <SectionTitle>
          Bienvenido a <br />
          Mi Portfolio
        </SectionTitle>
      </Zoom>

      <SectionText>Jorge Morales, programador Web Full Stack</SectionText>

      <DownloadCv />
    </LeftSection>
  </MainSection>
);

export default Hero;
