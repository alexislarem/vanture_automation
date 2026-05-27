import portrait from "@/assets/portrait.jpg";

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-surface text-surface-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <img
            src={portrait}
            alt="Retrato profesional"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6 block">
            Sobre mí
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-8 tracking-tight">
            Estrategia humana en la era de los algoritmos.
          </h2>
          <div className="space-y-6 text-base md:text-lg opacity-70 leading-relaxed">
            <p>
              No solo construyo herramientas; diseño sistemas que te devuelven el tiempo. Mi enfoque
              combina precisión técnica con visión comercial para que cada automatización genere ROI medible.
            </p>
            <p>
              Más de una década resolviendo problemas digitales para emprendedores, marcas personales y
              empresas en crecimiento. Convierto procesos manuales y caóticos en operaciones fluidas,
              escalables y rentables.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            <div>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-primary">+150</div>
              <div className="text-xs font-mono uppercase opacity-50 mt-2 tracking-widest">Proyectos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-primary">98%</div>
              <div className="text-xs font-mono uppercase opacity-50 mt-2 tracking-widest">Eficiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-primary">10+</div>
              <div className="text-xs font-mono uppercase opacity-50 mt-2 tracking-widest">Años</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
