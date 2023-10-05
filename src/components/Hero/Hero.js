import React from 'react';

import { MainSection, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { AnimatedHeart, LeftSection } from './HeroStyles';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Hero = (props) => (
 <MainSection>
   <LeftSection>
      <FadeIn>
     <SectionTitle>
       Bienvenido a <br/>
          Mi Portfolio
       </SectionTitle>
       </FadeIn>
  
     <SectionText>
      Jorge Nicolas, programador Web Full Stack
     </SectionText>
     <Button onClick={ () => window.location = 'https://google.com'}>Saber mas</Button>
   </LeftSection>
</MainSection>
);

export default Hero;