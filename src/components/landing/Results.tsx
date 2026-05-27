const stats = [
  { v: "+150%", k: "Conversión promedio" },
  { v: "40h", k: "Ahorro semanal por equipo" },
  { v: "3.4x", k: "ROI tras implementación" },
  { v: "<14d", k: "Primeras automatizaciones" },
];

export function Results() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
        Resultados
      </span>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-16 max-w-3xl">
        Métricas que importan al negocio, no a la vanidad.
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border ring-1 ring-border rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div key={s.k} className="bg-background p-8 md:p-10">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-primary tracking-tight">
              {s.v}
            </div>
            <div className="text-xs md:text-sm font-mono uppercase text-muted-foreground mt-3 tracking-widest">
              {s.k}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
