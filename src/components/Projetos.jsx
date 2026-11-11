const projects = [
  {
    number: "01",
    category: "Desenvolvimento web",
    title: "Projeto em destaque",
    description: "Conte aqui sobre um projeto que você criou, o problema que resolveu e as tecnologias utilizadas.",
    tags: ["React", "CSS"],
    href: "mailto:seuemail@exemplo.com?subject=Quero%20saber%20sobre%20seu%20projeto",
  },
  {
    number: "02",
    category: "Design & experiência",
    title: "Outro projeto incrível",
    description: "Substitua este conteúdo por uma descrição breve e objetiva do seu trabalho.",
    tags: ["JavaScript", "UI/UX"],
    href: "mailto:seuemail@exemplo.com?subject=Quero%20saber%20sobre%20seu%20projeto",
  },
];

export default function Projetos() {
  return (
    <section className="projects-section section-shell" id="projetos">
      <div className="projects-heading">
        <div className="section-heading">
          <span className="eyebrow"><span className="eyebrow-dot" /> Trabalhos selecionados</span>
          <h2>Projetos que ganham vida.</h2>
        </div>
        <p>Adicione aqui os projetos que melhor representam seu trabalho.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-art project-art-${project.number}`}>
              <span className="project-art-label">PROJETO — {project.number}</span>
              <span className="project-art-symbol" aria-hidden="true">
                {project.number === "01" ? "✳" : "◒"}
              </span>
              <span className="project-art-caption">{project.category}</span>
            </div>
            <div className="project-info">
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <a className="project-link" href={project.href} aria-label={`Saiba mais: ${project.title}`}>
                ↗
              </a>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
