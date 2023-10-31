"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 66839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterLinks: () => (/* binding */ FooterLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80846);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29674);
/* __next_internal_client_entry_do_not_use__ FooterLinks auto */ 


const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({
        footer: {
            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(120),
            paddingTop: `calc(${theme.spacing.xl} * 2)`,
            paddingBottom: `calc(${theme.spacing.xl} * 2)`,
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
            borderTop: `${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`
        },
        logo: {
            maxWidth: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(200),
            [theme.fn.smallerThan("sm")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        },
        description: {
            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(5),
            [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.xs,
                textAlign: "center"
            }
        },
        inner: {
            display: "flex",
            justifyContent: "space-between",
            [theme.fn.smallerThan("sm")]: {
                flexDirection: "column",
                alignItems: "center"
            }
        },
        groups: {
            display: "flex",
            flexWrap: "wrap",
            [theme.fn.smallerThan("sm")]: {
                display: "none"
            }
        },
        wrapper: {
            width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(160)
        },
        link: {
            display: "block",
            color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
            fontSize: theme.fontSizes.sm,
            paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(3),
            paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(3),
            "&:hover": {
                textDecoration: "underline"
            }
        },
        title: {
            fontSize: theme.fontSizes.lg,
            fontWeight: 700,
            fontFamily: `${theme.fontFamily}`,
            marginBottom: `calc(${theme.spacing.xs} / 2)`,
            color: theme.colorScheme === "dark" ? theme.white : theme.black
        },
        afterFooter: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: theme.spacing.xl,
            paddingTop: theme.spacing.xl,
            paddingBottom: theme.spacing.xl,
            borderTop: `${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
            [theme.fn.smallerThan("sm")]: {
                flexDirection: "column"
            }
        },
        social: {
            [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.xs
            }
        }
    }));
function FooterLinks({ data }) {
    const { classes, theme } = useStyles();
    const groups = data.map((group)=>{
        const links = group.links.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: classes.link,
                component: "a",
                href: link.link,
                children: link.label
            }, index));
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    className: classes.title,
                    children: group.title
                }),
                links
            ]
        }, group.title);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: classes.footer,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
                className: classes.inner,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.logo,
                        children: [
                            theme.colorScheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                maw: 85,
                                src: "/logo-text-darkmode.svg",
                                alt: "Darkmode Qoaba logo with text"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                maw: 85,
                                src: "/logo-text-lightmode.svg",
                                alt: "Darkmode Qoaba logo with text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                size: "xs",
                                color: "dimmed",
                                className: classes.description,
                                children: "Join a global community that has achieved career success"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classes.groups,
                        children: groups
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
                className: classes.afterFooter,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        color: "dimmed",
                        size: "sm",
                        children: [
                            "Made with",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconHeartFilled */ .g4R, {
                                size: "1.05rem",
                                stroke: 1.5,
                                style: {
                                    marginLeft: "0.2rem",
                                    marginRight: "0.2rem",
                                    color: "red"
                                }
                            }),
                            "in Canada \xa9 2023 Qoaba"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                        spacing: 0,
                        className: classes.social,
                        position: "right",
                        noWrap: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                                size: "lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconBrandTwitter */ .nyZ, {
                                    size: "1.05rem",
                                    stroke: 1.5
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                                size: "lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconBrandYoutube */ .rDx, {
                                    size: "1.05rem",
                                    stroke: 1.5
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                                size: "lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconBrandInstagram */ .u9g, {
                                    size: "1.05rem",
                                    stroke: 1.5
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 46921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ColorSchemeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80846);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29674);



function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineColorScheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
        position: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
            onClick: ()=>toggleColorScheme(),
            size: "lg",
            sx: (theme)=>({
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6]
                }),
            children: colorScheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconSun */ .O31, {
                size: "1.2rem"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconMoonStars */ .zG9, {
                size: "1.2rem"
            })
        })
    });
}


/***/ })

};
;