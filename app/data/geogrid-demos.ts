export type GeoGridDemo = {
  id: string;
  businessName: string;
  city: string;
  country: string;
  keyword: string;
  mapImage: string;
  mapAttribution: string;
  mapAttributionUrl: string;
  beforeValues: number[];
  afterValues: number[];
  beforeDate: string;
  afterDate: string;
  markerColors: {
    before: string;
    afterPrimary: string;
    afterSecondary: string;
  };
};

const rigaBefore = Array.from({ length: 81 }, () => 21);
const rigaAfter = [
  2, 2, 2, 2, 1, 2, 2, 1, 1,
  1, 2, 1, 1, 1, 1, 2, 2, 1,
  1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 2, 1, 1, 1, 1, 1, 2,
  1, 2, 1, 1, 1, 2, 2, 1, 1,
  1, 1, 1, 1, 1, 2, 1, 1, 1,
  2, 1, 2, 2, 1, 2, 1, 2, 2,
  1, 1, 1, 1, 1, 1, 2, 2, 2,
  1, 1, 1, 1, 1, 1, 2, 1, 1,
];

export const RIGA_GEO_GRID: GeoGridDemo = {
  id: "riga-dental-atelier",
  businessName: "Riga Dental Atelier",
  city: "Riga",
  country: "Latvia",
  keyword: "dentist near me",
  mapImage: "/riga-map-tiles.png",
  mapAttribution: "© OpenStreetMap contributors",
  mapAttributionUrl: "https://www.openstreetmap.org/copyright",
  beforeValues: rigaBefore,
  afterValues: rigaAfter,
  beforeDate: "18 Jun 2026",
  afterDate: "10 Aug 2026",
  markerColors: {
    before: "#bd2822",
    afterPrimary: "#15831d",
    afterSecondary: "#5a971d",
  },
};
