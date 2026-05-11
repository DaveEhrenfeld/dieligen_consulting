export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* overlays */}
      <div className="absolute inset-0 hero-vignette pointer-events-none z-[2]" />
      <div className="absolute inset-0 hero-leftwash pointer-events-none z-[2]" />

      {/* content */}
      <div className="absolute inset-0 z-[3] flex">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-start md:items-center pt-24 md:pt-0 pb-8 md:pb-0">
          <div className="max-w-2xl hero-stagger">
            <span
              style={{ animationDelay: '.1s' }}
              className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Consultoría de IA para PyMEs en Chile
            </span>

            <h1
              style={{ animationDelay: '.2s', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
              className="mt-6 font-bold leading-[1.06] tracking-tight text-foreground text-balance"
            >
              Tu equipo no necesita más horas.{' '}
              <br className="hidden sm:block" />
              <span className="text-foreground/95">Necesita dejar de hacer </span>
              <span className="text-primary">lo que la IA puede hacer</span>
              <span className="text-foreground/95"> por ellos.</span>
            </h1>

            <p
              style={{ animationDelay: '.4s', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
              className="mt-6 font-light text-foreground/70 leading-relaxed max-w-xl"
            >
              Ayudo a empresas medianas en Chile a automatizar los procesos que más tiempo
              consumen: reportes, análisis en Excel, datos dispersos, sin proyectos grandes ni
              cambios traumáticos.
            </p>

            <div style={{ animationDelay: '.6s' }} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/davehrenfe/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-[15px]"
              >
                Quiero recuperar esas horas
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#como-funciona"
                className="text-foreground/70 hover:text-foreground text-[13px] uppercase tracking-[0.22em] border-b border-foreground/20 hover:border-primary pb-1 transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>

            <p style={{ animationDelay: '.8s' }} className="mt-6 text-xs font-light text-muted-foreground">
              Sin reemplazar a nadie · Sin proyectos gigantes · Resultados en semanas
            </p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 right-8 z-[3] hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-foreground/50">
        <span>Scroll</span>
        <span className="block w-12 h-px bg-foreground/30 relative overflow-hidden">
          <span
            className="absolute inset-y-0 left-0 w-4 bg-primary"
            style={{ animation: 'scrollcue 2.6s ease-in-out infinite' }}
          />
        </span>
      </div>
    </section>
  );
}
