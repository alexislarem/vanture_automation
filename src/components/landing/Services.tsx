import { Globe, Bot, Workflow, LineChart, Cpu, Presentation } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Web Automation",
    desc: "Páginas y portales optimizados para conversión, integrados con tu CRM, formularios y flujos de datos. Listos para trabajar 24/7.",
    icon: Globe,
  },
  {
    n: "02",
    title: "IA Generativa",
    desc: "Agentes inteligentes, asistentes y GPTs personalizados que atienden clientes, califican leads y producen contenido en escala.",
    icon: Bot,
  },
  {
    n: "03",
    title: "CRM & Workflows",
    desc: "Make, n8n, Zapier, HubSpot y APIs. Conectamos todo tu stack para eliminar tareas manuales y errores humanos.",
    icon: Workflow,
  },
  {
    n: "04",
    title: "Growth Marketing",
    desc: "Embudos, networking estratégico y generación de leads cualificados con tracking avanzado y decisiones basadas en datos.",
    icon: LineChart,
  },
  {
    n: "05",
    title: "Consultoría Tech",
    desc: "Auditoría digital, arquitectura de software y acompañamiento estratégico para escalar tu operación sin romper lo que funciona.",
    icon: Cpu,
  },
  {
    n: "06",
    title: "Capacitación & Asesoría",
    desc: "Formación 1:1 y para equipos en IA, no-code, automatización y productividad. Te dejamos autónomo, no dependiente.",
    icon: Presentation,
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.n}
              className="group relative bg-card/30 backdrop-blur-sm border border-border/50 p-8 rounded-3xl hover:bg-card/80 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                <Icon className="w-48 h-48" />
              </div>
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-lg font-bold text-muted-foreground/50 group-hover:text-primary/50 transition-colors">
                  {s.n}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold font-display mb-4 tracking-tight relative z-10 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
