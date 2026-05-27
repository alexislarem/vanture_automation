const services = [
  {
    n: "01",
    title: "Web Automation",
    desc: "Páginas y portales optimizados para conversión, integrados con tu CRM, formularios y flujos de datos. Listos para trabajar 24/7.",
  },
  {
    n: "02",
    title: "IA Generativa",
    desc: "Agentes inteligentes, asistentes y GPTs personalizados que atienden clientes, califican leads y producen contenido en escala.",
  },
  {
    n: "03",
    title: "CRM & Workflows",
    desc: "Make, n8n, Zapier, HubSpot y APIs. Conectamos todo tu stack para eliminar tareas manuales y errores humanos.",
  },
  {
    n: "04",
    title: "Growth Marketing",
    desc: "Embudos, networking estratégico y generación de leads cualificados con tracking avanzado y decisiones basadas en datos.",
  },
  {
    n: "05",
    title: "Consultoría Tech",
    desc: "Auditoría digital, arquitectura de software y acompañamiento estratégico para escalar tu operación sin romper lo que funciona.",
  },
  {
    n: "06",
    title: "Capacitación & Asesoría",
    desc: "Formación 1:1 y para equipos en IA, no-code, automatización y productividad. Te dejamos autónomo, no dependiente.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 block">
            Servicios
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Capacidades especializadas
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Soluciones integrales para personas, emprendedores y empresas que quieren crecer con tecnología.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border ring-1 ring-border rounded-2xl overflow-hidden">
        {services.map((s) => (
          <div
            key={s.n}
            className="bg-background p-10 hover:bg-secondary transition-colors group"
          >
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform font-mono text-base font-bold">
              {s.n}
            </div>
            <h3 className="text-2xl font-extrabold font-display mb-3 tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
