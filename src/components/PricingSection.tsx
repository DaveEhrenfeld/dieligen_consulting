import { useState, useMemo } from 'react';

// ── Constants ────────────────────────────────────────────────────────────────
const UF_TO_CLP       = 40_500;          // fixed UF value
const COST_PER_HOUR   = 1.3 * UF_TO_CLP; // $52,650 CLP / hour
const SALARY_MONTHLY  = 1_500_000;        // reference salary
const HOURS_PER_MONTH = 176;              // 8h × 22 days
const HOURLY_RATE     = SALARY_MONTHLY / HOURS_PER_MONTH;
const WEEKS_PER_MONTH = 52 / 12;

const MIN_HOURS = 15;
const MAX_HOURS = 60;

// ── Helpers ──────────────────────────────────────────────────────────────────
function clp(value: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function calcMetrics(hours: number) {
  const investment      = hours * COST_PER_HOUR;
  const savedPerWeek    = (8 / 25) * hours;
  const monthlySavings  = savedPerWeek * WEEKS_PER_MONTH * HOURLY_RATE;
  const annualSavings   = monthlySavings * 12;
  const breakEvenMonths = investment / monthlySavings;
  const roi             = ((annualSavings - investment) / investment) * 100;
  return { investment, savedPerWeek, monthlySavings, annualSavings, breakEvenMonths, roi };
}

// ── Component ────────────────────────────────────────────────────────────────
export function PricingSection() {
  const [hours, setHours] = useState(25);
  const m = useMemo(() => calcMetrics(hours), [hours]);

  const pct = ((hours - MIN_HOURS) / (MAX_HOURS - MIN_HOURS)) * 100;

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, hsla(20,15%,8%,.55) 0%, hsla(20,15%,8%,.88) 50%, hsla(20,15%,8%,.55) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center reveal">
          <span className="inline-block text-[10.5px] uppercase tracking-[0.22em] text-primary/80 mb-4">
            Inversión
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            ¿Cuánto cuesta y cuánto retorna?
          </h2>
          <p className="mt-5 text-foreground/60 font-light max-w-xl mx-auto text-pretty">
            Mueve el slider para explorar distintos escenarios. Basado en una persona con sueldo
            de $1.500.000 mensuales y una UF de $40.500.
          </p>
        </div>

        {/* Slider card */}
        <div
          className="reveal mt-12 rounded-lg p-7 md:p-10 border border-white/10 bg-white/[0.03] card-glow"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Horas de consultoría invertidas
            </span>
            <span className="text-primary font-semibold text-2xl md:text-3xl tracking-tight">
              {hours}h
            </span>
          </div>

          {/* Custom styled range input */}
          <div className="relative">
            <input
              type="range"
              min={MIN_HOURS}
              max={MAX_HOURS}
              step={1}
              value={hours}
              onChange={e => setHours(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, hsl(35 85% 55%) ${pct}%, hsla(35,10%,30%,0.5) ${pct}%)`,
              }}
            />
            {/* tick marks */}
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
              <span>15h</span>
              <span>25h</span>
              <span>40h</span>
              <span>60h</span>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {/* Investment */}
            <div className="col-span-1 rounded-md border border-white/8 bg-white/[0.03] p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Inversión total
              </p>
              <p className="text-foreground font-semibold text-xl md:text-2xl tracking-tight tabular-nums">
                {clp(m.investment)}
              </p>
            </div>

            {/* Hours freed */}
            <div className="col-span-1 rounded-md border border-white/8 bg-white/[0.03] p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Horas liberadas
              </p>
              <p className="text-primary font-semibold text-xl md:text-2xl tracking-tight">
                {m.savedPerWeek.toFixed(1)}h
                <span className="text-muted-foreground text-[12px] font-normal ml-1">/semana</span>
              </p>
            </div>

            {/* Monthly savings */}
            <div className="col-span-1 rounded-md border border-white/8 bg-white/[0.03] p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Ahorro mensual
              </p>
              <p className="text-primary font-semibold text-xl md:text-2xl tracking-tight tabular-nums">
                {clp(m.monthlySavings)}
              </p>
            </div>

            {/* 12-month savings */}
            <div className="col-span-1 rounded-md border border-primary/25 bg-primary/[0.07] p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary/80 mb-2">
                Retorno en 12 meses
              </p>
              <p className="text-primary font-semibold text-xl md:text-2xl tracking-tight tabular-nums">
                {clp(m.annualSavings)}
              </p>
            </div>
          </div>

          {/* Break-even + ROI strip */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-5 border-t border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground/70 text-[13px]">
                Recuperas la inversión en{' '}
                <span className="text-foreground font-semibold">
                  {m.breakEvenMonths.toFixed(1)} meses
                </span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground/70 text-[13px]">
                ROI al año:{' '}
                <span className="text-primary font-semibold">+{Math.round(m.roi)}%</span>
              </span>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <p className="reveal mt-6 text-center text-[11px] text-muted-foreground/60 font-light">
          Cálculo referencial · UF fija a $40.500 · Sueldo base $1.500.000 · 176 horas hábiles al mes
        </p>
      </div>

      <div className="section-sep absolute bottom-0 inset-x-0" />
    </section>
  );
}
