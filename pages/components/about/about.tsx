import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const AboutUs: React.FC = () => {
	return (
		<>
			<section className="section">
				<Container>
					<SectionHeader>
						<>Sobre mim</>
					</SectionHeader>
					<div className="clearfix" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<p>Engenheiro Civil com Experiência em Liderança de Equipes. Carreira Plural atuando diretamente no setor de Suprimentos, Logística e Terceirados, Canteiro de Obras Vertical e Horizontal, Obras Públicas.
						</p>
					</div>
					<div className="short-info" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<ul className="list-unstyled">
							<li>
								<span className="first">Nome:</span>
								<span className="second">Rodrigo Fonseca do Vale</span>
							</li>
							<li>
								<span className="first">Idade:</span>
								<span className="second">34</span>
							</li>
							<li>
								<span className="first">Nascimento:</span>
								<span className="second">08/01/1989</span>
							</li>
							<li>
								<span className="first">Cidade:</span>
								<span className="second">Boa Vista - Roraila</span>
							</li>
							<li>
								<span className="first">Formação:</span>
								<span className="second">Engenheiro Civil | Gestor de Projetos | Corretor de Imóveis</span>
							</li>
							<li>
								<span className="first">E-mail:</span>
								<span className="second"><a href="mailto:rodrigo.vale00@gmail.com">rodrigo.vale00@gmail.com</a></span>
							</li>
							<li>
								<span className="first">Telefone:</span>
								<span className="second">(95) 98409-9975</span>
							</li>
						</ul>
					</div>
				</Container>
			</section>
		</>
	)
}

AboutUs.displayName = "About US";
export default AboutUs;