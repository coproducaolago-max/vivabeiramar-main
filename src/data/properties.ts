import imovel1 from "@/assets/imovel1.jpg";
import imovel2 from "@/assets/imovel2.jpg";
import imovel3 from "@/assets/imovel3.jpg";
import imovel4 from "@/assets/imovel4.jpg";
import imovel5 from "@/assets/imovel5.jpg";
import imovel6 from "@/assets/imovel6.jpg";
import imovel7 from "@/assets/imovel7.jpg";
import imovel8 from "@/assets/imovel8.jpg";
import corretorImage from "@/assets/corretor.jpg";

export type PropertyTagVariant = "destaque" | "lancamento" | "aluguel";

export interface PropertyTag {
  label: string;
  variant: PropertyTagVariant;
}

export interface PropertyRecord {
  id: number;
  image: string;
  type: string;
  title: string;
  condo?: string;
  neighborhood: string;
  city: string;
  stateCode: string;
  area?: string;
  bedrooms?: string;
  bathrooms?: string;
  parking?: string;
  priceLabel: string;
  price: string;
  description: string;
  features: string[];
  observations?: string;
  tags?: PropertyTag[];
}

const stateNameByCode: Record<string, string> = {
  SC: "santa-catarina",
  PR: "parana",
  SP: "sao-paulo",
  BA: "bahia",
};

const normalizeSlug = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const properties: PropertyRecord[] = [
  {
    id: 107230,
    image: imovel3,
    type: "Casa",
    title: "Itacorubi, Praia Grande - SC",
    condo: "Condominio Villas",
    neighborhood: "Itacorubi",
    city: "Praia Grande",
    stateCode: "SC",
    area: "145 m2",
    bathrooms: "2 Banheiros",
    priceLabel: "Venda",
    price: "R$ 50.000",
    tags: [{ label: "Lancamento", variant: "lancamento" }],
    description:
      "Casa em condominio com planta bem distribuida, iluminacao natural e area externa para lazer.",
    features: [
      "Condominio fechado",
      "Sala integrada com cozinha",
      "Lavabo",
      "Area de servico",
      "Varanda com vista aberta",
    ],
    observations:
      "Imovel em fase final de melhorias internas. Visitas com agendamento previo.",
  },
  {
    id: 107231,
    image: imovel5,
    type: "Lote/Terreno",
    title: "Rodovia, Porto Seguro - BA",
    condo: "Condominio Villas",
    neighborhood: "Rodovia",
    city: "Porto Seguro",
    stateCode: "BA",
    area: "250 m2",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 170.000",
    tags: [{ label: "Destaque", variant: "destaque" }],
    description:
      "Lote em area valorizada com infraestrutura do condominio e facil acesso para as principais vias.",
    features: [
      "Terreno plano",
      "Condominio com seguranca",
      "Rua pavimentada",
      "Infraestrutura pronta",
      "Ideal para construcao residencial",
    ],
    observations:
      "Condominio com regras de construcao e taxa de manutencao mensal.",
  },
  {
    id: 107232,
    image: imovel8,
    type: "Apartamento",
    title: "Loteamento Itaboa, Campo Largo - PR",
    neighborhood: "Loteamento Itaboa",
    city: "Campo Largo",
    stateCode: "PR",
    area: "47 m2",
    bedrooms: "2 Quartos",
    bathrooms: "1 Banheiro",
    priceLabel: "Venda",
    price: "R$ 215.000",
    description:
      "Apartamento compacto com boa iluminacao, ideal para primeiro imovel ou investimento.",
    features: [
      "2 dormitorios",
      "Cozinha funcional",
      "Proximo a comercio local",
      "Baixo custo condominial",
      "Planta otimizada",
    ],
    observations:
      "Excelente opcao para primeiro imovel com documentacao regularizada.",
  },
  {
    id: 107233,
    image: imovel7,
    type: "Apartamento",
    title: "Itacorubi, Florianopolis - SC",
    condo: "Condominio Villas",
    neighborhood: "Itacorubi",
    city: "Florianopolis",
    stateCode: "SC",
    area: "1000 m2",
    bedrooms: "1 Quarto",
    bathrooms: "1 Banheiro",
    priceLabel: "Aluguel",
    price: "R$ 5.000/mes",
    description:
      "Apartamento para locacao em regiao central com facil mobilidade e servicos proximos.",
    features: [
      "1 dormitorio",
      "Vaga de garagem",
      "Portaria",
      "Espaco de convivio",
      "Acesso rapido ao centro",
    ],
    observations:
      "Valor sujeito a ajuste conforme periodo e condicoes de locacao.",
  },
  {
    id: 107234,
    image: imovel1,
    type: "Casa",
    title: "Urbanova I, Sao Jose dos Campos - SP",
    neighborhood: "Urbanova I",
    city: "Sao Jose dos Campos",
    stateCode: "SP",
    area: "152 m2",
    bedrooms: "3 Quartos",
    bathrooms: "3 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "A Consultar",
    description:
      "Casa moderna em bairro planejado, com ambientes integrados e excelente padrao construtivo.",
    features: [
      "Suite principal",
      "Area gourmet",
      "Garagem para 2 carros",
      "Quintal privativo",
      "Projeto contemporaneo",
    ],
    observations:
      "Aceita financiamento, analisa proposta e permuta parcial.",
  },
  {
    id: 107235,
    image: imovel4,
    type: "Apartamento",
    title: "Itacorubi, Florianopolis - SC",
    neighborhood: "Itacorubi",
    city: "Florianopolis",
    stateCode: "SC",
    area: "130 m2",
    bathrooms: "2 Banheiros",
    priceLabel: "Aluguel",
    price: "R$ 15.000/mes",
    description:
      "Apartamento amplo com alto padrao de acabamento para quem busca espaco e localizacao premium.",
    features: [
      "Planta ampla",
      "Acabamentos de alto padrao",
      "Sacada",
      "Condominio completo",
      "Regiao valorizada",
    ],
    observations:
      "Condominio com lazer completo e controle de acesso 24 horas.",
  },
  {
    id: 107236,
    image: imovel6,
    type: "Casa",
    title: "Centro, Guabiruba - SC",
    condo: "Condominio Villas",
    neighborhood: "Centro",
    city: "Guabiruba",
    stateCode: "SC",
    area: "100 m2",
    bedrooms: "2 Quartos",
    bathrooms: "2 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 1.000.000",
    description:
      "Casa com excelente terreno no centro da cidade, com facil acesso a servicos e comercio.",
    features: [
      "2 dormitorios",
      "2 vagas",
      "Terreno amplo",
      "Rua tranquila",
      "Potencial para ampliacao",
    ],
    observations:
      "Imovel com manutencao em dia e escritura disponivel para consulta.",
  },
  {
    id: 107237,
    image: imovel2,
    type: "Casa",
    title: "Itacorubi, Florianopolis - SC",
    neighborhood: "Itacorubi",
    city: "Florianopolis",
    stateCode: "SC",
    priceLabel: "Venda",
    price: "R$ 2.200.000",
    bathrooms: "4 Banheiros",
    description:
      "Casa em localizacao nobre, com ambientes confortaveis e facil acesso as praias e centro.",
    features: [
      "Espacos integrados",
      "Area externa",
      "Bairro consolidado",
      "Arquitetura moderna",
      "Excelente liquidez",
    ],
    observations:
      "Projeto assinado com integracao de ambientes sociais e area externa.",
  },
  {
    id: 107238,
    image: imovel8,
    type: "Apartamento",
    title: "Vila Izabel, Curitiba - PR",
    neighborhood: "Vila Izabel",
    city: "Curitiba",
    stateCode: "PR",
    priceLabel: "Venda",
    price: "R$ 690.000",
    bathrooms: "2 Banheiros",
    description:
      "Apartamento em bairro tradicional, proximo a escolas, servicos e vias de acesso rapido.",
    features: [
      "Bairro residencial",
      "Planta funcional",
      "Proximo a servicos",
      "Boa ventilacao",
      "Excelente para moradia",
    ],
    observations:
      "Regiao com oferta de servicos e acesso facilitado a vias principais.",
  },
  {
    id: 107239,
    image: imovel2,
    type: "Apartamento",
    title: "Santo Antonio de Lisboa, Florianopolis - SC",
    neighborhood: "Santo Antonio de Lisboa",
    city: "Florianopolis",
    stateCode: "SC",
    area: "100 m2",
    bedrooms: "2 Quartos",
    bathrooms: "2 Banheiros",
    parking: "2 vagas",
    priceLabel: "Venda",
    price: "R$ 3.500.000",
    description:
      "Apartamento com vista privilegiada e acabamento refinado em uma das regioes mais desejadas.",
    features: [
      "Vista panoramica",
      "2 vagas",
      "Acabamento premium",
      "Condominio completo",
      "Localizacao exclusiva",
    ],
    observations:
      "Unidade com acabamento de alto padrao e vista aberta permanente.",
  },
  {
    id: 107240,
    image: imovel6,
    type: "Apartamento",
    title: "Portao, Curitiba - PR",
    neighborhood: "Portao",
    city: "Curitiba",
    stateCode: "PR",
    area: "24 m2",
    bedrooms: "1 Quarto",
    bathrooms: "1 Banheiro",
    priceLabel: "Venda",
    price: "R$ 501.294",
    description:
      "Studio moderno para quem busca praticidade urbana e alta liquidez para investimento.",
    features: [
      "Studio compacto",
      "Condominio com lazer",
      "Alta demanda de locacao",
      "Localizacao urbana",
      "Facil mobilidade",
    ],
    observations:
      "Ideal para investimento, com alta procura em locacao de curta e longa duracao.",
  },
  {
    id: 107241,
    image: imovel7,
    type: "Apartamento",
    title: "Centro, Curitiba - PR",
    neighborhood: "Centro",
    city: "Curitiba",
    stateCode: "PR",
    area: "83 m2",
    bedrooms: "3 Quartos",
    bathrooms: "2 Banheiros",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 550.000",
    description:
      "Apartamento central com boa metragem e distribuicao interna para familia.",
    features: [
      "3 dormitorios",
      "1 vaga",
      "Regiao central",
      "Proximo a comercio",
      "Otima relacao custo-beneficio",
    ],
    observations:
      "Condominio com boa administracao e baixo indice de vacancia na regiao.",
  },
  {
    id: 107242,
    image: imovel8,
    type: "Apartamento",
    title: "Santa Candida, Curitiba - PR",
    neighborhood: "Santa Candida",
    city: "Curitiba",
    stateCode: "PR",
    area: "61 m2",
    bedrooms: "2 Quartos",
    bathrooms: "1 Banheiro",
    parking: "1 vaga",
    priceLabel: "Venda",
    price: "R$ 304.900",
    description:
      "Apartamento com planta inteligente em bairro com infraestrutura completa.",
    features: [
      "2 dormitorios",
      "1 vaga",
      "Condominio organizado",
      "Proximo a transporte",
      "Ideal para familia pequena",
    ],
    observations:
      "Planta funcional, boa insolacao e proximidade com comercio local.",
  },
];

export const featuredPropertyIds = [107231, 107232, 107230, 107233, 107234, 107235];
export const mostWantedPropertyIds = [107230, 107231, 107236, 107237, 107234, 107238];
export const newestPropertyIds = [107234, 107239, 107240, 107241, 107242, 107236];

const byId = new Map(properties.map((property) => [property.id, property]));

const mapFromIds = (ids: number[]): PropertyRecord[] =>
  ids.map((id) => byId.get(id)).filter((property): property is PropertyRecord => Boolean(property));

export const featuredProperties = mapFromIds(featuredPropertyIds);
export const mostWantedProperties = mapFromIds(mostWantedPropertyIds);
export const newestProperties = mapFromIds(newestPropertyIds);

export const buildPropertySlug = (property: PropertyRecord): string => {
  const stateName = stateNameByCode[property.stateCode] ?? property.stateCode;
  const base = `${property.type}-${property.neighborhood}-${property.city}-${stateName}`;
  return `${normalizeSlug(base)}-id-${property.id}`;
};

export const buildPropertyPath = (property: PropertyRecord): string =>
  `/imovel/${buildPropertySlug(property)}`;

export const getPropertyFromRouteSlug = (routeSlug?: string): PropertyRecord | undefined => {
  if (!routeSlug) return undefined;
  const idMatch = routeSlug.match(/-id-(\d+)$/);
  if (idMatch) {
    return byId.get(Number(idMatch[1]));
  }

  return properties.find((property) => buildPropertySlug(property) === routeSlug);
};

const galleryPool = [imovel1, imovel2, imovel3, imovel4, imovel5, imovel6, imovel7, imovel8];

export const getPropertyGallery = (property: PropertyRecord): string[] => {
  const startIndex = property.id % galleryPool.length;
  const rotated = galleryPool
    .slice(startIndex)
    .concat(galleryPool.slice(0, startIndex));

  return [property.image, ...rotated.filter((image) => image !== property.image)].slice(0, 5);
};

export interface Property {
  id: string;
  title: string;
  type: string;
  tag: string;
  price: number;
  priceLabel?: string;
  location: {
    address: string;
    city: string;
    state: string;
    neighborhood: string;
    mapUrl?: string;
    coordinates?: { lat: number; lng: number };
  };
  images: string[];
  specs: {
    area: number;
    bedrooms: number;
    suites?: number;
    bathrooms: number;
    parking: number;
    floors?: number;
  };
  description: string;
  features: string[];
  buildingFeatures?: string[];
  status?: string;
  developer?: string;
  deliveryDate?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Broker {
  name: string;
  photo: string;
  creci: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export interface SimilarProperty {
  id: string;
  title: string;
  image: string;
  price: number;
  location: string;
  specs: { bedrooms: number; bathrooms: number; parking: number; area: number };
  tag?: string;
}

const parseNumberFromText = (value?: string): number => {
  if (!value) return 0;
  const match = value.replace(/[^\d]/g, "");
  if (!match) return 0;
  return Number(match);
};

const parsePrice = (value: string): number => {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
};

const mapVariantToTag = (variant?: PropertyTagVariant): string => {
  if (variant === "lancamento") return "LANCAMENTO";
  if (variant === "destaque") return "EXCLUSIVO";
  if (variant === "aluguel") return "OPORTUNIDADE";
  return "EXCLUSIVO";
};

const mapVariantToStatus = (variant?: PropertyTagVariant): string => {
  if (variant === "lancamento") return "Lancamento";
  if (variant === "destaque") return "Pronto";
  if (variant === "aluguel") return "Disponivel";
  return "Disponivel";
};

const buildMapEmbedUrl = (property: PropertyRecord): string => {
  const query = encodeURIComponent(
    `${property.neighborhood}, ${property.city}, ${property.stateCode}, Brasil`,
  );
  return `https://www.google.com/maps?q=${query}&output=embed`;
};

export const defaultBroker: Broker = {
  name: "Fernando Vieira",
  photo: corretorImage,
  creci: "CRECI 123456-F",
  phone: "(48) 99693-1776",
  whatsapp: "5548996931776",
  email: "contato@vivabeiramar.com.br",
};

export const toPropertyDetailsModel = (property: PropertyRecord): Property => {
  const tag = property.tags?.[0];
  const buildingFeatures: string[] = [];
  if (property.condo) {
    buildingFeatures.push(`Condominio: ${property.condo}`);
  }
  if (property.observations) {
    buildingFeatures.push("Documentacao regularizada");
  }

  return {
    id: String(property.id),
    title: property.title,
    type: property.type,
    tag: tag?.label.toUpperCase() ?? mapVariantToTag(tag?.variant),
    price: parsePrice(property.price),
    priceLabel: property.priceLabel || "Valor",
    location: {
      address: `${property.neighborhood}, ${property.city} - ${property.stateCode}`,
      city: property.city,
      state: property.stateCode,
      neighborhood: property.neighborhood,
      mapUrl: buildMapEmbedUrl(property),
    },
    images: getPropertyGallery(property),
    specs: {
      area: parseNumberFromText(property.area),
      bedrooms: parseNumberFromText(property.bedrooms),
      bathrooms: parseNumberFromText(property.bathrooms),
      parking: parseNumberFromText(property.parking),
      suites: parseNumberFromText(property.bedrooms) > 2 ? 1 : 0,
    },
    description: property.description,
    features: property.features,
    buildingFeatures: buildingFeatures.length ? buildingFeatures : undefined,
    status: mapVariantToStatus(tag?.variant),
    developer: property.condo,
    deliveryDate: tag?.variant === "lancamento" ? "Dez/2026" : undefined,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-02-11"),
  };
};

export const getDetailedPropertyFromRouteSlug = (routeSlug?: string): Property | undefined => {
  const property = getPropertyFromRouteSlug(routeSlug);
  if (!property) return undefined;
  return toPropertyDetailsModel(property);
};

export const getSimilarProperties = (propertyId: string, limit = 4): SimilarProperty[] => {
  const current = properties.find((item) => String(item.id) === propertyId);
  if (!current) return [];

  const sameCity = properties.filter(
    (item) => item.id !== current.id && item.city === current.city,
  );
  const sameState = properties.filter(
    (item) =>
      item.id !== current.id &&
      item.stateCode === current.stateCode &&
      item.city !== current.city,
  );

  return [...sameCity, ...sameState].slice(0, limit).map((item) => ({
    id: String(item.id),
    title: item.title,
    image: item.image,
    price: parsePrice(item.price),
    location: `${item.neighborhood}, ${item.city} - ${item.stateCode}`,
    specs: {
      bedrooms: parseNumberFromText(item.bedrooms),
      bathrooms: parseNumberFromText(item.bathrooms),
      parking: parseNumberFromText(item.parking),
      area: parseNumberFromText(item.area),
    },
    tag: item.tags?.[0]?.label,
  }));
};
