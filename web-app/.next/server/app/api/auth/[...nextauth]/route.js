"use strict";
(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 38013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 15140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/auth/[...nextauth]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (handler),
  POST: () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(49861);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(42446);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(51989);
// EXTERNAL MODULE: ./node_modules/@next-auth/mongodb-adapter/dist/index.js
var dist = __webpack_require__(61446);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(38013);
;// CONCATENATED MODULE: ./src/lib/mongoclient.ts
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
client = new external_mongodb_.MongoClient(uri, options);
clientPromise = client.connect();
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const mongoclient = (clientPromise);

;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/options.ts




const options_options = {
    adapter: (0,dist/* MongoDBAdapter */.dJ)(mongoclient),
    providers: [
        (0,google/* default */.Z)({
            profile (profile) {
                return {
                    ...profile,
                    role: profile.role ?? "user",
                    id: profile.sub,
                    image: profile.picture,
                    type: profile.type ?? "oauth"
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0,credentials/* default */.Z)({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const res = await fetch("http:127.0.0.1:8000/api/accounts/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                });
                if (res.status == 200) {
                    const data = await res.json();
                    const selectedValues = Object.values(data);
                    const user = {
                        name: selectedValues[0],
                        email: credentials?.email,
                        type: selectedValues[1],
                        image: selectedValues[2],
                        role: selectedValues[3],
                        id: selectedValues[4]
                    };
                    return user;
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: "/auth/portal"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
                token.type = user.type;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
                session.user.type = token.type;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}; //export default NextAuth(options);

;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/route.ts


const handler = next_auth_default()(options_options);


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5COmar%20Attia%5CRepos%5Cqoaba-frontend%5Cweb-app%5Csrc%5Capp&appPaths=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const next_app_loaderpage_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_name_app_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_pagePath_private_next_app_dir_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_ts_appDir_C_3A_5CUsers_5COmar_20Attia_5CRepos_5Cqoaba_frontend_5Cweb_app_5Csrc_5Capp_appPaths_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_pageExtensions_tsx_pageExtensions_ts_pageExtensions_jsx_pageExtensions_js_basePath_assetPrefix_nextConfigOutput_preferredRegion_middlewareConfig_e30_3D_options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/[...nextauth]/route","pathname":"/api/auth/[...nextauth]","filename":"route","bundlePath":"app/api/auth/[...nextauth]/route"},"resolvedPagePath":"C:\\Users\\Omar Attia\\Repos\\qoaba-frontend\\web-app\\src\\app\\api\\auth\\[...nextauth]\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...next_app_loaderpage_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_name_app_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_pagePath_private_next_app_dir_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_ts_appDir_C_3A_5CUsers_5COmar_20Attia_5CRepos_5Cqoaba_frontend_5Cweb_app_5Csrc_5Capp_appPaths_2Fapi_2Fauth_2F_5B_nextauth_5D_2Froute_pageExtensions_tsx_pageExtensions_ts_pageExtensions_jsx_pageExtensions_js_basePath_assetPrefix_nextConfigOutput_preferredRegion_middlewareConfig_e30_3D_options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,501,423], () => (__webpack_exec__(15140)));
module.exports = __webpack_exports__;

})();