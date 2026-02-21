import { FormEvent, useState } from "react";
import sunsetImg from "@/assets/ubatuba-sunset.jpg";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    window.alert("Cadastro recebido. Em breve voce recebera oportunidades exclusivas.");
    setEmail("");
  };

  return (
    <section
      className="relative py-[100px] md:py-[120px] section-parallax-bg overflow-hidden text-center"
      style={{ backgroundImage: `url(${sunsetImg})`, backgroundColor: '#0D2233' }}
    >
      {/* Navy gradient overlay 70-75% */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(13,34,51,0.78)] to-[rgba(27,58,82,0.65)] z-[1]" />

      <div className="vb-container relative z-[2] max-w-[760px] mx-auto">
        <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[1.5px] text-[#D4A840] mb-3">
          Newsletter privada
        </p>
        <h2
          className="font-display font-bold leading-[1.2] tracking-[-0.3px] text-white mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)', textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}
        >
          Receba oportunidades exclusivas
        </h2>
        <p className="font-body text-[17px] leading-[1.8] text-gray-200 max-w-[560px] mx-auto mb-10">
          Selecao de imoveis premium enviada para clientes cadastrados antes da divulgacao ampla.
        </p>

        <form
          onSubmit={onSubmit}
          className="newsletter-form max-w-[500px] mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Seu melhor e-mail"
            className="flex-1 h-14 px-6 rounded-lg border-2 border-white/25 bg-white/12 backdrop-blur-[10px] text-white placeholder:text-white/60 focus:outline-none focus:border-[#5BBFD4] font-body text-[16px] transition-colors"
          />
          <button
            type="submit"
            className="h-14 px-10 rounded-lg bg-[#5BBFD4] text-white font-sans font-semibold text-[0.85rem] tracking-[0.3px] hover:bg-[#4AACBE] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(91,191,212,0.4)] transition-all duration-300"
          >
            Receber
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
