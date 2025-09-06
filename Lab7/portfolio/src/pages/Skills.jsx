// Skills page

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Content from "../components/Content";

function Skills()
{
    return(
        <div className="page-container">
            <Header textContent={"Skills"}></Header>
            <SubHeader textContent={"Languages:"}/>
            <Content textContent={"Java, Python, C/C++, HTML/CSS"}/>

            <br></br>

            <SubHeader textContent={"Tools & Libraries:"}/>
            <Content textContent={"Git, VS Code, Pandas, Numpy, Scikit-Learn, Streamlit"}/>

            <br></br>

            <SubHeader textContent={"Core Concepts:"}/>
            <Content textContent={"OOP, DBMS, Data Structures, Design and Analysis of Algorithms, Computer Organization and Architecture"}/>
        </div>
    )
}

export default Skills;