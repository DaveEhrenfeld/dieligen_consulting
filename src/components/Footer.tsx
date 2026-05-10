export function Footer() {
  return (
    <footer
      className="border-t border-white/5 py-8 px-6 md:px-10"
      style={{
        background: 'hsla(20,15%,6%,.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-muted-foreground tracking-[0.22em] uppercase">
          <span className="text-foreground/80">Dieligen</span> Consulting
        </div>
        <div className="text-sm text-muted-foreground">Santiago, Chile · 2025</div>
      </div>
    </footer>
  );
}
