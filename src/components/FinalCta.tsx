export function FinalCta() {
  return (
    <section
      id="contacto"
      className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, hsla(20,15%,8%,.85) 0%, hsla(35,30%,12%,.85) 100%), radial-gradient(60% 80% at 50% 100%, hsla(35,85%,55%,.18) 0%, transparent 70%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="absolute inset-x-0 top-0 amber-rule h-px" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(40% 50% at 50% 100%, hsla(35,85%,55%,.18), transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="reveal inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
          Próximo paso
        </span>
        <h2 className="reveal text-4xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.04]">
          ¿Cuántas horas pierde tu equipo{' '}
          <span className="text-primary">esta semana</span>?
        </h2>
        <p className="reveal mt-6 text-foreground/70 text-lg md:text-xl font-light text-pretty">
          Conversemos 30 minutos. Te digo qué proceso optimizaría primero y por qué.
        </p>
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="https://calendly.com/davehrenfe/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber inline-flex items-center gap-2 px-10 py-5 rounded-sm font-semibold text-base"
          >
            Agendar llamada gratuita →
          </a>
          <a
            href="#top"
            className="text-foreground/70 hover:text-foreground text-[12px] uppercase tracking-[0.22em] border-b border-foreground/20 hover:border-primary pb-1 transition-colors"
          >
            Volver al inicio
          </a>
        </div>
        <p className="reveal mt-8 text-xs text-muted-foreground uppercase tracking-[0.22em]">
          30 min · Por videollamada · Sin compromiso
        </p>
      </div>
    </section>
  );
}
