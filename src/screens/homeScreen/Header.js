import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from "react-router-dom";
import icon from '../../images/icon.png';

const HeaderArea = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.lessThan("767px")`
    justify-content: center;
    height: 80px;
  `}
`

const HeaderLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 60px;
  ${media.lessThan("767px")`
    margin: 0;
  `}
`

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-image: url(${icon});
  background-size: cover;
  background-position: center;
  margin-right: 20px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const HeaderRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 60px;
  ${media.lessThan("767px")`
    display: none;
  `}
`

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    font-size: 20px;
    text-decoration: none;
    color: #000;
    ${media.between("medium", "1025px")`
      border-bottom: 2px solid #000;
    `}
    &:hover{
      opacity: .6;
    }
  }
`

const Header = () => {
  return (
    <HeaderArea>
      <HeaderLeft>
        <Logo></Logo>
        <Title>
          TimerTimer
        </Title>
      </HeaderLeft>
      <HeaderRight>
        <LinkItem>
          <Link to='/privacy'>Privacy Policy</Link>
        </LinkItem>
      </HeaderRight>
    </HeaderArea>
  )
}

export default Header;