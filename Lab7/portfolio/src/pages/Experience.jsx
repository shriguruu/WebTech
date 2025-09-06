// Experience page

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Content from "../components/Content";

function Experience() {
  return (
    <div className="page-container">
      <Header textContent={"Experience"} />

      <SubHeader textContent={"Full-Stack Developer (Academic Project)"} />
      <Content textContent={"Project: Conference Booking System | Jan 2025 - Apr 2025"} />
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

      <br />

      <SubHeader textContent={"Career Objectives"} />
      <Content textContent={"As a passionate and motivated third-year student, I am actively seeking an internship or co-op opportunity for Summer 2026. I am eager to apply my academic knowledge in a professional environment, contribute to meaningful projects, and learn from experienced mentors in the field of full-stack development or software engineering."} />
    </div>
  );
}

export default Experience;