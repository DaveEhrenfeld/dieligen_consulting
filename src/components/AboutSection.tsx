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
      </div>
    </section>
  );
}
