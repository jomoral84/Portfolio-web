import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <AiOutlinePhone></AiOutlinePhone>Telefono
          </LinkTitle>
          <LinkItem>11-3047-6814</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>
            <AiOutlineMail></AiOutlineMail>Email
          </LinkTitle>
          <LinkItem>jor22_84@hotmail.com</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem>Mi cuenta</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Aplicando conocimientos</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
