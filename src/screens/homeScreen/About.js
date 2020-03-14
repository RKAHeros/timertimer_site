import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  ${media.lessThan("767px")`
    width: 100%;
    padding-top: 20px;
  `}
  ${media.between("medium", "1025px")`
    width: 100%;
    padding-top: 120px;
  `}
`

const Box = styled.div`
  width: 70%;
  height: 70%;
  background: #fff;
  border: 10px solid #fff;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 30px;
  ${media.lessThan("767px")`
    width: 70%;
    height: 80%;
    padding: 5px;
  `}
  ${media.between("medium", "1025px")`
    width: 70%;
    padding-top: 20px;
  `}
`

const Messages = styled.div`
  opacity: .7;
`

const MessageHeader = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  ${media.lessThan("767px")`
    font-size: 20px;
  `}
`

const MessageLine = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`

const About = () => {
  return (
    <Wrapper>
      <Box>
        <Messages>
          <MessageHeader>TimerAndTimerとは</MessageHeader>
          <MessageLine>複数のタイムを連続してカウウトダウンするタイマーアプリです。</MessageLine>
          <MessageLine>連続して種目を行う筋トレ等に便利です。</MessageLine>
          <MessageLine>ご質問等は regou8718@gmail.com にご連絡ください。</MessageLine>
        </Messages>
      </Box>
    </Wrapper>
  )
}

export default About;