import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import BlogApp from "../assets/projects/blogApp.png";
import imageEdit from "../assets/projects/imageEdit.png";
import Resort from "../assets/projects/resort.png";
import Ecomerce from "../assets/projects/ecomerce.png";
import Recomerce from "../assets/projects/rsecomerce.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomerce}
              isBlog={false}
              title="E‑Commerce Website(MERN)"
              description="This ecommerce website employs a Node.js and Express.js REST API for CRUD operations on user profiles, products, and admin panel. It has an efficient UI for product management, a complete purchase process, and integrates Stripe API for payments. MongoDB and Firebase serve as the database."
              ghLink="https://github.com/hishamak18/mhak-react"
              demoLink="https://mhak.live"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resort}
              isBlog={false}
              title="Resort Booking Website(MERN)"
              description="This MERN stack resort reservation website enables users to reserve rooms, check availability, and offers an admin page for streamlined reservations and price updates. The website leverages MongoDB for the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment."
              ghLink="https://github.com/hishamak18"
              demoLink="https://mountainvibes.co.in"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlogApp}
              isBlog={false}
              title="Blog App (MERN)"
              description="The MERN stack blog app is a web application that allows users to create, read, update, and delete blog posts. It uses MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment. Users can write and publish blog posts with ease."
              ghLink="https://github.com/hishamak18"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageEdit}
              isBlog={false}
              title="Responsive Image Editor(JavaScript)"
              description="This responsive image editor is implemented using JavaScript. Users can upload images, edit them using various editing tools, and save the edited image. The editor is designed to be responsive, ensuring a seamless user experience across different devices and screen sizes."
              ghLink="https://github.com/hishamak18/Image-Editor-With_JS"
              demoLink="https://hishamak18.github.io/Image-Editor-With_JS/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recomerce}
              isBlog={false}
              title="Responsive E-commerce website (Frontend)"
              description="This responsive e-commerce website's frontend is developed using HTML, CSS, and JavaScript. It features a user-friendly interface that adapts to different screen sizes and devices. The website includes essential e-commerce functionalities such as product listings, search, cart management, and a checkout process."
              ghLink="https://github.com/hishamak18/ResponsiveEcomerseDesign"
              demoLink="https://hishamak18.github.io/ResponsiveEcomerseDesign/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
