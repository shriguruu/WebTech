// Achievements page

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Content from "../components/Content";

function Achievements() {
  return (
    <div className="page-container">
      <Header textContent={"Achievements & Awards"} />

      <SubHeader textContent={"Academic Excellence"} />
      <ul>
        <li>
          <Content textContent={"Maintained a consistent CGPA of 8.69/10 at Shiv Nadar University Chennai."} />
        </li>
        <li>
          <Content textContent={"Secured Rank 2 in school in Class 12 Board examinations with a score of 95.2%."} />
        </li>
        <li>
          <Content textContent={"Secured Rank 2 in school in Class 10 Board examinations with a score of 97.8%."} />
        </li>
      </ul>

      <br />


      <SubHeader textContent={"Certifications"} />
      <ul>
        <li>
          <Content textContent={"Completed 'Programming in Java' by NPTEL (Jan-Apr 2025)."} />
        </li>
        <li>
          <Content textContent={"Completed 'Ethical Hacking' by NPTEL (July-Oct 2024)."} />
        </li>
      </ul>
    </div>
  );
}

export default Achievements;