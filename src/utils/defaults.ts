export const HttpStatusEnum = {
  OK: 200,
  CREATED: 201,
};

export const LocalStorageEnum = {
  ACCESS_TOKEN: '@Rapidium:access_token',
  CREDENCIAIS: '@Rapidium:credenciais',
  AVISO: '@Rapidium:aviso',
  TERMO: '@Rapidium:termo',
  TIMESTAMP: '@Rapidium:termo_expirado',
};

export const QueryEnum = {
  USUARIOS: 'usuarios',
  CATEGORIAS: 'categorias',
  MAPA: 'mapa',
  NOTICIAS: 'noticias',
};

// Selects
export const selectExample = [
  { label: 'Período', value: 'periodo' },
  { label: 'Nome', value: 'nome' },
];

export const TypeCardEnum = {
  BANNER_3_CARDS: 'banner-3-cards',
  BANNER_BG: 'banner-bg',
  BANNER_STEPS: 'banner-steps',
  BANNER_IMAGEM: 'banner-imagem',
  BANNER_ONLY: 'banner-only',
  BANNER_ONLY_API: 'banner-only-api',
  BANNER_LARGE: 'banner-large',
};
