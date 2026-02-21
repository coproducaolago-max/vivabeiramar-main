import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import corretorImg from "@/assets/corretor.jpg";
import { SectionTitle } from "@/components/premium/Section";

const testimonials = [
  {
    quote:
      "Atendimento estrategico, discreto e com leitura de mercado precisa. Concluimos uma aquisicao de alto valor com absoluta seguranca.",
    author: "Ricardo P.",
    role: "Empresario | Sao Paulo",
  },
  {
    quote:
      "A curadoria foi decisiva para filtrar opcoes realmente aderentes ao nosso perfil. Processo fluido, transparente e muito profissional.",
    author: "Mariana A.",
    role: "Investidora | Florianopolis",
  },
  {
    quote:
      "Excelente negociacao e acompanhamento de ponta a ponta. A experiencia entrega o nivel de confianca esperado em ativos premium.",
    author: "Fernanda C.",
    role: "Executiva | Curitiba",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => testimonials[index], [index]);

  const goLeft = () =>
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  const goRight = () =>
    setIndex((currentIndex) => (currentIndex + 1) % testimonials.length);

  return (
    <section className="relative py-[80px] md:py-[96px] bg-[#0D2233] text-white overflow-hidden section-noise">
      <div className="vb-container relative z-[2]">
        <div className="max-w-[980px] mx-auto">
          <SectionTitle
            light
            centered
            eyebrow="Depoimentos"
            title="Confianca comprovada em negociacoes de alto padrao"
            subtitle="A confianca de quem ja realizou o sonho de viver a beira-mar"
          />

          <motion.article
            key={current.author}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative mt-10 rounded-xl p-8 md:p-10 bg-[var(--bg-card)] border border-[var(--border-subtle)]"
          >
            <span className="absolute left-6 top-2 font-display text-[4rem] leading-none text-[var(--accent-gold)] opacity-30">
              "
            </span>
            <p className="font-body text-[1.08rem] italic leading-[1.8] text-[var(--text-primary)] mb-6 max-w-[680px] mx-auto">
              {current.quote}
            </p>
            <div className="flex items-center gap-3.5">
              <img
                src={corretorImg}
                alt={current.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-gold)]"
              />
              <div>
                <p className="font-sans text-[var(--text-primary)] font-semibold">
                  {current.author}
                </p>
                <p className="text-[0.875rem] text-[var(--text-secondary)]">
                  {current.role}
                </p>
              </div>
            </div>
          </motion.article>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goLeft}
              className="w-10 h-10 rounded-md border border-[var(--border-subtle)] text-[var(--accent-gold)] hover:bg-[rgba(212,168,83,0.15)] transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`h-[2px] w-9 transition-colors ${dotIndex === index
                    ? "bg-[var(--accent-gold)]"
                    : "bg-[var(--border-subtle)]"
                    }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goRight}
              className="w-10 h-10 rounded-md border border-[var(--border-subtle)] text-[var(--accent-gold)] hover:bg-[rgba(212,168,83,0.15)] transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
