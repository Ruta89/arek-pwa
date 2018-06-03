export interface Czas {
  wll: number;
  l1: number;
  szt: number;
  min: number;
  createdAt?: number;
  updatedAt?: number;
  note?: number;
  id?: string;
}

export interface Production {
  wll: number;
  l1: number;
  auf: number;
  aufFormat?: string;
  m: number;
  nici: number;
  szt: number;
  czas: number;
  note?: number;
  waga?: number;
  id?: string;
  fireTimestamp?: any;
  dateNow?: any;
  Production?: any;
}
