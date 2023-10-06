import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import ScrollToTop from "../../styles/GlobalComponents/ScrollToTop";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          {" "}
         
          <img src="../images/Logo2.jpg"/>
          <Span>Portfolio</Span>{" "}
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projectos">
          <NavLink>Projectos</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tecnologias">
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>Contacto</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub Size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin Size="4rem" />
      </SocialIcons>{" "}
      
    </Div3>
  </Container>
);

export default Header;
