import React from 'react'
import HomeStyle from './HomeStyle'
import MyImg from "../../assets/images/myImg.jpg"
import CircularRotatingImg from '../../components/CircularRotatingImg/CircularRotatingImg'
import styled from 'styled-components'
import TwoCircleButton from '../../components/TwoCircleButton/TwoCircleButton'
import { motion } from 'framer-motion'

const ModifiedCircularRotatingImg = styled(CircularRotatingImg)`
position: absolute;
right: 5%;
bottom: 0%;
@media screen and (max-width: 854px) {

  width: 35vw;
  height: 35vw;
}

@media screen and (max-width: 488px) {
  bottom: 25%;
}

`;

const ModifiedTwoCircleButton = styled(TwoCircleButton)`

margin: 5em auto;

@media screen and (max-width: 1080px) {

margin: 0 auto;
}
@media screen and (max-width: 856px) {

margin: 7em auto 0 auto;
}

@media screen and (max-width: 488px) {
margin: 0 auto;
    a{
        font-size: 5vw;
    }
    .circle_button{
    width: 35vw;
    height: 20vw;
    }
}

@media screen and (max-width: 400px) {

margin: -7em auto 0 auto;
}
`;
const homeAnimate = {
  initial: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
      type: "spring"
    }
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring"
    }
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 1,
      type: "spring"
    }
  }
}

const Home = () => {
  return (
    <>
      <HomeStyle as={motion.div}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={homeAnimate}
        backgroundImg={MyImg}>
        <div className="home_img_container"></div>
        <div className="home_small_heading_container">
          <h1>I am <span>FullStack Developer</span></h1>
        </div>
        <ModifiedCircularRotatingImg
          minSize="15vw"
          maxSize="100px"
        />
        <div className="home_big_name_container">
          <h1>ANUBHAV</h1>
          <h1>SHUKLA</h1>
        </div>
      </HomeStyle>
      <ModifiedTwoCircleButton className="home_two_circle_button" link="mailto:anubhav008shukla"
        text="HIRE ME"
      />
    </>

  )
}

export default Home