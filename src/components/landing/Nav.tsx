export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold text-xl tracking-tighter">
          Vanture
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-wider">
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a
            href="#contacto"
            className="bg-foreground text-background px-4 py-2 rounded-full hover:bg-primary transition-colors"
          >
            Agendar Llamada
          </a>
        </div>
      </div>
    </nav>
  );
}
