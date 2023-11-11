import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/project-img.png';
import projImg2 from '../assets/img/project-img(2).png';
import projImg3 from '../assets/img/project-img(3).png';
import projImg4 from '../assets/img/project-img(4).png';
import projImg5 from '../assets/img/project-img(5).png';
import projImg6 from '../assets/img/project-img(6).png';
import projImg7 from '../assets/img/project-img(7).png';
import projImg8 from '../assets/img/project-img(8).png';
import projImg9 from '../assets/img/project-img(9).png';
import projImg10 from '../assets/img/project-img(10).png';
/* import 'animate.css';
import TrackVisibility from 'react-on-screen';
 */
export const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg4,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg5,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg6,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg7,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg8,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg9,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg10,
        },
      ];
     return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Estes são alguns dos projetos que realizei. Se desejar ver mais, por favor, visite o meu GitHub.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) =>{
                            return(
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) =>{
                            return(
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="thrid">
                      <Row>
                        {
                          projects.map((project, index) =>{
                            return(
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <Row>
                        {
                          projects.map((project, index) =>{
                            return(
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                      <Row>
                        {
                          projects.map((project, index) =>{
                            return(
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                  </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
      </section>
    )  
}