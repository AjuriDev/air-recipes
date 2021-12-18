import { createReducer } from '@reduxjs/toolkit';
import {
  isMobile,
  isMobileOnly,
  isTablet,
  isWindows,
  isMacOs,
  isAndroid,
  isWinPhone,
  isIOS,
  mobileVendor,
  mobileModel,
  isChrome,
  isFirefox,
  isSafari,
  isOpera,
  isIE,
  isEdge,
  isYandex,
  isChromium,
  isMobileSafari,
  browserVersion,
  browserName,
} from 'mobile-device-detect';
import { Breakpoints } from '../../assets/js/const';
import hasWebGLSupport from '../../assets/js/utils/hasWebGLSupport';
import { updateWindowParams } from '../actions/responsive';

const initialState = {
  window: {
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
    ratio: 0,
    isDesktopSize: false,
    isTabletSize: false,
    isMobileSize: false,
    positionHorizontal: false,
  },
  device: {
    isDesktop: !isMobile,
    isWindows,
    isMacOs,
    isAdaptive: isMobile,
    isTablet,
    isMobile: isMobileOnly,
    isAndroid,
    isWinPhone,
    isIOS,
    mobileVendor,
    mobileModel,
    pixelRatio: window.devicePixelRatio,
    hasTouchscreen: (() => 'ontouchstart' in document.documentElement)(),
  },
  browser: {
    isChrome,
    isFirefox,
    isSafari,
    isOpera,
    isIE,
    isEdge,
    isYandex,
    isChromium,
    isMobileSafari,
    browserVersion,
    browserName,
    hasWebpSupport: false,
    hasWebGLSupport: hasWebGLSupport(),
  },
};

const responsive = createReducer(initialState, (builder) => {
  builder.addCase(updateWindowParams, (state, action) => {
    const ratio = action.payload.width / action.payload.height;
    state.window = {
      ...state.window,
      width: action.payload.width,
      height: action.payload.height,
      centerX: action.payload.width / 2,
      centerY: action.payload.height / 2,
      ratio,
      isDesktopSize: action.payload.width > Breakpoints.TABLET,
      isTabletSize: action.payload.width <= Breakpoints.TABLET,
      isMobileSize: action.payload.width <= Breakpoints.MOBILE,
      positionHorizontal: state.device.isAdaptive && ratio > 1,
    };
  });
});

export { responsive };
