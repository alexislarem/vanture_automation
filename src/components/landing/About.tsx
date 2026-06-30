export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-surface text-surface-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Nueva sección interactiva/tipográfica reemplazando la imagen */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-background/5 border border-white/10 p-8 md:p-12 flex flex-col justify-center min-h-[400px] hover:border-primary/50 transition-colors duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          
          <h3 className="font-display text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Menos tareas manuales.<br/>
            <span className="text-primary">Más impacto real.</span>
          </h3>
          
          <ul className="space-y-6 font-mono text-sm md:text-base opacity-90">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              <span>Auditoría de cuellos de botella</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              <span>Arquitectura de soluciones con IA</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              <span>Despliegue de automatizaciones</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
              <span>Aceleración de crecimiento</span>
            </li>
          </ul>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6 block">
            Mi enfoque
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
              He trabajado resolviendo problemas digitales para emprendedores, marcas personales y
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
              <div className="text-3xl md:text-4xl font-display font-extrabold text-primary">∞</div>
              <div className="text-xs font-mono uppercase opacity-50 mt-2 tracking-widest">Crecimiento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
