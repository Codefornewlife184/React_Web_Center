import React from "react";
import Slider2 from "../Components/common/Slider2";
import About from "../Components/about/About";
import Projects from "../Components/project/projects";
import ThreeBox from "../Components/common/ThreeBox";
import Comments from "../Components/comments/Comments";
import Question from "../Components/question/Question";
import Contactus from "../Components/contact/Contactus";


function HomePage() {
  return (
    <>
      <Slider2 />
      <ThreeBox/>
      <About />
      <Projects/>
      <Comments/>
      <Question/>
      <Contactus />
    </>
  );
}

export default HomePage;
