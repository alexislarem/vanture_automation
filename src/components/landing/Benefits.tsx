import { TrendingUp, Layers, MessageSquare, ShieldCheck } from "lucide-react";

const benefits = [
  { k: "Mentalidad ROI", v: "Cada implementación se diseña para generar retorno medible, no solo para verse bien.", icon: TrendingUp },
  { k: "Stack moderno", v: "IA, no-code y desarrollo a medida según lo que tu negocio realmente necesita.", icon: Layers },
  { k: "Comunicación clara", v: "Hablamos en resultados, no en tecnicismos. Sabes exactamente qué se está construyendo.", icon: MessageSquare },
  { k: "Soporte real", v: "Acompañamiento continuo después del lanzamiento. No te quedas solo con el sistema.", icon: ShieldCheck },
];

export function Benefits() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
            Por qué trabajar conmigo
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
            La diferencia está en el sistema.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            No solo entrego herramientas tecnológicas. Entrego sistemas diseñados desde una mentalidad empresarial.
          </p>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.k} className="group bg-card/40 border border-border/50 p-8 rounded-3xl hover:bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-xl mb-3">{b.k}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.v}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
