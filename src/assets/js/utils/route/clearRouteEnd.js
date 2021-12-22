const clearRouteEnd = (route) => {
  if (/\/$/.test(route)) {
    return route.slice(0, -1);
  }
  return route;
};
export default clearRouteEnd;
