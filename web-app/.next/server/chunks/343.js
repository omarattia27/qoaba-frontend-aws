"use strict";
exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 22343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ HeaderMegaMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80846);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ToggleColorScheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46921);
/* __next_internal_client_entry_do_not_use__ HeaderMegaMenu auto */ 


const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({
        link: {
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            textDecoration: "none",
            color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
            fontWeight: 500,
            fontSize: theme.fontSizes.md,
            [theme.fn.smallerThan("sm")]: {
                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(42),
                display: "flex",
                alignItems: "center",
                width: "100%"
            },
            ...theme.fn.hover({
                color: theme.colorScheme === "dark" ? theme.white : theme.black
            })
        },
        hiddenMobile: {
            [theme.fn.smallerThan("sm")]: {
                display: "none"
            }
        }
    }));
function HeaderMegaMenu() {
    const { classes, theme } = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        pb: 40,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Header, {
            height: 60,
            px: "md",
            withBorder: false,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                position: "apart",
                sx: {
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                        position: "left",
                        classNames: classes.hiddenMobile,
                        children: [
                            theme.colorScheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                maw: 120,
                                src: "/logo-text-darkmode.svg",
                                alt: "Darkmode Qoaba logo with text"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                maw: 120,
                                src: "./logo-text-lightmode.svg",
                                alt: "Lightmode Qoaba logo with text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "../questions",
                                className: classes.link,
                                children: "Questions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: classes.link,
                                children: "Analysis"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: classes.link,
                                children: "Pricing"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                        position: "right",
                        classNames: classes.hiddenMobile,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ToggleColorScheme__WEBPACK_IMPORTED_MODULE_1__/* .ColorSchemeToggle */ .e, {})
                    })
                ]
            })
        })
    });
}


/***/ })

};
;