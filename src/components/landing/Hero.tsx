import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

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
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base md:text-lg hover:brightness-110 transition-all cursor-pointer">
                  Empezar proyecto
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl font-bold">Hablemos de tu proyecto</DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    Contáctame directamente por WhatsApp. Tengo un sistema automatizado listo para guiarte en los primeros pasos y agendar nuestra primera sesión.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <a
                    href="https://wa.me/+34683594262" // TODO: Add real WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-4 rounded-xl font-bold transition-all text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Abrir WhatsApp
                  </a>
                </div>
              </DialogContent>
            </Dialog>

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
