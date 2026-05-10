const yes = [
  'Tienes entre 50 y 200 personas y los procesos operativos se hacen a mano o en Excel.',
  'Sientes que tu equipo tiene capacidad, pero el día a día los aplasta.',
  'Ya escuchaste hablar de IA pero no sabes por dónde empezar sin gastarte una fortuna.',
  'Quieres ver resultados reales antes de comprometerte con algo grande.',
];

export function ForWhomSection() {
  return (
    <section
      id="para-quien"
      className="relative py-24 md:py-32 px-6 md:px-10"
      style={{
        background:
          'linear-gradient(180deg, hsla(20,15%,8%,.55), hsla(35,15%,10%,.85))',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="reveal">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            — Encaje
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Es para ti si...
          </h2>
        </div>

        <ul className="mt-10 space-y-5">
          {yes.map((line, i) => (
            <li
              key={i}
              className="reveal flex items-start gap-4 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="check mt-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-foreground/85 text-[17px] md:text-lg font-light leading-relaxed text-pretty">
                {line}
              </span>
            </li>
          ))}
        </ul>

        <div className="my-12 amber-rule h-px reveal" />

        <div className="reveal">
          <h3 className="text-muted-foreground text-lg md:text-xl font-medium">
            Y no es para ti si...
          </h3>
          <p className="mt-4 text-foreground/70 text-base md:text-lg font-light leading-relaxed max-w-2xl text-pretty">
            Buscas una transformación digital completa o un proveedor de tecnología. Para eso hay
            otros. Yo trabajo con empresas que quieren mejorar algo concreto, rápido y bien hecho.
          </p>
        </div>
      </div>
    </section>
  );
}
