import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero-content">
            <span className="eyebrow"><span className="eyebrow-dot" /> Portfólio pessoal</span>
            <h1>Olá, eu sou<br /><span>Seu Nome.</span></h1>
            <p className="hero-description">
              Desenvolvedor(a) web criando experiências digitais bonitas,
              funcionais e feitas para pessoas.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver meus projetos <span aria-hidden="true">↘</span>
              </a>
              <a className="button button-quiet" href="mailto:seuemail@exemplo.com">
                Entre em contato <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-outer" />
            <div className="art-orbit orbit-inner" />
            <div className="art-core"><span>M</span></div>
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✳</span>
            <span className="art-caption">CRIATIVIDADE<br />EM MOVIMENTO</span>
          </div>

          <a className="scroll-cue" href="#sobre">
            <span className="scroll-line" /> Role para explorar
          </a>
        </section>

        <Sobre />
        <Habilidades />
        <Projetos />

        <section className="contact-section section-shell" id="contato">
          <span className="eyebrow"><span className="eyebrow-dot" /> Tem uma ideia?</span>
          <div className="contact-content">
            <h2>Vamos criar algo<br /><span>incrível juntos.</span></h2>
            <a className="button button-primary" href="mailto:seuemail@exemplo.com">
              Fale comigo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#inicio">
          <span className="brand-mark">M</span>
          <span>meu<span className="brand-accent">portfolio</span></span>
        </a>
        <span>Feito com cuidado · {new Date().getFullYear()}</span>
        <a className="back-to-top" href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}

export default App;
