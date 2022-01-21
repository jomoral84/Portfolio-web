import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { AnimatedHeart, LeftSection, Heart, PulseDiv } from './HeroStyles';

const Hero = (props) => (
 <Section>
   <LeftSection>
     <SectionTitle>
        <PulseDiv>
        Bienvenido a <br/>
          Mi Portfolio
        </PulseDiv>
        
     </SectionTitle>
     <SectionText>
       Mis propositos agregar aqui
     </SectionText>
     <Button onClick={ () => window.location = 'https://google.com'}>Saber mas</Button>
   </LeftSection>


 </Section>
);

export default Hero;