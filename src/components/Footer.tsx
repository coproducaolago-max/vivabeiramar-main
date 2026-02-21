import logo from "@/assets/logo-viva-beiramar.png";

const Footer = () => (
  <footer className="bg-[var(--bg-footer)] pt-16 pb-8">
    <div className="vb-container">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Viva Beiramar" className="w-11 h-11 object-contain" />
            <p className="font-display text-2xl text-[var(--text-primary)]">
              Viva <span className="text-[var(--accent-gold)]">Beiramar</span>
            </p>
          </div>
          <p className="font-body mt-3 text-[0.875rem] leading-[1.7] text-[var(--text-secondary)] max-w-[320px]">
            Curadoria imobiliaria de alto padrao para clientes que exigem
            seguranca, discricao e atendimento consultivo no litoral.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[var(--accent-gold)] text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[var(--accent-gold)] text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[var(--accent-gold)] text-sm font-medium hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="font-sans text-[0.875rem] font-semibold uppercase tracking-[1.5px] text-[var(--accent-gold)] mb-3">
            Navegacao
          </p>
          <div className="space-y-1.5">
            <a href="#imoveis" className="block text-[0.875rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Imoveis
            </a>
            <a href="#sobre" className="block text-[0.875rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Sobre
            </a>
            <a href="/imovel/casa-itacorubi-praia-grande-santa-catarina-id-107230" className="block text-[0.875rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Imovel em destaque
            </a>
          </div>
        </div>

        <div>
          <p className="font-sans text-[0.875rem] font-semibold uppercase tracking-[1.5px] text-[var(--accent-gold)] mb-3">
            Regioes
          </p>
          <div className="space-y-1.5 text-[0.875rem] text-[var(--text-secondary)]">
            <p>Guaruja - SP</p>
            <p>Ilhabela - SP</p>
            <p>Riviera - SP</p>
            <p>Florianopolis - SC</p>
          </div>
        </div>

        <div>
          <p className="font-sans text-[0.875rem] font-semibold uppercase tracking-[1.5px] text-[var(--accent-gold)] mb-3">
            Contato
          </p>
          <div className="space-y-2 text-[0.875rem] text-[var(--text-secondary)]">
            <a
              href="https://wa.me/5548996931776"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--text-primary)] transition-colors"
            >
              (48) 99693-1776
            </a>
            <a
              href="mailto:contato@vivabeiramar.com"
              className="block hover:text-[var(--text-primary)] transition-colors"
            >
              contato@vivabeiramar.com
            </a>
            <p className="text-[var(--accent-gold)]">CRECI 123456-F</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[0.75rem] text-[var(--text-muted)]">
        <p>2026 Viva Beiramar. Todos os direitos reservados.</p>
        <p className="text-[var(--accent-gold)]">Creci 123456-F</p>
      </div>
    </div>
  </footer>
);

export default Footer;
