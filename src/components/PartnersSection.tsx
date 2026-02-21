import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/premium/Section";

const partners = ["CAIXA", "BANCO DO BRASIL", "SANTANDER", "BRADESCO", "ITAU"];

const PartnersSection = () => (
  <Section variant="off-white">
    <SectionTitle
      darkBg={false}
      centered
      eyebrow="Parceiros"
      title="Parceiros de confianca"
      subtitle="Instituicoes financeiras com historico solido para apoiar operacoes de compra e investimento."
    />
    <div className="mt-10 flex justify-center items-center gap-10 md:gap-12 flex-wrap">
      {partners.map((partner, index) => (
        <motion.div
          key={partner}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
          className="text-lg font-sans font-semibold tracking-[2px] text-[#1B3A52] opacity-60 hover:opacity-100 transition-opacity cursor-default"
        >
          {partner}
        </motion.div>
      ))}
    </div>
  </Section>
);

export default PartnersSection;
