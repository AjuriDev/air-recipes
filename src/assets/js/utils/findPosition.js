const findPosition = (obj) => {
  let currentTop = 0;
  if (obj.offsetParent) {
    do {
      currentTop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return currentTop;
  }
};

export default findPosition;
