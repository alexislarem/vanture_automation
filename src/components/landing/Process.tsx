const steps = [
  { tag: "01 / AUDITORÍA", title: "Diagnóstico", desc: "Analizamos cuellos de botella, procesos manuales y oportunidades reales de automatización." },
  { tag: "02 / DISEÑO", title: "Arquitectura", desc: "Diseñamos el ecosistema digital que conectará tus herramientas, datos y equipos." },
  { tag: "03 / DESPLIEGUE", title: "Implementación", desc: "Construimos, probamos y lanzamos cada integración en un entorno seguro y monitoreado." },
  { tag: "04 / ESCALADO", title: "Optimización", desc: "Acompañamiento continuo para refinar, escalar y exprimir el sistema a su máximo potencial." },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
              Proceso
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
              Cómo trabajamos
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Un camino claro desde el caos operativo hasta la claridad automatizada.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.tag} className="space-y-4">
              <span className="font-mono text-xs text-primary font-bold tracking-widest">{s.tag}</span>
              <h4 className="text-2xl font-extrabold font-display tracking-tight">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
