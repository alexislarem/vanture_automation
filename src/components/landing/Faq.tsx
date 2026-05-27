const faqs = [
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Las primeras automatizaciones suelen estar listas en 2-3 semanas, generando impacto inmediato en tu flujo diario. Los resultados comerciales completos se ven entre 30 y 60 días.",
  },
  {
    q: "¿Necesito saber programar o tener un equipo técnico?",
    a: "No. Yo me encargo de toda la complejidad técnica y te entrego herramientas y paneles listos para usar. Capacito a ti o a tu equipo para que sean autónomos.",
  },
  {
    q: "¿Con qué herramientas trabajas?",
    a: "Make, n8n, Zapier, OpenAI, Anthropic, HubSpot, Notion, Airtable, Supabase y frameworks modernos de desarrollo. Elegimos el stack según tu caso, no al revés.",
  },
  {
    q: "¿Trabajas con personas y pequeños negocios o solo empresas?",
    a: "Trabajo con personas, marcas personales, emprendedores, pymes y empresas. Adapto el alcance, el ritmo y la inversión a cada etapa.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Ofrezco planes de acompañamiento mensual para monitorear, optimizar y escalar los sistemas implementados. Nunca te quedas solo con el código.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block text-center">
          Preguntas frecuentes
        </span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center mb-16 tracking-tight">
          Resolvemos dudas
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border border-border rounded-xl p-5 bg-background open:bg-secondary/50 transition-colors"
            >
              <summary className="list-none cursor-pointer flex justify-between items-center font-bold gap-6">
                <span className="font-display text-base md:text-lg">{f.q}</span>
                <span className="group-open:rotate-45 transition-transform text-primary text-2xl shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
