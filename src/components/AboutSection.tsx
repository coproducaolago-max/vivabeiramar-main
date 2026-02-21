import { motion } from "framer-motion";
import corretorImg from "@/assets/corretor.jpg";
import { SectionTitle } from "@/components/premium/Section";

const AboutSection = () => (
  <section id="sobre" className="relative overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left side: Navy with dot pattern */}
      <div className="relative bg-[#1B3A52] section-dot-pattern py-[80px] px-8 md:px-16 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-[1]"
        >
          <SectionTitle
            light
            centered={false}
            eyebrow="Sobre o corretor"
            title="Atendimento consultivo para patrimonio imobiliario no litoral"
            subtitle="Especialista no mercado imobiliario de alto padrao do litoral"
          />
          <div className="mt-6">
            <p className="font-display text-2xl text-white">
              Fernando Vieira
            </p>
            <p className="font-sans text-sm font-medium uppercase tracking-[1.5px] text-[var(--accent-gold)] mt-1">
              CRECI 123456-F
            </p>
          </div>
          <div className="mt-6 space-y-4 font-body text-[17px] text-gray-300 leading-[1.8] max-w-[680px]">
            <p>
              Especialista em imoveis de alto padrao no litoral, com foco em
              negociacoes seguras e suporte completo do primeiro contato ao
              fechamento.
            </p>
            <p>
              Cada atendimento e estruturado para alinhar estilo de vida, potencial
              de valorizacao e patrimonio de longo prazo.
            </p>
          </div>
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center h-12 px-7 rounded-md bg-[var(--accent-gold)] text-[var(--bg-primary)] font-sans font-semibold text-[0.8rem] tracking-[0.3px] hover:bg-[var(--accent-gold-hover)] transition-colors duration-300"
          >
            Fale Comigo
          </a>
        </motion.div>
      </div>

      {/* Right side: Corretor photo with subtle overlay */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-[400px] lg:min-h-0 order-first lg:order-last"
      >
        <img
          src={corretorImg}
          alt="Corretor Viva Beiramar"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay from left for blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(27,58,82,0.25)] to-transparent" />
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
