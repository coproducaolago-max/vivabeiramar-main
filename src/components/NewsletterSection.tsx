import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    window.alert("Cadastro recebido. Em breve você receberá oportunidades exclusivas.");
    setEmail("");
  };

  return (
    <section
      style={{
        padding: "100px 0 110px",
        background: "linear-gradient(160deg, #F5EDD8 0%, #EDE0C4 50%, #E5D5B0 100%)",
      }}
    >
      <div className="vb-container max-w-[760px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="text-center mb-10">
            <p
              className="font-label text-[0.72rem] font-semibold uppercase tracking-[2.5px] mb-3"
              style={{ color: GOLD }}
            >
              Newsletter Privada
            </p>
            <h2
              className="font-display font-bold mb-4"
              style={{ color: "#3D2B00", fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Receba Oportunidades Exclusivas
            </h2>
            <p
              className="font-body font-light mx-auto"
              style={{ color: "#7A5C2E", fontSize: "1rem", maxWidth: "480px", lineHeight: "1.75" }}
            >
              Seleção de imóveis premium enviada para clientes cadastrados antes da divulgação ampla.
            </p>
            <div
              className="mx-auto mt-5 rounded-full"
              style={{
                width: "52px",
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
              }}
            />
          </div>

          {/* Glassmorphism form panel */}
          <div
            className="rounded-[16px] p-8 md:p-10"
            style={{
              background: "rgba(255,252,245,0.55)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.72)",
              boxShadow: "0 8px 36px rgba(160,120,60,0.12), 0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 h-13 px-5 rounded-[10px] font-body text-[0.95rem] focus:outline-none transition-all duration-200"
                style={{
                  height: "52px",
                  background: "rgba(255,248,236,0.80)",
                  border: `1px solid rgba(197,160,89,0.35)`,
                  color: "#3D2B00",
                  caretColor: GOLD,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = GOLD;
                  e.currentTarget.style.boxShadow = `0 0 0 3px rgba(197,160,89,0.12)`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(197,160,89,0.35)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 h-13 rounded-[10px] font-label font-semibold text-[0.78rem] tracking-[0.8px] text-white transition-all duration-300 hover:scale-105 flex-shrink-0"
                style={{
                  height: "52px",
                  background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                  boxShadow: `0 4px 18px rgba(197,160,89,0.35)`,
                }}
              >
                <Send size={14} />
                Receber
              </button>
            </form>

            <p
              className="text-center font-body font-light mt-5 text-[0.78rem]"
              style={{ color: "#9C854A" }}
            >
              Sem spam. Apenas oportunidades reais. Cancele quando quiser.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
