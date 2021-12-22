const validateCaloricityRange = (range) => {
  return range[1] - range[2] !== 0;
};

export default validateCaloricityRange;
