exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 2092:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(18038);
var useForm = __webpack_require__(5505);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function createFormContext() {
  const FormContext = React.createContext(null);
  function FormProvider({ form, children }) {
    return /* @__PURE__ */ React__default.createElement(FormContext.Provider, {
      value: form
    }, children);
  }
  function useFormContext() {
    const ctx = React.useContext(FormContext);
    if (!ctx) {
      throw new Error("useFormContext was called outside of FormProvider context");
    }
    return ctx;
  }
  return [FormProvider, useFormContext, useForm.useForm];
}

exports.createFormContext = createFormContext;
//# sourceMappingURL=FormProvider.js.map


/***/ }),

/***/ 38023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(18038);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const Form = React.forwardRef((_a, ref) => {
  var _b = _a, { form, onSubmit, onReset } = _b, others = __objRest(_b, ["form", "onSubmit", "onReset"]);
  return /* @__PURE__ */ React__default.createElement("form", __spreadProps(__spreadValues({}, others), {
    onSubmit: form.onSubmit(onSubmit),
    onReset: (event) => {
      onReset == null ? void 0 : onReset(event);
      form.onReset(event);
    },
    ref
  }));
});

exports.Form = Form;
//# sourceMappingURL=Form.js.map


/***/ }),

/***/ 74641:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function filterErrors(errors) {
  if (errors === null || typeof errors !== "object") {
    return {};
  }
  return Object.keys(errors).reduce((acc, key) => {
    const errorValue = errors[key];
    if (errorValue !== void 0 && errorValue !== null && errorValue !== false) {
      acc[key] = errorValue;
    }
    return acc;
  }, {});
}

exports.filterErrors = filterErrors;
//# sourceMappingURL=filter-errors.js.map


/***/ }),

/***/ 33743:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const FORM_INDEX = "__MANTINE_FORM_INDEX__";

exports.FORM_INDEX = FORM_INDEX;
//# sourceMappingURL=form-index.js.map


/***/ }),

/***/ 32692:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getInputOnChange(setValue) {
  return (val) => {
    if (!val) {
      setValue(val);
    } else if (typeof val === "function") {
      setValue(val);
    } else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;
      if (currentTarget instanceof HTMLInputElement) {
        if (currentTarget.type === "checkbox") {
          setValue(currentTarget.checked);
        } else {
          setValue(currentTarget.value);
        }
      } else if (currentTarget instanceof HTMLTextAreaElement || currentTarget instanceof HTMLSelectElement) {
        setValue(currentTarget.value);
      }
    } else {
      setValue(val);
    }
  };
}

exports.getInputOnChange = getInputOnChange;
//# sourceMappingURL=get-input-on-change.js.map


/***/ }),

/***/ 81973:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getStatus(status, path) {
  const paths = Object.keys(status);
  if (typeof path === "string") {
    const nestedPaths = paths.filter((statusPath) => statusPath.startsWith(`${path}.`));
    return status[path] || nestedPaths.some((statusPath) => status[statusPath]) || false;
  }
  return paths.some((statusPath) => status[statusPath]);
}

exports.getStatus = getStatus;
//# sourceMappingURL=get-status.js.map


/***/ }),

/***/ 47187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var useForm = __webpack_require__(5505);
var FormProvider = __webpack_require__(2092);
var Form = __webpack_require__(38023);
var formIndex = __webpack_require__(33743);
var zodResolver = __webpack_require__(42912);
var superstructResolver = __webpack_require__(95479);
var yupResolver = __webpack_require__(83263);
var joiResolver = __webpack_require__(42875);
var isNotEmpty = __webpack_require__(8702);
var matches = __webpack_require__(88860);
var isEmail = __webpack_require__(7715);
var hasLength = __webpack_require__(22493);
var isInRange = __webpack_require__(88608);
var matchesField = __webpack_require__(12031);



exports.cI = useForm.useForm;
__webpack_unused_export__ = FormProvider.createFormContext;
__webpack_unused_export__ = Form.Form;
__webpack_unused_export__ = formIndex.FORM_INDEX;
__webpack_unused_export__ = zodResolver.zodResolver;
__webpack_unused_export__ = superstructResolver.superstructResolver;
__webpack_unused_export__ = yupResolver.yupResolver;
__webpack_unused_export__ = joiResolver.joiResolver;
__webpack_unused_export__ = isNotEmpty.isNotEmpty;
__webpack_unused_export__ = matches.matches;
__webpack_unused_export__ = isEmail.isEmail;
__webpack_unused_export__ = hasLength.hasLength;
__webpack_unused_export__ = isInRange.isInRange;
__webpack_unused_export__ = matchesField.matchesField;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 47887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var clearListState = __webpack_require__(27141);

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
function getIndexFromKeyAfterPath(key, path) {
  const split = key.substring(path.length + 1).split(".")[0];
  return parseInt(split, 10);
}
function changeErrorIndices(path, index, errors, change) {
  if (index === void 0) {
    return errors;
  }
  const pathString = `${String(path)}`;
  let clearedErrors = errors;
  if (change === -1) {
    clearedErrors = clearListState.clearListState(`${pathString}.${index}`, clearedErrors);
  }
  const cloned = __spreadValues({}, clearedErrors);
  const changedKeys = new Set();
  Object.entries(clearedErrors).filter(([key]) => {
    if (!key.startsWith(`${pathString}.`)) {
      return false;
    }
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    if (Number.isNaN(currIndex)) {
      return false;
    }
    return currIndex >= index;
  }).forEach(([key, value]) => {
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    const newKey = key.replace(`${pathString}.${currIndex}`, `${pathString}.${currIndex + change}`);
    cloned[newKey] = value;
    changedKeys.add(newKey);
    if (!changedKeys.has(key)) {
      delete cloned[key];
    }
  });
  return cloned;
}

exports.changeErrorIndices = changeErrorIndices;
//# sourceMappingURL=change-error-indices.js.map


/***/ }),

/***/ 27141:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

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
function clearListState(field, state) {
  if (state === null || typeof state !== "object") {
    return {};
  }
  const clone = __spreadValues({}, state);
  Object.keys(state).forEach((errorKey) => {
    if (errorKey.includes(`${String(field)}.`)) {
      delete clone[errorKey];
    }
  });
  return clone;
}

exports.clearListState = clearListState;
//# sourceMappingURL=clear-list-state.js.map


/***/ }),

/***/ 33454:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

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
function reorderErrors(path, { from, to }, errors) {
  const oldKeyStart = `${path}.${from}`;
  const newKeyStart = `${path}.${to}`;
  const clone = __spreadValues({}, errors);
  Object.keys(errors).every((key) => {
    let oldKey;
    let newKey;
    if (key.startsWith(oldKeyStart)) {
      oldKey = key;
      newKey = key.replace(oldKeyStart, newKeyStart);
    }
    if (key.startsWith(newKeyStart)) {
      oldKey = key.replace(newKeyStart, oldKeyStart);
      newKey = key;
    }
    if (oldKey && newKey) {
      const value1 = clone[oldKey];
      const value2 = clone[newKey];
      value2 === void 0 ? delete clone[oldKey] : clone[oldKey] = value2;
      value1 === void 0 ? delete clone[newKey] : clone[newKey] = value1;
      return false;
    }
    return true;
  });
  return clone;
}

exports.reorderErrors = reorderErrors;
//# sourceMappingURL=reorder-errors.js.map


/***/ }),

/***/ 63689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var getSplittedPath = __webpack_require__(22353);

function getPath(path, values) {
  const splittedPath = getSplittedPath.getSplittedPath(path);
  if (splittedPath.length === 0 || typeof values !== "object" || values === null) {
    return void 0;
  }
  let value = values[splittedPath[0]];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value === void 0) {
      break;
    }
    value = value[splittedPath[i]];
  }
  return value;
}

exports.getPath = getPath;
//# sourceMappingURL=get-path.js.map


/***/ }),

/***/ 22353:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getSplittedPath(path) {
  if (typeof path !== "string") {
    return [];
  }
  return path.split(".");
}

exports.getSplittedPath = getSplittedPath;
//# sourceMappingURL=get-splitted-path.js.map


/***/ }),

/***/ 11220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var getPath = __webpack_require__(63689);
var setPath = __webpack_require__(95153);

function insertPath(path, value, index, values) {
  const currentValue = getPath.getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  cloned.splice(typeof index === "number" ? index : cloned.length, 0, value);
  return setPath.setPath(path, cloned, values);
}

exports.insertPath = insertPath;
//# sourceMappingURL=insert-path.js.map


/***/ }),

/***/ 5846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var getPath = __webpack_require__(63689);
var setPath = __webpack_require__(95153);

function removePath(path, index, values) {
  const currentValue = getPath.getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  return setPath.setPath(path, currentValue.filter((_, itemIndex) => itemIndex !== index), values);
}

exports.removePath = removePath;
//# sourceMappingURL=remove-path.js.map


/***/ }),

/***/ 54653:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var getPath = __webpack_require__(63689);
var setPath = __webpack_require__(95153);

function reorderPath(path, { from, to }, values) {
  const currentValue = getPath.getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  const item = currentValue[from];
  cloned.splice(from, 1);
  cloned.splice(to, 0, item);
  return setPath.setPath(path, cloned, values);
}

exports.reorderPath = reorderPath;
//# sourceMappingURL=reorder-path.js.map


/***/ }),

/***/ 95153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var full = __webpack_require__(16638);
var getSplittedPath = __webpack_require__(22353);

function setPath(path, value, values) {
  const splittedPath = getSplittedPath.getSplittedPath(path);
  if (splittedPath.length === 0) {
    return values;
  }
  const cloned = full.klona(values);
  if (splittedPath.length === 1) {
    cloned[splittedPath[0]] = value;
    return cloned;
  }
  let val = cloned[splittedPath[0]];
  for (let i = 1; i < splittedPath.length - 1; i += 1) {
    if (val === void 0) {
      return cloned;
    }
    val = val[splittedPath[i]];
  }
  val[splittedPath[splittedPath.length - 1]] = value;
  return cloned;
}

exports.setPath = setPath;
//# sourceMappingURL=set-path.js.map


/***/ }),

/***/ 42875:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

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
function joiResolver(schema, options) {
  const _schema = schema;
  return (values) => {
    const parsed = _schema.validate(values, __spreadValues({ abortEarly: false }, options));
    if (!parsed.error) {
      return {};
    }
    const results = {};
    parsed.error.details.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}

exports.joiResolver = joiResolver;
//# sourceMappingURL=joi-resolver.js.map


/***/ }),

/***/ 95479:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function superstructResolver(schema) {
  function structValidation(values) {
    const formErrors = {};
    const [err] = schema.validate(values);
    if (!err) {
      return formErrors;
    }
    err.failures().forEach((fieldFailure) => {
      const fieldName = fieldFailure.path.join(" ");
      formErrors[fieldFailure.path.join(".")] = `${fieldName}: ${fieldFailure.message}`;
    });
    return formErrors;
  }
  return structValidation;
}

exports.superstructResolver = superstructResolver;
//# sourceMappingURL=superstruct-resolver.js.map


/***/ }),

/***/ 83263:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function yupResolver(schema) {
  const _schema = schema;
  return (values) => {
    try {
      _schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (_yupError) {
      const yupError = _yupError;
      const results = {};
      yupError.inner.forEach((error) => {
        results[error.path.replaceAll("[", ".").replaceAll("]", "")] = error.message;
      });
      return results;
    }
  };
}

exports.yupResolver = yupResolver;
//# sourceMappingURL=yup-resolver.js.map


/***/ }),

/***/ 42912:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function zodResolver(schema) {
  return (values) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      return {};
    }
    const results = {};
    parsed.error.errors.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}

exports.zodResolver = zodResolver;
//# sourceMappingURL=zod-resolver.js.map


/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(18038);
var isEqual = __webpack_require__(96967);
var filterErrors = __webpack_require__(74641);
var clearListState = __webpack_require__(27141);
var shouldValidateOnChange = __webpack_require__(85022);
var setPath = __webpack_require__(95153);
var validateFieldValue = __webpack_require__(79183);
var reorderPath = __webpack_require__(54653);
var reorderErrors = __webpack_require__(33454);
var removePath = __webpack_require__(5846);
var changeErrorIndices = __webpack_require__(47887);
var insertPath = __webpack_require__(11220);
var validateValues = __webpack_require__(53198);
var getStatus = __webpack_require__(81973);
var getPath = __webpack_require__(63689);
var getInputOnChange = __webpack_require__(32692);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

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
function useForm({
  initialValues = {},
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  transformValues = (values) => values,
  validate: rules
} = {}) {
  const [touched, setTouched] = React.useState(initialTouched);
  const [dirty, setDirty] = React.useState(initialDirty);
  const [values, _setValues] = React.useState(initialValues);
  const [errors, _setErrors] = React.useState(filterErrors.filterErrors(initialErrors));
  const valuesSnapshot = React.useRef(initialValues);
  const setValuesSnapshot = (_values) => {
    valuesSnapshot.current = _values;
  };
  const resetTouched = React.useCallback(() => setTouched({}), []);
  const resetDirty = (_values) => {
    const newSnapshot = _values ? __spreadValues(__spreadValues({}, values), _values) : values;
    setValuesSnapshot(newSnapshot);
    setDirty({});
  };
  const setErrors = React.useCallback((errs) => _setErrors((current) => filterErrors.filterErrors(typeof errs === "function" ? errs(current) : errs)), []);
  const clearErrors = React.useCallback(() => _setErrors({}), []);
  const reset = React.useCallback(() => {
    _setValues(initialValues);
    clearErrors();
    setValuesSnapshot(initialValues);
    setDirty({});
    resetTouched();
  }, []);
  const setFieldError = React.useCallback((path, error) => setErrors((current) => __spreadProps(__spreadValues({}, current), { [path]: error })), []);
  const clearFieldError = React.useCallback((path) => setErrors((current) => {
    if (typeof path !== "string") {
      return current;
    }
    const clone = __spreadValues({}, current);
    delete clone[path];
    return clone;
  }), []);
  const clearFieldDirty = React.useCallback((path) => setDirty((current) => {
    if (typeof path !== "string") {
      return current;
    }
    const result = clearListState.clearListState(path, current);
    delete result[path];
    return result;
  }), []);
  const setFieldValue = React.useCallback((path, value) => {
    const shouldValidate = shouldValidateOnChange.shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => __spreadProps(__spreadValues({}, currentTouched), { [path]: true }));
    _setValues((current) => {
      const result = setPath.setPath(path, value, current);
      if (shouldValidate) {
        const validationResults = validateFieldValue.validateFieldValue(path, rules, result);
        validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
      }
      return result;
    });
    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);
  const setValues = React.useCallback((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = typeof payload === "function" ? payload(currentValues) : payload;
      return __spreadValues(__spreadValues({}, currentValues), valuesPartial);
    });
    clearInputErrorOnChange && clearErrors();
  }, []);
  const reorderListItem = React.useCallback((path, payload) => {
    clearFieldDirty(path);
    _setValues((current) => reorderPath.reorderPath(path, payload, current));
    _setErrors((errs) => reorderErrors.reorderErrors(path, payload, errs));
  }, []);
  const removeListItem = React.useCallback((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => removePath.removePath(path, index, current));
    _setErrors((errs) => changeErrorIndices.changeErrorIndices(path, index, errs, -1));
  }, []);
  const insertListItem = React.useCallback((path, item, index) => {
    clearFieldDirty(path);
    _setValues((current) => insertPath.insertPath(path, item, index, current));
    _setErrors((errs) => changeErrorIndices.changeErrorIndices(path, index, errs, 1));
  }, []);
  const validate = React.useCallback(() => {
    const results = validateValues.validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);
  const validateField = React.useCallback((path) => {
    const results = validateFieldValue.validateFieldValue(path, rules, values);
    results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
    return results;
  }, [values, rules]);
  const getInputProps = (path, { type = "input", withError = true, withFocus = true } = {}) => {
    const onChange = getInputOnChange.getInputOnChange((value) => setFieldValue(path, value));
    const payload = { onChange };
    if (withError) {
      payload.error = errors[path];
    }
    if (type === "checkbox") {
      payload.checked = getPath.getPath(path, values);
    } else {
      payload.value = getPath.getPath(path, values);
    }
    if (withFocus) {
      payload.onFocus = () => setTouched((current) => __spreadProps(__spreadValues({}, current), { [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange.shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue.validateFieldValue(path, rules, values);
          validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
        }
      };
    }
    return payload;
  };
  const onSubmit = (handleSubmit, handleValidationFailure) => (event) => {
    event == null ? void 0 : event.preventDefault();
    const results = validate();
    if (results.hasErrors) {
      handleValidationFailure == null ? void 0 : handleValidationFailure(results.errors, values, event);
    } else {
      handleSubmit == null ? void 0 : handleSubmit(transformValues(values), event);
    }
  };
  const getTransformedValues = (input) => transformValues(input || values);
  const onReset = React.useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);
  const isDirty = (path) => {
    if (path) {
      const overriddenValue = getPath.getPath(path, dirty);
      if (typeof overriddenValue === "boolean") {
        return overriddenValue;
      }
      const sliceOfValues = getPath.getPath(path, values);
      const sliceOfInitialValues = getPath.getPath(path, valuesSnapshot.current);
      return !isEqual__default(sliceOfValues, sliceOfInitialValues);
    }
    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus.getStatus(dirty);
    }
    return !isEqual__default(values, valuesSnapshot.current);
  };
  const isTouched = React.useCallback((path) => getStatus.getStatus(touched, path), [touched]);
  const isValid = React.useCallback((path) => path ? !validateFieldValue.validateFieldValue(path, rules, values).hasError : !validateValues.validateValues(rules, values).hasErrors, [values, rules]);
  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    getInputProps,
    onSubmit,
    onReset,
    isDirty,
    isTouched,
    setTouched,
    setDirty,
    resetTouched,
    resetDirty,
    isValid,
    getTransformedValues
  };
}

exports.useForm = useForm;
//# sourceMappingURL=use-form.js.map


/***/ }),

/***/ 85022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var formIndex = __webpack_require__(33743);

function shouldValidateOnChange(path, validateInputOnChange) {
  if (!validateInputOnChange) {
    return false;
  }
  if (typeof validateInputOnChange === "boolean") {
    return validateInputOnChange;
  }
  if (Array.isArray(validateInputOnChange)) {
    return validateInputOnChange.includes(path.replace(/[.][0-9]/g, `.${formIndex.FORM_INDEX}`));
  }
  return false;
}

exports.shouldValidateOnChange = shouldValidateOnChange;
//# sourceMappingURL=should-validate-on-change.js.map


/***/ }),

/***/ 79183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var validateValues = __webpack_require__(53198);

function validateFieldValue(path, rules, values) {
  if (typeof path !== "string") {
    return { hasError: false, error: null };
  }
  const results = validateValues.validateValues(rules, values);
  const pathInError = Object.keys(results.errors).find((errorKey) => path.split(".").every((pathPart, i) => pathPart === errorKey.split(".")[i]));
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}

exports.validateFieldValue = validateFieldValue;
//# sourceMappingURL=validate-field-value.js.map


/***/ }),

/***/ 53198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var filterErrors = __webpack_require__(74641);
var getPath = __webpack_require__(63689);

function getValidationResults(errors) {
  const filteredErrors = filterErrors.filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}
function validateRulesRecord(rules, values, path = "", errors = {}) {
  if (typeof rules !== "object" || rules === null) {
    return errors;
  }
  return Object.keys(rules).reduce((acc, ruleKey) => {
    const rule = rules[ruleKey];
    const rulePath = `${path === "" ? "" : `${path}.`}${ruleKey}`;
    const value = getPath.getPath(rulePath, values);
    let arrayValidation = false;
    if (typeof rule === "function") {
      acc[rulePath] = rule(value, values, rulePath);
    }
    if (typeof rule === "object" && Array.isArray(value)) {
      arrayValidation = true;
      value.forEach((_item, index) => validateRulesRecord(rule, values, `${rulePath}.${index}`, acc));
    }
    if (typeof rule === "object" && typeof value === "object" && value !== null) {
      if (!arrayValidation) {
        validateRulesRecord(rule, values, rulePath, acc);
      }
    }
    return acc;
  }, errors);
}
function validateValues(validate, values) {
  if (typeof validate === "function") {
    return getValidationResults(validate(values));
  }
  return getValidationResults(validateRulesRecord(validate, values));
}

exports.validateValues = validateValues;
//# sourceMappingURL=validate-values.js.map


/***/ }),

/***/ 22493:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isLengthValid(payload, value) {
  if (typeof payload === "number") {
    return value.length === payload;
  }
  const { max, min } = payload;
  let valid = true;
  if (typeof max === "number" && value.length > max) {
    valid = false;
  }
  if (typeof min === "number" && value.length < min) {
    valid = false;
  }
  return valid;
}
function hasLength(payload, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value === "string") {
      return isLengthValid(payload, value.trim()) ? null : _error;
    }
    if (typeof value === "object" && value !== null && "length" in value) {
      return isLengthValid(payload, value) ? null : _error;
    }
    return _error;
  };
}

exports.hasLength = hasLength;
//# sourceMappingURL=has-length.js.map


/***/ }),

/***/ 7715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var matches = __webpack_require__(88860);

function isEmail(error) {
  return matches.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, error);
}

exports.isEmail = isEmail;
//# sourceMappingURL=is-email.js.map


/***/ }),

/***/ 88608:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isInRange({ min, max }, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value !== "number") {
      return _error;
    }
    let valid = true;
    if (typeof min === "number" && value < min) {
      valid = false;
    }
    if (typeof max === "number" && value > max) {
      valid = false;
    }
    return valid ? null : _error;
  };
}

exports.isInRange = isInRange;
//# sourceMappingURL=is-in-range.js.map


/***/ }),

/***/ 8702:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isNotEmpty(error) {
  const _error = error || true;
  return (value) => {
    if (typeof value === "string") {
      return value.trim().length > 0 ? null : _error;
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? null : _error;
    }
    if (value === null || value === void 0) {
      return _error;
    }
    if (value === false) {
      return _error;
    }
    return null;
  };
}

exports.isNotEmpty = isNotEmpty;
//# sourceMappingURL=is-not-empty.js.map


/***/ }),

/***/ 12031:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function matchesField(field, error) {
  const _error = error || true;
  return (value, values) => {
    if (!values || !(field in values)) {
      return _error;
    }
    return value === values[field] ? null : _error;
  };
}

exports.matchesField = matchesField;
//# sourceMappingURL=matches-field.js.map


/***/ }),

/***/ 88860:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function matches(regexp, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value !== "string") {
      return _error;
    }
    return regexp.test(value) ? null : _error;
  };
}

exports.matches = matches;
//# sourceMappingURL=matches.js.map


/***/ }),

/***/ 96967:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 16638:
/***/ ((__unused_webpack_module, exports) => {

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

exports.klona = klona;

/***/ })

};
;