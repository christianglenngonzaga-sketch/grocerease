module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/grocer-ease-sql-schema/app/api/items/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/server.js [app-route] (ecmascript)");
;
// Mock items storage
const items = new Map([
    [
        1,
        {
            id: 1,
            user_id: 1,
            name: "Organic Apples",
            quantity: 5,
            quantity_unit: "pcs",
            category_id: 1,
            purchased: false,
            priority: "medium"
        }
    ],
    [
        2,
        {
            id: 2,
            user_id: 1,
            name: "Fresh Carrots",
            quantity: 1,
            quantity_unit: "kg",
            category_id: 1,
            purchased: false,
            priority: "high"
        }
    ],
    [
        3,
        {
            id: 3,
            user_id: 1,
            name: "Milk",
            quantity: 1,
            quantity_unit: "liter",
            category_id: 2,
            purchased: false,
            priority: "high"
        }
    ]
]);
let nextId = 4;
async function GET(request) {
    try {
        const userItems = Array.from(items.values()).filter((item)=>item.user_id === 1);
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(userItems);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch items"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const data = await request.json();
        const newItem = {
            id: nextId++,
            user_id: 1,
            ...data,
            purchased: false,
            created_at: new Date()
        };
        items.set(newItem.id, newItem);
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newItem);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to create item"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cb4064e9._.js.map