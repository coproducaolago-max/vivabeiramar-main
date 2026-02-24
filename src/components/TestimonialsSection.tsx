import { motion } from "framer-motion";
import clientRicardo from "@/assets/client-ricardo.png";
import clientMariana from "@/assets/client-mariana.png";
import clientFernanda from "@/assets/client-fernanda.png";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const testimonials = [
  {
    quote:
      "Atendimento estratégico, discreto e com leitura de mercado precisa. Concluímos uma aquisição de alto valor com absoluta segurança.",
    author: "Ricardo P.",
    role: "Empresário · São Paulo",
    photo: clientRicardo,
    stars: 5,
    rotate: "-1.5deg",
    translateY: "0px",
  },
  {
    quote:
      "A curadoria foi decisiva para filtrar opções realmente aderentes ao nosso perfil. Processo fluido, transparente e muito profissional.",
    author: "Mariana A.",
    role: "Investidora · Ubatuba",
    photo: clientMariana,
    stars: 5,
    rotate: "0.8deg",
    translateY: "-18px",
  },
  {
    quote:
      "Excelente negociação e acompanhamento de ponta a ponta. A experiência entrega o nível de confiança esperado em ativos premium.",
    author: "Fernanda C.",
    role: "Executiva · Ubatuba",
    photo: clientFernanda,
    stars: 5,
    rotate: "-0.5deg",
    translateY: "10px",
  },
];

/* Gold star row */
const Stars = ({ count }: { count: number }) => (
  <div className="flex items-center gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section
    style={{
      padding: "100px 0 120px",
      background: "linear-gradient(170deg, #F0E6CC 0%, #E8D9B0 50%, #DDD0A5 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Subtle ripple texture overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(ellipse at 30% 60%, rgba(197,160,89,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 75% 30%, rgba(197,160,89,0.05) 0%, transparent 55%)`,
      }}
    />

    <div className="vb-container relative z-10">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="font-label text-[0.72rem] font-semibold uppercase tracking-[2.5px] mb-3"
          style={{ color: GOLD }}
        >
          Depoimentos
        </p>
        <h2
          className="font-display font-bold"
          style={{ color: "#3D2B00", fontSize: "clamp(28px, 3.5vw, 44px)" }}
        >
          Confiança Comprovada
        </h2>
        <p
          className="font-body font-light mt-3 mx-auto"
          style={{ color: "#7A5C2E", fontSize: "1rem", maxWidth: "420px" }}
        >
          A voz de quem já realizou o sonho de viver à beira-mar
        </p>
        <div
          className="mx-auto mt-5 rounded-full"
          style={{
            width: "52px",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />
      </motion.div>

      {/* Cards grid — asymmetric stagger */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-start">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.author}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-7 rounded-[16px]"
            style={{
              background: "rgba(255,252,245,0.55)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.74)",
              boxShadow: "0 8px 36px rgba(160,120,60,0.12), 0 1px 4px rgba(0,0,0,0.06)",
              transform: `rotate(${t.rotate}) translateY(${t.translateY})`,
            }}
          >
            {/* Giant decorative quotation mark */}
            <span
              className="absolute font-display font-bold select-none pointer-events-none"
              style={{
                top: "-8px",
                left: "18px",
                fontSize: "6.5rem",
                lineHeight: 1,
                background: `linear-gradient(160deg, ${GOLD}55 0%, ${GOLD}22 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "
            </span>

            {/* Stars */}
            <div className="relative z-10 mt-4">
              <Stars count={t.stars} />
            </div>

            {/* Quote text */}
            <p
              className="relative z-10 font-display font-normal italic leading-[1.85] mb-7"
              style={{ color: "#4A3520", fontSize: "clamp(0.92rem, 1.1vw, 1rem)" }}
            >
              {t.quote}
            </p>

            {/* Gold divider */}
            <div
              className="mb-5 rounded-full"
              style={{
                width: "32px",
                height: "1.5px",
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
              }}
            />

            {/* Author row */}
            <div className="relative z-10 flex items-center gap-3.5">
              {/* Circular gold frame */}
              <div
                className="flex-shrink-0 rounded-full p-[2px]"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                  boxShadow: `0 0 0 2px rgba(197,160,89,0.20)`,
                }}
              >
                <div className="rounded-full overflow-hidden w-11 h-11">
                  <img
                    src={t.photo}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p
                  className="font-display font-semibold"
                  style={{ color: GOLD_DARK, fontSize: "0.95rem" }}
                >
                  {t.author}
                </p>
                <p
                  className="font-body font-light"
                  style={{ color: "#9C854A", fontSize: "0.75rem" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
