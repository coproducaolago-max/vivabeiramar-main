import { motion } from "framer-motion";
import corretorImg from "@/assets/corretor.jpg";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/5548999999999",
    label: "WhatsApp",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/vivabeiramar",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/vivabeiramar",
    label: "LinkedIn",
  },
];

const AboutSection = () => (
  <section
    id="sobre"
    style={{
      padding: "100px 0 110px",
      background: "linear-gradient(160deg, #F5EDD8 0%, #EDE0C4 50%, #E5D5B0 100%)",
    }}
  >
    <div className="vb-container">
      {/* Section eyebrow */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="font-label text-[0.72rem] font-semibold uppercase tracking-[2.5px] mb-3"
          style={{ color: GOLD }}
        >
          Sobre o Corretor
        </p>
        <h2
          className="font-display font-bold"
          style={{ color: "#3D2B00", fontSize: "clamp(28px, 3.5vw, 44px)" }}
        >
          Quem Está por Trás da Curadoria
        </h2>
        {/* Gold divider */}
        <div
          className="mx-auto mt-5 rounded-full"
          style={{
            width: "52px",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />
      </motion.div>

      {/* Glassmorphism panel */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[18px]"
        style={{
          background: "rgba(255,252,245,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.72)",
          boxShadow: "0 8px 40px rgba(160,120,60,0.13), 0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo column */}
          <div className="relative order-first lg:order-last overflow-hidden" style={{ minHeight: "420px" }}>
            <img
              src={corretorImg}
              alt="Corretor Viva Beiramar — Fernando Vieira"
              className="w-full h-full object-cover"
              style={{ minHeight: "420px" }}
            />
            {/* Subtle inner fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(245,237,216,0.35) 0%, transparent 40%)",
              }}
            />

            {/* Gold badge overlay */}
            <div
              className="absolute bottom-6 left-6 px-4 py-2 rounded-full font-label text-[0.62rem] font-bold uppercase tracking-[1.4px] text-white"
              style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                boxShadow: "0 2px 12px rgba(197,160,89,0.40)",
              }}
            >
              CRECI 123456-F
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col justify-center p-10 md:p-14">
            {/* Name */}
            <h3
              className="font-display font-bold leading-tight mb-1"
              style={{ color: GOLD, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Fernando Vieira
            </h3>
            <p
              className="font-label text-[0.7rem] uppercase tracking-[2px] mb-1"
              style={{ color: GOLD_DARK }}
            >
              CRECI 123456-F
            </p>
            <p
              className="font-label text-[0.7rem] uppercase tracking-[2px] mb-8"
              style={{ color: "#9C854A" }}
            >
              Especialista em Imóveis de Alto Padrão
            </p>

            {/* Gold thin divider */}
            <div
              className="mb-8 rounded-full"
              style={{
                width: "40px",
                height: "1.5px",
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
              }}
            />

            {/* Bio */}
            <div
              className="space-y-4 font-body font-light leading-[1.85] mb-10"
              style={{ color: "#5C4A28", fontSize: "1rem" }}
            >
              <p>
                Especialista em imóveis de alto padrão no litoral catarinense, com foco em
                negociações seguras e suporte completo do primeiro contato ao fechamento.
              </p>
              <p>
                Cada atendimento é estruturado para alinhar estilo de vida, potencial
                de valorização e patrimônio de longo prazo — oferecendo uma experiência
                verdadeiramente consultiva.
              </p>
            </div>

            {/* Social icons + CTA */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Social icon pills */}
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    border: `1px solid ${GOLD}`,
                    color: GOLD,
                    background: "rgba(197,160,89,0.08)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}

              {/* Primary CTA */}
              <a
                href="https://wa.me/5548999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 h-11 rounded-full font-label text-[0.72rem] tracking-[0.9px] text-white transition-all duration-300 hover:scale-105 ml-2"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                  boxShadow: "0 4px 18px rgba(197,160,89,0.32)",
                }}
              >
                <MessageCircle size={14} />
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
