export interface WeatherMetadata {
  validTime: string;
  parameters: WeatherParameter
}

export interface WeatherParameter {
  name: string;
  levelType: string;
  level: number;
  unit: string;
  values: number[];
}

export enum WeatherParameterName {
  spp,
  pcat,
  pmin,
  pmean,
  pmax,
  pmedian,
  tcc_mean,
  lcc_mean,
  mcc_mean,
  msl,
  t,
  vis,
  wd,
  ws,
  r,
  tstm,
  gust,
  Wsymb2
}