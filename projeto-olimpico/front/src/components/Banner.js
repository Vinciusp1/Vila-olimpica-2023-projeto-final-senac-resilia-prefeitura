import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/arcos.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Space Art!!!", "Space Art XD", "Space Art :o" ];
  const period = 2000;



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center p-3">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="fs-1 text-dark">Seja Bem vindo ao espaço Olimpico.</span>
                <h1 className="text-dark fullOpacity">Confira nosso site !</h1>
                  <p className="text-dark fs-3">A saúde e educação sempre uma questão valiosa na humanidade, ela vai de lazer até profissionalismo, nossa plataforma busca sempre conectar e melhorar o acesso ao esporte.</p>
                  <button onClick={() => console.log('connect')}>Entre em Contato<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
