import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NextLink from "next/link";

const Home: React.FC = () => {
  return (
    <section className="banner bg-soft-orange">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-content">
              <h1 className="mb-30 text-uppercase" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">Rodrigo Vale</h1>
              <p className="lead mb-30" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600" data-aos-easing="ease-out-cubic">Engenheiro Civil, Gestor de Projetos, Metodologias Ágeis (Scrum Master) e Desenvolvedor Júnior!!</p>
              <div className="socials-icons socials-grey" data-aos="fade-up" data-aos-duration="400" data-aos-delay="800" data-aos-easing="ease-out-cubic">
                <NextLink href={"https://www.instagram.com/rodriigovale"} >
                  <a rel="noopener noreferrer" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </NextLink>
                <NextLink href={"https://github.com/rooodie"} passHref>
                  <a rel="noopener noreferrer" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </NextLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Home.displayName = "Home";
export default Home;