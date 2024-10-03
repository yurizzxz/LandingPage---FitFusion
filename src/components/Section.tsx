import { Link } from "react-router-dom";
import futurismoFitnessImage from "../assets/training.jpg";
import fb from "../assets/firebase.png";
import fastifylogo from "../assets/Fastify_logo.png";
import typescriptlogo from "../assets/typescript.png";
import reactlogo from "../assets/react-logo.webp";
import QRCode from "qrcode.react";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="BenefitCard">
      <div className="Icon">
        <i className={icon}></i>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const benefits = [
  {
    icon: "fas fa-dumbbell",
    title: "Treinos Sob Medida",
    description:
      "Cada treino é ajustado conforme sua escolha, evitando planos genéricos.",
  },
  {
    icon: "fas fa-apple-alt",
    title: "Nutrição Inteligente",
    description: "Receitas e dietas adaptadas aos seus objetivos de saúde.",
  },
  {
    icon: "fas fa-book",
    title: "Artigos Inspiradores",
    description: "Conteúdo atualizado sobre treinos, nutrição e suplementação.",
  },
  {
    icon: "fas fa-star",
    title: "Resultados Visíveis",
    description: "Transforme seu corpo e mente com nosso método eficaz.",
  },
  {
    icon: "fas fa-brain",
    title: "Abordagem Baseada em Ciência",
    description: "Recomendações fundamentadas em pesquisa e dados científicos.",
  },
];
export function Section() {
  return (
    <>
      <main className="hero-section">
        <div className="overlay Container">
          <h1 className="section-title">Alcance Seus</h1>
          <h1 className="section-title">Objetivos de</h1>
          <h1 className="section-title">Forma Inteligente!</h1>
          <p className="subtitleHero">
            Você está pronto para levar sua saúde e bem-estar a um novo nível?
            Unimos dados comprovados para criar uma experiência única de treino,
            alimentação e conhecimento!
          </p>
          <div className="button">
            <button type="submit">Experimente agora!</button>
          </div>
        </div>
      </main>

      {/* conteúdo landing */}
      <main className="contentSection">
        <div className="Container section-dark">
          <h3>Mantenha-se Atualizado!</h3>
          <p>
            No FitFusion, o conhecimento nunca para. Estamos sempre atualizando
            nosso conteúdo com as últimas tendências e descobertas científicas
            no mundo da saúde e bem-estar. Isso garante que você tenha acesso às
            informações mais relevantes para a sua jornada.
          </p>
          <div className="Techs">
            <div className="TechsLayout">
              <img className="tech-logo" src={typescriptlogo} alt="" />
              <img className="tech-logo" src={reactlogo} alt="" />
              <img className="tech-logo" src={fastifylogo} alt="" />
              <img className="tech-logo" src={fb} alt="" />
            </div>
          </div>
        </div>
        <div
          className="Container-Img Reverse section-dark"
          style={{ marginBottom: 60 }}
        >
          <div className="ImageSection">
            <img
              src={futurismoFitnessImage}
              alt="Ilustração do FitFusion"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="TextSection">
            <h3>Por Que FitFusion é Único?</h3>
            <p>
              Treinos Sob Medida: Cada treino é ajustado conforme sua escolha.
              Você nunca mais precisará seguir um plano genérico de qualquer
              academia! Nutrição Inteligente: Receitas e dietas que se adaptam
              aos seus objetivos de saúde. Com FitFusion, cada refeição é uma
              oportunidade de se nutrir bem. Artigos Inspiradores: Acesse
              conteúdo atualizado sobre treinos, nutrição e suplementação.
              Mantenha-se informado e inspirado sobre os estudos.
            </p>
          </div>
        </div>

        <div className="BenefitsSection">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="Container-Img section-white">
          <div className="TextSection">
            <h3>O Futuro do Fitness</h3>
            <p>
              Não acreditamos em soluções rápidas. Nossa abordagem é
              fundamentada em pesquisa e ciência, garantindo que cada
              recomendação seja eficaz e segura. Com a inteligência artificial
              como sua aliada, você estará sempre um passo à frente, recebendo
              orientações que evoluem conforme você avança.
            </p>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                marginBlock: 20,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <li
                style={{
                  fontSize: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#00bb83" }}
                ></i>
                Abordagem personalizada
              </li>
              <li
                style={{
                  fontSize: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#00bb83" }}
                ></i>
                Resultados baseados em dados
              </li>
              <li
                style={{
                  fontSize: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#00bb83" }}
                ></i>
                Suporte contínuo
              </li>
            </ul>
            <button
              type="submit"
              style={{
                backgroundColor: "#00bb83",
                color: "white",
                padding: "15px 25px",
                border: "none",
                borderRadius: "5px",
                fontSize: 20,
              }}
            >
              Experimente Agora
            </button>
          </div>
          <div className="ImageSection">
            <img
              src={futurismoFitnessImage}
              alt="Ilustração do Futuro do Fitness"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="Container section-dark card-layout">
          <h3>Transformação em Cada Passo</h3>
          <div className="cards">
            <div className="card">
              <p>
                "A tecnologia do FitFusion mudou meu entendimento sobre saúde e
                fitness. Cada treino parece feito sob medida para mim!" —
                Juliana
              </p>
            </div>
            <div className="card">
              <p>
                27 anos "As dicas e receitas são práticas e deliciosas. Nunca
                pensei que poderia amar comer saudável!" — Pedro, 32 anos
              </p>
            </div>
            <div className="card">
              <p>
                27 anos "As dicas e receitas são práticas e deliciosas. Nunca
                pensei que poderia amar comer saudável!" — Pedro, 32 anos
              </p>
            </div>
            <div className="card">
              <p>
                27 anos "As dicas e receitas são práticas e deliciosas. Nunca
                pensei que poderia amar comer saudável!" — Pedro, 32 anos
              </p>
            </div>
          </div>
        </div>
        <div
          className="Container-Img Reverse section-white"
          style={{ marginBottom: 60 }}>
          <div className="ImageSection">
            <img
              src={futurismoFitnessImage}
              alt="Ilustração do FitFusion"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="TextSection">
            <h3>Pronto para se transformar?</h3>
            <p>
              No FitFusion, o conhecimento nunca para. Estamos sempre
              atualizando nosso conteúdo com as últimas tendências e descobertas
              científicas no mundo da saúde e bem-estar. Isso garante que você
              tenha acesso às informações mais relevantes para a sua jornada.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
