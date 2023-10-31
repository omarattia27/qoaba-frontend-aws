exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 84061:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var utils = __webpack_require__(22139);
var Carousel_errors = __webpack_require__(65065);

const [CarouselProvider, useCarouselContext] = utils.createSafeContext(Carousel_errors.CAROUSEL_ERRORS.context);

exports.CarouselProvider = CarouselProvider;
exports.useCarouselContext = useCarouselContext;
//# sourceMappingURL=Carousel.context.js.map


/***/ }),

/***/ 65065:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const CAROUSEL_ERRORS = {
  context: "[@mantine/carousel] Carousel.Slide was rendered outside of Carousel context"
};

exports.CAROUSEL_ERRORS = CAROUSEL_ERRORS;
//# sourceMappingURL=Carousel.errors.js.map


/***/ }),

/***/ 48343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(80846);
var hooks = __webpack_require__(79389);
var useEmblaCarousel = __webpack_require__(94944);
var React = __webpack_require__(18038);
var Carousel_context = __webpack_require__(84061);
var Carousel_styles = __webpack_require__(24872);
var CarouselSlide = __webpack_require__(99108);
var getChevronRotation = __webpack_require__(71643);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var useEmblaCarousel__default = /*#__PURE__*/_interopDefaultLegacy(useEmblaCarousel);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  controlSize: 26,
  controlsOffset: "sm",
  slideSize: "100%",
  slideGap: 0,
  orientation: "horizontal",
  align: "center",
  slidesToScroll: 1,
  includeGapInSize: true,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: true,
  withIndicators: false,
  skipSnaps: false,
  containScroll: "",
  withKeyboardEvents: true
};
const _Carousel = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("Carousel", defaultProps, props), {
    children,
    className,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlLabel,
    previousControlLabel,
    controlSize,
    controlsOffset,
    classNames,
    styles,
    unstyled,
    slideSize,
    slideGap,
    orientation,
    height,
    align,
    slidesToScroll,
    includeGapInSize,
    draggable,
    dragFree,
    loop,
    speed,
    initialSlide,
    inViewThreshold,
    withControls,
    withIndicators,
    plugins,
    nextControlIcon,
    previousControlIcon,
    breakpoints,
    skipSnaps,
    containScroll,
    withKeyboardEvents,
    variant
  } = _a, others = __objRest(_a, [
    "children",
    "className",
    "getEmblaApi",
    "onNextSlide",
    "onPreviousSlide",
    "onSlideChange",
    "nextControlLabel",
    "previousControlLabel",
    "controlSize",
    "controlsOffset",
    "classNames",
    "styles",
    "unstyled",
    "slideSize",
    "slideGap",
    "orientation",
    "height",
    "align",
    "slidesToScroll",
    "includeGapInSize",
    "draggable",
    "dragFree",
    "loop",
    "speed",
    "initialSlide",
    "inViewThreshold",
    "withControls",
    "withIndicators",
    "plugins",
    "nextControlIcon",
    "previousControlIcon",
    "breakpoints",
    "skipSnaps",
    "containScroll",
    "withKeyboardEvents",
    "variant"
  ]);
  const { classes, cx, theme } = Carousel_styles['default']({ controlSize, controlsOffset, orientation, height, includeGapInSize, breakpoints, slideGap }, { name: "Carousel", classNames, styles, unstyled, variant });
  const [emblaRefElement, embla] = useEmblaCarousel__default({
    axis: orientation === "horizontal" ? "x" : "y",
    direction: orientation === "horizontal" ? theme.dir : void 0,
    startIndex: initialSlide,
    loop,
    align,
    slidesToScroll,
    draggable,
    dragFree,
    speed,
    inViewThreshold,
    skipSnaps,
    containScroll
  }, plugins);
  const [selected, setSelected] = React.useState(0);
  const [slidesCount, setSlidesCount] = React.useState(0);
  const handleScroll = React.useCallback((index) => embla && embla.scrollTo(index), [embla]);
  const handleSelect = React.useCallback(() => {
    if (!embla)
      return;
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    onSlideChange == null ? void 0 : onSlideChange(slide);
  }, [embla, setSelected]);
  const handlePrevious = React.useCallback(() => {
    embla == null ? void 0 : embla.scrollPrev();
    onPreviousSlide == null ? void 0 : onPreviousSlide();
  }, [embla]);
  const handleNext = React.useCallback(() => {
    embla == null ? void 0 : embla.scrollNext();
    onNextSlide == null ? void 0 : onNextSlide();
  }, [embla]);
  const handleKeydown = React.useCallback((event) => {
    if (withKeyboardEvents) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      }
    }
  }, [embla]);
  React.useEffect(() => {
    if (embla) {
      getEmblaApi == null ? void 0 : getEmblaApi(embla);
      handleSelect();
      setSlidesCount(embla.scrollSnapList().length);
      embla.on("select", handleSelect);
      return () => {
        embla.off("select", handleSelect);
      };
    }
    return void 0;
  }, [embla, slidesToScroll]);
  React.useEffect(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected((currentSelected) => hooks.clamp(currentSelected, 0, React.Children.toArray(children).length - 1));
    }
  }, [React.Children.toArray(children).length, slidesToScroll]);
  const canScrollPrev = (embla == null ? void 0 : embla.canScrollPrev()) || false;
  const canScrollNext = (embla == null ? void 0 : embla.canScrollNext()) || false;
  const indicators = Array(slidesCount).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    key: index,
    "data-active": index === selected || void 0,
    className: classes.indicator,
    "aria-hidden": true,
    tabIndex: -1,
    onClick: () => handleScroll(index)
  }));
  return /* @__PURE__ */ React__default.createElement(Carousel_context.CarouselProvider, {
    value: {
      slideGap,
      slideSize,
      embla,
      orientation,
      includeGapInSize,
      breakpoints,
      classNames,
      styles,
      unstyled,
      variant
    }
  }, /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.root, className),
    ref,
    onKeyDownCapture: handleKeydown
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.viewport,
    ref: emblaRefElement
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.container
  }, children)), withIndicators && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.indicators
  }, indicators), withControls && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.controls
  }, /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    onClick: handlePrevious,
    className: classes.control,
    "aria-label": previousControlLabel,
    "data-inactive": !canScrollPrev || void 0,
    tabIndex: canScrollPrev ? 0 : -1
  }, typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ React__default.createElement(core.ChevronIcon, {
    style: {
      transform: `rotate(${getChevronRotation.getChevronRotation({
        dir: theme.dir,
        orientation,
        direction: "previous"
      })}deg)`
    }
  })), /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    onClick: handleNext,
    className: classes.control,
    "aria-label": nextControlLabel,
    "data-inactive": !canScrollNext || void 0,
    tabIndex: canScrollNext ? 0 : -1
  }, typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ React__default.createElement(core.ChevronIcon, {
    style: {
      transform: `rotate(${getChevronRotation.getChevronRotation({
        dir: theme.dir,
        orientation,
        direction: "next"
      })}deg)`
    }
  })))));
});
_Carousel.Slide = CarouselSlide.CarouselSlide;
_Carousel.displayName = "@mantine/carousel/Carousel";
const Carousel = _Carousel;

exports.Carousel = Carousel;
exports._Carousel = _Carousel;
//# sourceMappingURL=Carousel.js.map


/***/ }),

/***/ 24872:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(80846);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = core.createStyles((theme, {
  controlSize,
  controlsOffset,
  orientation,
  height,
  includeGapInSize,
  breakpoints = [],
  slideGap
}) => {
  const horizontal = orientation === "horizontal";
  const getContainerStyles = (gap) => {
    if (!includeGapInSize)
      return {};
    const slideGapValue = core.getSize({ size: gap, sizes: theme.spacing });
    return {
      [orientation === "horizontal" ? "marginRight" : "marginBottom"]: `calc(${slideGapValue} * -1)`
    };
  };
  const hasDiff = breakpoints.some((v) => typeof v.slideGap !== "undefined" || typeof v.slideSize !== "undefined");
  const containerBreakpoints = !hasDiff ? null : core.getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    const property = "maxWidth" in breakpoint ? "max-width" : "min-width";
    const breakpointSize = core.getSize({
      size: property === "max-width" ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints
    });
    const breakpointSlideGap = typeof breakpoint.slideGap === "undefined" ? void 0 : core.rem(breakpoint.slideGap);
    const breakpointValue = core.getBreakpointValue(breakpointSize) - (property === "max-width" ? 1 : 0);
    acc[`@media (${property}: ${core.rem(breakpointValue)})`] = getContainerStyles(breakpointSlideGap);
    return acc;
  }, {});
  return {
    root: {
      position: "relative"
    },
    viewport: {
      height: core.rem(height),
      overflow: "hidden"
    },
    container: __spreadValues(__spreadValues({
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      height: core.rem(height)
    }, getContainerStyles(slideGap)), containerBreakpoints),
    controls: {
      position: "absolute",
      zIndex: 1,
      left: horizontal ? 0 : `calc(50% - ${core.rem(controlSize)} / 2)`,
      right: horizontal ? 0 : void 0,
      top: horizontal ? `calc(50% - ${core.rem(controlSize)} / 2)` : 0,
      bottom: horizontal ? void 0 : 0,
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: horizontal ? core.getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      paddingRight: horizontal ? core.getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      paddingTop: !horizontal ? core.getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      paddingBottom: !horizontal ? core.getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      pointerEvents: "none"
    },
    control: __spreadProps(__spreadValues({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: core.rem(controlSize),
      minHeight: core.rem(controlSize),
      borderRadius: core.rem(controlSize),
      pointerEvents: "all",
      backgroundColor: theme.white,
      color: theme.black,
      boxShadow: theme.shadows.md,
      opacity: theme.colorScheme === "dark" ? 0.65 : 0.85,
      border: `${core.rem(1)} solid ${theme.colors.gray[3]}`,
      transition: `opacity 150ms ${theme.transitionTimingFunction}`
    }, theme.fn.hover({ opacity: 1 })), {
      "&:active": theme.activeStyles
    }),
    indicators: {
      position: "absolute",
      bottom: horizontal ? theme.spacing.md : 0,
      top: horizontal ? void 0 : 0,
      left: horizontal ? 0 : void 0,
      right: horizontal ? 0 : theme.spacing.md,
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      justifyContent: "center",
      gap: core.rem(8),
      pointerEvents: "none"
    },
    indicator: {
      pointerEvents: "all",
      width: horizontal ? core.rem(25) : core.rem(5),
      height: horizontal ? core.rem(5) : core.rem(25),
      borderRadius: theme.radius.xl,
      backgroundColor: theme.white,
      boxShadow: theme.shadows.sm,
      opacity: 0.6,
      transition: `opacity 150ms ${theme.transitionTimingFunction}`,
      "&[data-active]": {
        opacity: 1
      }
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=Carousel.styles.js.map


/***/ }),

/***/ 99108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(18038);
var core = __webpack_require__(80846);
var Carousel_context = __webpack_require__(84061);
var CarouselSlide_styles = __webpack_require__(66001);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CarouselSlide = React.forwardRef((_a, ref) => {
  var _b = _a, { children, className, size, gap } = _b, others = __objRest(_b, ["children", "className", "size", "gap"]);
  const ctx = Carousel_context.useCarouselContext();
  const { classes, cx } = CarouselSlide_styles['default']({
    gap: typeof gap === "undefined" ? ctx.slideGap : gap,
    size: typeof size === "undefined" ? ctx.slideSize : size,
    orientation: ctx.orientation,
    includeGapInSize: ctx.includeGapInSize,
    breakpoints: ctx.breakpoints
  }, {
    name: "Carousel",
    classNames: ctx.classNames,
    styles: ctx.styles,
    unstyled: ctx.unstyled,
    variant: ctx.variant
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.slide, className),
    ref
  }, others), children);
});
CarouselSlide.displayName = "@mantine/carousel/CarouselSlide";

exports.CarouselSlide = CarouselSlide;
//# sourceMappingURL=CarouselSlide.js.map


/***/ }),

/***/ 66001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(80846);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useStyles = core.createStyles((theme, { size, gap, orientation, includeGapInSize, breakpoints = [] }) => {
  const getSlideStyles = (slideGap, slideSize) => {
    const slideGapValue = core.getSize({
      size: slideGap,
      sizes: theme.spacing
    });
    const flexBasisValue = core.rem(slideSize);
    const marginStyles = includeGapInSize ? {
      [orientation === "horizontal" ? "paddingRight" : "paddingBottom"]: slideGapValue
    } : {
      [orientation === "horizontal" ? "marginRight" : "marginBottom"]: slideGapValue
    };
    return __spreadValues({
      flex: `0 0 ${flexBasisValue}`
    }, marginStyles);
  };
  const hasDiff = breakpoints.some((v) => typeof v.slideGap !== "undefined" || typeof v.slideSize !== "undefined");
  const slideBreakpoints = !hasDiff ? null : core.getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    const property = "maxWidth" in breakpoint ? "max-width" : "min-width";
    const breakpointSize = core.getSize({
      size: property === "max-width" ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints
    });
    const breakpointGap = typeof breakpoint.slideGap === "undefined" ? gap : breakpoint.slideGap;
    const breakpointValue = core.getBreakpointValue(breakpointSize) - (property === "max-width" ? 1 : 0);
    acc[`@media (${property}: ${core.rem(breakpointValue)})`] = getSlideStyles(breakpointGap, breakpoint.slideSize);
    return acc;
  }, {});
  return {
    slide: __spreadValues(__spreadValues({
      position: "relative"
    }, getSlideStyles(gap, size)), slideBreakpoints)
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=CarouselSlide.styles.js.map


/***/ }),

/***/ 71643:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getChevronRotation({ dir, orientation, direction }) {
  if (direction === "previous") {
    return orientation === "horizontal" ? 90 * (dir === "ltr" ? 1 : -1) : -180;
  }
  return orientation === "horizontal" ? 90 * (dir === "ltr" ? -1 : 1) : 0;
}

exports.getChevronRotation = getChevronRotation;
//# sourceMappingURL=get-chevron-rotation.js.map


/***/ }),

/***/ 65569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var Carousel = __webpack_require__(48343);
var useAnimationOffsetEffect = __webpack_require__(22507);



exports.lr = Carousel.Carousel;
__webpack_unused_export__ = useAnimationOffsetEffect.useAnimationOffsetEffect;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 22507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(18038);

function useAnimationOffsetEffect(embla, transitionDuration) {
  React.useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}

exports.useAnimationOffsetEffect = useAnimationOffsetEffect;
//# sourceMappingURL=use-animation-offset-effect.js.map


/***/ }),

/***/ 94944:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(18038),__webpack_require__(13947)):0}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t);function u(e){return e.concat().sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return e.options}))}function o(t,n){void 0===t&&(t={}),void 0===n&&(n=[]);var f=e.useRef(r.default.optionsHandler()),a=e.useRef(t),i=e.useRef(n),c=e.useState(),l=c[0],d=c[1],s=e.useState(),p=s[0],m=s[1],b=e.useCallback((function(){l&&l.reInit(a.current,i.current)}),[l]);return e.useEffect((function(){if("undefined"!=typeof window&&window.document&&window.document.createElement&&p){r.default.globalOptions=o.globalOptions;var e=r.default(p,a.current,i.current);return d(e),function(){return e.destroy()}}d(void 0)}),[p,d]),e.useEffect((function(){f.current.areEqual(a.current,t)||(a.current=t,b())}),[t,b]),e.useEffect((function(){(function(e,t){if(e.length!==t.length)return!1;var n=r.default.optionsHandler().areEqual,o=u(e),f=u(t);return o.every((function(e,t){var r=f[t];return n(e,r)}))})(i.current,n)||(i.current=n,b())}),[n,b]),[m,l]}return o.globalOptions=void 0,o}));


/***/ }),

/***/ 13947:
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(n){return"number"==typeof n}function t(n){return"string"==typeof n}function e(n){return"[object Object]"===Object.prototype.toString.call(n)}function r(n){return e(n)||function(n){return Array.isArray(n)}(n)}function o(n){return Math.abs(n)}function i(n){return n?n/o(n):0}function u(n,t){return o(n-t)}function c(n){return f(n).map(Number)}function a(n){return n[s(n)]}function s(n){return Math.max(0,n.length-1)}function f(n){return Object.keys(n)}function d(n,t){return[n,t].reduce((function(n,t){return f(t).forEach((function(r){var o=n[r],i=t[r],u=e(o)&&e(i);n[r]=u?d(o,i):i})),n}),{})}function l(n,t){var e=f(n),o=f(t);return e.length===o.length&&e.every((function(e){var o=n[e],i=t[e];return"function"==typeof o?"".concat(o)==="".concat(i):r(o)&&r(i)?l(o,i):o===i}))}function p(t,e){var r={start:function(){return 0},center:function(n){return o(n)/2},end:o};function o(n){return e-n}return{measure:function(o){return n(t)?e*Number(t):r[t](o)}}}function v(n,t){var e=o(n-t);function r(t){return t<n}function i(n){return n>t}function u(n){return r(n)||i(n)}return{length:e,max:t,min:n,constrain:function(e){return u(e)?r(e)?n:t:e},reachedAny:u,reachedMax:i,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function m(n,t,e){var r=v(0,n),i=r.min,u=r.constrain,c=n+1,a=s(t);function s(n){return e?o((c+n)%c):u(n)}function f(){return a}function d(n){return a=s(n),l}var l={add:function(n){return d(f()+n)},clone:function(){return m(n,f(),e)},get:f,set:d,min:i,max:n};return l}function g(){var n=[];var t={add:function(e,r,o,i){return void 0===i&&(i={passive:!0}),e.addEventListener(r,o,i),n.push((function(){return e.removeEventListener(r,o,i)})),t},removeAll:function(){return n=n.filter((function(n){return n()})),t}};return t}function x(t){var e=t;function r(n){return e/=n,i}function o(t){return n(t)?t:t.get()}var i={add:function(n){return e+=o(n),i},divide:r,get:function(){return e},multiply:function(n){return e*=n,i},normalize:function(){return 0!==e&&r(e),i},set:function(n){return e=o(n),i},subtract:function(n){return e-=o(n),i}};return i}function h(n,t,e,r,c,a,s,f,d,l,p,v,m,h,y,S){var b=n.cross,E=["INPUT","SELECT","TEXTAREA"],A={passive:!1},w=x(0),M=g(),T=g(),O=m.measure(20),P={mouse:300,touch:400},B={mouse:500,touch:600},k=y?5:16,I=0,z=0,D=!1,L=!1,N=!1,C=!1;function V(n){if(!((C=!c.isTouchEvent(n))&&0!==n.button||(t=n.target,o=t.nodeName||"",E.indexOf(o)>-1))){var t,o,i=u(r.get(),a.get())>=2,s=C||!i;D=!0,c.pointerDown(n),w.set(r),r.set(a),d.useBaseMass().useSpeed(80),function(){var n=C?document:e;T.add(n,"touchmove",H,A).add(n,"touchend",R).add(n,"mousemove",H,A).add(n,"mouseup",R)}(),I=c.readPoint(n),z=c.readPoint(n,b),v.emit("pointerDown"),s&&(N=!1)}}function H(n){if(!L&&!C){if(!n.cancelable)return R(n);var e=c.readPoint(n),o=c.readPoint(n,b),i=u(e,I),a=u(o,z);if(!(L=i>a)&&!N)return R(n)}var f=c.pointerMove(n);!N&&f&&(N=!0),s.start(),r.add(t.apply(f)),n.preventDefault()}function R(n){var e=l.byDistance(0,!1).index!==p.get(),a=c.pointerUp(n)*(y?B:P)[C?"mouse":"touch"],s=function(n,t){var e=p.clone().add(-1*i(n)),r=e.get()===p.min||e.get()===p.max,u=l.byDistance(n,!y).distance;return y||o(n)<O?u:!h&&r?.4*u:S&&t?.5*u:l.byIndex(e.get(),0).distance}(t.apply(a),e),m=function(n,t){if(0===n||0===t)return 0;if(o(n)<=o(t))return 0;var e=u(o(n),o(t));return o(e/n)}(a,s),g=u(r.get(),w.get())>=.5,x=e&&m>.75,b=o(a)<O,E=x?10:k,A=x?1+2.5*m:1;g&&!C&&(N=!0),L=!1,D=!1,T.removeAll(),d.useSpeed(b?9:E).useMass(A),f.distance(s,!y),C=!1,v.emit("pointerUp")}function j(n){N&&(n.stopPropagation(),n.preventDefault())}return{addActivationEvents:function(){var n=e;M.add(n,"dragstart",(function(n){return n.preventDefault()}),A).add(n,"touchmove",(function(){}),A).add(n,"touchend",(function(){})).add(n,"touchstart",V).add(n,"mousedown",V).add(n,"touchcancel",R).add(n,"contextmenu",R).add(n,"click",j,!0)},clickAllowed:function(){return!N},pointerDown:function(){return D},removeAllEvents:function(){M.removeAll(),T.removeAll()}}}function y(n,t,e){var r,o,u=(r=2,o=Math.pow(10,r),function(n){return Math.round(n*o)/o}),c=x(0),a=x(0),s=x(0),f=0,d=t,l=e;function p(n){return d=n,m}function v(n){return l=n,m}var m={direction:function(){return f},seek:function(t){s.set(t).subtract(n);var e,r,o,u,p=(e=s.get(),(o=0)+(e-(r=0))/(100-r)*(d-o));return f=i(s.get()),s.normalize().multiply(p).subtract(c),(u=s).divide(l),a.add(u),m},settle:function(t){var e=t.get()-n.get(),r=!u(e);return r&&n.set(t),r},update:function(){c.add(a),n.add(c),a.multiply(0)},useBaseMass:function(){return v(e)},useBaseSpeed:function(){return p(t)},useMass:v,useSpeed:p};return m}function S(n,t,e,r,i){var u=i.measure(10),c=i.measure(50),a=!1;return{constrain:function(i){if(!a&&n.reachedAny(e.get())&&n.reachedAny(t.get())){var s=n.reachedMin(t.get())?"min":"max",f=o(n[s]-t.get()),d=e.get()-t.get(),l=Math.min(f/c,.85);e.subtract(d*l),!i&&o(d)<u&&(e.set(n.constrain(e.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){a=!n}}}function b(n,t,e,r){var o=v(-t+n,e[0]),i=e.map(o.constrain);return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;var e=function(){var n=i[0],t=a(i),e=i.lastIndexOf(n),r=i.indexOf(t)+1;return v(e,r)}(),u=e.min,c=e.max;return i.slice(u,c)}()}}function E(n,t,e,r){var o=v(t.min+.1,t.max+.1),i=o.reachedMin,u=o.reachedMax;return{loop:function(t){if(function(n){return 1===n?u(e.get()):-1===n&&i(e.get())}(t)){var o=n*(-1*t);r.forEach((function(n){return n.add(o)}))}}}}function A(n){var t=n.max,e=n.length;return{get:function(n){return(n-t)/-e}}}function w(n,t,e,r,u){var c=r.reachedAny,a=r.removeOffset,s=r.constrain;function f(n){return n.concat().sort((function(n,t){return o(n)-o(t)}))[0]}function d(t,r){var o=[t,t+e,t-e];return n?f(r?o.filter((function(n){return i(n)===r})):o):o[0]}return{byDistance:function(e,r){var i=u.get()+e,f=function(e){var r=n?a(e):s(e);return{index:t.map((function(n){return n-r})).map((function(n){return d(n,0)})).map((function(n,t){return{diff:n,index:t}})).sort((function(n,t){return o(n.diff)-o(t.diff)}))[0].index,distance:r}}(i),l=f.index,p=f.distance,v=!n&&c(i);return!r||v?{index:l,distance:e}:{index:l,distance:e+d(t[l]-p,0)}},byIndex:function(n,e){return{index:n,distance:d(t[n]-u.get(),e)}},shortcut:d}}function M(n,t,e){var r="x"===n.scroll?function(n){return"translate3d(".concat(n,"px,0px,0px)")}:function(n){return"translate3d(0px,".concat(n,"px,0px)")},o=e.style,i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n.get())))},toggleActive:function(n){i=!n}}}function T(n,t,e,r,o,i,u,a,s){var f,d=c(o),l=c(o).reverse(),p=(f=i[0]-1,g(m(l,f),"end")).concat(function(){var n=e-i[0]-1,t=m(d,n);return g(t,"start")}());function v(n,t){return n.reduce((function(n,t){return n-o[t]}),t)}function m(n,t){return n.reduce((function(n,e){return v(n,t)>0?n.concat([e]):n}),[])}function g(e,o){var i="start"===o,c=i?-r:r,f=u.findSlideBounds([c]);return e.map((function(e){var o=i?0:-r,u=i?r:0,c=f.filter((function(n){return n.index===e}))[0][i?"end":"start"],d=x(-1),l=x(-1),p=M(n,t,s[e]);return{index:e,location:l,translate:p,target:function(){return d.set(a.get()>c?o:u)}}}))}return{canLoop:function(){return p.every((function(n){var t=n.index;return v(d.filter((function(n){return n!==t})),e)<=.1}))},clear:function(){p.forEach((function(n){return n.translate.clear()}))},loop:function(){p.forEach((function(n){var t=n.target,e=n.translate,r=n.location,o=t();o.get()!==r.get()&&(0===o.get()?e.clear():e.to(o),r.set(o))}))},loopPoints:p}}function O(n,t,e,r,o,i,u){var c=o.removeOffset,a=o.constrain,s=i?[0,t,-t]:[0],f=d(s,u);function d(t,o){var i=t||s,u=function(n){var t=n||0;return e.map((function(n){return v(.5,n-.5).constrain(n*t)}))}(o);return i.reduce((function(t,o){var i=r.map((function(t,r){return{start:t-e[r]+u[r]+o,end:t+n-u[r]+o,index:r}}));return t.concat(i)}),[])}return{check:function(n,t){var e=i?c(n):a(n);return(t||f).reduce((function(n,t){var r=t.index,o=t.start,i=t.end;return!(-1!==n.indexOf(r))&&(o<e&&i>e)?n.concat([r]):n}),[])},findSlideBounds:d}}function P(t,e,r){var o=n(r);return{groupSlides:function(n){return o?function(n,t){return c(n).filter((function(n){return n%t==0})).map((function(e){return n.slice(e,e+t)}))}(n,r):function(n){return c(n).reduce((function(n,r){var o=e.slice(a(n),r+1).reduce((function(n,t){return n+t}),0);return!r||o>t?n.concat(r):n}),[]).map((function(t,e,r){return n.slice(t,r[e+1])}))}(n)}}}function B(n,t,e,r,i){var u=r.align,f=r.axis,d=r.direction,l=r.startIndex,B=r.inViewThreshold,k=r.loop,I=r.speed,z=r.dragFree,D=r.slidesToScroll,L=r.skipSnaps,N=r.containScroll,C=t.getBoundingClientRect(),V=e.map((function(n){return n.getBoundingClientRect()})),H=function(n){var t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(d),R=function(n,t){var e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){var t=n.width,r=n.height;return"x"===e?t:r}}}(f,d),j=R.measureSize(C),q=function(n){return{measure:function(t){return n*(t/100)}}}(j),F=p(u,j),U=!k&&""!==N,G=function(n,t,e,r,i){var u=n.measureSize,c=n.startEdge,f=n.endEdge,d=e[0]&&i,l=function(){if(!d)return 0;var n=e[0];return o(t[c]-n[c])}(),p=function(){if(!d)return 0;var n=window.getComputedStyle(a(r));return parseFloat(n.getPropertyValue("margin-".concat(f)))}(),v=e.map(u),m=e.map((function(n,t,e){var r=!t,o=t===s(e);return r?v[t]+l:o?v[t]+p:e[t+1][c]-n[c]})).map(o);return{slideSizes:v,slideSizesWithGaps:m}}(R,C,V,e,k||""!==N),J=G.slideSizes,W=G.slideSizesWithGaps,X=P(j,W,D),Y=function(n,t,e,r,i,u,c){var f,d=n.startEdge,l=n.endEdge,p=u.groupSlides,v=p(r).map((function(n){return a(n)[l]-n[0][d]})).map(o).map(t.measure),m=r.map((function(n){return e[d]-n[d]})).map((function(n){return-o(n)})),g=(f=a(m)-a(i),p(m).map((function(n){return n[0]})).map((function(n,t,e){var r=!t,o=t===s(e);return c&&r?0:c&&o?f:n+v[t]})));return{snaps:m,snapsAligned:g}}(R,F,C,V,W,X,U),K=Y.snaps,Q=Y.snapsAligned,Z=-a(K)+a(W),$=b(j,Z,Q,N).snapsContained,_=U?$:Q,nn=function(n,t,e){var r,o;return{limit:(r=t[0],o=a(t),v(e?r-n:o,r))}}(Z,_,k).limit,tn=m(s(_),l,k),en=tn.clone(),rn=c(e),on=function(n){var t=0;function e(n,e){return function(){n===!!t&&e()}}function r(){t=window.requestAnimationFrame(n)}return{proceed:e(!0,r),start:e(!1,r),stop:e(!0,(function(){window.cancelAnimationFrame(t),t=0}))}}((function(){k||vn.scrollBounds.constrain(vn.dragHandler.pointerDown()),vn.scrollBody.seek(an).update();var n=vn.scrollBody.settle(an);n&&!vn.dragHandler.pointerDown()&&(vn.animation.stop(),i.emit("settle")),n||i.emit("scroll"),k&&(vn.scrollLooper.loop(vn.scrollBody.direction()),vn.slideLooper.loop()),vn.translate.to(cn),vn.animation.proceed()})),un=_[tn.get()],cn=x(un),an=x(un),sn=y(cn,I,1),fn=w(k,_,Z,nn,an),dn=function(n,t,e,r,o,i){function u(r){var u=r.distance,c=r.index!==t.get();u&&(n.start(),o.add(u)),c&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){u(r.byDistance(n,t))},index:function(n,e){var o=t.clone().set(n);u(r.byIndex(o.get(),e))}}}(on,tn,en,fn,an,i),ln=O(j,Z,J,K,nn,k,B),pn=h(R,H,n,an,function(n){var t,e;function r(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function i(n){return n.timeStamp}function u(t,e){var o=e||n.scroll,i="client".concat("x"===o?"X":"Y");return(r(t)?t.touches[0]:t)[i]}return{isTouchEvent:r,pointerDown:function(n){return t=n,e=n,u(n)},pointerMove:function(n){var r=u(n)-u(e),o=i(n)-i(t)>170;return e=n,o&&(t=n),r},pointerUp:function(n){if(!t||!e)return 0;var r=u(e)-u(t),c=i(n)-i(t),a=i(n)-i(e)>170,s=r/c;return c&&!a&&o(s)>.1?s:0},readPoint:u}}(R),cn,on,dn,sn,fn,tn,i,q,k,z,L),vn={containerRect:C,slideRects:V,animation:on,axis:R,direction:H,dragHandler:pn,eventStore:g(),percentOfView:q,index:tn,indexPrevious:en,limit:nn,location:cn,options:r,scrollBody:sn,scrollBounds:S(nn,cn,an,sn,q),scrollLooper:E(Z,nn,cn,[cn,an]),scrollProgress:A(nn),scrollSnaps:_,scrollTarget:fn,scrollTo:dn,slideLooper:T(R,H,j,Z,W,_,ln,cn,e),slidesToScroll:X,slidesInView:ln,slideIndexes:rn,target:an,translate:M(R,H,t)};return vn}var k={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function I(){function n(n,t){return d(n,t||{})}return{merge:n,areEqual:function(n,t){return JSON.stringify(f(n.breakpoints||{}))===JSON.stringify(f(t.breakpoints||{}))&&l(n,t)},atMedia:function(t){var e=t.breakpoints||{},r=f(e).filter((function(n){return window.matchMedia(n).matches})).map((function(n){return e[n]})).reduce((function(t,e){return n(t,e)}),{});return n(t,r)}}}function z(n,e,r){var o,i,u,c,a=g(),s=I(),f=function(){var n=I(),t=n.atMedia,e=n.areEqual,r=[],o=[];function i(n){var r=t(n.options);return function(){return!e(r,t(n.options))}}var u={init:function(n,e){return o=n.map(i),(r=n.filter((function(n){return t(n.options).active}))).forEach((function(n){return n.init(e)})),n.reduce((function(n,t){var e;return Object.assign(n,((e={})[t.name]=t,e))}),{})},destroy:function(){r=r.filter((function(n){return n.destroy()}))},haveChanged:function(){return o.some((function(n){return n()}))}};return u}(),d=function(){var n={};function t(t){return n[t]||[]}var e={emit:function(n){return t(n).forEach((function(t){return t(n)})),e},off:function(r,o){return n[r]=t(r).filter((function(n){return n!==o})),e},on:function(r,o){return n[r]=t(r).concat([o]),e}};return e}(),l=d.on,p=d.off,v=E,m=!1,x=s.merge(k,z.globalOptions),h=s.merge(x),y=[],S=0;function b(e,r){if(!m){if(x=s.merge(x,e),h=s.atMedia(x),function(){var e=h.container,r=h.slides,o=t(e)?n.querySelector(e):e;u=o||n.children[0];var i=t(r)?u.querySelectorAll(r):r;c=[].slice.call(i||u.children)}(),o=B(n,u,c,h,d),S=o.axis.measureSize(n.getBoundingClientRect()),!h.active)return A();if(o.translate.to(o.location),y=r||y,i=f.init(y,O),h.loop){if(!o.slideLooper.canLoop())return A(),b({loop:!1},r),void(x=s.merge(x,{loop:!0}));o.slideLooper.loop()}h.draggable&&u.offsetParent&&c.length&&o.dragHandler.addActivationEvents()}}function E(n,t){var e=T();A(),b(s.merge({startIndex:e},n),t),d.emit("reInit")}function A(){o.dragHandler.removeAllEvents(),o.animation.stop(),o.eventStore.removeAll(),o.translate.clear(),o.slideLooper.clear(),f.destroy()}function w(n){var t=o[n?"target":"location"].get(),e=h.loop?"removeOffset":"constrain";return o.slidesInView.check(o.limit[e](t))}function M(n,t,e){h.active&&!m&&(o.scrollBody.useBaseMass().useSpeed(t?100:h.speed),o.scrollTo.index(n,e||0))}function T(){return o.index.get()}var O={canScrollNext:function(){return o.index.clone().add(1).get()!==T()},canScrollPrev:function(){return o.index.clone().add(-1).get()!==T()},clickAllowed:function(){return o.dragHandler.clickAllowed()},containerNode:function(){return u},internalEngine:function(){return o},destroy:function(){m||(m=!0,a.removeAll(),A(),d.emit("destroy"))},off:p,on:l,plugins:function(){return i},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:v,rootNode:function(){return n},scrollNext:function(n){M(o.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){M(o.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return o.scrollProgress.get(o.location.get())},scrollSnapList:function(){return o.scrollSnaps.map(o.scrollProgress.get)},scrollTo:M,selectedScrollSnap:T,slideNodes:function(){return c},slidesInView:w,slidesNotInView:function(n){var t=w(n);return o.slideIndexes.filter((function(n){return-1===t.indexOf(n)}))}};return b(e,r),a.add(window,"resize",(function(){var t=s.atMedia(x),e=!s.areEqual(t,h),r=o.axis.measureSize(n.getBoundingClientRect()),i=S!==r,u=f.haveChanged();(i||e||u)&&E(),d.emit("resize")})),setTimeout((function(){return d.emit("init")}),0),O}return z.globalOptions=void 0,z.optionsHandler=I,z}));


/***/ }),

/***/ 23005:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(61094);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 83684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(61094);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 50954:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
const _resolvehref = __webpack_require__(70982);
const _islocalurl = __webpack_require__(60120);
const _formaturl = __webpack_require__(12336);
const _utils = __webpack_require__(78423);
const _addlocale = __webpack_require__(23005);
const _routercontext = __webpack_require__(17160);
const _approutercontext = __webpack_require__(57085);
const _useintersection = __webpack_require__(84254);
const _getdomainlocale = __webpack_require__(83684);
const _addbasepath = __webpack_require__(24578);
const _routerreducertypes = __webpack_require__(92836);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled,
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = true === false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 39029:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 84254:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(18038);
const _requestidlecallback = __webpack_require__(39029);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 11440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(50954)


/***/ })

};
;