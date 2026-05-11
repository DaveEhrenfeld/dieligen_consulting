const paragraphs = [
  'Llevo más de 10 años trabajando en empresas de tecnología y software B2B en Chile y Latinoamérica — en áreas de operaciones, éxito de clientes y adopción de herramientas digitales.',
  'Vi de cerca cómo las empresas grandes automatizan procesos que las medianas siguen haciendo a mano. Y decidí hacer algo al respecto.',
  'No soy una agencia ni una consultora de 20 personas. Soy alguien que entiende tu negocio, habla tu idioma y te ayuda a dar el primer paso bien dado.',
];

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative py-24 md:py-32 px-6 md:px-10"
      style={{
        background:
          'linear-gradient(180deg, hsla(35,15%,10%,.85) 0%, hsla(20,15%,8%,.85) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="reveal">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            — Sobre mí
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            ¿Quién está detrás de esto?
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="reveal text-foreground/75 text-lg font-light leading-relaxed text-pretty"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="reveal mt-10 flex items-center gap-4">
          <div className="w-12 h-px bg-primary" />
          <p className="text-primary font-semibold text-base md:text-lg">
            David Ehrenfeld, fundador de Dieligen Consulting
          </p>
        </div>

        <div className="reveal mt-6">
          <a
            href="https://www.linkedin.com/in/dehrenfeld/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors border-b border-muted-foreground/30 hover:border-primary pb-1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Ver perfil en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
