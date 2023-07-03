import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import color from "../../Assets/Projects/color-quiz.jpg";
import todo from "../../Assets/Projects/todolist.jpg";
import digital from "../../Assets/Projects/digital-clock.jpg";


import leaf from "../../Assets/Projects/clock.jpg";
import emotion from "../../Assets/Projects/music-player.jpg";
import editor from "../../Assets/Projects/password-generator.jpg";
import chatify from "../../Assets/Projects/foodtemplate.jpg";
import suicide from "../../Assets/Projects/watchme-website.jpg";

function Projects() {
  return (<>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food Template"
              description="Indulge your taste buds with our mouthwatering food template. With a perfect blend of HTML and CSS, this template showcases a delectable selection of dishes that will leave you craving for more. From vibrant salads to sizzling entrees, each dish is beautifully presented, inviting you to explore our culinary delights. With its elegant design and intuitive navigation, this template is sure to whet your appetite and enhance your online dining experience."
              ghLink="hhttps://github.com/KenanHasanzade/FoodTemplate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WacthMe website"
              description="Welcome to our stylish React.js e-commerce platform dedicated to the world of watches. Explore our collection of timepieces, crafted with elegance. From classic designs to modern innovations, our online store offers a wide range of options to suit every taste. With intuitive navigation and a seamless shopping experience, finding the perfect watch has never been easier. Embrace the art of timekeeping and discover the perfect timepiece."
              ghLink="https://github.com/KenanHasanzade/WatchMe-Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Password Generator"
              description="Enhance your online security with our HTML/CSS password generator. Powered by JavaScript, it effortlessly creates strong and unique passwords to protect your digital presence. With a single click, enjoy the convenience of generating highly secure passwords that meet your specific requirements. Take control of your online safety and enjoy peace of mind."
              ghLink="https://github.com/KenanHasanzade/Password-Generator"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Music Player"
              description="Immerse yourself in the rhythm of your favorite tunes with our HTML/CSS music player, elevated by the power of JavaScript. Enjoy seamless control over your playlist with play, stop, next, and previous buttons. Dive into a world of melodies and effortlessly navigate through your music library. Let the harmonious blend of HTML, CSS, and JavaScript take you on a musical journey like no other, making every listening experience unforgettable."
              ghLink="https://github.com/KenanHasanzade/Music-Player"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Clock"
              description="IExperience the passage of time in style with our HTML/CSS clock, enhanced by JavaScript. Witness the elegant dance of hour, minute, and second hands as they glide across the clock face, keeping perfect time. Immerse yourself in this visual masterpiece, where technology meets timeless beauty, bringing an exquisite timekeeping experience right to your screen."
              ghLink="https://github.com/KenanHasanzade/Clock"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Mini-game"
              description="Embark on a color-filled adventure with our HTML/CSS mini-game, powered by JavaScript. Challenge your perception and speed as you search for the correct RGB colors within a thrilling time limit. Immerse yourself in a vibrant world of hues, where every second counts. Sharpen your skills, beat the clock, and master the art of finding RGB colors in this captivating and addictive game."
              ghLink="https://github.com/KenanHasanzade/Color-Quiz"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="Stay organized and productive with our HTML/CSS to-do list, supercharged by JavaScript. Effortlessly manage your tasks, add deadlines, and check them off as you go. Enjoy the convenience of automatic updates and dynamic sorting, ensuring your priorities are always in focus. Experience a streamlined workflow and conquer your day with this intuitive and efficient to-do list."
              ghLink="https://github.com/KenanHasanzade/ToDoList"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digital}
              isBlog={false}
              title="Digital Clock"
              description="Stay punctual and stylish with our HTML/CSS digital clock, elegantly powered by JavaScript. Witness the seamless update of digits, displaying the current time effortlessly. Experience accurate timekeeping at your fingertips, ensuring you never miss a beat in your daily routine."
              ghLink="https://github.com/KenanHasanzade/Digital-CLock"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spinning Cube"
              description="Immerse yourself in a mesmerizing world of interactive design with our captivating HTML/CSS spinning cube enhanced by Javascript. Watch in awe as the cube gracefully rotates, revealing its vibrant colors and intricate patterns. Through seamless integration of these technologies, we have created an engaging visual experience that pushes the boundaries of web design. Prepare to be entranced as the cube spins, adding a touch of dynamism to your website."
              ghLink="https://github.com/KenanHasanzade/SpinningCube"
            />
          </Col> */}

          


          
        </Row>
      
      </Container>

    </Container>

    </>
  );
}

export default Projects;
