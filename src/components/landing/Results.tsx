const stats = [
  { v: "+150%", k: "Conversión promedio" },
  { v: "40h", k: "Ahorro semanal por equipo" },
  { v: "3.4x", k: "ROI tras implementación" },
  { v: "<14d", k: "Primeras automatizaciones" },
];

export function Results() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block text-center md:text-left">
        Resultados
      </span>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-16 max-w-3xl text-center md:text-left">
        Métricas que importan al negocio, no a la vanidad.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.k} className="group relative bg-card/40 border border-border/50 p-8 md:p-10 rounded-3xl overflow-hidden hover:bg-card hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-5xl md:text-6xl font-display font-extrabold text-primary tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">
              {s.v}
            </div>
            <div className="relative z-10 text-sm font-mono uppercase text-muted-foreground tracking-widest font-bold">
              {s.k}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
