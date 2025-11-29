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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/grocer-ease-sql-schema/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/mysql2/promise.js [app-route] (ecmascript)");
;
const pool = __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createPool({
    host: process.env.DB_HOST ?? "127.0.0.1",
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "grocerease",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const __TURBOPACK__default__export__ = pool;
}),
"[project]/grocer-ease-sql-schema/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const SECRET = process.env.JWT_SECRET ?? "change-this-secret";
function signToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, SECRET, {
        expiresIn: "7d"
    });
}
function verifyToken(token) {
    if (!token) return null;
    try {
        const t = token.replace(/^Bearer\s+/i, "");
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(t, SECRET);
    } catch  {
        return null;
    }
}
}),
"[project]/grocer-ease-sql-schema/app/api/categories/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/grocer-ease-sql-schema/lib/auth.ts [app-route] (ecmascript)");
;
;
;
async function GET(req) {
    try {
        const auth = req.headers.get("authorization") ?? "";
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(auth);
        if (!payload?.userId) return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "unauthorized"
        }, {
            status: 401
        });
        // Ensure user has all default categories (idempotent, no duplicates)
        await __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute(`INSERT IGNORE INTO categories (user_id, name, color, icon)
       SELECT ?, name, color, icon FROM default_categories
       WHERE name NOT IN (SELECT name FROM categories WHERE user_id = ?)`, [
            payload.userId,
            payload.userId
        ]);
        const [rows] = await __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute("SELECT id, name, color, icon, created_at FROM categories WHERE user_id = ? ORDER BY id", [
            payload.userId
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            categories: rows
        });
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "server error"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const auth = req.headers.get("authorization") ?? "";
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(auth);
        if (!payload?.userId) return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "unauthorized"
        }, {
            status: 401
        });
        const body = await req.json();
        const { name, color = "#10B981", icon = "box" } = body;
        if (!name) return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "name required"
        }, {
            status: 400
        });
        const [res] = await __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute("INSERT INTO categories (user_id, name, color, icon) VALUES (?, ?, ?, ?)", [
            payload.userId,
            name,
            color,
            icon
        ]);
        const id = res.insertId;
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            category: {
                id,
                user_id: payload.userId,
                name,
                color,
                icon
            }
        }, {
            status: 201
        });
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$grocer$2d$ease$2d$sql$2d$schema$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91e036fc._.js.map