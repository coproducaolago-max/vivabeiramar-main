import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BedDouble, Car, Maximize2 } from "lucide-react";
import PropertyCard from "./PropertyCard";
import VisitedCard from "./VisitedCard";
import { Section, SectionTitle } from "@/components/premium/Section";
import {
  buildPropertyPath,
  featuredProperties,
  mostWantedProperties,
  newestProperties,
} from "@/data/properties";
import praiaBg from "@/assets/praia-ubatuba-bg.jpg";

const ScrollControls = ({
  containerRef,
  dark = true,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  dark?: boolean;
}) => {
  const scrollByAmount = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const amount = Math.round(containerRef.current.clientWidth * 0.82);
    containerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        className={`w-10 h-10 rounded-md border transition-colors flex items-center justify-center ${dark
          ? "border-[var(--border-subtle)] text-[var(--accent-gold)] hover:bg-[rgba(212,168,64,0.15)]"
          : "border-[#E5E7EB] text-[#5BBFD4] hover:bg-[rgba(91,191,212,0.1)]"
          }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        className={`w-10 h-10 rounded-md border transition-colors flex items-center justify-center ${dark
          ? "border-[var(--border-subtle)] text-[var(--accent-gold)] hover:bg-[rgba(212,168,64,0.15)]"
          : "border-[#E5E7EB] text-[#5BBFD4] hover:bg-[rgba(91,191,212,0.1)]"
          }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

/* Task 3.2 — Curadoria with wave texture */
export const DestaqueSection = () => {
  const [first, ...rest] = featuredProperties;

  return (
    <Section id="imoveis" variant="sand" className="relative overflow-hidden section-wave-texture">
      <SectionTitle
        darkBg={false}
        eyebrow="Curadoria em destaque"
        title="Imoveis selecionados para um litoral premium"
        subtitle="Selecao exclusiva de propriedades que definem o luxo a beira-mar de Ubatuba"
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-[1]">
        {first && (
          <div className="lg:col-span-2 lg:row-span-2">
            <PropertyCard
              displayMode="grid"
              variant="solid"
              lightSection
              href={buildPropertyPath(first)}
              image={first.image}
              tipo={first.type}
              condo={first.condo}
              titulo={first.title}
              area={first.area}
              quartos={first.bedrooms}
              vagas={first.parking}
              precoLabel={first.priceLabel}
              preco={first.price}
              tags={first.tags}
            />
          </div>
        )}
        {rest.slice(0, 4).map((property) => (
          <PropertyCard
            key={property.id}
            displayMode="grid"
            variant="solid"
            lightSection
            href={buildPropertyPath(property)}
            image={property.image}
            tipo={property.type}
            condo={property.condo}
            titulo={property.title}
            area={property.area}
            quartos={property.bedrooms}
            vagas={property.parking}
            precoLabel={property.priceLabel}
            preco={property.price}
            tags={property.tags}
          />
        ))}
      </div>
    </Section>
  );
};

/* Mais Procurados — luxury redesign */
export const ProcuradosSection = () => {
  const GOLD = "#C5A059";
  const GOLD_DARK = "#A68547";

  // Use first 3 mostWantedProperties
  const featured = mostWantedProperties.slice(0, 3);

  return (
    <section
      style={{
        padding: "100px 0 110px",
        background: "linear-gradient(160deg, #EDE4CE 0%, #E5D9B6 50%, #DDD0A5 100%)",
      }}
    >
      <div className="vb-container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-display font-bold"
            style={{ color: GOLD, fontSize: "clamp(34px, 4vw, 54px)" }}
          >
            Mais Procurados
          </h2>
          <p
            className="font-body font-light mt-3 mx-auto"
            style={{ color: "#7A5C2E", fontSize: "1rem", maxWidth: "440px" }}
          >
            Os imóveis mais desejados do litoral de Ubatuba
          </p>
          <div
            className="mx-auto mt-5 rounded-full"
            style={{
              width: "52px", height: "2px",
              background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            }}
          />
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property, i) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[16px]"
              style={{
                background: "rgba(255,252,245,0.52)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.72)",
                boxShadow: "0 6px 32px rgba(160,120,60,0.12), 0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <Link to={buildPropertyPath(property)} className="block">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <p
                    className="font-display font-bold mb-4"
                    style={{ color: "#2D1E00", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}
                  >
                    {property.price}
                  </p>
                  <Link
                    to={buildPropertyPath(property)}
                    className="inline-flex items-center justify-center w-full h-10 rounded-full font-label text-[0.7rem] tracking-[0.8px] transition-all duration-300 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                      color: "#fff",
                      boxShadow: `0 2px 12px rgba(197,160,89,0.35)`,
                    }}
                  >
                    Mais Detalhes
                  </Link>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};


import lancEdificio from "@/assets/lanc-edificio-sunset.png";
import lancTorre from "@/assets/lanc-torre-mar.png";
import lancResidencial from "@/assets/lanc-residencial-praia.png";

const lancamentos = [
  {
    id: "residencial-lazaro-premium",
    image: lancEdificio,
    badge: "Lançamento",
    tipo: "Torre Residencial",
    titulo: "Residencial Lázaro Premium",
    localizacao: "Lázaro, Ubatuba",
    area: "180 m²",
    quartos: "3 suítes",
    vagas: "2 vagas",
    preco: "R$ 2.400.000",
    precoLabel: "A partir de",
  },
  {
    id: "torre-camburi-azul",
    image: lancTorre,
    badge: "Lançamento",
    tipo: "Cobertura Exclusiva",
    titulo: "Torre Camburi Azul",
    localizacao: "Camburi, Ubatuba",
    area: "240 m²",
    quartos: "4 suítes",
    vagas: "3 vagas",
    preco: "R$ 3.900.000",
    precoLabel: "A partir de",
  },
  {
    id: "eden-toninhas-praia",
    image: lancResidencial,
    badge: "Pré-Lançamento",
    tipo: "Apartamento Premium",
    titulo: "Éden Toninhas Praia",
    localizacao: "Toninhas, Ubatuba",
    area: "150 m²",
    quartos: "3 suítes",
    vagas: "2 vagas",
    preco: "R$ 1.950.000",
    precoLabel: "A partir de",
  },
];

/* Lançamentos — luxury redesign */
export const NovosSection = () => {
  const GOLD = "#C5A059";
  const GOLD_DARK = "#A68547";

  return (
    <section
      style={{
        padding: "100px 0 110px",
        background: "linear-gradient(170deg, #F0E6CC 0%, #E8D9B0 45%, #DDD0A5 100%)",
      }}
    >
      <div className="vb-container">
        {/* Header */}
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
            Novas Oportunidades
          </p>
          <h2
            className="font-display font-bold"
            style={{ color: "#3D2B00", fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Lançamentos Exclusivos
          </h2>
          <p
            className="font-body font-light mt-3 mx-auto"
            style={{ color: "#7A5C2E", fontSize: "1rem", maxWidth: "460px" }}
          >
            Oportunidades únicas em regiões nobres com alto potencial de valorização
          </p>
          <div
            className="mx-auto mt-5 rounded-full"
            style={{
              width: "52px", height: "2px",
              background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            }}
          />
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lancamentos.map((prop, i) => (
            <motion.article
              key={prop.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[14px]"
              style={{
                background: "rgba(255,252,245,0.52)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.70)",
                boxShadow: "0 6px 28px rgba(160,120,60,0.11), 0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <Link to={`/imovel/${prop.id}`} className="block h-full">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={prop.image}
                    alt={prop.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  {/* Badge */}
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full font-label text-[0.6rem] font-bold uppercase tracking-[1.2px] text-white"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                      boxShadow: "0 2px 8px rgba(197,160,89,0.45)",
                    }}
                  >
                    {prop.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <span
                    className="block font-label text-[0.65rem] font-medium uppercase tracking-[1.5px] mb-1.5"
                    style={{ color: "#9C854A" }}
                  >
                    {prop.tipo}
                  </span>
                  <h3
                    className="font-display font-bold leading-snug mb-2"
                    style={{ color: GOLD, fontSize: "1.05rem" }}
                  >
                    {prop.titulo}
                  </h3>
                  <p
                    className="text-[0.82rem] mb-3"
                    style={{ color: "#8C7040" }}
                  >
                    📍 {prop.localizacao}
                  </p>

                  {/* Specs */}
                  <div
                    className="flex flex-wrap gap-3 text-[0.8rem] mb-4"
                    style={{ color: GOLD_DARK }}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble size={13} style={{ color: GOLD }} /> {prop.quartos}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Maximize2 size={12} style={{ color: GOLD }} /> {prop.area}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Car size={13} style={{ color: GOLD }} /> {prop.vagas}
                    </span>
                  </div>

                  {/* Price + CTA */}
                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: "rgba(197,160,89,0.20)" }}
                  >
                    <span
                      className="block font-label text-[0.65rem] uppercase tracking-[1.2px] mb-0.5"
                      style={{ color: "#9CA3AF" }}
                    >
                      {prop.precoLabel}
                    </span>
                    <span
                      className="font-display font-bold"
                      style={{ color: "#3D2B00", fontSize: "1.1rem" }}
                    >
                      {prop.preco}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/imoveis"
            className="inline-flex items-center gap-2 px-10 h-12 rounded-full font-label text-[0.72rem] tracking-[1.2px] transition-all duration-300 hover:scale-105"
            style={{
              border: `1px solid ${GOLD}`,
              color: GOLD_DARK,
              background: "rgba(255,252,245,0.60)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 2px 12px rgba(197,160,89,0.20)",
            }}
          >
            Ver Todos os Lançamentos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
