import { useEffect, useState } from 'react';

const links: [string, string][] = [
  ['Servicios', '#servicios'],
  ['Cómo funciona', '#como-funciona'],
  ['Para quién', '#para-quien'],
  ['Sobre mí', '#sobre-mi'],
  ['Inversión', '#pricing'],
  ['Contacto', '#contacto'],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-black/40 border-b border-white/5'
          : 'backdrop-blur-md bg-black/20 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#top" className="text-xl font-semibold tracking-tight select-none">
          <span className="text-foreground">DIELIGEN</span>
          <span className="text-primary"> CONSULTING</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/davehrenfe/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber hidden sm:inline-flex items-center text-[11px] uppercase tracking-[0.22em] font-semibold rounded-sm px-4 py-2.5"
          >
            Agendar llamada
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 rounded-sm border border-white/10 grid place-items-center text-foreground/80"
            aria-label="Menú"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-px w-5 bg-current transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-black/60 backdrop-blur-md border-b border-white/5">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground py-2 border-b border-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="https://calendly.com/davehrenfe/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-amber inline-flex items-center justify-center text-[11px] uppercase tracking-[0.22em] font-semibold rounded-sm px-4 py-3"
          >
            Agendar llamada
          </a>
        </div>
      </div>
    </header>
  );
}
