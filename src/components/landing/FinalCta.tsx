import { Calendar, MessageCircle } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contacto" className="py-32 bg-surface text-surface-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
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
            className="flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-xl hover:shadow-primary/20"
          >
            <Calendar className="w-5 h-5" />
            Agendar llamada
          </a>
          <a
            href="https://wa.me/1234567890" // TODO: Add real WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-10 py-5 border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}
