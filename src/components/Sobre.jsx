export default function Sobre() {
  return (
    <section className="about-section section-shell" id="sobre">
      <div className="section-heading">
        <span className="eyebrow"><span className="eyebrow-dot" /> Um pouco sobre mim</span>
        <h2>Transformo ideias em experiências digitais.</h2>
      </div>

      <div className="about-copy">
        <p>
          Olá! Sou <strong>Seu Nome</strong>, desenvolvedor(a) apaixonado(a) por
          tecnologia e por criar soluções simples, acessíveis e bem pensadas.
        </p>
        <p>
          Este espaço é meu portfólio: aqui você pode conhecer meu trabalho,
          minhas habilidades e os projetos que venho desenvolvendo. Edite este
          texto para contar sua história do seu jeito.
        </p>
        <a className="text-link" href="mailto:seuemail@exemplo.com">
          Entre em contato <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
