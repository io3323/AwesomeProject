export const fullLoadCheck = ({
  firstState,
  secondState,
}: {
  firstState: boolean;
  secondState: boolean;
}) => {
  if (!firstState && !secondState) {
    return false;
  } else {
    return true;
  }
};

export const exactModels = carsData => {
  if (!!carsData && carsData.length > 0) {
    return carsData.flatMap(car => car.models);
  }
};

export const exactCurrentModal = (carsData, brandId) => {
  if (!!carsData && carsData.length > 0) {
    const exact = carsData.filter(data => data.id === brandId);
    return exact;
  }
};
