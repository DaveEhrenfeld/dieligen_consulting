const cards = [
  'Tenemos un analista que pasa cada lunes armando el mismo reporte de siempre.',
  'Los datos están en tres Excel distintos y nadie los cruza porque toma demasiado tiempo.',
  'Sabemos que hay información valiosa ahí, pero nunca llegamos a analizarla en serio.',
  'La gente hace bien su trabajo, pero pierde horas en tareas que deberían ser automáticas.',
];

export function ProblemSection() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, hsla(20,15%,8%,.55) 0%, hsla(20,15%,8%,.85) 30%, hsla(20,15%,8%,.85) 70%, hsla(20,15%,8%,.55) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, hsla(35,85%,55%,.07), transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            — El día a día
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            ¿Te suena familiar?
          </h2>
          <p className="mt-5 text-foreground/60 font-light">
            Cuatro frases que escucho casi todas las semanas en empresas medianas chilenas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((q, i) => (
            <article
              key={i}
              className="reveal group relative bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-lg p-7 md:p-8 card-glow hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="quote-mark text-7xl md:text-8xl font-bold absolute -top-2 left-5 select-none opacity-90">
                "
              </div>
              <p className="relative pt-7 md:pt-9 text-foreground/85 text-[17px] md:text-[19px] leading-relaxed font-light text-pretty">
                {q}
              </p>
              <div className="mt-7 flex items-center justify-between">
                <span className="text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                  Caso #{String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 mx-5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-[10.5px] uppercase tracking-[0.22em] text-primary/70">
                  Recurrente
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal text-center text-primary font-semibold text-xl md:text-2xl mt-14 max-w-2xl mx-auto text-balance">
          No es un problema de talento. Es un problema de procesos que todavía no tienen IA.
        </p>
      </div>
    </section>
  );
}
