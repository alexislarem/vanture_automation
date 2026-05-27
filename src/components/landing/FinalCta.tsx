export function FinalCta() {
  return (
    <section id="contacto" className="py-32 bg-surface text-surface-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6 block">
          Hablemos
        </span>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl mb-8 tracking-tighter text-balance">
          ¿Listo para dejar de operar y empezar a <span className="text-primary italic">crecer</span>?
        </h2>
        <p className="text-lg md:text-xl opacity-70 mb-12 max-w-xl mx-auto">
          Agenda una consultoría gratuita de 15 minutos. Sin compromiso, sin venta dura — solo claridad sobre qué se puede automatizar hoy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Agendar llamada
          </a>
          <a
            href="#"
            className="px-10 py-5 border border-white/15 rounded-full font-bold text-lg hover:bg-white/5 transition-colors"
          >
            WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}
