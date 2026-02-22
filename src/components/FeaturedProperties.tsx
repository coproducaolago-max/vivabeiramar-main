import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, Bath, Maximize2 } from "lucide-react";

import imgVilla from "../assets/prop-villa-horizonte.png";
import imgResidencia from "../assets/prop-residencia-oceano.png";
import imgMansao from "../assets/prop-mansao-mare.png";
import imgPalacio from "../assets/prop-palacio-ondas.png";

/* ── Tokens ─────────────────────────────────────────────────────────── */
const GOLD = "#C5A059";
const GOLD_DARK = "#A68547";

/* ── Data ────────────────────────────────────────────────────────────── */
const properties = [
    {
        id: "villa-horizonte-azul",
        image: imgVilla,
        badge: "Vista Mar",
        titulo: "Villa Horizonte Azul",
        suites: "5 Suítes",
        banheiros: "6 Banheiros",
        area: "850m²",
        preco: "R$ 35.000.000",
    },
    {
        id: "residencia-oceano-calmo",
        image: imgResidencia,
        badge: "Lançamento",
        titulo: "Residência Oceano Calmo",
        suites: "4 Suítes",
        banheiros: "5 Banheiros",
        area: "720m²",
        preco: "R$ 28.500.000",
    },
    {
        id: "mansao-mare-dourada",
        image: imgMansao,
        badge: "Vista Mar",
        titulo: "Mansão Maré Dourada",
        suites: "6 Suítes",
        banheiros: "7 Banheiros",
        area: "1.100m²",
        preco: "R$ 42.000.000",
    },
    {
        id: "palacio-das-ondas",
        image: imgPalacio,
        badge: "Lançamento",
        titulo: "Palácio das Ondas",
        suites: "5 Suítes",
        banheiros: "6 Banheiros",
        area: "950m²",
        preco: "R$ 31.500.000",
    },
];

/* ── Card ────────────────────────────────────────────────────────────── */
const PropertyCard = ({
    prop,
    index,
}: {
    prop: (typeof properties)[0];
    index: number;
}) => (
    <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: index * 0.10, ease: [0.22, 1, 0.36, 1] }}
        className="group flex flex-row overflow-hidden rounded-[14px]"
        style={{
            background: "rgba(255,252,245,0.55)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.70)",
            boxShadow: "0 4px 24px rgba(160,120,60,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        }}
    >
        {/* Image — left column */}
        <div className="relative w-[38%] flex-shrink-0 overflow-hidden">
            <img
                src={prop.image}
                alt={prop.titulo}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ minHeight: "180px" }}
            />
            {/* Badge */}
            <span
                className="absolute top-3 right-3 px-3 py-1 rounded-full font-label text-[0.6rem] font-bold uppercase tracking-[1.2px] text-white"
                style={{
                    background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                    boxShadow: "0 2px 8px rgba(197,160,89,0.45)",
                }}
            >
                {prop.badge}
            </span>
        </div>

        {/* Content — right column */}
        <div className="flex flex-col justify-between p-5 flex-1">
            <div>
                <h3
                    className="font-display font-bold leading-snug mb-3"
                    style={{ color: GOLD, fontSize: "clamp(1rem, 1.5vw, 1.18rem)" }}
                >
                    {prop.titulo}
                </h3>

                {/* Specs row */}
                <div className="flex flex-wrap gap-3 text-[0.8rem]" style={{ color: GOLD_DARK }}>
                    <span className="inline-flex items-center gap-1.5">
                        <BedDouble size={14} style={{ color: GOLD }} />
                        {prop.suites}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <Bath size={14} style={{ color: GOLD }} />
                        {prop.banheiros}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <Maximize2 size={13} style={{ color: GOLD }} />
                        {prop.area}
                    </span>
                </div>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[rgba(197,160,89,0.20)]">
                <span
                    className="font-display font-bold"
                    style={{ color: "#3D2B00", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
                >
                    {prop.preco}
                </span>
                <Link
                    to={`/imovel/${prop.id}`}
                    className="inline-flex items-center px-4 h-8 rounded-full font-label text-[0.62rem] tracking-[0.8px] transition-all duration-300 hover:scale-105"
                    style={{
                        border: `1px solid ${GOLD}`,
                        color: GOLD_DARK,
                        background: "rgba(197,160,89,0.10)",
                    }}
                >
                    Ver Detalhes
                </Link>
            </div>
        </div>
    </motion.article>
);

/* ── Section ─────────────────────────────────────────────────────────── */
const FeaturedProperties = () => (
    <section
        style={{
            padding: "100px 0 110px",
            background: "linear-gradient(160deg, #F5EDD8 0%, #EDE0C4 40%, #E8D8B5 100%)",
        }}
    >
        <div className="vb-container">
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2
                    className="font-display font-bold mb-3"
                    style={{ color: "#3D2B00", fontSize: "clamp(30px, 3.5vw, 46px)" }}
                >
                    Seleção Exclusiva
                </h2>
                <p
                    className="font-body font-light mx-auto"
                    style={{ color: "#7A5C2E", fontSize: "1rem", maxWidth: "480px" }}
                >
                    Casas e Apartamentos de Luxo com Vistas Deslumbrantes
                </p>
                {/* Gold line divider */}
                <div
                    className="mx-auto mt-5 rounded-full"
                    style={{
                        width: "52px",
                        height: "2px",
                        background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                    }}
                />
            </motion.div>

            {/* 2×2 Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {properties.map((prop, i) => (
                    <PropertyCard key={prop.id} prop={prop} index={i} />
                ))}
            </div>

            {/* CTA */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
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
                    Ver Todas as Opções Exclusivas
                </Link>
            </motion.div>
        </div>
    </section>
);

export default FeaturedProperties;
