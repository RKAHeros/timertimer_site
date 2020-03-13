import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from "react-router-dom";
import Header from './Header';
import PicturePreview from './PicturePreview';
import About from './About';

const Wrapper = styled.div`
  width: 100%;
`

const MainSection = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background: skyblue;
  display: flex;
  ${media.lessThan("767px")`
    /* screen width is less than 768px (medium) mobile size */
    display: block;
    height: auto;
  `}
  ${media.between("medium", "1025px")`
    /* screen width is between 768px (medium) and 1025px (iPadPro 12.9) */
    display: block;
  `}
`

const Footer = styled.div`
  display: none;
  ${media.lessThan("767px")`
    /* screen width is less than 768px (medium) mobile size */
    display: block;
    height: auto;
    height: 100px;
  `}
`

const LinkItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid #000;
    &:hover{
      opacity: .6;
    }
  }
`

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <MainSection>
        <About />
        <PicturePreview />
      </MainSection>
      <Footer>
        <LinkItem><Link to='/privacy'>Privacy Policy</Link></LinkItem>
      </Footer>
    </Wrapper>
  )
}

export default Main;