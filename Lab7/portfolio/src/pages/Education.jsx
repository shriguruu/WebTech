// Education page

import Header from "../components/Header";
import Content from "../components/Content";
import SubHeader from "../components/SubHeader";

function Education(){
    return(
        <div className="page-container">
            <Header textContent={"Education"}></Header>
            <SubHeader textContent={"Shiv Nadar University Chennai"}/>
            <Content textContent={"B.Tech Artificial Intelligence and Data Science"}/>
            

            <br></br>

            <SubHeader textContent={"Velammal Vidhyashram Mambakkam"}/>
            <Content textContent={"Senior Secondary"}/>
            
        </div>
    )
}

export default Education;