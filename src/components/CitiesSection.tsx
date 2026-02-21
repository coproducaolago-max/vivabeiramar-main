import { motion } from "framer-motion";
import { properties } from "@/data/properties";
import aerialImg from "@/assets/ubatuba-aerial.jpg";

const cityCards = [
  { city: "Ubatuba", state: "SP", count: 18 },
  { city: "Florianopolis", state: "SC", count: 32 },
  { city: "Curitiba", state: "PR", count: 21 },
  { city: "Praia Grande", state: "SC", count: 14 },
];

const fallbackImage = properties[0]?.image ?? "";

const CitiesSection = () => (
  <section
    className="relative py-[80px] md:py-[96px] section-parallax-bg overflow-hidden"
    style={{ backgroundImage: `url(${aerialImg})`, backgroundColor: '#1B3A52' }}
  >
    {/* Overlay navy 40% + subtle blur */}
    <div className="absolute inset-0 bg-[rgba(27,58,82,0.40)] backdrop-blur-[2px] z-[1]" />

    <div className="vb-container relative z-[2]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[1.5px] text-[#D4A840] mb-3">
          Mercados e regioes
        </p>
        <div className="relative inline-block pb-5">
          <h2 className="font-display font-bold leading-[1.2] tracking-[-0.3px] text-[clamp(32px,3.5vw,48px)] text-white">
            Regioes atendidas no litoral e capitais
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#D4A840] to-[#B8893A] rounded-full" />
        </div>
        <p className="font-body text-[17px] leading-[1.8] mt-3 max-w-[600px] mx-auto text-gray-200">
          Atuacao focada em areas com alta demanda de moradia premium e investimento.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cityCards.map((card, index) => (
          <motion.article
            key={`${card.city}-${card.state}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="region-card aspect-[4/3] border border-white/20 group rounded-xl overflow-hidden relative bg-white/95 backdrop-blur-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(91,191,212,0.2)] transition-all duration-300"
          >
            <img
              src={fallbackImage}
              alt={`${card.city} ${card.state}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <p className="name">{card.city} - {card.state}</p>
            <p className="count">{card.count}+ imoveis</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CitiesSection;
