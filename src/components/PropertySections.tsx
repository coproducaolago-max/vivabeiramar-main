import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

/* Task 3.1 — Mais Procurados with photo + overlay */
export const ProcuradosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative py-[80px] md:py-[96px] section-parallax-bg overflow-hidden"
      style={{ backgroundImage: `url(${praiaBg})`, backgroundColor: '#1B3A52' }}
    >
      {/* Navy overlay 85% */}
      <div className="absolute inset-0 bg-[rgba(27,58,82,0.85)] z-[1]" />

      <div className="vb-container relative z-[2]">
        <SectionTitle
          light
          centered
          eyebrow="Selecao mais desejada"
          title="Mais Procurados"
          subtitle="Os imoveis mais desejados do litoral norte de Sao Paulo"
        />
        <div className="flex justify-center mt-4">
          <ScrollControls containerRef={scrollRef} dark />
        </div>

        <div className="section-divider-gold mt-6 mb-8" />

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-3 scrollbar-thin">
          {mostWantedProperties.map((property) => (
            <VisitedCard
              key={property.id}
              href={buildPropertyPath(property)}
              image={property.image}
              tipo={property.type}
              condo={property.condo}
              titulo={property.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Task 3.3 — Lançamentos with blobs */
export const NovosSection = () => (
  <Section variant="sand" className="relative overflow-hidden section-blob-turquoise section-blob-gold">
    <SectionTitle
      darkBg={false}
      eyebrow="Novas oportunidades"
      title="Lancamentos e entradas recentes em regioes nobres"
      subtitle="Oportunidades unicas em regioes nobres com alto potencial de valorizacao"
    />

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 properties-grid relative z-[1]">
      {newestProperties.map((property) => (
        <PropertyCard
          key={property.id}
          displayMode="grid"
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
