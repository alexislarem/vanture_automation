export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display font-extrabold text-xl tracking-tighter">
          BranchRaiz
        </span>
        <div className="flex gap-6 text-sm font-mono text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Email</a>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} BranchRaiz. Hecho con estrategia.
        </p>
      </div>
    </footer>
  );
}
