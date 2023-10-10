import styled from "styled-components";

export const Img = styled.img`
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  margin: 20px 20px 20px 20px;
  display: flex;
  align-items: "center";
  justify-content: "center";
  height: auto;
  width: auto;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 6rem;
  row-gap: 6rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;


export const BlogCard = styled.div`
  background: linear-gradient(#536976,#292E49);
  border-radius: 10px;
  box-shadow: 0px 0px 15px -8px black;
  position: relative;
  text-align: center;
  width: 450px;
  height: 600px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ProjectCard = styled.div`
  height: 52rem;
  width: 35rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleContent = styled.div`
  padding: 5px 5px 5px 5px;
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  width: 100%;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 1rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  word-spacing: 0.5px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #1a2980;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #26a0da;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;



