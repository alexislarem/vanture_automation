export function Hero() {
  return (
    <section id="top" className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-9">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6 block animate-reveal">
            Automatización · IA · Estrategia
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tighter text-balance animate-reveal [animation-delay:100ms]">
            Escalamos tu negocio con <span className="text-primary italic">inteligencia</span> y diseño.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[58ch] text-pretty animate-reveal [animation-delay:200ms]">
            Diseñamos sistemas digitales que trabajan por ti. Automatizaciones, integraciones de IA, webs de
            alta conversión y estrategia de crecimiento — todo conectado en un ecosistema rentable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-reveal [animation-delay:300ms]">
            <a
              href="#contacto"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base md:text-lg hover:brightness-110 transition-all"
            >
              Empezar proyecto
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 border border-border rounded-full font-bold text-base md:text-lg hover:bg-foreground hover:text-background transition-all"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
