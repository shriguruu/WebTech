// Projects page

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Content from "../components/Content";

function Projects()
{
    return(
        <div className="page-container">
            <Header textContent={"Projects"}></Header>
            
            <SubHeader textContent={"Conference Booking System"} />
      <Content textContent={"Technologies: Python, Django, HTML, CSS, MySQL"} />
      <ul>
        <li>
          <Content textContent={"Engineered a full-stack web application from the ground up using Python and Django, creating a platform for users to browse, book, and manage conference events."} />
        </li>
        <li>
          <Content textContent={"Designed and implemented a relational database schema in MySQL to handle complex relationships between users, events, and bookings."} />
        </li>
        <li>
          <Content textContent={"Developed a secure user authentication system featuring registration, login, and role-based permissions for administrators and regular users."} />
        </li>
        <li>
          <Content textContent={"Leveraged the Django ORM (Object-Relational Mapper) to execute efficient and secure database operations, abstracting complex SQL queries into Python code."} />
        </li>
      </ul>

        </div>
    )
}

export default Projects;