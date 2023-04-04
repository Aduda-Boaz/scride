import React from 'react';
import 'react-multi-carousel/lib/styles.css';

const About = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Who Are We</h2>
                        <p>SCRIDE is an abbreviation for Step by Step, Current Recurring Innovative Support Towards Determined Excellence. <br/> <br/> This agency is an advisory to government, private and non-Governmental organizations on staff development, leadership, and management; child and adolescent development; family strengthening and sustainable development.  We are committed to transforming and standardizing the organization’s operations for increased outcome attainment. We do this through developing long lasting relationships with organizations for strategic comprehension, provision of innovative and up to date advice and support,  in utilization and implementation of standardized operation for improved outcome attainment. We value professionalism, dignity, integrity, patient support and teamwork.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;