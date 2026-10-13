const team = [
  {
    name: 'David Ehrenfeld',
    role: 'Fundador, Dieligen Consulting',
    linkedin: 'https://www.linkedin.com/in/dehrenfeld/',
    bio: [
      'Más de 15 años trabajando en tecnología y operaciones. Ha trabajado con empresas como LATAM Airlines y Accelya, multinacional global con la que operó desde Estados Unidos, implementando soluciones tecnológicas que parten del conocimiento real de los procesos y datos de cada cliente.',
      'También pasó por el mundo startup, donde aprendió a lograr mucho con pocos recursos. Esa combinación, entender cómo operan las empresas que escalan y saber ejecutar sin desperdiciar.',
      'Vio de cerca que las empresas medianas tienen los mismos problemas que las grandes, pero sin los recursos para resolverlos igual. Dieligen la fundó para cambiar eso.',
    ],
  },
  {
    name: 'Marcelo Dujovne',
    role: 'Partner, estrategia y personas',
    linkedin: 'https://www.linkedin.com/in/marcelo-dujovne/',
    bio: [
      'Consultor con más de 20 años ayudando a empresas a mejorar la productividad de sus equipos a través de transformación organizacional y estrategia de personas. Ha trabajado con compañías como Nestlé y AAXIS en Chile, Latinoamérica y Estados Unidos.',
      'En Dieligen aporta lo que la tecnología sola no resuelve: que el cambio tenga sentido para quienes lo viven y que realmente se adopte. También es fundador de Hublabs.ai, donde acompaña a empresas globales en su entrada y expansión en mercados latinoamericanos.',
    ],
  },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            Equipo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            ¿Quiénes están detrás?
          </h2>
          <p className="mt-5 text-foreground/60 font-light text-lg max-w-2xl">
            Dos consultores con experiencias distintas y un objetivo común: que tu equipo recupere tiempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((person) => (
            <div
              key={person.name}
              className="reveal rounded-lg p-7 md:p-8 border border-white/10 bg-white/[0.03]"
            >
              <div className="pb-5 mb-6 border-b border-white/8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-px bg-primary" />
                  <p className="text-foreground font-semibold text-sm">{person.name}</p>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.18em] mb-3 pl-11">
                  {person.role}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-11 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkedInIcon />
                  Ver perfil en LinkedIn
                </a>
              </div>

              <div className="space-y-4">
                {person.bio.map((p, i) => (
                  <p key={i} className="text-foreground/75 font-light leading-relaxed text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
