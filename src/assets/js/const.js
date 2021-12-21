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
  FILTER: 'FILTER',
};

const Breakpoints = {
  TABLET: 1023,
  MOBILE: 767,
};

const Cuisines = {
  CARIBBEAN: 'CARIBBEAN',
  GREEK: 'GREEK',
  FRENCH: 'FRENCH',
  INDIAN: 'INDIAN',
  CHINESE: 'CHINESE',
};

const CaloriesRange = {
  MIN: 100,
  MAX: 1200,
  STEP: 10,
};

const ToasterTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const TOASTER_DURATION = 5000;

export {
  AppRoute,
  APIRoute,
  StoreNameSpace,
  Breakpoints,
  ToasterTypes,
  TOASTER_DURATION,
  ResponseTypes,
  Cuisines,
  CaloriesRange,
};
