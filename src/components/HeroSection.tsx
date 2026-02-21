import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 50]);
  const [formData, setFormData] = useState({
    negocio: "",
    tipo: "",
    cidade: "",
    bairro: "",
    preco: "",
  });

  const handleSearch = () => {
    const listSection = document.getElementById("imoveis");
    if (listSection) {
      listSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const inputClass =
    "w-full h-11 px-3 bg-[rgba(27,58,82,0.75)] border border-[var(--border-subtle)] rounded-md text-[0.86rem] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]/35 focus:border-[var(--accent-gold)] transition-all duration-300 appearance-none";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, y: parallaxY }}
      />
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative z-10 w-full vb-container pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[880px] mb-10"
        >
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-[var(--accent-gold)] mb-4">
            VIVA BEIRAMAR | CURADORIA IMOBILIARIA
          </p>
          <h1
            className="font-display font-bold text-white leading-[1.15] tracking-[-0.5px] mb-5"
            style={{ fontSize: "clamp(42px, 5vw, 64px)" }}
          >
            Seu Refugio Exclusivo a Beira-Mar
          </h1>
          <p className="font-body max-w-[680px] text-[17px] leading-[1.8] text-gray-300">
            Curadoria de imoveis singulares no litoral, com consultoria
            personalizada para quem busca patrimonio, estilo de vida e
            seguranca na decisao.
          </p>
          <div className="mt-7">
            <a
              href="#interest-form"
              className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-[var(--accent-gold)] text-[var(--bg-primary)] font-sans font-semibold text-[0.8rem] tracking-[0.3px] hover:bg-[var(--accent-gold-hover)] transition-colors duration-300"
            >
              Agendar Visita Personalizada
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass p-5 md:p-6 shadow-card-hover rounded-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
            {[
              {
                id: "negocio",
                label: "Negocio",
                options: [
                  ["", "Selecione"],
                  ["venda", "Venda"],
                  ["aluguel", "Aluguel"],
                  ["temporada", "Temporada"],
                ],
              },
              {
                id: "tipo",
                label: "Tipo",
                options: [
                  ["", "Selecione"],
                  ["apartamento", "Apartamento"],
                  ["casa", "Casa"],
                  ["terreno", "Terreno"],
                  ["cobertura", "Cobertura"],
                ],
              },
              {
                id: "cidade",
                label: "Cidade",
                options: [
                  ["", "Selecione"],
                  ["ubatuba", "Ubatuba"],
                  ["florianopolis", "Florianopolis"],
                  ["curitiba", "Curitiba"],
                  ["praia-grande", "Praia Grande"],
                ],
              },
              {
                id: "bairro",
                label: "Bairro",
                options: [
                  ["", "Selecione"],
                  ["centro", "Centro"],
                  ["itacorubi", "Itacorubi"],
                  ["praia-grande", "Praia Grande"],
                ],
              },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label className="font-label text-[0.62rem] text-[var(--text-secondary)]">
                  {field.label}
                </label>
                <select
                  className={inputClass}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      [field.id]: event.target.value,
                    }))
                  }
                >
                  {field.options.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="font-label text-[0.62rem] text-[var(--text-secondary)]">
                Faixa de Preco
              </label>
              <input
                type="number"
                placeholder="Ate R$"
                min="0"
                step="10000"
                className={inputClass}
                value={formData.preco}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    preco: event.target.value,
                  }))
                }
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="w-full h-12 rounded-md bg-[var(--accent-gold)] text-[var(--bg-primary)] font-btn text-[0.75rem] hover:bg-[var(--accent-gold-hover)] transition-colors duration-300"
          >
            Explorar Imoveis Exclusivos
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
