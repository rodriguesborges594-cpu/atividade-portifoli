const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        <span className="brand-mark">M</span>
        <span>meu<span className="brand-accent">portfolio</span></span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href="mailto:seuemail@exemplo.com">
        Vamos conversar <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
