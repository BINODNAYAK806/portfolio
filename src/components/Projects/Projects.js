import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

// import Udemy from "../../Assets/Projects/udemy.jpg";
// import Meesho from "../../Assets/Projects/meesho.jpg";
import YtMusic from "../../Assets/Projects/coshe.PNG";
// import Airtable from "../../Assets/Projects/airtable.jpg";
import Overstock from "../../Assets/Projects/OVERSTOCK.PNG"
import dinout from "../../Assets/Projects/DINOUT.PNG"
const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: Overstock,
    title: "OverStock Clone",
    description: "OverStock is an E-Commerce website for furniture and home decor needs of a modern house with great deals and discount.",
    link: "https://github.com/aalesh01/OverStock-Clone",
    demo: "https://main.d2vovrrbc2xoyo.amplifyapp.com/",
    stack: ["javascript", "node", "html", "css", "git"]
  },
  {
    imgPath: dinout,
    title: "Dineout Web Clone",
    description: "Dineout is a table booking platform helping customers to do table booking in their favourite restaurants. We were a team of four members, distributed the whole website amoung us. and make a clone website of Dineout in 5 days.",
    link: "https://github.com/SwapnilMeshram19/Dineout-Clone",
    demo: "https://dineout-cloned.netlify.app/",
    stack: ["javascript", "node", "html", "css", "git"]
  }
  ,
  {
    imgPath: YtMusic,
    title: "CoSchedule  Clone",
    description: "Co schedule A calendar that helps you see, schedule, and share your marketing. A family of agile marketing products to coordinate your team, projects, and process.",
    link: "https://github.com/Be-create/CoSchedule",
    demo: "https://endearing-dragon-3d98da.netlify.app/",
    stack: ["javascript", "html", "css", "react", "redux", "git",]
  }
  // {
  //   imgPath: Airtable,
  //   title: "Airtable Clone",
  //   description: "UI clone of Airtable, a cloud-based software company that offers an online platform for creating and sharing relational databases.",
  //   link: "https://github.com/charandas31/Airtable_Clone",
  //   demo: "https://rshukla12.github.io/Airtable_Project2/",
  //   stack: ["javascript", "html", "css", "git"]
  // }
];


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", gap: "0.5rem" }}>
          {
            projects.map(project => (
              <Col key={project.title} xs={12} sm={10} lg={6} className="project-card">
                <ProjectCard
                  {...project}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
