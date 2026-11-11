const skills = [
  { number: "01", name: "HTML & CSS", description: "Interfaces acessíveis e responsivas" },
  { number: "02", name: "JavaScript", description: "Experiências interativas para a web" },
  { number: "03", name: "React", description: "Aplicações com componentes reutilizáveis" },
  { number: "04", name: "UI Design", description: "Atenção aos detalhes e à usabilidade" },
];

export default function Habilidades() {
  return (
    <section className="skills-section section-shell" id="habilidades">
      <div className="section-heading">
        <span className="eyebrow"><span className="eyebrow-dot" /> O que faço</span>
        <h2>Habilidades para tirar projetos do papel.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.number}>
            <span className="skill-number">{skill.number}</span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <span className="skill-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
