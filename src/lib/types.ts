export type SearchDogsParams = {
  breed?: string[];
  zipCodes?: string[];
  ageMin?: number;
  ageMax?: number;
  size: number;
  sort: string;
  from: number;
  page?: number;
};

export type SearchDogsResponse = {
  total: number;
  resultIds: string[];
  next?: string;
  prev?: string;
};

export type Dog = {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
};
