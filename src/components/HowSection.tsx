const steps = [
  {
    n: '01',
    t: 'Diagnóstico',
    d: 'Conversamos, miro cómo trabaja tu equipo hoy y te digo exactamente dónde está el tiempo perdido. Sin costo, sin compromiso.',
    meta: 'Sesión 1 hora · Gratis',
  },
  {
    n: '02',
    t: 'Implementación táctica',
    d: 'Automatizamos un proceso específico en 2 a 4 semanas. Nada de grandes proyectos: un problema real, una solución concreta.',
    meta: '2–4 semanas · Foco quirúrgico',
  },
  {
    n: '03',
    t: 'Tu equipo lo usa solo',
    d: 'No necesitan saber de IA. La herramienta se integra a lo que ya hacen y ellos mismos descubren que pueden hacer más en menos tiempo.',
    meta: 'Sin training extenso',
  },
];

export function HowSection() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 md:py-32 px-6 md:px-10"
      style={{
        background:
          'linear-gradient(180deg, hsla(20,15%,8%,.55) 0%, hsla(20,15%,8%,.85) 30%, hsla(20,15%,8%,.85) 70%, hsla(20,15%,8%,.55) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            — El proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Así funciona, sin complicaciones.
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px amber-rule" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <div className="step-num text-7xl md:text-8xl font-bold leading-none tracking-tight">
                    {s.n}
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-2 hidden md:block w-3 h-3 rounded-full bg-primary shadow-[0_0_0_6px_hsla(35,85%,55%,.12)]" />
                </div>
                <h3 className="mt-5 text-2xl md:text-[28px] font-semibold text-foreground tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-3 text-muted-foreground font-light text-[15.5px] leading-relaxed text-pretty">
                  {s.d}
                </p>
                <p className="mt-5 text-[10.5px] uppercase tracking-[0.22em] text-primary/70">
                  {s.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
