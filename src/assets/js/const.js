const AppRoute = {
  ROOT: {
    PATH: '/',
  },
  RECIPE: {
    PATH: '/recipe',
  },
};

const ResponseTypes = {
  JSON: '.json',
};

const APIRoute = {
  RECIPES: {
    PATHNAME: '/list',
    POSTFIX: ResponseTypes.JSON,
  },
  RECIPE: {
    PATHNAME: '/detail_',
    POSTFIX: ResponseTypes.JSON,
  },
};

const StoreNameSpace = {
  RESPONSIVE: 'RESPONSIVE',
  RECIPES: 'RECIPES',
  RECIPE: 'RECIPE',
};

const Breakpoints = {
  TABLET: 1023,
  MOBILE: 767,
};

const ToasterTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const TOASTER_DURATION = 5000;

const LoaderItemsCount = {
  LITTLE: 2,
  MEDIUM: 4,
  LOT: 6,
};

export {
  AppRoute,
  APIRoute,
  StoreNameSpace,
  Breakpoints,
  ToasterTypes,
  TOASTER_DURATION,
  ResponseTypes,
  LoaderItemsCount,
};
