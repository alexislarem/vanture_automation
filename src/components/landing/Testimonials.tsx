import { Quote } from "lucide-react";

const quotes = [
  {
    q: "Transformó nuestra captación de leads en un proceso 100% automático. Recuperamos 15 horas semanales por persona.",
    a: "Elena R.",
    r: "CEO · Startup Innova",
  },
  {
    q: "La integración de IA en nuestro CRM cambió las reglas del juego. Somos más rápidos que la competencia.",
    a: "Marco S.",
    r: "Director de Operaciones",
  },
  {
    q: "Pasamos de gestionar todo en hojas de cálculo a una operación que se ejecuta sola. Hoy escalamos sin contratar más.",
    a: "Carlos M.",
    r: "Fundador · Vertex",
  },
];

const industries = [
  "Agencias de Marketing",
  "E-commerce",
  "Real Estate",
  "Consultorías",
  "SaaS & Tech",
  "Infoproductores",
  "Coaches & Mentores",
  "Servicios Profesionales",
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-border/50">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
            Prueba social
          </span>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-12 tracking-tight">
            Lo que dicen
          </h3>
          <div className="space-y-6">
            {quotes.map((q) => (
              <div key={q.a} className="relative bg-card/40 border border-border/50 p-8 rounded-3xl hover:border-primary/40 transition-colors duration-300">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 rotate-180" />
                <p className="text-lg italic text-foreground/90 leading-relaxed relative z-10 mb-6">"{q.q}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {q.a.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{q.a}</div>
                    <div className="text-sm text-muted-foreground">{q.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="sticky top-24">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
              Industrias
            </span>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-8 tracking-tight">
              A quién ayudamos
            </h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-background border border-border/50 rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="mt-12 bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 rounded-3xl text-primary-foreground shadow-lg shadow-primary/20">
              <h4 className="text-2xl font-extrabold font-display mb-4 tracking-tight text-white">
                ¿Tu industria no está aquí?
              </h4>
              <p className="opacity-90 leading-relaxed text-white/90">
                La automatización es universal. Si hay procesos repetitivos, hay oportunidad. Hablemos de tu caso para ver cómo podemos optimizar tus operaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
