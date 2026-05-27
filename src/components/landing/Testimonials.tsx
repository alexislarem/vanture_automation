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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
            Prueba social
          </span>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-12 tracking-tight">
            Lo que dicen
          </h3>
          <div className="space-y-10">
            {quotes.map((q) => (
              <blockquote key={q.a} className="border-l-2 border-primary pl-6 py-1">
                <p className="text-lg md:text-xl italic text-foreground/80 leading-relaxed">"{q.q}"</p>
                <footer className="mt-4 text-sm">
                  <span className="font-bold text-foreground">{q.a}</span>
                  <span className="text-muted-foreground"> · {q.r}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
        <div>
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
                className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium border border-border"
              >
                {i}
              </span>
            ))}
          </div>
          <div className="mt-12 bg-primary p-8 rounded-2xl text-primary-foreground">
            <h4 className="text-2xl font-extrabold font-display mb-3 tracking-tight">
              ¿Tu industria no está aquí?
            </h4>
            <p className="opacity-90 leading-relaxed">
              La automatización es universal. Si hay procesos repetitivos, hay oportunidad. Hablemos de tu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
