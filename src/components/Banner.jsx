import { Container, Row, Col } from 'react-bootstrap';
import supportServices from '../assets/img/support-services.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => { 
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Scride Consultancy</span>
                <h1>{'We Value'} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Professionalism", "Dignity", "Integrity", "Patient", "Teamwork" ]'><span className="wrap"></span></span></h1>
                  <p>We are committed to transforming and standardizing the organization’s operations for increased outcome attainment.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={supportServices} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
