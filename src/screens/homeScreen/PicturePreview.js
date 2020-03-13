import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import images1 from '../../images/iphone11promax/iphone11_1.png';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  ${media.lessThan("767px")`
    width: 100%;
    padding-bottom: 20px;
  `}
  ${media.between("medium", "1025px")`
    width: 100%;
    padding-top: 50px;
  `}
`

const ImgBox = styled.div` 
  width: 210px;
  height: 427px;
  margin: 0px auto 20px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  position: relative;
  ::before{
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-image: url(${images1});
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  }
  ::after{
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    width: 95px;
    height: 12px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  ${media.lessThan("767px")`
    margin: 0 auto;
  `}
  ${media.between("medium", "1025px")`
    margin-bottom: 40px;
  `}
`

const PicturePreview = () => {

  return (
    <Wrapper>
      <div>
        <ImgBox></ImgBox>
      </div>
    </Wrapper>
  )
}

export default PicturePreview;