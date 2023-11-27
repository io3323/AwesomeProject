export type Car = {
  id: number;
  brand: string;
  model: string;
  // Добавьте другие поля по необходимости
};

export type CarModel = {
  id: number;
  model: string;
  year: number;
  engine: string;
  transmission: string;
  price: string;
  color: string;
  topSpeed: string;
};

export type CarBrand = {
  id: number;
  brand: string;
  models: CarModel[];
};

// Тип данных, возвращаемых запросом
export type GetCarsResponse = CarBrand[];

// Тип параметров запроса
export type GetCarsQuery = {
  brandId?: number; // Параметр для фильтрации по бренду
};

export type Brand = {
  brandId: number;
  brandName: string;
};

export type MoreInfoModel = {
  id: number;
  brand: string;
  model: string;
  year: number;
  description: string;
  fuelEfficiency: string;
  seatingCapacity: number;
  safetyFeatures: string[];
  cargoCapacity: string;
};

export type GetBrandsResponse = Brand[];
