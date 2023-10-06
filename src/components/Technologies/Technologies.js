import React from "react";
import {
  DiFirebase,
  DiJava,
  DiJavascript,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tecnologias">
    <SectionDivider></SectionDivider> <br />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
      Trabajo y conozco un conjunto de tecnologías aplicadas al desarrollo web
      desde el back-end a front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia en <br />
            HTML, CSS, Javascript, Angular, React
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="5rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia en <br />
            PHP, NodeJs
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="5rem"></DiJava>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>Experiencia en diseño Front-End</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
