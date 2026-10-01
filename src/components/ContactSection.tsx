import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3 | 4;
type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  size: string;
  pain: string;
  urgency: string;
  name: string;
  email: string;
}

// ── Options ───────────────────────────────────────────────────────────────────
const SIZE_OPTIONS = [
  { value: '10-50', label: '10–50 personas' },
  { value: '50-200', label: '50–200 personas' },
  { value: '200+', label: 'Más de 200' },
];

const PAIN_OPTIONS = [
  { value: 'reportes', label: 'Reportes manuales y análisis de datos' },
  { value: 'preguntas', label: 'Preguntas repetitivas al equipo' },
  { value: 'clientes', label: 'Seguimiento de clientes o ventas' },
  { value: 'coordinacion', label: 'Coordinación de tareas y proyectos' },
  { value: 'presentaciones', label: 'Preparar presentaciones e informes' },
  { value: 'informacion', label: 'Información dispersa entre sistemas' },
];

const URGENCY_OPTIONS = [
  { value: 'ahora', label: 'Necesito resolver esto ya' },
  { value: 'evaluando', label: 'Evaluando opciones para los próximos meses' },
  { value: 'explorando', label: 'Solo estoy explorando' },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-5 py-3.5 rounded-md border text-sm transition-all duration-200 ${
        selected
          ? 'border-primary/60 bg-primary/10 text-foreground'
          : 'border-white/10 bg-white/[0.02] text-foreground/70 hover:border-white/20 hover:text-foreground'
      }`}
    >
      <span
        className={`inline-block w-3 h-3 rounded-full border mr-3 flex-shrink-0 align-middle transition-colors ${
          selected
            ? 'border-primary bg-primary'
            : 'border-white/30'
        }`}
      />
      {children}
    </button>
  );
}

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i + 1 === current
              ? 'w-6 bg-primary'
              : i + 1 < current
              ? 'w-3 bg-primary/50'
              : 'w-3 bg-white/15'
          }`}
        />
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
const EMPTY: FormData = { size: '', pain: '', urgency: '', name: '', email: '' };

export function ContactSection() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const canNext =
    (step === 1 && data.size !== '') ||
    (step === 2 && data.pain !== '') ||
    (step === 3 && data.urgency !== '') ||
    step === 4;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section id="contacto" className="relative py-24 md:py-32 px-6 md:px-10">
        <div className="section-sep absolute top-0 inset-x-0" />
        <div className="max-w-xl mx-auto text-center reveal in">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-primary/40 bg-primary/10 mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Listo, {data.name.split(' ')[0]}.
          </h2>
          <p className="text-foreground/60 font-light">
            Recibí tu información. Te escribiré directamente a{' '}
            <span className="text-foreground">{data.email}</span> en las próximas horas.
          </p>
        </div>
        <div className="section-sep absolute bottom-0 inset-x-0" />
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, hsla(20,15%,8%,.55) 0%, hsla(20,15%,8%,.88) 50%, hsla(20,15%,8%,.55) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      <div className="max-w-xl mx-auto">
        <div className="text-center reveal mb-10">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Cuéntame tu situación
          </h2>
          <p className="mt-5 text-foreground/60 font-light text-pretty">
            Tres preguntas rápidas para entender si puedo ayudarte y cómo.
          </p>
        </div>

        <div className="reveal rounded-lg p-7 md:p-10 border border-white/10 bg-white/[0.03] card-glow">
          <StepDots current={step} total={4} />

          <form onSubmit={handleSubmit}>
            {/* Step 1 — Company size */}
            {step === 1 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
                  ¿Cuántas personas trabajan en tu empresa?
                </p>
                <div className="flex flex-col gap-3">
                  {SIZE_OPTIONS.map((o) => (
                    <OptionButton
                      key={o.value}
                      selected={data.size === o.value}
                      onClick={() => setData((d) => ({ ...d, size: o.value }))}
                    >
                      {o.label}
                    </OptionButton>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Main pain */}
            {step === 2 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
                  ¿Qué proceso te quita más tiempo hoy?
                </p>
                <div className="flex flex-col gap-3">
                  {PAIN_OPTIONS.map((o) => (
                    <OptionButton
                      key={o.value}
                      selected={data.pain === o.value}
                      onClick={() => setData((d) => ({ ...d, pain: o.value }))}
                    >
                      {o.label}
                    </OptionButton>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 — Urgency */}
            {step === 3 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
                  ¿Con qué urgencia buscas una solución?
                </p>
                <div className="flex flex-col gap-3">
                  {URGENCY_OPTIONS.map((o) => (
                    <OptionButton
                      key={o.value}
                      selected={data.urgency === o.value}
                      onClick={() => setData((d) => ({ ...d, urgency: o.value }))}
                    >
                      {o.label}
                    </OptionButton>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4 — Contact info */}
            {step === 4 && (
              <div className="flex flex-col gap-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                  ¿A dónde te contacto?
                </p>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full px-5 py-3.5 rounded-md border border-white/10 bg-white/[0.02] text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  className="w-full px-5 py-3.5 rounded-md border border-white/10 bg-white/[0.02] text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                {status === 'error' && (
                  <p className="text-red-400 text-xs">{errorMsg || 'Ocurrió un error. Intenta de nuevo.'}</p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Atrás
                </button>
              ) : (
                <span />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  className="btn-amber text-[11px] uppercase tracking-[0.22em] font-semibold rounded-sm px-6 py-2.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:filter-none disabled:shadow-none"
                >
                  Continuar
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'loading' || !data.name.trim() || !data.email.trim()}
                  className="btn-amber text-[11px] uppercase tracking-[0.22em] font-semibold rounded-sm px-6 py-2.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:filter-none disabled:shadow-none"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="section-sep absolute bottom-0 inset-x-0" />
    </section>
  );
}
