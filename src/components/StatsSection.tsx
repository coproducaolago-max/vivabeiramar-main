import { motion } from "framer-motion";

const stats = [
  { value: "R$ 50M+", label: "em vendas 2024" },
  { value: "150+", label: "imoveis exclusivos" },
  { value: "98%", label: "clientes satisfeitos" },
  { value: "15+", label: "anos de mercado" },
];

const StatsSection = () => (
  <section className="relative py-[80px] md:py-[96px] overflow-hidden">
    {/* Gradient background: turquesa → navy */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#5BBFD4] to-[#1B3A52]" />
    {/* Radial orbs for depth */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-[500px] h-[500px] top-1/2 left-[15%] -translate-y-1/2 rounded-full bg-[rgba(91,191,212,0.18)] blur-[80px]" />
      <div className="absolute w-[400px] h-[400px] top-1/2 right-[10%] -translate-y-1/2 rounded-full bg-[rgba(27,58,82,0.25)] blur-[80px]" />
    </div>

    <div className="vb-container relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 text-center items-center">
        {stats.map((stat, index) => (
          <>
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="p-5"
            >
              <p className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-none font-bold text-white">
                {stat.value}
              </p>
              <p className="font-sans text-[0.875rem] font-medium mt-3 text-white/70 uppercase tracking-[1.5px]">
                {stat.label}
              </p>
            </motion.div>
            {index < stats.length - 1 && (
              <div key={`sep-${stat.label}`} className="stat-separator hidden lg:block" />
            )}
          </>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
