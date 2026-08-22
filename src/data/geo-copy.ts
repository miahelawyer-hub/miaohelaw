/** Office geography copy. NAP city stays Markham; these lines explain the Steeles boundary. */
export const GEO_COPY_ZH = {
  main:
    '恒. 律师事务所位于万锦市与多伦多交界的 Woodbine / Steeles 一带（7050 Woodbine Ave #208，404 高速 Steeles 出口），多伦多、北约克、士嘉堡、列治文山客户往返便利；同时为安省全省客户提供 Zoom 视频咨询。',
  short:
    '万锦与多伦多交界 · Woodbine & Steeles（404 Steeles 出口）· 服务多伦多、北约克、士嘉堡及安省全省',
};

export const GEO_COPY_EN = {
  main:
    'Located in the Woodbine & Steeles area on the Markham–Toronto boundary (7050 Woodbine Ave #208, off the Highway 404 Steeles exit), serving clients in Toronto, North York, Scarborough, Richmond Hill and Markham, with Zoom consultations available province-wide across Ontario.',
  short:
    'Woodbine & Steeles, on the Markham–Toronto line (Highway 404 Steeles exit) · Toronto · North York · Scarborough · all Ontario',
};

/**
 * Firm-level areaServed (home, contact, blog LegalService).
 * Named-in-copy cities first; existing city-page cities kept. No GTA umbrella.
 * addressLocality stays Markham.
 */
export const GEO_AREA_SERVED = [
  'Toronto',
  'North York',
  'Scarborough',
  'Richmond Hill',
  'Markham',
  'Mississauga',
  'Brampton',
  'Vaughan',
  'Oakville',
  'Ontario',
] as const;

export const GEO_AREA_SERVED_LD = GEO_AREA_SERVED.map((name) =>
  name === 'Ontario'
    ? { '@type': 'AdministrativeArea' as const, name }
    : { '@type': 'City' as const, name },
);
