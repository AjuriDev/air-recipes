const getNumericDiapasonConverter = (fromDiapason, toDiapason) => {
  const fromDiapasonDifference = Array.isArray(fromDiapason)
    ? fromDiapason[1] - fromDiapason[0]
    : fromDiapason;
  const toDiapasonDifference = Array.isArray(toDiapason)
    ? toDiapason[1] - toDiapason[0]
    : toDiapason;

  const diapasonRate = fromDiapasonDifference / toDiapasonDifference;

  return (val) => val * diapasonRate;
};

export default getNumericDiapasonConverter;
