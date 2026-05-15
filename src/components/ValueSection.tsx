const metrics: [string, string][] = [
  ['10–15h', 'recuperadas / semana'],
  ['2–4 sem', 'de implementación'],
  ['0', 'despidos requeridos'],
];

export function ValueSection() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, hsla(35,15%,10%,.55) 0%, hsla(20,15%,8%,.85) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="section-sep absolute top-0 inset-x-0" />
      <div className="max-w-3xl mx-auto text-center">
        <span className="reveal inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
          — Mi propuesta
        </span>
        <h2 className="reveal text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
          No vendo tecnología. <br />
          <span className="text-primary">Vendo tiempo devuelto.</span>
        </h2>
        <p className="reveal mt-7 text-foreground/70 text-lg font-light leading-relaxed text-pretty">
          Me especializo en identificar los 2 o 3 procesos donde tu equipo pierde más horas y
          convertirlos en flujos automatizados con IA — sin reemplazar a nadie, sin cambiar sistemas
          completos, sin meses de implementación.
        </p>

        {/* Important but not urgent block */}
        <div className="reveal mt-10 text-left space-y-4">
          <p className="text-foreground/70 text-lg font-light leading-relaxed text-pretty">
            Hay una razón por la que esto rara vez ocurre solo: integrar datos y anticipar decisiones
            es siempre <span className="text-foreground/90 font-medium">importante</span> — pero casi
            nunca <span className="text-foreground/90 font-medium">urgente</span>. Y lo urgente siempre gana.
          </p>
          <p className="text-foreground/70 text-lg font-light leading-relaxed text-pretty">
            El equipo atiende los incendios del día. Nadie tiene tiempo para construir el sistema que
            los prevendría. Así, las empresas siguen operando en base a la urgencia — con personas
            altamente capaces dedicadas a tareas que deberían estar automatizadas.
          </p>
          <p className="text-foreground/85 text-lg font-light leading-relaxed text-pretty">
            Lo que construyo contigo convierte ese cuadrante postergado en procesos automáticos: menos
            tiempo alimentando reportes, más tiempo en{' '}
            <span className="text-primary font-medium">conversaciones de negocio que realmente mueven la aguja</span>.
          </p>
        </div>

        <div
          className="reveal relative mt-12 text-left rounded-r-lg p-7 md:p-8 border-l-4 border-primary card-glow"
          style={{
            background:
              'linear-gradient(90deg, hsla(35,85%,55%,.12), hsla(35,85%,55%,.02) 80%)',
          }}
        >
          <div className="absolute -left-[2px] top-0 bottom-0 w-px bg-primary/60" />
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-primary/90 mb-3">
            Resultado típico
          </p>
          <p className="text-foreground font-semibold text-xl md:text-2xl leading-snug text-balance">
            10 a 15 horas semanales recuperadas por persona, en tareas concretas y medibles.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 pt-5 border-t border-white/5">
            {metrics.map(([n, l], i) => (
              <div key={i}>
                <div className="text-primary text-2xl md:text-3xl font-semibold tracking-tight">
                  {n}
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anticipation block */}
        <div className="reveal mt-10 text-left space-y-5">
          <p className="text-foreground/70 text-lg font-light leading-relaxed text-pretty">
            La mayoría de los reportes en empresas medianas muestran el pasado. Lo que construyo
            contigo son señales que anticipan el futuro para poder gestionar:
          </p>
          <ul className="space-y-3">
            {[
              'Un cliente con patrón de abandono.',
              'Cómo ofertar mejores precios en base a lo que ha hecho la competencia.',
              'Una alerta de quiebre de stock antes de que ocurra.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/75 text-[17px] font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground font-semibold text-lg md:text-xl tracking-tight pt-2">
            No gestión reactiva.{' '}
            <span className="text-primary">Inteligencia anticipada.</span>
          </p>
        </div>
      </div>
      <div className="section-sep absolute bottom-0 inset-x-0" />
    </section>
  );
}
