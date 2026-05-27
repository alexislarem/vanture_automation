const benefits = [
  { k: "Mentalidad ROI", v: "Cada implementación se diseña para generar retorno medible, no solo para verse bien." },
  { k: "Stack moderno", v: "IA, no-code y desarrollo a medida según lo que tu negocio realmente necesita." },
  { k: "Comunicación clara", v: "Hablamos en resultados, no en tecnicismos. Sabes exactamente qué se está construyendo." },
  { k: "Soporte real", v: "Acompañamiento continuo después del lanzamiento. No te quedas solo con el sistema." },
];

export function Benefits() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
            Por qué trabajar conmigo
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            La diferencia está en el sistema.
          </h2>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border ring-1 ring-border rounded-2xl overflow-hidden">
          {benefits.map((b) => (
            <div key={b.k} className="bg-background p-8">
              <h3 className="font-display font-extrabold text-xl mb-3">{b.k}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
