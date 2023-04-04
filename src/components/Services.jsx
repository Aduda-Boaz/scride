import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ServiceCard } from './ServiceCard';
import service1 from '../assets/img/background_bg.png';
import consulting from '../assets/img/consulting_bg.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Services = () => {

  const services = [
    {
      title: "STRATEGY & ANALYSIS",
      description: "The Strategy and Analysis team has delivered numerous studies that have covered a broad range of topics. Key areas of expertise include: Leadership development and management, Organizational development, Change management, Strategic planning and management",
      imgUrl: service1,
    },
    {
      title: "PROGRAM MANAGEMENT SERVICES",
      description: "Key areas of expertise include: Program beneficiary analysis, Curriculum development, Intentional child and youth development, Program theory development, Setting of Monitoring, Evaluation and Research Systems, Staff development and management",
      imgUrl: consulting,
    },
    {
      title: "SUSTAINABLE DEVELOPMENT",
      description: "Fundraising and management & Family strengthening",
      imgUrl: consulting,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Services</h2>
                <p>SCRIDE Consultancy Agency is the leader in research and analysis for organizational care, support, and development. We are keen to serving our clients with diligence with aim of supporting their systems and structures to a better future where they are fluid to handle complex and dynamic needs of their clients 
     We recognize the varied client needs, the consulting services are divided into three major areas which include: strategy and analysis, Program Management and Sustainability Development. Every team in the agency has remained committed to the clients needs and are able to provide support and are prompt to respond to clients’ needs with a focused approach to develop needed systems for clients target beneficiaries.  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CONSULTING SERVICES</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          services.map((service, index) => {
                            return (
                              <ServiceCard
                                key={index}
                                {...service}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services;
