import React from 'react';

import { MainSection, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { AnimatedHeart, LeftSection } from './HeroStyles';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Header from '../Header/Header';

const Hero = (props) => (
 <MainSection>
  <Header/>
   <LeftSection>
      <FadeIn>
     <SectionTitle>
       Bienvenido a <br/>
          Mi Portfolio
       </SectionTitle>
       </FadeIn>
  
     <SectionText>
      Jorge Morales, programador Web Full Stack
     </SectionText>
     <Button onClick={ () => window.location = 'https://google.com'}>Descargar CV</Button>
   </LeftSection>
</MainSection>
);

export default Hero;