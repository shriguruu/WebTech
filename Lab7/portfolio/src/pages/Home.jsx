// Home page

import Header from "../components/Header.jsx";
import SubHeader from "../components/SubHeader.jsx";
import Content from "../components/Content.jsx";


function Home() {
  return (
     <div className="page-container">
      <Header textContent={"Shri Guruu G"} />
      <SubHeader textContent={"AI & Data Science Student | Full-Stack Web Developer"} />

      <Content textContent={
        "I am a third-year Artificial Intelligence and Data Science student with a strong passion for building elegant and functional web solutions. I thrive on the challenge of transforming complex problems into intuitive, responsive applications. My goal is to bridge the gap between data-driven insights and user-centric design."
      } />
      
      <br />
      
      <Content textContent={
        "I am particularly excited by the intersection of machine learning and web technology, and I am actively seeking opportunities to apply my skills to create intelligent, real-world applications."
      } />
    </div>
  );
}

export default Home;