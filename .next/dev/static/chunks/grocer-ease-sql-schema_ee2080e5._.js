(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DashboardHeader({ user }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-surface border-b border-border-light sticky top-0 z-40 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary rounded-lg p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-primary",
                            children: "GrocerEase"
                        }, void 0, false, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowMenu(!showMenu),
                            className: "flex items-center gap-3 px-4 py-2 hover:bg-surface-secondary rounded-lg transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold",
                                    children: [
                                        user?.first_name?.[0],
                                        user?.last_name?.[0]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-text-primary",
                                            children: [
                                                user?.first_name,
                                                " ",
                                                user?.last_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-text-secondary",
                                            children: user?.email
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-lg animate-slide-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard/settings",
                                    className: "flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary text-text-primary transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary text-error transition-colors border-t border-border-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Sign Out"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(DashboardHeader, "ybvNZH7AajK8tccMR3bStZetybU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverviewCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-client] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
"use client";
;
;
function OverviewCards({ totalItems, pendingItems, purchasedItems, categories }) {
    const cards = [
        {
            title: "Total Items",
            value: totalItems,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
            color: "primary",
            bgColor: "primary-light"
        },
        {
            title: "Pending",
            value: pendingItems,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"],
            color: "info",
            bgColor: "secondary-light"
        },
        {
            title: "Purchased",
            value: purchasedItems,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            color: "success",
            bgColor: "primary-light"
        },
        {
            title: "Categories",
            value: categories,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
            color: "warning",
            bgColor: "warning"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid md:grid-cols-4 gap-4 mb-8",
        children: cards.map((card, idx)=>{
            const Icon = card.icon;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-surface border border-border-light rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-secondary text-sm font-medium",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold text-text-primary mt-2",
                                    children: card.value
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3 rounded-lg bg-${card.bgColor}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: `w-6 h-6 text-${card.color}`
                            }, void 0, false, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, this)
            }, idx, false, {
                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
                lineNumber: 49,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = OverviewCards;
var _c;
__turbopack_context__.k.register(_c, "OverviewCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroceryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function GroceryList({ items, categories, filter, onFilterChange, onTogglePurchased, onDeleteItem, onEditItem, onAddItem }) {
    const getCategoryColor = (categoryId)=>{
        const category = categories.find((c)=>c.id === categoryId);
        return category?.color || "#10B981";
    };
    const getCategoryName = (categoryId)=>{
        const category = categories.find((c)=>c.id === categoryId);
        return category?.name || "Uncategorized";
    };
    const getPriorityColor = (priority)=>{
        const colors = {
            high: "text-error",
            medium: "text-warning",
            low: "text-text-light"
        };
        return colors[priority] || "text-text-light";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-surface border border-border-light rounded-2xl p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-text-primary",
                                children: "Your Grocery List"
                            }, void 0, false, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-sm mt-1",
                                children: [
                                    items.length,
                                    " ",
                                    items.length === 1 ? "item" : "items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddItem,
                        className: "flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-xl font-semibold hover:bg-primary-dark transition-colors w-full sm:w-auto justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            "Add Item"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6 border-b border-border-light pb-4",
                children: [
                    "all",
                    "pending",
                    "purchased"
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onFilterChange(f),
                        className: `px-4 py-2 rounded-lg font-medium transition-colors capitalize ${filter === f ? "bg-primary text-white" : "text-text-secondary hover:bg-surface-secondary"}`,
                        children: f
                    }, f, false, {
                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-secondary",
                        children: "No items yet. Add one to get started!"
                    }, void 0, false, {
                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this) : items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: idx * 0.05
                        },
                        className: `flex items-center gap-4 p-4 rounded-xl border transition-all ${item.purchased ? "bg-surface-secondary border-border-light opacity-60" : "bg-background border-border hover:border-primary"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onTogglePurchased(item.id, item.purchased),
                                className: "shrink-0 text-primary hover:text-primary-dark transition-colors",
                                children: item.purchased ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                    lineNumber: 101,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                    lineNumber: 101,
                                    columnNumber: 74
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `font-semibold ${item.purchased ? "line-through text-text-light" : "text-text-primary"}`,
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-1 flex-wrap",
                                        children: [
                                            item.category_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-white px-3 py-1 rounded-full",
                                                style: {
                                                    backgroundColor: getCategoryColor(item.category_id)
                                                },
                                                children: getCategoryName(item.category_id)
                                            }, void 0, false, {
                                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-medium ${getPriorityColor(item.priority)}`,
                                                children: item.priority
                                            }, void 0, false, {
                                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            item.quantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-secondary",
                                                children: [
                                                    item.quantity,
                                                    " ",
                                                    item.quantity_unit || "pcs"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onEditItem(item),
                                        className: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                        title: "Edit item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            }, void 0, false, {
                                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDeleteItem(item.id),
                                        className: "p-2 text-text-light hover:text-error transition-colors hover:bg-error/10 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = GroceryList;
var _c;
__turbopack_context__.k.register(_c, "GroceryList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddItemModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddItemModal({ categories, onClose, onAdd, editingItem }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        quantity: 1,
        quantity_unit: "pcs",
        category_id: "",
        priority: "medium",
        notes: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddItemModal.useEffect": ()=>{
            if (editingItem) {
                setForm({
                    name: editingItem.name,
                    quantity: editingItem.quantity,
                    quantity_unit: editingItem.quantity_unit,
                    category_id: editingItem.category_id || "",
                    priority: editingItem.priority,
                    notes: editingItem.notes || ""
                });
            }
        }
    }["AddItemModal.useEffect"], [
        editingItem
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (form.name.trim()) {
            onAdd({
                ...form,
                category_id: form.category_id ? Number.parseInt(form.category_id) : null
            });
            setForm({
                name: "",
                quantity: 1,
                quantity_unit: "pcs",
                category_id: "",
                priority: "medium",
                notes: ""
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-2 border-black rounded-2xl shadow-xl max-w-md w-full animate-slide-in-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b-2 border-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-black",
                            children: editingItem ? "Edit Item" : "Add New Item"
                        }, void 0, false, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-gray-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6 text-black"
                            }, void 0, false, {
                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-black mb-2",
                                    children: "Item Name *"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: form.name,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            name: e.target.value
                                        }),
                                    placeholder: "e.g., Organic Apples",
                                    className: "w-full px-4 py-2 border-2 border-black text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            value: form.quantity,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    quantity: Number.parseInt(e.target.value)
                                                }),
                                            className: "w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Unit"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.quantity_unit,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    quantity_unit: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "pcs"
                                                }, void 0, false, {
                                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "liter"
                                                }, void 0, false, {
                                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "dozen"
                                                }, void 0, false, {
                                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "pack"
                                                }, void 0, false, {
                                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-black mb-2",
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: form.category_id,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            category_id: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "No Category"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: cat.id,
                                                children: cat.name
                                            }, cat.id, false, {
                                                fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-black mb-2",
                                    children: "Priority"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: form.priority,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            priority: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "low",
                                            children: "Low"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "medium",
                                            children: "Medium"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "high",
                                            children: "High"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-black mb-2",
                                    children: "Notes"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.notes,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            notes: e.target.value
                                        }),
                                    placeholder: "Optional notes...",
                                    className: "w-full px-4 py-2 border-2 border-black text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 resize-none",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-gray-100 transition-colors font-medium",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        editingItem ? "Update" : "Add",
                                        " Item"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(AddItemModal, "6gD6smvQOlktf3ITp22lwCJaDCc=");
_c = AddItemModal;
var _c;
__turbopack_context__.k.register(_c, "AddItemModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/grocer-ease-sql-schema/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/components/dashboard/dashboard-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$overview$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/components/dashboard/overview-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$grocery$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/components/dashboard/grocery-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$add$2d$item$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/components/dashboard/add-item-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const fetchData = {
                "DashboardPage.useEffect.fetchData": async ()=>{
                    const token = localStorage.getItem("token");
                    if (!token) {
                        router.push("/auth/login");
                        return;
                    }
                    try {
                        const [userRes, itemsRes, categoriesRes] = await Promise.all([
                            fetch("/api/auth/me", {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            }),
                            fetch("/api/items", {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            }),
                            fetch("/api/categories", {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            })
                        ]);
                        // normalize user response (could be { user: {...} } or user object)
                        if (userRes.ok) {
                            const userJson = await userRes.json();
                            setUser(userJson?.user ?? userJson ?? null);
                        }
                        // normalize items response (could be array or { items: [...] })
                        if (itemsRes.ok) {
                            const itemsJson = await itemsRes.json();
                            const itemsArray = Array.isArray(itemsJson) ? itemsJson : Array.isArray(itemsJson?.items) ? itemsJson.items : [];
                            setItems(itemsArray);
                        }
                        // normalize categories response (could be array or { categories: [...] })
                        if (categoriesRes.ok) {
                            const catsJson = await categoriesRes.json();
                            const catsArray = Array.isArray(catsJson) ? catsJson : Array.isArray(catsJson?.categories) ? catsJson.categories : [];
                            setCategories(catsArray);
                        }
                    } catch (err) {
                        console.error("Error fetching data:", err);
                        __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load data");
                    } finally{
                        setLoading(false);
                    }
                }
            }["DashboardPage.useEffect.fetchData"];
            fetchData();
        }
    }["DashboardPage.useEffect"], [
        router
    ]);
    const handleAddItem = async (itemData)=>{
        const token = localStorage.getItem("token");
        try {
            if (editingItem) {
                const res = await fetch(`/api/items/${editingItem.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(itemData)
                });
                if (res.ok) {
                    const payload = await res.json();
                    const updatedItem = payload?.item ?? payload;
                    setItems(items.map((item)=>item.id === editingItem.id ? updatedItem : item));
                    __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Item updated successfully!");
                    setEditingItem(null);
                    setShowAddModal(false);
                }
            } else {
                const res = await fetch("/api/items", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(itemData)
                });
                if (res.ok) {
                    const payload = await res.json();
                    const newItem = payload?.item ?? payload;
                    setItems([
                        ...items,
                        newItem
                    ]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Item added successfully!");
                    setShowAddModal(false);
                }
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(editingItem ? "Failed to update item" : "Failed to add item");
        }
    };
    const handleTogglePurchased = async (id, purchased)=>{
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/auth/login");
            return;
        }
        // optimistic update
        setItems((prev)=>prev.map((it)=>it.id === id ? {
                    ...it,
                    purchased: !purchased
                } : it));
        try {
            const res = await fetch(`/api/items/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    purchased: !purchased
                })
            });
            if (!res.ok) {
                // revert optimistic update
                setItems((prev)=>prev.map((it)=>it.id === id ? {
                            ...it,
                            purchased
                        } : it));
                if (res.status === 401) {
                    router.push("/auth/login");
                    return;
                }
                const err = await res.json().catch(()=>({}));
                __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err?.error ?? "Failed to update item");
                return;
            }
            // use server response to keep state in sync (route returns { item })
            const payload = await res.json().catch(()=>null);
            const updated = payload?.item ?? null;
            if (updated) {
                setItems((prev)=>prev.map((it)=>it.id === id ? updated : it));
            }
        } catch (err) {
            // revert optimistic update
            setItems((prev)=>prev.map((it)=>it.id === id ? {
                        ...it,
                        purchased
                    } : it));
            __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update item");
        }
    };
    const handleDeleteItem = async (id)=>{
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`/api/items/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setItems(items.filter((item)=>item.id !== id));
                __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Item deleted");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete item");
        }
    };
    const handleEditItem = (item)=>{
        setEditingItem(item);
        setShowAddModal(true);
    };
    const handleCloseModal = ()=>{
        setShowAddModal(false);
        setEditingItem(null);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-secondary",
                        children: "Loading your dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this);
    }
    // ensure items/categories are arrays
    const itemsList = Array.isArray(items) ? items : [];
    const categoriesList = Array.isArray(categories) ? categories : [];
    const totalItems = itemsList.length;
    const pendingItemsArr = itemsList.filter((i)=>!i.purchased);
    const purchasedItemsArr = itemsList.filter((i)=>!!i.purchased);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-center"
            }, void 0, false, {
                fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user
            }, void 0, false, {
                fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$overview$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        totalItems: totalItems,
                        pendingItems: pendingItemsArr.length,
                        purchasedItems: purchasedItemsArr.length,
                        categories: categoriesList.length
                    }, void 0, false, {
                        fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$grocery$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: itemsList,
                        categories: categoriesList,
                        filter: filter,
                        onFilterChange: setFilter,
                        onTogglePurchased: handleTogglePurchased,
                        onDeleteItem: handleDeleteItem,
                        onEditItem: handleEditItem,
                        onAddItem: ()=>setShowAddModal(true)
                    }, void 0, false, {
                        fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$components$2f$dashboard$2f$add$2d$item$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                categories: categoriesList,
                onClose: handleCloseModal,
                onAdd: handleAddItem,
                editingItem: editingItem
            }, void 0, false, {
                fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/grocer-ease-sql-schema/app/dashboard/page.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "bq/JPEoU18EC63dJN9xMAob1mGs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=grocer-ease-sql-schema_ee2080e5._.js.map