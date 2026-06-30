const steps = [
  { tag: "01", title: "Diagnóstico", desc: "Analizamos cuellos de botella, procesos manuales y oportunidades reales de automatización." },
  { tag: "02", title: "Arquitectura", desc: "Diseñamos el ecosistema digital que conectará tus herramientas, datos y equipos." },
  { tag: "03", title: "Implementación", desc: "Construimos, probamos y lanzamos cada integración en un entorno seguro y monitoreado." },
  { tag: "04", title: "Optimización", desc: "Acompañamiento continuo para refinar, escalar y exprimir el sistema a su máximo potencial." },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
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
        
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border/50 -z-10" />
          
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <div key={s.tag} className="relative group">
                <div className="size-24 rounded-full bg-background border border-border flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-sm group-hover:border-primary group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-500">
                  <span className="font-mono text-xl text-primary font-bold">{s.tag}</span>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 group-hover:bg-card transition-colors duration-500 text-center md:text-left h-full">
                  <h4 className="text-xl font-extrabold font-display tracking-tight mb-3 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
