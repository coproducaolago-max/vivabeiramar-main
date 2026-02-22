import { motion } from "framer-motion";

const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

const stats = [
  { value: "R$ 50M+", label: "Em Vendas em 2024" },
  { value: "150+", label: "Imóveis Exclusivos" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "15+", label: "Anos de Mercado" },
];

const StatsSection = () => (
  <section
    style={{
      padding: "90px 0 100px",
      background: "linear-gradient(160deg, #EDE4CE 0%, #E5D9B6 50%, #DDD0A5 100%)",
    }}
  >
    <div className="vb-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center px-6 py-9 rounded-[14px]"
            style={{
              background: "rgba(255,252,245,0.52)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.72)",
              boxShadow:
                "0 6px 28px rgba(160,120,60,0.10), 0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            {/* Number with gold gradient + subtle text-shadow for 3D metallic feel */}
            <p
              className="font-display font-bold leading-none"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                background: `linear-gradient(160deg, #D4AE6A 0%, ${GOLD} 45%, ${GOLD_DARK} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 1px 2px rgba(160,110,20,0.25))",
              }}
            >
              {stat.value}
            </p>

            {/* Gold thin divider */}
            <div
              className="my-4 rounded-full"
              style={{
                width: "32px",
                height: "1.5px",
                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
              }}
            />

            {/* Label */}
            <p
              className="font-body font-light uppercase tracking-[1.6px]"
              style={{ color: "#7A5C2E", fontSize: "0.72rem" }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
