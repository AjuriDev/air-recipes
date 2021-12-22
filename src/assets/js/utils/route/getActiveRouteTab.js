const getActiveRouteTab = (pathname, routes) => {
  return routes.find((route) => pathname.includes(route));
};

export default getActiveRouteTab;
