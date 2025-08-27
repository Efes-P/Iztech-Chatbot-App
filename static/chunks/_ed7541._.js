(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_ed7541._.js", {

"[project]/components/ui/separator.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Separator": ()=>Separator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Separator$React.forwardRef");
__turbopack_refresh__.register(_c1, "Separator");

})()),
"[project]/components/chat-list.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatList": ()=>ChatList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function ChatList({ messages }) {
    if (!messages.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto max-w-2xl px-4",
        children: messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    message.display,
                    index < messages.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "my-4"
                    }, void 0, false, {
                        fileName: "[project]/components/chat-list.tsx",
                        lineNumber: 18,
                        columnNumber: 43
                    }, this)
                ]
            }, message.id, true, {
                fileName: "[project]/components/chat-list.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/chat-list.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ChatList;
var _c;
__turbopack_refresh__.register(_c, "ChatList");

})()),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
            outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2',
            sm: 'h-8 rounded-md px-3 text-xs',
            lg: 'h-10 rounded-md px-8',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");

})()),
"[project]/components/ui/icons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "IconArrowDown": ()=>IconArrowDown,
    "IconArrowElbow": ()=>IconArrowElbow,
    "IconArrowRight": ()=>IconArrowRight,
    "IconCheck": ()=>IconCheck,
    "IconChevronUpDown": ()=>IconChevronUpDown,
    "IconClose": ()=>IconClose,
    "IconCopy": ()=>IconCopy,
    "IconDownload": ()=>IconDownload,
    "IconEdit": ()=>IconEdit,
    "IconExternalLink": ()=>IconExternalLink,
    "IconGitHub": ()=>IconGitHub,
    "IconMessage": ()=>IconMessage,
    "IconMoon": ()=>IconMoon,
    "IconNextChat": ()=>IconNextChat,
    "IconOpenAI": ()=>IconOpenAI,
    "IconPlus": ()=>IconPlus,
    "IconRefresh": ()=>IconRefresh,
    "IconSeparator": ()=>IconSeparator,
    "IconSidebar": ()=>IconSidebar,
    "IconSpinner": ()=>IconSpinner,
    "IconStop": ()=>IconStop,
    "IconSun": ()=>IconSun,
    "IconTrash": ()=>IconTrash,
    "IconUser": ()=>IconUser,
    "IconUsers": ()=>IconUsers,
    "IconVercel": ()=>IconVercel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function IconNextChat({ className, inverted, ...props }) {
    _s();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `gradient-${id}-1`,
                        x1: "10.6889",
                        y1: "10.3556",
                        x2: "13.8445",
                        y2: "14.2667",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: inverted ? 'white' : 'black'
                            }, void 0, false, {
                                fileName: "[project]/components/ui/icons.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: inverted ? 'white' : 'black',
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/components/ui/icons.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/icons.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `gradient-${id}-2`,
                        x1: "11.7555",
                        y1: "4.8",
                        x2: "11.7376",
                        y2: "9.50002",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: inverted ? 'white' : 'black'
                            }, void 0, false, {
                                fileName: "[project]/components/ui/icons.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: inverted ? 'white' : 'black',
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/components/ui/icons.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/icons.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z",
                fill: inverted ? 'black' : 'white',
                stroke: inverted ? 'black' : 'white',
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_91_2047",
                style: {
                    maskType: 'alpha'
                },
                maskUnits: "userSpaceOnUse",
                x: 1,
                y: 0,
                width: 16,
                height: 16,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: 9,
                    cy: 8,
                    r: 8,
                    fill: inverted ? 'black' : 'white'
                }, void 0, false, {
                    fileName: "[project]/components/ui/icons.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_91_2047)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 9,
                        cy: 8,
                        r: 8,
                        fill: inverted ? 'black' : 'white'
                    }, void 0, false, {
                        fileName: "[project]/components/ui/icons.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z",
                        fill: `url(#gradient-${id}-1)`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/icons.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "11.2222",
                        y: "4.8",
                        width: "1.06667",
                        height: "6.4",
                        fill: `url(#gradient-${id}-2)`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/icons.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(IconNextChat, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c = IconNextChat;
function IconOpenAI({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "OpenAI icon"
            }, void 0, false, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
            }, void 0, false, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = IconOpenAI;
function IconVercel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-label": "Vercel logomark",
        role: "img",
        viewBox: "0 0 74 64",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c2 = IconVercel;
function IconGitHub({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        role: "img",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "GitHub"
            }, void 0, false, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            }, void 0, false, {
                fileName: "[project]/components/ui/icons.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c3 = IconGitHub;
function IconSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.88 3.549L7.12 20.451"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c4 = IconSeparator;
function IconArrowDown({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c5 = IconArrowDown;
function IconArrowRight({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c6 = IconArrowRight;
function IconUser({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c7 = IconUser;
function IconPlus({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_c8 = IconPlus;
function IconArrowElbow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 224,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c9 = IconArrowElbow;
function IconSpinner({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4 animate-spin', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_c10 = IconSpinner;
function IconMessage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_c11 = IconMessage;
function IconTrash({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 266,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_c12 = IconTrash;
function IconRefresh({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_c13 = IconRefresh;
function IconStop({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 294,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_c14 = IconStop;
function IconSidebar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 308,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
_c15 = IconSidebar;
function IconMoon({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 322,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_c16 = IconMoon;
function IconSun({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 336,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, this);
}
_c17 = IconSun;
function IconCopy({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 350,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_c18 = IconCopy;
function IconCheck({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 364,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_c19 = IconCheck;
function IconDownload({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 378,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, this);
}
_c20 = IconDownload;
function IconClose({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 392,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
_c21 = IconClose;
function IconEdit({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 408,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 399,
        columnNumber: 5
    }, this);
}
_c22 = IconEdit;
function IconUsers({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        viewBox: "0 0 256 256",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_c23 = IconUsers;
function IconExternalLink({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        viewBox: "0 0 256 256",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 443,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
_c24 = IconExternalLink;
function IconChevronUpDown({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
        viewBox: "0 0 256 256",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/icons.tsx",
            lineNumber: 460,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/icons.tsx",
        lineNumber: 453,
        columnNumber: 5
    }, this);
}
_c25 = IconChevronUpDown;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
__turbopack_refresh__.register(_c, "IconNextChat");
__turbopack_refresh__.register(_c1, "IconOpenAI");
__turbopack_refresh__.register(_c2, "IconVercel");
__turbopack_refresh__.register(_c3, "IconGitHub");
__turbopack_refresh__.register(_c4, "IconSeparator");
__turbopack_refresh__.register(_c5, "IconArrowDown");
__turbopack_refresh__.register(_c6, "IconArrowRight");
__turbopack_refresh__.register(_c7, "IconUser");
__turbopack_refresh__.register(_c8, "IconPlus");
__turbopack_refresh__.register(_c9, "IconArrowElbow");
__turbopack_refresh__.register(_c10, "IconSpinner");
__turbopack_refresh__.register(_c11, "IconMessage");
__turbopack_refresh__.register(_c12, "IconTrash");
__turbopack_refresh__.register(_c13, "IconRefresh");
__turbopack_refresh__.register(_c14, "IconStop");
__turbopack_refresh__.register(_c15, "IconSidebar");
__turbopack_refresh__.register(_c16, "IconMoon");
__turbopack_refresh__.register(_c17, "IconSun");
__turbopack_refresh__.register(_c18, "IconCopy");
__turbopack_refresh__.register(_c19, "IconCheck");
__turbopack_refresh__.register(_c20, "IconDownload");
__turbopack_refresh__.register(_c21, "IconClose");
__turbopack_refresh__.register(_c22, "IconEdit");
__turbopack_refresh__.register(_c23, "IconUsers");
__turbopack_refresh__.register(_c24, "IconExternalLink");
__turbopack_refresh__.register(_c25, "IconChevronUpDown");

})()),
"[project]/components/button-scroll-to-bottom.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ButtonScrollToBottom": ()=>ButtonScrollToBottom
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icons.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function ButtonScrollToBottom({ className, isAtBottom, scrollToBottom, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "outline",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2', isAtBottom ? 'opacity-0' : 'opacity-100', className),
        onClick: ()=>scrollToBottom(),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowDown"], {}, void 0, false, {
                fileName: "[project]/components/button-scroll-to-bottom.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Scroll to bottom"
            }, void 0, false, {
                fileName: "[project]/components/button-scroll-to-bottom.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/button-scroll-to-bottom.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ButtonScrollToBottom;
var _c;
__turbopack_refresh__.register(_c, "ButtonScrollToBottom");

})()),
"[project]/lib/hooks/use-enter-submit.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEnterSubmit": ()=>useEnterSubmit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
function useEnterSubmit() {
    _s();
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleKeyDown = (event)=>{
        if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
            formRef.current?.requestSubmit();
            event.preventDefault();
        }
    };
    return {
        formRef,
        onKeyDown: handleKeyDown
    };
}
_s(useEnterSubmit, "43yiYcpPc7V7EqBzAhVF/lXnrEM=");

})()),
"[project]/lib/hooks/use-streamable-text.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useStreamableText": ()=>useStreamableText
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useStreamableText = (content)=>{
    _s();
    const [rawContent, setRawContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof content === 'string' ? content : '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            if (typeof content === 'object') {
                let value = '';
                for await (const delta of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readStreamableValue"])(content)){
                    if (typeof delta === 'string') {
                        setRawContent(value = value + delta);
                    }
                }
            }
        })();
    }, [
        content
    ]);
    return rawContent;
};
_s(useStreamableText, "AuZT3w9BIEV225zO0TMwN7Vdz1I=");

})()),
"[project]/components/markdown.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MemoizedReactMarkdown": ()=>MemoizedReactMarkdown
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$react$2d$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactMarkdown__as__default$3e$__ = __turbopack_import__("[project]/node_modules/react-markdown/lib/react-markdown.js [app-client] (ecmascript) <export ReactMarkdown as default>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const MemoizedReactMarkdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$react$2d$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactMarkdown__as__default$3e$__["default"], (prevProps, nextProps)=>prevProps.children === nextProps.children && prevProps.className === nextProps.className);
_c = MemoizedReactMarkdown;
var _c;
__turbopack_refresh__.register(_c, "MemoizedReactMarkdown");

})()),
"[project]/components/svg-icons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SvgIcons": ()=>SvgIcons
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SvgIcons = {
    izfasLogo: ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 841.89 595.28",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {}, void 0, false, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 8,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        id: "Layer_1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-4",
                                    d: "M263.61,336.6v-109.25H119.45s1.89,15.73,8.25,30.9c6.36,15.16,17.7,34.06,33.26,29.82,7.99-2.2,15.74-13.46,21.52-15.92,5.55-2.38,16.48-4.68,20.54-2.02,5.38,3.54,10.76.08,14.67-.25,3.68-.32,10.76,1.01,11.25,4.04s-3.42,5.56-6.85,6.57c-3.42,1.01-9.68,2.87-12.47,6.82-3.42,4.8-2.45,7.58-3.67,8.59-1.22,1.01-10.76,8.59-11.01,11.88,1.96.51,6.12-3.03,7.83-4.04,1.71-1.01,9.54-5.05,16.88-3.79,7.34,1.26,17.85,6.07,23.23,10.11,5.38,4.04,12.41,6.22,20.72,26.54,0,0-8.31-20.31,0,0Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M263.61,371.54H119.45v-113.8c4.16,14.66,10.15,25.91,13.63,28.81,12.47,10.36,23,7.82,27.64,6.82,8.07-1.77,14.87-8.94,16.39-11.12,4.89-7.08,13.73-7.6,16.88-7.58,5.26,0,8.94,3.54,10.39,3.16,12.96-3.41,17.24-2.65,18.22-1.89-.24,1.26-7.83,2.53-10.52,4.04-2.69,1.52-7.58,5.31-10.27,10.36-1.25,2.38-2.2,6.06-5.62,7.83-3.43,1.77-10.76,9.6-8.32,12.39,2.44,2.78,6.6,2.78,11.98-1.26,1.42-1.04,10.27-4.8,15.65-3.79,5.38,1.01,17.85,3.03,32.77,21.73,2.09,2.66,15.59,18.51,15.34,44.29,0,0,.25-25.78,0,0Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-5",
                                    d: "M189.82,278.6c-1.59.63-1.96,1.64-1.83,2.4.12.76,1.83.88,2.94.38,1.1-.5,2.2-1.39,1.71-2.27-.49-.89-1.22-1.14-2.81-.51,0,0,1.59-.63,0,0Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-5",
                                    d: "M215.74,286.69c-1.59.63-1.96,1.64-1.83,2.4.12.76,1.83.88,2.94.38,1.1-.5,2.2-1.39,1.71-2.27-.49-.89-1.22-1.14-2.81-.51,0,0,1.59-.63,0,0Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M307.01,246.11h-22.01v-20.12h22.01v20.12ZM307.95,338.84h-23.58v-85.73h23.58v85.73Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "409.81 225.99 409.81 244.53 350.71 318.88 410.12 318.88 410.12 338.84 321.94 338.84 321.94 318.88 380.26 245.95 323.51 245.95 323.51 225.99 409.81 225.99"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "506.32 225.99 506.32 245.95 449.57 245.95 449.57 271.41 499.24 271.41 499.24 291.38 449.57 291.38 449.57 338.84 425.99 338.84 425.99 225.99 506.32 225.99"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M552.21,296.09h28.76l-13.99-44.64h-.32l-14.46,44.64ZM538.07,338.84h-24.83l40.24-112.86h27.19l39.77,112.86h-25.62l-7.23-23.26h-41.65l-7.86,23.26Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M674.81,223c8.59,0,15.72,1.26,21.38,3.77,5.66,2.52,10.17,5.61,13.52,9.27,3.35,3.67,5.71,7.65,7.07,11.95,1.36,4.19,2.04,8.01,2.04,11.47h-22.63c-.1-1.26-.42-2.83-.94-4.72-.53-1.99-1.57-3.88-3.14-5.66-1.57-1.78-3.88-3.3-6.91-4.56-2.94-1.36-6.97-2.04-12.1-2.04-2.2,0-4.5.26-6.92.79-2.3.42-4.4,1.15-6.29,2.2-1.89.94-3.46,2.31-4.72,4.09-1.15,1.68-1.73,3.77-1.73,6.29,0,2.31.37,4.19,1.1,5.66.84,1.36,1.84,2.46,2.99,3.3,1.26.84,2.57,1.47,3.93,1.88,1.46.42,2.77.79,3.93,1.1l26.72,6.6c3.35.84,6.81,1.89,10.37,3.14,3.56,1.15,6.81,2.88,9.75,5.19,3.04,2.2,5.5,5.08,7.39,8.65,1.89,3.46,2.83,7.96,2.83,13.52,0,6.71-1.31,12.42-3.93,17.13-2.51,4.72-5.92,8.54-10.22,11.47-4.19,2.93-8.96,5.03-14.3,6.29-5.35,1.36-10.85,2.04-16.51,2.04-7.44,0-14.14-.84-20.12-2.52-5.87-1.67-10.85-4.08-14.93-7.23-4.09-3.25-7.23-7.23-9.43-11.94-2.2-4.71-3.3-10.06-3.3-16.03h22.64c.42,6.7,2.83,11.42,7.23,14.14,4.51,2.73,10.11,4.09,16.82,4.09,2.3,0,4.82-.16,7.54-.47,2.73-.42,5.24-1.1,7.55-2.04,2.41-1.05,4.4-2.52,5.97-4.4,1.57-1.89,2.36-4.4,2.36-7.55,0-2.2-.52-4.03-1.57-5.5-.94-1.57-2.3-2.83-4.09-3.77-1.78-1.05-3.93-1.94-6.44-2.67-2.41-.73-5.14-1.47-8.17-2.2l-12.26-2.83c-4.51-.84-8.96-1.89-13.36-3.14-4.29-1.26-8.12-3.04-11.47-5.34-3.25-2.41-5.92-5.55-8.02-9.43-1.99-3.98-2.99-9.01-2.99-15.09,0-2.09.21-4.4.63-6.91.53-2.62,1.36-5.19,2.52-7.7,1.15-2.62,2.73-5.13,4.72-7.54,2.09-2.52,4.77-4.66,8.01-6.45,3.25-1.89,7.13-3.41,11.63-4.56,4.51-1.15,9.8-1.73,15.88-1.73Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M287.36,347.44h-2.76v-3.1h2.76v3.1ZM284.48,371.7v-21.8h2.95v21.8h-2.95Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "308.01 349.9 308.01 352.44 294.59 369.09 308.01 369.09 308.01 371.7 290.86 371.7 290.86 369.24 304.22 352.51 291.86 352.51 291.86 349.9 308.01 349.9"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M315.15,349.9c1.05,3.08,2.01,5.89,2.86,8.44.36,1.09.73,2.18,1.09,3.25.36,1.07.7,2.07,1,2.98.32.91.6,1.7.82,2.37.22.67.38,1.13.46,1.4h.06l6.19-18.43h4.19v21.8h-2.86v-13.94l.06-4.34-.06-.03-6.13,18.31h-2.92l-6.13-18.28-.06-.03.06,5.35v12.97h-2.85v-21.8h4.22Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M339.66,347.44h-2.76v-3.1h2.76v3.1ZM336.77,371.7v-21.8h2.94v21.8h-2.94Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M348.07,359.82h6.83c1.58,0,2.71-.31,3.4-.94.69-.63,1.03-1.58,1.03-2.85,0-1.13-.29-2.01-.88-2.64-.59-.65-1.58-.97-2.98-.97h-7.41v7.41ZM355.17,349.9c1.05,0,2.01.11,2.88.33.89.2,1.65.54,2.28,1.03.65.47,1.14,1.07,1.49,1.82.36.73.55,1.61.55,2.64,0,.81-.09,1.51-.27,2.09-.18.57-.43,1.05-.73,1.46-.28.39-.61.72-.97,1-.36.26-.72.5-1.06.7.3.12.61.26.91.43.3.16.58.39.82.7.24.28.45.66.61,1.12.16.47.25,1.08.27,1.85l.18,3.98c.02.59.09,1.04.21,1.37.14.3.43.57.88.79v.49h-3.61c-.1-.34-.19-.78-.27-1.31-.06-.53-.11-1.06-.15-1.61-.04-.55-.07-1.05-.09-1.52v-1.03c0-.45-.04-.9-.12-1.37-.06-.47-.23-.88-.51-1.25-.26-.38-.65-.69-1.15-.91-.51-.24-1.2-.37-2.1-.37h-7.14v9.35h-2.95v-21.8h10.05Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "390.52 349.9 390.52 352.51 378.37 352.51 378.37 359.19 389.06 359.19 389.06 361.8 378.37 361.8 378.37 371.7 375.43 371.7 375.43 349.9 390.52 349.9"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M396.72,349.9v13.66c0,2.11.51,3.66,1.52,4.65,1.03.97,2.37,1.46,4.01,1.46s3.08-.48,4.13-1.43c1.07-.97,1.61-2.48,1.61-4.52v-13.82h2.94v14.12c0,1.32-.21,2.49-.64,3.52-.42,1.01-1.02,1.87-1.79,2.58-.77.71-1.69,1.25-2.76,1.61-1.07.36-2.26.55-3.55.55-1.17,0-2.28-.16-3.31-.49-1.01-.32-1.9-.81-2.67-1.46-.75-.67-1.34-1.49-1.79-2.46-.43-.99-.64-2.16-.64-3.49v-14.48h2.95Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M419.95,362.74h6.77l-3.22-9.59h-.06l-3.49,9.59ZM425.26,349.9l7.9,21.8h-3.22l-2.16-6.35h-8.75l-2.28,6.35h-3.04l8.2-21.8h3.34Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M439.17,359.82h6.83c1.58,0,2.71-.31,3.4-.94.69-.63,1.03-1.58,1.03-2.85,0-1.13-.29-2.01-.88-2.64-.59-.65-1.58-.97-2.98-.97h-7.41v7.41ZM446.28,349.9c1.05,0,2.01.11,2.89.33.89.2,1.65.54,2.28,1.03.65.47,1.14,1.07,1.49,1.82.36.73.55,1.61.55,2.64,0,.81-.09,1.51-.27,2.09-.18.57-.42,1.05-.73,1.46-.28.39-.61.72-.97,1-.37.26-.72.5-1.06.7.3.12.61.26.91.43.3.16.58.39.82.7.24.28.45.66.61,1.12.16.47.25,1.08.27,1.85l.18,3.98c.02.59.09,1.04.21,1.37.14.3.44.57.88.79v.49h-3.61c-.1-.34-.19-.78-.27-1.31-.06-.53-.11-1.06-.15-1.61-.04-.55-.07-1.05-.09-1.52v-1.03c0-.45-.04-.9-.12-1.37-.06-.47-.23-.88-.52-1.25-.26-.38-.65-.69-1.15-.91-.51-.24-1.21-.37-2.1-.37h-7.14v9.35h-2.95v-21.8h10.05Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    className: "cls-2",
                                    x: 458.24,
                                    y: 349.9,
                                    width: 2.95,
                                    height: 21.8
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M477.67,356c.69,0,1.33.13,1.91.39.59.24,1.09.59,1.52,1.03.42.45.76.96,1,1.55.24.57.36,1.17.36,1.82s-.12,1.27-.36,1.85c-.24.57-.59,1.07-1.03,1.52-.42.43-.93.77-1.52,1.03-.59.24-1.22.36-1.88.36s-1.29-.12-1.88-.36c-.59-.26-1.09-.61-1.52-1.03-.42-.45-.76-.95-1-1.52-.24-.59-.36-1.2-.36-1.85s.11-1.25.33-1.82c.24-.59.58-1.1,1-1.55.42-.45.93-.79,1.52-1.03.59-.26,1.23-.39,1.91-.39Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M503.24,344.37l-.61,3.1h-2.95l.64-3.1h2.92ZM497.32,371.7h-2.86l4.71-22.14h2.86l-4.71,22.14Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "506.37 349.56 522.25 349.56 521.71 352.14 504.88 369.18 518.12 369.18 517.58 371.7 500.72 371.7 501.24 369.27 518.09 352.08 505.82 352.08 506.37 349.56"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "527.45 353.72 523.62 371.7 520.7 371.7 525.41 349.56 529.45 349.56 531.82 368.39 542.21 349.56 546.24 349.56 541.54 371.7 538.62 371.7 542.45 353.72 532.58 371.7 529.66 371.7 527.45 353.72"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M555.54,344.37l-.61,3.1h-2.95l.64-3.1h2.92ZM549.62,371.7h-2.86l4.71-22.14h2.86l-4.71,22.14Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M562.01,352.08l-1.61,7.59h7.14c.47,0,.93-.04,1.4-.12.49-.08.94-.24,1.37-.48.43-.24.81-.59,1.15-1.03.37-.45.66-1.02.88-1.73.3-.95.39-1.7.24-2.25-.14-.57-.39-.99-.76-1.28-.37-.28-.8-.47-1.31-.55-.49-.1-.95-.15-1.4-.15h-7.11ZM559.7,349.56h9.9c.85,0,1.67.06,2.46.18.79.12,1.47.38,2.03.79.57.38.98.95,1.24,1.7.26.73.3,1.72.09,2.98-.12.73-.28,1.36-.49,1.88-.2.51-.47.96-.79,1.37-.3.41-.69.79-1.16,1.16-.47.36-1.01.75-1.64,1.15.49.36.86.69,1.12.97.28.28.47.63.55,1.03.1.38.12.86.06,1.43-.06.57-.18,1.31-.37,2.22-.14.69-.25,1.29-.33,1.79-.06.48-.09.91-.09,1.28.02.34.08.64.18.88.1.22.25.43.46.61l-.15.73h-3.43c-.1-.53-.14-1.01-.12-1.46.02-.47.05-.91.09-1.34.06-.43.15-.89.27-1.4.12-.51.23-1,.33-1.49.1-.51.15-.98.15-1.43.02-.47-.06-.87-.24-1.22-.18-.36-.49-.65-.91-.85-.42-.22-1.02-.33-1.79-.33h-7.26l-2.03,9.5h-2.86l4.71-22.14Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "589.97 349.56 604.82 349.56 604.28 352.08 592.28 352.08 590.79 359.07 601.3 359.07 600.78 361.58 590.28 361.58 588.12 371.7 585.27 371.7 589.97 349.56"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M616.55,362.71l-1.19-9.69-5.68,9.69h6.86ZM601.61,371.7l12.75-22.14h3.49l3.07,22.14h-3.19l-.85-6.62h-8.47l-3.77,6.62h-3.04Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-3",
                                    points: "631.94 349.56 627.23 371.7 624.38 371.7 629.09 349.56 631.94 349.56"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-3",
                                    d: "M639.62,352.08l-1.61,7.59h7.14c.47,0,.93-.04,1.4-.12.49-.08.94-.24,1.37-.48.43-.24.81-.59,1.15-1.03.36-.45.66-1.02.88-1.73.3-.95.38-1.7.24-2.25-.14-.57-.39-.99-.76-1.28-.36-.28-.8-.47-1.31-.55-.49-.1-.95-.15-1.4-.15h-7.11ZM637.32,349.56h9.9c.85,0,1.67.06,2.46.18.79.12,1.47.38,2.04.79.57.38.98.95,1.24,1.7.26.73.29,1.72.09,2.98-.12.73-.28,1.36-.49,1.88-.2.51-.46.96-.79,1.37-.3.41-.69.79-1.15,1.16-.47.36-1.01.75-1.64,1.15.48.36.86.69,1.12.97.28.28.47.63.55,1.03.1.38.12.86.06,1.43-.06.57-.18,1.31-.36,2.22-.14.69-.25,1.29-.33,1.79-.06.48-.09.91-.09,1.28.02.34.08.64.18.88.1.22.25.43.46.61l-.15.73h-3.43c-.1-.53-.14-1.01-.12-1.46.02-.47.05-.91.09-1.34.06-.43.15-.89.27-1.4.12-.51.23-1,.33-1.49.1-.51.15-.98.15-1.43.02-.47-.06-.87-.24-1.22-.18-.36-.48-.65-.91-.85-.43-.22-1.02-.33-1.79-.33h-7.26l-2.03,9.5h-2.86l4.71-22.14Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    className: "cls-2",
                                    x: 665.07,
                                    y: 349.1,
                                    width: 22.01,
                                    height: 20.12
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/svg-icons.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 15,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/svg-icons.tsx",
            lineNumber: 3,
            columnNumber: 5
        }, this),
    assistantLogo: ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "Layer_1",
            "data-name": "Layer 1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 841.9 595.3",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: '\n      .cls-1 {\n        fill: #212c53;\n        stroke-width: 0px;\n      }\n    '
                    }, void 0, false, {
                        fileName: "[project]/components/svg-icons.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 157,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M165.5,358c-9.4,0-18.3-2.3-26.2-6.3v-33.2h-14.8v22.5c-9.4-9.4-15.7-21.9-17.2-35.9h53.5l6.1-12.8h-27.3c2.8-12,13.4-20.9,26-20.9s6.9.7,10,2l5.8-13.2c-4.9-2-10.2-3.2-15.8-3.2-20.5,0-37.6,15.3-40.7,35.2h-17.7c3.2-29.8,28-53,58.1-53s15.9,1.7,22.9,4.8l5.8-13.2c-8.8-3.8-18.5-6-28.7-6-40.2,0-72.9,33.1-72.9,73.8s32.7,73.8,72.9,73.8,19.5-2,28.2-5.8c-1.8-4.2-3.8-8.7-5.7-13.2-6.9,2.9-14.5,4.6-22.5,4.6"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 166,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M176.8,206.5c9.2,1,18,3.4,26.2,7l5.8-13.1c-8.1-3.6-16.7-6.1-25.5-7.5l-6.5,13.5Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 170,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M202.5,383.8c-11,4.8-23.1,7.4-35.7,7.4-50.3,0-91.2-41.6-91.2-92.6s37.4-88.9,84.6-92.4l7-14.6c-.1,0-.3,0-.4,0-28.2,0-54.8,11.1-74.7,31.4-19.9,20.2-30.9,47.1-30.9,75.6s11,55.4,30.9,75.6c20,20.2,46.5,31.4,74.7,31.4s28.8-3,41.8-8.7c-1.3-2.5-3.4-7.1-6.1-13.1"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 174,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "266.3 280.1 240.6 280.2 240.6 296.7 260.6 296.7 260.6 300.1 240.6 300.1 240.6 320.5 267.2 320.4 267.2 323.8 236.9 323.8 236.9 276.8 266.3 276.8 266.3 280.1"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 178,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "312 276.7 312.1 324.4 310.6 324.4 279.4 284.6 279.5 323.8 275.7 323.8 275.7 276.1 277.1 276.1 308.3 316 308.3 276.7 312 276.7"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 182,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "357.5 280 340.3 280 340.3 323.7 336.6 323.7 336.6 280 319.4 280.1 319.4 276.7 357.5 276.7 357.5 280"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 186,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "393.5 280 367.8 280 367.8 296.6 387.8 296.6 387.8 299.9 367.8 299.9 367.8 320.3 394.4 320.3 394.4 323.6 364.1 323.7 364.1 276.7 393.5 276.6 393.5 280"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 190,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M432.8,323.6l-15.8-21.1h-11.5s0,21.1,0,21.1h-3.7s0-47,0-47h15.9c4.4,0,7.8,1.2,10.4,3.6,2.6,2.4,3.9,5.5,3.9,9.3,0,3.3-.9,6.1-2.8,8.4-1.9,2.3-4.5,3.8-7.9,4.4l15.9,21.3h-4.3ZM405.5,299.2h12.1c3.4,0,6-.9,7.8-2.7,1.8-1.8,2.7-4.1,2.7-6.9,0-2.8-.9-5.2-2.8-6.9-1.8-1.8-4.4-2.7-7.8-2.7h-12.1s0,19.2,0,19.2Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 194,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "480 276.5 480 324.2 478.5 324.2 447.4 284.4 447.4 323.6 443.7 323.6 443.6 275.9 445.1 275.9 476.3 315.8 476.3 276.5 480 276.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 198,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M519.7,312.3h-24.6s-4.7,11.2-4.7,11.2h-3.8s20.1-47.7,20.1-47.7h1.5s20.1,47.7,20.1,47.7h-3.9s-4.6-11.2-4.6-11.2ZM496.4,309h21.9s-10.9-26.6-10.9-26.6l-10.9,26.6Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 202,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M555.8,277.8c2.4,1.3,4.4,3.2,5.9,5.4l-2.7,2.1c-2.9-4.1-6.7-6.1-11.4-6.1-2.7,0-5,.7-6.9,2-1.9,1.3-2.9,3.3-2.9,6s.2,2.2.6,3.2c.4.9,1,1.7,1.9,2.5.9.7,1.7,1.3,2.5,1.7.8.4,1.9,1,3.4,1.7l5.3,2.6c3.8,1.8,6.5,3.6,8.2,5.5,1.7,1.9,2.6,4.3,2.6,7.4,0,3.7-1.4,6.7-4.2,9-2.8,2.3-6.3,3.5-10.4,3.5-3.6,0-6.8-.9-9.7-2.7-2.9-1.8-5.3-4.2-7.2-7.3l2.8-2.1c3.6,5.7,8.3,8.5,14.2,8.5,3.1,0,5.7-.8,7.7-2.4,2-1.6,3-3.8,3-6.5,0-2.3-.7-4.1-2-5.4-1.3-1.3-3.6-2.7-6.7-4.2l-5.3-2.6c-3.3-1.6-5.9-3.2-7.7-5-1.8-1.8-2.7-4.1-2.7-7.2,0-3.6,1.3-6.4,3.9-8.5,2.6-2.1,5.9-3.1,9.7-3.1,3,0,5.7.7,8.2,2"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 206,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "588.7 303.5 588.8 323.4 585.1 323.4 585 303.5 568.7 276.4 572.8 276.4 586.9 300 601 276.4 605.1 276.4 588.7 303.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 210,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M644.9,282.6c4.7,4.6,7.1,10.4,7.1,17.2,0,6.8-2.3,12.5-7,17.2-4.7,4.7-10.4,7-17.1,7-6.7,0-12.4-2.3-17.1-7-4.7-4.7-7-10.4-7-17.2,0-6.8,2.3-12.6,7-17.2,4.6-4.7,10.3-7,17.1-7,6.7,0,12.4,2.3,17.1,7M613.4,285c-3.8,4-5.8,8.9-5.8,14.8,0,5.9,1.9,10.8,5.8,14.8,3.9,4,8.7,6,14.5,6,5.7,0,10.5-2,14.4-6,3.8-4,5.8-8.9,5.8-14.8,0-5.8-1.9-10.7-5.8-14.7-3.9-4-8.7-6-14.3-6-5.8,0-10.6,2-14.4,6"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 214,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "696.7 276.3 696.7 324 695.3 324 664.1 284.1 664.1 323.3 660.4 323.3 660.4 275.6 661.8 275.6 693 315.6 693 276.3 696.7 276.3"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 218,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M737.4,312h-24.6s-4.7,11.2-4.7,11.2h-3.8s20.1-47.7,20.1-47.7h1.5s20.1,47.7,20.1,47.7h-3.9s-4.6-11.2-4.6-11.2ZM714.1,308.7h21.8s-10.9-26.6-10.9-26.6l-10.9,26.6Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 222,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "753.9 276.2 753.9 323.2 780.7 323.2 780.7 319.8 757.6 319.8 757.6 276.2 753.9 276.2"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 226,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "385.1 243.3 385.1 251.7 347.6 251.7 347.6 249.2 370.5 214.4 350.6 214.5 350.6 206 385 206 385 208.5 362 243.3 385.1 243.3"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 230,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "436.4 205.1 436.5 251.6 427.1 251.7 427.1 227.2 415.6 241.7 412.5 241.7 401 227.2 401.1 251.7 391.7 251.7 391.6 205.1 394.7 205.1 414.1 229.9 433.4 205.1 436.4 205.1"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 234,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M489.6,251.6l-11.9-16.1h-6.9s0,16.2,0,16.2h-9.4s0-45.7,0-45.7h17.2c4.9,0,8.8,1.3,11.9,4,3.1,2.7,4.6,6.3,4.6,10.7,0,2.9-.7,5.5-2.1,7.7-1.4,2.2-3.4,4-5.9,5.2l13,18h-10.5ZM470.9,227.2h7.8c2.2,0,3.9-.6,5.1-1.8,1.2-1.2,1.8-2.8,1.8-4.8,0-1.9-.6-3.5-1.9-4.7-1.2-1.2-2.9-1.8-5.1-1.8h-7.8s0,13.1,0,13.1Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 238,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "342.9 251.8 333.5 251.8 333.5 206 342.8 206 342.9 251.8"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 242,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    className: "cls-1",
                                    x: 333.5,
                                    y: 189.6,
                                    width: 9.3,
                                    height: 9.3
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 246,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    className: "cls-1",
                                    x: 443.6,
                                    y: 206,
                                    width: 9.4,
                                    height: 45.7,
                                    transform: "translate(-.3 .5) rotate(0)"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 253,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    className: "cls-1",
                                    x: 443.6,
                                    y: 189.6,
                                    width: 9.3,
                                    height: 9.3
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 261,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M243.6,226.1c1.5,1.5,3.4,2.3,5.5,2.3s4.1-.8,5.6-2.3c1.5-1.5,2.3-3.4,2.3-5.6s-.7-4.3-2.2-5.8c-1.5-1.5-3.4-2.3-5.6-2.3s-4.1.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.8s.8,4.1,2.3,5.6M249.4,203.1c4.8,0,8.8,1.8,12.2,5.1,3.5,3.3,5.2,7.4,5.2,12.2s-.5,4.9-1.5,6.9c-.5,1-1.2,2.2-2,3.5-.8,1.3-1.8,2.8-3,4.4l-11.8,16.3h-11.5l10.9-15.2h-.4c-4.1,0-7.8-1.6-11-4.7-3.2-3.1-4.8-7-4.8-11.6s1.7-8.9,5.2-12.2c3.4-3.2,7.6-4.8,12.4-4.8"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 268,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M291.9,221.6c3.2.9,5.9,2.6,8.1,5.2,2.2,2.6,3.3,5.8,3.3,9.6s-1.7,8.7-5.2,11.8c-3.5,3.1-7.8,4.6-12.8,4.6s-7.4-1-10.5-3c-3-2-5.3-4.6-6.9-7.8l6.7-4.8c2.9,4.4,6.4,6.7,10.3,6.7s4.5-.7,6-2c1.6-1.3,2.4-3.1,2.4-5.4s-.8-4-2.5-5.2c-1.7-1.2-4.1-1.8-7.3-1.8h-5.9v-2.5l9.8-13.8h-15.9v-8.8h30.8v2.6l-10.5,14.7Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 272,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    className: "cls-1",
                                    points: "268.7 355 247.4 355 247.4 366.7 264.9 366.7 264.9 375.4 247.4 375.4 247.4 393.3 237.8 393.3 237.8 346.3 268.7 346.3 268.7 355"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 276,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M314.4,373.8c0,6.2-1.9,11.1-5.6,14.8-3.7,3.7-8.5,5.5-14.3,5.5-5.8,0-10.6-1.8-14.4-5.5-3.7-3.7-5.6-8.6-5.6-14.8v-27.6s9.6,0,9.6,0v28.3c0,3.4,1,6.1,2.9,7.9,1.9,1.9,4.4,2.8,7.4,2.8,3.1,0,5.6-.9,7.5-2.8,1.9-1.8,2.8-4.5,2.8-7.9v-28.3s9.6,0,9.6,0v27.5Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 280,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M346.8,387.1h-19.2s-2.6,6.1-2.6,6.1h-10.3s20.9-47.9,20.9-47.9h3.2s21,47.8,21,47.8h-10.3s-2.6-6.1-2.6-6.1ZM337.1,363.4l-6.2,15.8h12.4s-6.2-15.8-6.2-15.8Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 284,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "cls-1",
                                    d: "M394.7,393.1l-12.2-16.6h-7s0,16.6,0,16.6h-9.6s0-47,0-47h17.7c5,0,9.1,1.4,12.2,4.1,3.2,2.8,4.7,6.4,4.7,11,0,3-.7,5.6-2.2,7.9-1.5,2.3-3.5,4.1-6,5.4l13.3,18.5h-10.8ZM375.4,368.1h8c2.2,0,4-.6,5.2-1.9,1.3-1.2,1.9-2.9,1.9-4.9s-.6-3.6-1.9-4.8c-1.3-1.2-3-1.8-5.2-1.8h-8s0,13.5,0,13.5Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 288,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    className: "cls-1",
                                    x: 410.4,
                                    y: 346.1,
                                    width: 9.6,
                                    height: 47
                                }, void 0, false, {
                                    fileName: "[project]/components/svg-icons.tsx",
                                    lineNumber: 292,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 165,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "cls-1",
                            cx: 310.8,
                            cy: 246.8,
                            r: 4.8
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 294,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 164,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M445.1,394.1l20-47.5h4.3l20,47.5h-4.6l-4.8-11.4h-25.7l-4.8,11.4h-4.6ZM467.2,351.6l-11.3,27.3h22.6l-11.3-27.3Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 297,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M497.9,380.9c.4,6.7,6.2,10.3,13.2,10.3s12-4.5,12.1-9.7c.2-15.3-27.9-5.9-27.6-23.4.1-8.2,7.2-12.4,15.5-12.4s14.8,5.4,14.9,13h-4.1c-.3-6-5.2-9.2-10.9-9.2s-11.1,3.1-11.2,8.6c-.2,13.4,27.8,4.5,27.6,23.4,0,7-6.6,13.4-16.3,13.5-9.4,0-17.5-5.2-17.5-14.1h4.1Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 301,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M539,336.3c1.6,0,2.8,1.2,2.8,2.8s-1.2,2.7-2.8,2.7-2.7-1.2-2.7-2.7,1.2-2.8,2.7-2.8ZM541.1,346.6v47.5h-4.2v-47.5h4.2Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 305,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M554.6,380.9c.4,6.7,6.2,10.3,13.2,10.3s12-4.5,12.1-9.7c.2-15.3-27.9-5.9-27.6-23.4.1-8.2,7.2-12.4,15.5-12.4s14.8,5.4,14.9,13h-4.1c-.3-6-5.2-9.2-10.9-9.2s-11.1,3.1-11.2,8.6c-.2,13.4,27.8,4.5,27.6,23.4,0,7-6.6,13.4-16.3,13.5-9.4,0-17.5-5.2-17.5-14.1h4.1Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 309,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M609.6,350.5v43.6h-4.2v-43.6h-15.3v-3.9h34.8v3.9h-15.3Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 313,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M622.6,394.1l20-47.5h4.3l20,47.5h-4.6l-4.8-11.4h-25.7l-4.8,11.4h-4.6ZM644.7,351.6l-11.3,27.3h22.6l-11.3-27.3Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 317,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M710.5,394.1h-4.2l-27.8-40.7v40.7h-4.2v-47.5h4.2l27.8,40.5v-40.5h4.2v47.5Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 321,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-1",
                            d: "M726.5,346.6v47.5h-4.2v-47.5h4.2Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 325,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 296,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/svg-icons.tsx",
            lineNumber: 150,
            columnNumber: 5
        }, this),
    iztekLogo: ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 612,
            height: 420,
            viewBox: "0 0 612 420",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_119_137)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M287.034 133.461L245.44 175.239L260.554 190.419L302.147 148.642L287.034 133.461Z",
                            fill: "#0069DF"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 339,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M336.067 144.82L317.195 163.776L305.714 152.301L290.612 167.482L302.036 179.014L275.612 205.566L290.726 220.747L317.184 194.091L332.332 209.295L339.563 202.02C340.598 200.981 341.418 199.748 341.978 198.39C342.538 197.033 342.826 195.578 342.826 194.109C342.826 192.639 342.538 191.184 341.978 189.827C341.418 188.469 340.598 187.236 339.563 186.197L332.298 178.911L343.299 167.861C344.333 166.822 345.154 165.588 345.714 164.231C346.274 162.873 346.562 161.418 346.562 159.949C346.562 158.48 346.274 157.025 345.714 155.667C345.154 154.31 344.333 153.076 343.299 152.037L336.067 144.82Z",
                            fill: "#0069DF"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 343,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M313.128 137.602C314.163 136.563 314.983 135.33 315.543 133.973C316.103 132.615 316.391 131.16 316.391 129.691C316.391 128.221 316.103 126.766 315.543 125.409C314.983 124.051 314.163 122.818 313.128 121.779L305.897 114.516L290.783 129.685L305.897 144.866L313.128 137.602Z",
                            fill: "#0069DF"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 347,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M344.059 113.894L328.945 129.074L370.538 170.852L385.652 155.671L344.059 113.894Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 351,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M389.36 98.7725L404.508 83.5573L397.265 76.2939C396.231 75.2548 395.003 74.4305 393.651 73.8682C392.3 73.3058 390.851 73.0163 389.389 73.0163C387.926 73.0163 386.477 73.3058 385.126 73.8682C383.774 74.4305 382.546 75.2548 381.512 76.2939L374.246 83.5917L363.256 72.5532C362.222 71.5141 360.994 70.6898 359.643 70.1275C358.291 69.5651 356.843 69.2756 355.38 69.2756C353.917 69.2756 352.468 69.5651 351.117 70.1275C349.765 70.6898 348.537 71.5141 347.503 72.5532L340.237 79.8166L359.098 98.761L347.674 110.236L362.788 125.416L374.212 113.942L400.681 140.528L415.795 125.347L389.36 98.7725Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 355,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M340.317 110.109L333.074 102.846C332.04 101.807 330.812 100.983 329.461 100.42C328.109 99.8578 326.661 99.5684 325.198 99.5684C323.735 99.5684 322.286 99.8578 320.935 100.42C319.583 100.983 318.355 101.807 317.321 102.846L310.078 110.109L325.203 125.244L340.317 110.109Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 359,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M351.34 30.3227L309.747 72.1001L324.861 87.2808L366.454 45.5034L351.34 30.3227Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 363,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M275.841 75.9039L294.702 56.9595L306.126 68.434L321.24 53.2532L309.816 41.7787L336.285 15.1922L321.171 0.0114746L294.702 26.5635L279.565 11.3483L272.334 18.6231C271.299 19.662 270.479 20.8954 269.919 22.2529C269.359 23.6104 269.071 25.0654 269.071 26.5348C269.071 28.0042 269.359 29.4591 269.919 30.8166C270.479 32.1741 271.299 33.4076 272.334 34.4465L279.588 41.7443L268.61 52.7827C267.575 53.8216 266.755 55.055 266.195 56.4125C265.635 57.77 265.347 59.225 265.347 60.6944C265.347 62.1638 265.635 63.6188 266.195 64.9763C266.755 66.3338 267.575 67.5672 268.61 68.6061L275.841 75.9039Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 367,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M321.125 91.0272L305.965 75.9038L298.734 83.1672C296.65 85.2703 295.479 88.117 295.479 91.0846C295.479 94.0521 296.65 96.8989 298.734 99.002L305.977 106.265L321.125 91.0272Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 371,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M241.456 49.7929L226.342 64.9736L267.935 106.751L283.049 91.5704L241.456 49.7929Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 375,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M248.743 148.067C249.778 149.106 251.006 149.93 252.357 150.493C253.709 151.055 255.157 151.345 256.62 151.345C258.083 151.345 259.532 151.055 260.883 150.493C262.235 149.93 263.463 149.106 264.497 148.067L271.728 140.804L252.867 121.802L264.291 110.327L249.189 95.1466L237.708 106.621L211.239 80.0232L196.125 95.204L222.64 121.802L207.503 137.006L214.735 144.269C216.825 146.368 219.661 147.548 222.617 147.548C225.573 147.548 228.409 146.368 230.499 144.269L237.754 136.983L248.743 148.067Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 379,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M271.694 110.5L278.937 117.763C279.971 118.802 281.199 119.626 282.551 120.189C283.902 120.751 285.351 121.041 286.814 121.041C288.277 121.041 289.725 120.751 291.077 120.189C292.428 119.626 293.656 118.802 294.691 117.763L301.922 110.5L286.808 95.3188L271.694 110.5Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 383,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12.5892 309.869H0.0229492V265.233H12.5892V309.869Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 387,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12.5892 259.496H0.0229492V247.104H5.41499C7.32376 247.104 9.15436 247.865 10.5041 249.221C11.8538 250.576 12.6121 252.415 12.6121 254.332L12.5892 259.496Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 391,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M151.937 259.496H139.371V247.104H144.763C146.67 247.107 148.498 247.87 149.845 249.225C151.192 250.58 151.949 252.417 151.949 254.332L151.937 259.496Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 395,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M232.145 259.496H219.579V247.104H224.982C226.889 247.107 228.717 247.87 230.064 249.225C231.411 250.58 232.168 252.417 232.168 254.332L232.145 259.496Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 399,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M57.7706 273.724C56.7653 274.864 55.3983 276.394 53.6695 278.314C51.9445 280.242 50.1052 282.365 48.1289 284.682C46.1525 287 44.1648 289.433 42.1542 291.98C40.1436 294.528 38.3386 296.983 36.6935 299.358H58.1933V309.88H21.5112V302.411C22.6536 300.38 24.1159 298.188 25.7723 295.836C27.4288 293.483 29.1995 291.131 31.0159 288.756C32.8323 286.381 34.6601 284.074 36.4651 281.871C38.2701 279.668 39.8923 277.614 41.4459 275.801H22.4709V265.233H57.7706V273.724Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 403,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M91.0599 286.197C91.0599 282.128 90.5382 279.244 89.4948 277.545C88.4552 275.847 86.6617 274.998 84.137 274.998C83.3373 274.998 82.5262 274.998 81.6808 275.124C80.8355 275.251 80.0244 275.308 79.2362 275.423V309.846H66.6699V266.771C67.7438 266.484 68.9547 266.186 70.4284 265.876C71.902 265.566 73.3871 265.279 74.9979 265.027C76.6087 264.774 78.2537 264.579 79.9445 264.43C81.6352 264.281 83.2916 264.224 84.9253 264.224C87.5837 264.134 90.235 264.55 92.7392 265.451C94.5327 266.156 96.2026 267.143 97.6857 268.377C101.421 265.794 105.821 264.351 110.355 264.224C113.337 264.124 116.309 264.627 119.094 265.704C121.248 266.595 123.129 268.044 124.543 269.903C125.94 271.817 126.892 274.02 127.331 276.352C127.861 279.093 128.117 281.879 128.096 284.671V309.915H115.53V286.197C115.53 282.128 115.008 279.244 113.965 277.545C112.925 275.847 111.132 274.998 108.607 274.998C107.645 275.047 106.694 275.217 105.774 275.503C104.717 275.781 103.705 276.21 102.769 276.777C103.174 278.117 103.431 279.499 103.535 280.896C103.649 282.33 103.706 283.879 103.706 285.486V309.869H91.1399L91.0599 286.197Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 407,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M152.052 309.869H139.485V265.233H152.052V309.869Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 411,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M190.653 276.444C189.526 276.161 188.201 275.862 186.678 275.549C185.064 275.228 183.422 275.07 181.777 275.078C180.833 275.094 179.89 275.167 178.955 275.296C178.115 275.389 177.283 275.542 176.465 275.755V309.869H163.898V267.62C166.519 266.704 169.189 265.938 171.895 265.325C175.271 264.58 178.72 264.222 182.177 264.258C182.851 264.258 183.662 264.258 184.621 264.384C185.581 264.51 186.541 264.591 187.5 264.728C188.46 264.866 189.408 265.038 190.368 265.233C191.207 265.398 192.029 265.64 192.824 265.956L190.653 276.444Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 415,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M232.385 309.869H219.818V265.233H232.385V309.869Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 419,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M244.208 266.771C246.927 266.02 249.689 265.437 252.479 265.027C256.002 264.479 259.562 264.21 263.126 264.224C266.328 264.13 269.52 264.631 272.54 265.704C274.856 266.561 276.911 268.008 278.503 269.903C280.004 271.795 281.07 273.997 281.622 276.352C282.275 279.076 282.59 281.87 282.558 284.671V309.915H269.992V286.197C269.992 282.128 269.455 279.244 268.381 277.545C267.308 275.847 265.308 274.998 262.384 274.998C261.493 274.998 260.533 274.998 259.517 275.124C258.5 275.251 257.597 275.308 256.809 275.423V309.846H244.243L244.208 266.771Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 423,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M335.519 287.471C335.559 290.743 335.045 293.998 334 297.098C333.07 299.869 331.572 302.414 329.602 304.568C327.684 306.639 325.347 308.274 322.747 309.364C319.889 310.524 316.828 311.097 313.745 311.051C310.693 311.092 307.663 310.519 304.835 309.364C302.238 308.27 299.902 306.636 297.98 304.568C296.009 302.403 294.49 299.863 293.514 297.098C292.41 294.011 291.865 290.751 291.903 287.471C291.862 284.199 292.42 280.948 293.548 277.878C294.557 275.133 296.111 272.622 298.118 270.5C300.074 268.453 302.431 266.836 305.04 265.75C307.809 264.597 310.782 264.019 313.78 264.051C316.807 264.013 319.811 264.591 322.61 265.75C325.2 266.835 327.535 268.453 329.465 270.5C331.435 272.633 332.957 275.142 333.943 277.878C335.031 280.956 335.564 284.205 335.519 287.471ZM322.679 287.471C322.679 283.569 321.902 280.494 320.394 278.291C319.666 277.207 318.674 276.329 317.512 275.741C316.35 275.152 315.057 274.873 313.757 274.929C312.452 274.876 311.156 275.157 309.989 275.745C308.822 276.333 307.823 277.209 307.085 278.291C305.509 280.517 304.721 283.592 304.721 287.471C304.548 290.739 305.373 293.981 307.085 296.765C307.81 297.866 308.804 298.76 309.972 299.363C311.141 299.966 312.444 300.257 313.757 300.207C315.065 300.26 316.365 299.97 317.528 299.367C318.692 298.763 319.679 297.867 320.394 296.765C322.06 293.965 322.855 290.728 322.679 287.471Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 427,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M356.231 309.869C353.345 304.216 350.42 297.599 347.457 290.018C344.495 282.437 341.669 274.176 338.981 265.233H352.324C352.895 267.444 353.562 269.834 354.323 272.405C355.089 274.986 355.877 277.58 356.699 280.219C357.522 282.858 358.344 285.405 359.155 287.895C359.967 290.385 360.789 292.646 361.577 294.677C362.308 292.646 363.108 290.385 363.954 287.895C364.799 285.405 365.633 282.847 366.455 280.219C367.278 277.591 368.066 274.986 368.832 272.405C369.597 269.823 370.26 267.448 370.819 265.233H383.843C381.177 274.176 378.367 282.437 375.412 290.018C372.457 297.599 369.532 304.216 366.638 309.869H356.231Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 431,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M405.627 264.086C408.775 264.003 411.916 264.433 414.927 265.359C417.177 266.069 419.221 267.322 420.878 269.008C422.391 270.627 423.479 272.599 424.043 274.746C424.69 277.209 425.005 279.748 424.98 282.296V308.595C423.175 308.997 420.673 309.456 417.451 309.995C413.595 310.58 409.698 310.848 405.799 310.798C403.175 310.823 400.556 310.569 397.985 310.041C395.829 309.604 393.778 308.755 391.942 307.54C390.263 306.384 388.922 304.8 388.058 302.95C387.095 300.787 386.634 298.433 386.71 296.065C386.634 293.758 387.174 291.472 388.275 289.444C389.284 287.672 390.722 286.184 392.456 285.118C394.312 284.02 396.34 283.244 398.453 282.824C400.76 282.336 403.111 282.094 405.468 282.101C406.917 282.092 408.366 282.161 409.809 282.307C410.85 282.412 411.881 282.6 412.893 282.869V281.722C412.936 280.772 412.785 279.824 412.452 278.934C412.118 278.044 411.607 277.232 410.951 276.547C409.656 275.254 407.406 274.604 404.199 274.596C402.077 274.596 399.958 274.754 397.859 275.067C396.019 275.318 394.208 275.756 392.456 276.375L390.845 266.197C391.576 265.968 392.49 265.727 393.598 265.474C394.706 265.222 395.883 264.992 397.185 264.797C398.488 264.602 399.847 264.43 401.275 264.281C402.703 264.132 404.211 264.086 405.627 264.086ZM406.644 301.08C407.878 301.08 409.066 301.08 410.197 300.999C411.1 300.962 412 300.874 412.893 300.735V291.154C412.138 291.001 411.375 290.886 410.608 290.81C408.575 290.55 406.518 290.55 404.485 290.81C403.53 290.924 402.599 291.195 401.732 291.613C400.983 291.982 400.341 292.54 399.87 293.231C399.4 293.99 399.165 294.873 399.196 295.767C399.11 296.571 399.251 297.384 399.603 298.112C399.954 298.84 400.502 299.455 401.184 299.886C402.873 300.741 404.755 301.14 406.644 301.045V301.08Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 435,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M449.13 300.804C450.792 300.905 452.457 300.675 454.03 300.127C454.509 299.887 454.904 299.505 455.161 299.034C455.419 298.562 455.526 298.023 455.47 297.488C455.423 296.917 455.226 296.368 454.899 295.898C454.572 295.428 454.126 295.054 453.608 294.814C451.783 293.788 449.871 292.924 447.896 292.233C446.069 291.559 444.277 290.793 442.527 289.938C441.022 289.217 439.642 288.26 438.437 287.104C437.301 285.982 436.407 284.639 435.809 283.156C435.152 281.393 434.838 279.519 434.884 277.637C434.811 275.73 435.196 273.833 436.005 272.105C436.814 270.378 438.024 268.871 439.534 267.712C442.641 265.294 446.91 264.086 452.34 264.086C454.95 264.077 457.555 264.319 460.119 264.809C462.129 265.161 464.105 265.687 466.025 266.381L463.832 276.214C462.265 275.681 460.671 275.229 459.057 274.86C457.158 274.447 455.219 274.247 453.276 274.264C449.339 274.264 447.367 275.369 447.359 277.58C447.348 278.044 447.434 278.505 447.61 278.934C447.841 279.4 448.192 279.796 448.627 280.081C449.283 280.521 449.975 280.905 450.695 281.229C451.574 281.653 452.682 282.124 454.03 282.64C456.385 283.483 458.675 284.496 460.885 285.669C462.475 286.506 463.919 287.599 465.157 288.905C466.166 290.009 466.916 291.327 467.351 292.76C467.797 294.358 468.008 296.013 467.979 297.672C468.085 299.622 467.687 301.567 466.822 303.317C465.957 305.066 464.655 306.561 463.044 307.654C459.739 309.949 455.078 311.078 449.061 311.039C445.754 311.11 442.45 310.771 439.225 310.03C437.37 309.596 435.549 309.029 433.776 308.331L435.878 298.062C438.016 298.909 440.221 299.576 442.469 300.058C444.657 300.54 446.89 300.79 449.13 300.804Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 439,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M516.885 265.233C514.334 273.839 511.668 281.902 508.888 289.421C506.108 296.941 503.089 304.239 499.829 311.315C498.803 313.562 497.612 315.729 496.265 317.798C495.198 319.458 493.889 320.947 492.381 322.216C490.969 323.374 489.342 324.24 487.594 324.763C485.572 325.328 483.479 325.598 481.38 325.566C479.545 325.58 477.714 325.396 475.919 325.015C474.519 324.725 473.147 324.314 471.818 323.788L474.023 313.69C475.138 314.092 476.284 314.403 477.45 314.619C478.511 314.793 479.585 314.878 480.66 314.872C481.604 314.934 482.551 314.805 483.444 314.491C484.337 314.178 485.158 313.687 485.858 313.047C487.219 311.594 488.268 309.876 488.942 307.999C486.063 302.346 483.188 295.996 480.317 288.951C477.2 281.194 474.492 273.277 472.206 265.233H485.561C486.124 267.444 486.787 269.834 487.548 272.405C488.314 274.986 489.125 277.58 489.97 280.219C490.816 282.858 491.684 285.405 492.552 287.895C493.42 290.385 494.266 292.646 495.054 294.677C495.816 292.642 496.577 290.381 497.339 287.895C498.1 285.409 498.862 282.85 499.624 280.219C500.389 277.58 501.12 274.986 501.828 272.405C502.537 269.823 503.176 267.448 503.736 265.233H516.885Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 443,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M563.929 287.471C563.968 290.743 563.454 293.998 562.409 297.098C561.478 299.867 559.985 302.41 558.022 304.568C556.101 306.636 553.765 308.271 551.168 309.364C545.407 311.613 539.016 311.613 533.255 309.364C530.656 308.275 528.319 306.639 526.401 304.568C524.423 302.406 522.9 299.865 521.923 297.098C520.82 294.011 520.274 290.751 520.312 287.471C520.237 284.196 520.768 280.936 521.877 277.855C522.89 275.112 524.444 272.602 526.447 270.477C528.403 268.431 530.76 266.813 533.37 265.727C539.009 263.463 545.3 263.463 550.94 265.727C553.529 266.812 555.864 268.43 557.794 270.477C559.764 272.61 561.287 275.119 562.272 277.855C563.39 280.936 563.951 284.192 563.929 287.471ZM551.088 287.471C551.088 283.57 550.323 280.494 548.803 278.291C548.077 277.208 547.087 276.331 545.927 275.742C544.767 275.153 543.476 274.874 542.177 274.929C540.871 274.875 539.572 275.154 538.403 275.743C537.234 276.331 536.233 277.208 535.495 278.291C533.918 280.517 533.13 283.592 533.13 287.471C532.957 290.739 533.782 293.981 535.495 296.765C536.221 297.867 537.217 298.762 538.387 299.365C539.558 299.968 540.863 300.258 542.177 300.208C543.484 300.259 544.782 299.969 545.943 299.366C547.105 298.762 548.09 297.866 548.803 296.765C550.474 293.967 551.27 290.729 551.088 287.471Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 447,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M573.65 266.771C576.369 266.02 579.131 265.437 581.921 265.027C585.443 264.479 589.003 264.21 592.568 264.224C595.77 264.13 598.961 264.631 601.981 265.704C604.298 266.561 606.353 268.008 607.944 269.903C609.446 271.795 610.511 273.997 611.063 276.352C611.716 279.076 612.031 281.87 612 284.671V309.915H599.434V286.197C599.434 282.128 598.897 279.244 597.823 277.545C596.749 275.847 594.75 274.998 591.825 274.998C590.934 274.998 589.975 274.998 588.958 275.124C587.941 275.251 587.039 275.308 586.25 275.423V309.846H573.684L573.65 266.771Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 451,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M516.713 353.587H504.147V341.194H509.55C511.457 341.197 513.285 341.96 514.632 343.316C515.979 344.671 516.736 346.508 516.736 348.423L516.713 353.587Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 455,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M540.772 353.587H528.206V341.194H533.598C534.543 341.194 535.478 341.381 536.351 341.745C537.223 342.108 538.016 342.641 538.683 343.312C539.35 343.984 539.88 344.781 540.24 345.658C540.6 346.535 540.785 347.474 540.784 348.423L540.772 353.587Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 459,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M88.2039 403.96C85.3251 398.307 82.4005 391.69 79.4303 384.109C76.4601 376.528 73.6499 368.267 70.9995 359.324H84.3426C84.9138 361.535 85.5802 363.925 86.3418 366.496C87.0957 369.078 87.8954 371.671 88.718 374.31C89.5405 376.949 90.3515 379.496 91.1741 381.986C91.9966 384.476 92.7962 386.737 93.5959 388.768C94.3575 386.733 95.1458 384.473 95.9607 381.986C96.7756 379.5 97.6095 376.941 98.4625 374.31C99.285 371.671 100.085 369.078 100.839 366.496C101.593 363.914 102.267 361.539 102.838 359.324H115.85C113.199 368.267 110.389 376.528 107.419 384.109C104.449 391.69 101.528 398.307 98.6567 403.96H88.2039Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 463,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M119.231 381.986C119.158 378.435 119.775 374.904 121.047 371.59C122.129 368.82 123.752 366.295 125.823 364.166C127.773 362.207 130.107 360.676 132.677 359.668C135.187 358.659 137.867 358.141 140.571 358.142C146.877 358.142 151.861 360.082 155.525 363.96C159.188 367.838 161.02 373.533 161.02 381.045C161.02 381.791 161.019 382.595 160.928 383.467C160.837 384.339 160.814 385.119 160.768 385.761H132.209C132.323 386.998 132.708 388.193 133.336 389.262C133.964 390.331 134.819 391.248 135.841 391.946C138.405 393.593 141.416 394.395 144.455 394.241C146.754 394.249 149.049 394.037 151.309 393.61C153.177 393.286 155.004 392.759 156.758 392.038L158.449 402.296C157.577 402.714 156.672 403.055 155.742 403.317C154.507 403.687 153.252 403.986 151.983 404.212C150.601 404.465 149.127 404.683 147.551 404.844C145.98 405.013 144.401 405.098 142.821 405.096C139.26 405.178 135.715 404.574 132.38 403.317C129.605 402.252 127.098 400.587 125.034 398.441C123.072 396.346 121.6 393.837 120.727 391.097C119.749 388.16 119.244 385.084 119.231 381.986ZM148.796 377.144C148.741 376.081 148.556 375.029 148.248 374.012C147.954 373.018 147.464 372.093 146.808 371.292C146.136 370.48 145.303 369.816 144.363 369.341C143.215 368.798 141.954 368.535 140.685 368.573C139.436 368.546 138.197 368.793 137.052 369.296C136.081 369.745 135.216 370.399 134.516 371.212C133.828 372.022 133.301 372.957 132.962 373.966C132.593 374.997 132.322 376.061 132.151 377.144H148.796Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 467,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M190.584 348.217L203.151 346.174V359.324H218.23V369.846H203.151V385.543C203.048 387.752 203.529 389.949 204.544 391.912C205.481 393.495 207.355 394.287 210.165 394.287C211.567 394.283 212.966 394.156 214.346 393.908C215.688 393.683 217.004 393.326 218.276 392.841L220.047 402.686C218.4 403.346 216.709 403.887 214.986 404.304C212.735 404.794 210.435 405.022 208.132 404.981C205.224 405.071 202.326 404.595 199.598 403.581C197.5 402.755 195.643 401.414 194.194 399.68C192.791 397.906 191.821 395.828 191.361 393.61C190.811 391.016 190.551 388.368 190.584 385.715V348.217Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 471,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M224.65 381.986C224.577 378.435 225.194 374.904 226.467 371.59C227.548 368.82 229.172 366.295 231.242 364.166C233.176 362.214 235.49 360.683 238.039 359.668C240.55 358.659 243.229 358.141 245.933 358.142C252.239 358.142 257.224 360.082 260.887 363.96C264.55 367.838 266.382 373.533 266.382 381.045C266.382 381.791 266.382 382.595 266.29 383.467C266.199 384.339 266.188 385.119 266.13 385.761H237.571C237.685 386.998 238.07 388.193 238.698 389.262C239.326 390.331 240.182 391.248 241.204 391.946C243.771 393.594 246.786 394.396 249.829 394.241C252.109 394.245 254.385 394.034 256.626 393.61C258.494 393.286 260.321 392.759 262.075 392.038L263.766 402.296C262.896 402.718 261.989 403.059 261.058 403.317C259.823 403.687 258.569 403.986 257.3 404.212C255.918 404.465 254.444 404.683 252.867 404.844C251.297 405.013 249.718 405.098 248.138 405.096C244.576 405.177 241.032 404.573 237.696 403.317C234.922 402.252 232.414 400.587 230.351 398.441C228.388 396.346 226.917 393.837 226.044 391.097C225.101 388.154 224.63 385.078 224.65 381.986ZM254.215 377.144C254.16 376.081 253.976 375.029 253.667 374.012C253.373 373.018 252.884 372.093 252.228 371.292C251.558 370.477 250.725 369.813 249.783 369.341C248.635 368.795 247.374 368.532 246.104 368.573C244.856 368.546 243.616 368.793 242.472 369.296C241.502 369.748 240.638 370.401 239.936 371.212C239.251 372.025 238.725 372.959 238.382 373.966C238.013 374.997 237.741 376.061 237.571 377.144H254.215Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 475,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M288.681 375.388L292.52 371.177C293.845 369.708 295.125 368.259 296.358 366.828C297.592 365.398 298.761 364.036 299.865 362.743C301.008 361.447 301.899 360.322 302.687 359.358H317.652C314.675 362.808 311.762 366.098 308.913 369.227C306.065 372.355 302.954 375.587 299.58 378.922C301.441 380.634 303.189 382.467 304.812 384.407C306.617 386.534 308.365 388.729 310.056 390.994C311.746 393.289 313.289 395.526 314.694 397.787C316.099 400.047 317.287 402.124 318.247 403.994H303.772C302.87 402.526 301.853 400.885 300.699 399.106C299.546 397.328 298.323 395.526 297.032 393.748C295.741 391.969 294.371 390.248 292.943 388.596C291.642 387.088 290.217 385.695 288.681 384.43V403.937H276.115V340.15L288.681 338.119V375.388Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 479,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M325.009 360.862C327.728 360.11 330.49 359.528 333.28 359.118C336.803 358.57 340.363 358.301 343.927 358.314C347.129 358.22 350.32 358.722 353.34 359.795C355.657 360.651 357.712 362.099 359.304 363.994C360.805 365.886 361.87 368.088 362.422 370.443C363.076 373.166 363.39 375.961 363.359 378.762V404.006H350.793V380.288C350.793 376.218 350.256 373.335 349.182 371.636C348.108 369.938 346.109 369.089 343.185 369.089C342.294 369.089 341.334 369.089 340.317 369.215C339.301 369.341 338.398 369.399 337.61 369.513V403.937H325.044L325.009 360.862Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 483,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M416.321 381.562C416.354 384.834 415.841 388.088 414.801 391.189C413.871 393.96 412.373 396.505 410.403 398.659C408.485 400.73 406.148 402.366 403.549 403.455C400.69 404.614 397.629 405.187 394.547 405.142C391.494 405.183 388.464 404.61 385.636 403.455C383.039 402.362 380.703 400.727 378.782 398.659C376.811 396.492 375.288 393.953 374.304 391.189C373.209 388.1 372.668 384.841 372.704 381.562C372.663 378.29 373.221 375.039 374.349 371.969C375.362 369.225 376.916 366.716 378.919 364.591C380.881 362.546 383.241 360.928 385.853 359.841C388.622 358.688 391.595 358.11 394.592 358.142C397.62 358.104 400.624 358.682 403.423 359.841C406.015 360.922 408.351 362.541 410.277 364.591C412.255 366.718 413.779 369.229 414.756 371.969C415.846 375.047 416.376 378.296 416.321 381.562ZM403.48 381.562C403.48 377.661 402.703 374.585 401.195 372.382C400.467 371.299 399.475 370.422 398.313 369.833C397.151 369.245 395.858 368.965 394.558 369.02C393.254 368.968 391.957 369.248 390.79 369.836C389.623 370.424 388.624 371.3 387.887 372.382C386.31 374.608 385.522 377.683 385.522 381.562C385.349 384.83 386.174 388.072 387.887 390.856C388.611 391.957 389.605 392.852 390.774 393.454C391.942 394.057 393.246 394.348 394.558 394.299C395.866 394.35 397.165 394.06 398.329 393.456C399.492 392.853 400.48 391.957 401.195 390.856C402.861 388.056 403.657 384.819 403.48 381.562Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 487,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M443.772 404.809C440.762 404.856 437.762 404.469 434.861 403.662C432.838 403.081 430.984 402.018 429.458 400.563C428.13 399.234 427.193 397.563 426.75 395.733C426.247 393.637 426.005 391.486 426.031 389.33V340.15L438.597 338.119V386.737C438.586 387.76 438.67 388.782 438.848 389.789C438.967 390.641 439.312 391.445 439.846 392.118C440.381 392.79 441.086 393.305 441.887 393.61C443.048 394.062 444.276 394.318 445.52 394.367L443.772 404.809Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 491,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M494.288 381.562C494.322 384.834 493.809 388.088 492.769 391.189C491.839 393.96 490.341 396.505 488.371 398.659C486.453 400.73 484.116 402.366 481.516 403.455C478.658 404.614 475.597 405.187 472.514 405.142C469.462 405.183 466.432 404.61 463.604 403.455C461.007 402.362 458.671 400.727 456.749 398.659C454.778 396.492 453.256 393.953 452.271 391.189C451.177 388.1 450.635 384.841 450.672 381.562C450.631 378.29 451.189 375.039 452.317 371.969C453.329 369.225 454.884 366.716 456.887 364.591C458.848 362.546 461.209 360.928 463.821 359.841C466.59 358.688 469.563 358.11 472.56 358.142C475.588 358.104 478.591 358.682 481.391 359.841C483.983 360.922 486.319 362.541 488.245 364.591C490.223 366.718 491.747 369.229 492.723 371.969C493.814 375.047 494.344 378.296 494.288 381.562ZM481.448 381.562C481.448 377.661 480.671 374.585 479.163 372.382C478.435 371.299 477.442 370.422 476.28 369.833C475.119 369.245 473.826 368.965 472.526 369.02C471.221 368.968 469.925 369.248 468.758 369.836C467.591 370.424 466.592 371.3 465.854 372.382C464.278 374.608 463.49 377.683 463.49 381.562C463.317 384.83 464.142 388.072 465.854 390.856C466.579 391.957 467.573 392.852 468.741 393.454C469.91 394.057 471.213 394.348 472.526 394.299C473.834 394.35 475.133 394.06 476.296 393.456C477.46 392.853 478.447 391.957 479.163 390.856C480.829 388.056 481.624 384.819 481.448 381.562Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 495,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M499.863 419.657C498.69 419.633 497.52 419.549 496.356 419.405C494.876 419.25 493.416 418.935 492.003 418.464L493.694 408.206C494.439 408.462 495.203 408.658 495.979 408.791C496.86 408.917 497.75 408.975 498.641 408.963C499.426 409.045 500.218 408.925 500.944 408.614C501.669 408.303 502.304 407.811 502.788 407.184C503.657 405.606 504.053 403.809 503.93 402.009V359.324H516.496V402.342C516.496 408.225 515.061 412.581 512.189 415.412C509.318 418.242 505.209 419.657 499.863 419.657Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 499,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M541.001 403.96H528.435V359.324H541.001V403.96Z",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 503,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 338,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_119_137",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: 612,
                            height: 419.657,
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/svg-icons.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 508,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/svg-icons.tsx",
            lineNumber: 330,
            columnNumber: 5
        }, this),
    ibbLogo: ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "Layer_1",
            "data-name": "Layer 1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 595.3 841.9",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: '\n      .cls-1, .cls-2 {\n        fill: #144983;\n        stroke-width: 0px;\n      }\n\n      .cls-2 {\n        fill-rule: evenodd;\n      }\n    '
                    }, void 0, false, {
                        fileName: "[project]/components/svg-icons.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 523,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M65.5,593.1h16.5c6.4,0,7.7,1.8,7.7,7.9s-3.1,7.3-9.5,7.3h-14.7v-15.3ZM83.6,617.6c11.8,0,16.9-3.2,16.9-15.6s-1.5-12.3-9.3-13.2v-.3c6.8-1.6,8-6,8-12.4,0-12.3-5.5-14.6-16.5-14.6h-27.9v56.1h28.9ZM65.5,570.7h15.2c5.3,0,7.7.4,7.7,6.4s-1.3,7.9-7.4,7.9h-15.5v-14.3Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 531,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M144,561.5v39.8c0,6.1-2.7,7.5-12.7,7.5s-12.5-1.7-12.5-7.5v-39.8h-10.8v39.8c0,15.7,10.1,16.7,23.3,16.7s23.5-1,23.5-16.7v-39.8h-10.8ZM127.4,548.8v6.6h-7.4v-6.6h7.4ZM142.8,548.8v6.6h-7.5v-6.6h7.5Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 535,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "210 561.5 197.6 561.5 184.1 585.4 183.9 585.4 170.6 561.5 158.3 561.5 178.6 596.1 178.6 617.6 189.3 617.6 189.3 596.1 210 561.5"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 539,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M249.7,561.5v39.8c0,6.1-2.7,7.5-12.7,7.5s-12.5-1.7-12.5-7.5v-39.8h-10.8v39.8c0,15.7,10.1,16.7,23.3,16.7s23.5-1,23.5-16.7v-39.8h-10.8ZM233.1,548.8v6.6h-7.4v-6.6h7.4ZM248.5,548.8v6.6h-7.5v-6.6h7.5Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 543,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "280.5 561.5 269.8 561.5 269.8 617.6 280.5 617.6 280.5 593.6 285.5 593.6 306.2 617.6 319.8 617.6 294.7 588.9 317.5 561.5 304.2 561.5 285.5 584.4 280.5 584.4 280.5 561.5"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 547,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M320.4,599.7v2.6c0,16.1,11.1,15.7,23.5,15.7s21.9-1.3,21.9-17.1-4.7-15.2-22-16.2c-10.9-.7-12.3-.9-12.3-7.8s1.7-7,12.4-7,10,.2,10,6.3v1.8h10.8v-1.8c0-14.7-9.3-15.1-20.8-15.1s-23.2.4-23.2,15.9,9.6,15.9,21.7,16.6c8.4.4,12.6-.6,12.6,7.4s-1.3,8.3-11.1,8.3-12.7-.4-12.7-6.9v-2.6h-10.8ZM345.6,618.5l-8.5,5.2,2,3.4,9.8-3.9-3.3-4.7Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 551,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "382.8 570.7 410.4 570.7 410.4 561.5 372 561.5 372 617.6 410.7 617.6 410.7 608.4 382.8 608.4 382.8 593.5 409 593.5 409 584.7 382.8 584.7 382.8 570.7"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 555,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "466.3 561.5 455.5 561.5 455.5 584.5 429.4 584.5 429.4 561.5 418.6 561.5 418.6 617.6 429.4 617.6 429.4 593.7 455.5 593.7 455.5 617.6 466.3 617.6 466.3 561.5"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 559,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M486.5,561.5h-10.8v56.1h10.8v-56.1ZM484.8,553.3h-7.4v6.6h7.4v-6.6Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 563,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M522.9,599.1c5.2,0,7.1,3.4,7.1,8.1v10.5h10.8v-10.5c0-7.9-1.9-12-9.5-12.7v-.3c9.5-1.4,9.9-7.5,9.9-15.8,0-12.7-4.7-16.5-17-16.8h-28.6v56.1h10.8v-18.5h16.5ZM506.4,589.9v-19.1h15c7.7,0,9.1,1.4,9.1,9.3s-1.9,9.8-9.9,9.8h-14.2Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 567,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 530,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M196,489.5h-5.6v49.5h5.6v-49.5ZM196.2,483.4h-5.8v4.9h5.8v-4.9Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 573,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "250.7 489.5 213.7 489.5 213.7 494.4 243.9 494.4 212.8 534.1 212.8 539 251.4 539 251.4 534.1 219.6 534.1 250.7 494.7 250.7 489.5"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 577,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "316.8 493.7 316.9 493.7 316.9 539 322.5 539 322.5 489.5 312.8 489.5 295.3 531.9 277.8 489.5 268 489.5 268 539 273.7 539 273.7 493.7 273.8 493.7 292.6 539 298.1 539 316.8 493.7"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 581,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M347.8,489.5h-5.6v49.5h5.6v-49.5ZM348,483.4h-5.8v4.9h5.8v-4.9Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 585,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M373,519.2h18c6.8,0,8.3,3,8.3,9.3v10.5h5.6v-13.1c0-5.3-2.4-8.5-8-8.9h0c7.9-1.1,8.7-6.3,8.7-13.2,0-11.3-4.7-14.3-15.4-14.3h-22.9v49.5h5.6v-19.8ZM373,514.3v-19.8h17.3c8.9,0,9.7,2.4,9.7,8.7s-1.1,10.8-9.7,11.1h-17.3Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 589,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 572,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M83.8,666.6h18.4c7.4-.1,8.4,3.2,8.4,9.7s-3,8.3-9,8.3h-17.8v-18ZM104.5,689.6c8.4,0,11.7-4.9,11.7-13.8s-1.1-10.9-7.7-12.1h0c5.2-1.9,6.2-5.3,6.2-10.6,0-8.7-2.2-13.1-11.5-13.1h-25.1v49.5h26.4ZM83.8,645h16.9c5.9,0,8.5.7,8.5,7.4s-2.3,9.2-9,9.2h-16.3v-16.6Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 595,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "138.6 645 164.8 645 164.8 640.1 133 640.1 133 689.6 164.8 689.6 164.8 684.7 138.6 684.7 138.6 666.5 163.7 666.5 163.7 661.9 138.6 661.9 138.6 645"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 599,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "188.1 640.1 182.5 640.1 182.5 689.6 213.4 689.6 213.4 684.7 188.1 684.7 188.1 640.1"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 603,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "233 645 259.3 645 259.3 640.1 227.4 640.1 227.4 689.6 259.3 689.6 259.3 684.7 233 684.7 233 666.5 258.1 666.5 258.1 661.9 233 661.9 233 645"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 607,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M276.2,689.6h25.4c14.9,0,15.7-13.7,15.7-18.6v-11.8c0-18.3-11-19.1-17-19.1h-24.1v49.5ZM281.8,684.7v-39.6h19.4c9.4,0,10.4,9.2,10.4,12v13c-.1,8.8-1.5,14.7-11.4,14.7h-18.5Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 611,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M341.2,640.1h-5.6v49.5h5.6v-49.5ZM341.3,634h-5.8v4.9h5.8v-4.9Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 615,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "398.3 640.1 391.6 640.1 377 663.3 362.3 640.1 355.8 640.1 373.9 668.9 373.9 689.6 379.5 689.6 379.5 668.9 398.3 640.1"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 619,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            className: "cls-2",
                            points: "416.5 645 442.7 645 442.7 640.1 410.9 640.1 410.9 689.6 442.7 689.6 442.7 684.7 416.5 684.7 416.5 666.5 441.6 666.5 441.6 661.9 416.5 661.9 416.5 645"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 623,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M476,666.8c9,.7,13.3-.9,13.3,8.6s-2.9,9.7-13.5,9.7-12.6,0-12.5-10.9h-5.6c-1.1,14.3,5.5,15.9,18.1,15.9s19.1-.5,19.1-14.5-5.9-13.1-17.7-13.7c-9.2-.3-13.7.5-13.7-8.9s1.5-8.3,12.5-8.3,12.2.3,12.4,9h5.6c.6-13.5-7.1-13.9-17.8-13.9s-18.3,1.2-18.3,14.4,8.4,11.9,18.2,12.7Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 627,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "cls-2",
                            d: "M517.7,640.1h-5.6v49.5h5.6v-49.5ZM517.9,634h-5.8v4.9h5.8v-4.9Z"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 631,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 594,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M399.8,472.6v-2.4h-6.4v-2.4h-30.7v-.7c.4-.2.8-.4,1.1-.7.5-.5.9-1.3.9-2,0,0-.2-.1-.3-.2-.3-.3-.2-.7,0-1,0,0,0,0,0,0,.5-.5,1.1-.8,1.7-.9v-.3c.2,0,.3,0,.4-.2-1-.1-2-.2-3.1-.3v-4.1l-.7-.3h0c0-.1,0-.1,0-.1h0c.1-.2.2-.4,0-.7-.1-.3-.4-.5-.7-.5,0,0,0,0,0,0l-.3-.5v-15.2h0c.1,0,.3,0,.5,0,.3,0,.6-.4.6-.8,0,0,0,0,0,0,0-.7.2-1.4.7-1.9v-23.9s0,0,0,0c.4,0,.7-.4.7-.7s-.2-.5-.4-.7c.6-.5,1.3-.7,2-.7s.2,0,.3,0h0c0-.5-.5-1-1-1.1v-5.6s0,0,0,0c-.5,0-.9.2-1.1.6-.1.2-.2.4-.2.6s0,.2,0,.3h-.7c0,0,0,.2,0,.2,0,.4.2.8.5,1,0,0,0,0,0,0,0,0,0,0,0,0,.2.1.3.3.3.6s-.2.6-.5.7c0,0-.2,0-.2,0-.4,0-.7-.3-.7-.7,0,0,0,0,0,0,0-.4-.3-.8-.7-1-.4.2-.6.5-.7,1,0,0,0,0,0,0,0,.4-.4.7-.7.7s-.2,0-.2,0c-.3,0-.5-.4-.5-.7s.1-.5.3-.6c0,0,0,0,0,0,.3-.2.5-.6.5-1s0,0,0-.1c0,0,0,0,0-.1h-.7c0,0,0-.2,0-.3,0-.2,0-.4-.2-.6-.2-.4-.6-.6-1.1-.6-.7,0-1.2.6-1.2,1.3h0c0,0-3.6,0-3.6,0,0-4.8-4.9-8-9.2-9.8-.7-.3-1.2-.8-1.2-1.6.4,0,.7-.2,1-.5.1,0,.3-.2.4-.3-.4-.4-.9-.7-1.4-.8,0,0,0,0,0,0,0-.2-.2-.4-.2-.6,0,0,0,0,0,0,0-.3,0-.6,0-.8,0-.5.1-1,.4-1.4,0,0,0-.1,0-.2.1-.2.2-.3.2-.3l-1.1-2.2s0,0,0,0h0l-1.1,2.2s0,.1.2.3c0,0,0,0,0,0,0,.1.1.3.2.4.2.4.2.8.2,1.2s-.1,1-.3,1.4c-.5.1-1,.4-1.4.8.1.1.3.2.4.3.3.2.6.4,1,.5h0s0,0,0,0c0,.8-.5,1.3-1.2,1.6-1.4.6-2.8,1.3-4.1,2.1,0-.1-.2-.2-.4-.2h-.1v-1c0-.2-.2-.4-.4-.4h-.4v-14.3c0-.2.2-.4.4-.4h.9c-.2-.4-.3-.8-.3-1.2s.1-1,.4-1.4v-10.1c0-.6.5-1.1,1.1-1.1h.3c.5,0,1-.4,1-1v-6.4c-.3,0-.6.2-.7.4,0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4.2.1.5.2.7.3,0,.1.1.3.1.4h0c0,0,0,.2,0,.3h0c0,.3-.4.5-.7.5s-.4,0-.5-.2c0,0,0,0,0,.1,0,.4-.3.8-.8.8s-.8-.3-.8-.8,0,0,0-.1c-.1.1-.3.2-.5.2-.4,0-.7-.2-.7-.6,0,0,0,0,0,0,0,0,0,0,0,0,0-.2,0-.3.1-.4.2,0,.5-.2.7-.3.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4s-.6.2-.7.4c0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4.2.1.5.2.7.3,0,.1.1.3.1.4h0c0,0,0,.2,0,.2h0c-.1.3-.4.5-.7.5s-.4,0-.5-.2c0,0,0,0,0,.1,0,.4-.3.8-.8.8s-.8-.3-.8-.8,0,0,0-.1c-.1.1-.3.2-.5.2-.4,0-.7-.2-.7-.6,0,0,0,0,0,0,0,0,0,0,0,0,0-.2,0-.3.1-.4.2,0,.5-.2.7-.3.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4s-.6.2-.7.4c0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4.2.1.5.2.7.3,0,.1.1.3.1.4s0,0,0,0c0,0,0,.1,0,.2h0c-.1.3-.4.5-.7.5s-.4,0-.5-.2c0,0,0,0,0,.1,0,.4-.3.8-.8.8s-.8-.3-.8-.8,0,0,0-.1c-.1.1-.3.2-.5.2-.4,0-.7-.3-.7-.6,0,0,0,0,0,0,0,0,0,0,0,0,0-.2,0-.3.1-.4.2,0,.5-.2.7-.3h0c.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4s-.6.2-.7.4c0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4.2.1.5.2.7.3,0,.1.1.2.1.4h0c0,.1,0,.2,0,.3-.1.3-.4.5-.7.5s-.4,0-.5-.2c0,0,0,0,0,.1,0,.3-.2.6-.5.7v-4.1h0c0,0,0-27.2,0-27.2.9-.2,1.6-.7,2.1-1.5.3-.5.4-1.1.4-1.7v-6.4h-2.7v-55.3c0-1.1.2-2.1.6-3.1,0-.2.1-.3.2-.5,0,0,.1,0,.2,0,.4,0,.8-.3.8-.8s0-.4-.2-.5c.3-.4.6-.7.9-1.1.3-.3.7-.6,1-.9.5-.4.8-1,.8-1.7v-30.2s0-.9,0-.9v-.8c0-.4.1-.8.4-1.1,0,0,0,0,0,0,.6-.6,1.3-.9,2.1-.9v-.5c-.3-.3-.7-.5-1.1-.7v-5.8h-2.5l.4,1.4h-.6l.4,1.4h-.6l.4,1.4h-3l.4-1.4h-.6l.4-1.4h-.6l.4-1.4h-1.4l-.3-.5h-3.2l-.4-.5c-.5-.7-1.4-1-2.2-1h-.2v-22.1c0-.5.1-1,.3-1.5.5-1,1.4-1.6,2.4-1.7,0-.3-.3-.5-.5-.8-.2-.2-.5-.4-.8-.5v-5.8l-.9,1.2v2h0c0,.4-.4.8-.8.7-.4,0-.7-.4-.7-.8v-2h-2.7c0-4.1-2.2-7-5.1-8.8-1.9-1.2-4.5-1.2-4.8-3.7,0,0,0,0,0,0,0-.2.2-.4.4-.5,0,0,0,0,0-.1,0-.3-.2-.5-.4-.5,0,0,.2-.5.2-.5.7,0,1.2-.5,1.2-1.2s-.2-.9-.6-1.1c0,0,0,0,.1,0,.2,0,.3-.1.3-.3s0,0,0,0l-1.3-.3c0-.2,0-.3.2-.3s.3-.1.3-.3-.1-.3-.3-.3-.3-.1-.3-.3,0-.2.1-.2c.4-.2.6-.6.6-1.1,0-.4-.2-.8-.5-1,0,0-.2-.2-.2-.3,0-.3.1-.5.4-.6.2,0,.4-.2.4-.5s-.2-.5-.5-.5-.3-.1-.3-.3.1-.3.3-.3h0c.3,0,.5-.2.5-.5s0-.3-.2-.4l-.6-.4s0,0,0-.1v-8.3h0c.4,0,.8-.3,1.1-.6.4-.4.6-.9.6-1.4s0-.3,0-.4c0,.4-.3.7-.5,1-.4.4-.9.6-1.4.6-.5,0-1-.2-1.4-.6-.3-.3-.5-.6-.5-1,0,.1,0,.2,0,.4,0,.5.2,1,.6,1.4.3.3.7.5,1.1.6h0v8.3c0,0,0,.1,0,.1l-.6.4c-.1,0-.2.2-.2.4,0,.3.2.5.5.5h0c.2,0,.3.1.3.3s-.2.3-.3.3c-.3,0-.5.2-.5.5s.2.4.4.5c.3,0,.4.3.4.6,0,.1,0,.2-.2.3-.3.2-.5.6-.5,1,0,.5.2.9.6,1.1,0,0,.1.1.1.2,0,.2-.1.3-.3.3s-.3.1-.3.3.1.3.3.3.2.2.2.3l-1.3.3s0,0,0,0c0,.2.1.3.3.3s.1,0,.1,0c-.4.2-.6.6-.6,1.1,0,.7.5,1.2,1.2,1.2,0,0,.2.5.2.5-.2,0-.4.2-.4.5s0,.1,0,.1c.2,0,.4.2.4.5s0,0,0,0c-.3,2.5-2.9,2.6-4.8,3.7-2.9,1.8-5.1,4.7-5.1,8.8h-2.7v2c0,.4-.3.8-.7.8-.4,0-.8-.3-.8-.7h0v-2l-.9-1.2v5.8c-.3,0-.5.3-.8.5-.2.2-.4.5-.5.8,1,.1,1.9.8,2.4,1.7.2.5.3,1,.3,1.5v22.1c-1,0-1.9.4-2.6,1.2l-.3.3h-3.2l-.3.5h-1.4l.4,1.4h-.6l.4,1.4h-.6l.4,1.4h-3l.4-1.4h-.6l.4-1.4h-.6l.4-1.4h-2.5v5.8c-.4.1-.8.4-1.1.7v.5c.8,0,1.6.4,2.1.9,0,0,0,0,0,0,.3.3.4.7.4,1,0,4,0,29,0,32.7,0,.3.1.5.4.7.5.3,1,.7,1.5,1.2.3.3.6.7.9,1.1-.1.1-.2.3-.2.5,0,.4.3.8.8.8s.1,0,.2,0c0,.2.2.3.2.5.4,1,.6,2,.6,3.1v55.3h-2.7v6.4c0,.6.1,1.2.4,1.7.5.8,1.2,1.3,2.1,1.5v27.3h0c0,0,0,4.1,0,4.1-.3,0-.5-.4-.5-.7s0,0,0-.1c-.1.1-.3.2-.5.2-.3,0-.6-.2-.7-.5,0,0,0-.2,0-.3h0c0-.2,0-.3.1-.4.2,0,.5-.2.7-.3.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4s-.6.2-.7.4c0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4h0c.2.1.4.2.7.3,0,.1.1.3.1.4s0,0,0,0c0,0,0,0,0,0,0,.3-.4.6-.7.6s-.4,0-.5-.2c0,0,0,0,0,.1,0,.4-.3.8-.8.8s-.8-.3-.8-.8,0,0,0-.1c-.1.1-.3.2-.5.2-.3,0-.6-.2-.7-.5h0c0,0,0-.1,0-.2,0,0,0,0,0,0,0-.2,0-.3.1-.4.2,0,.5-.2.7-.3.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4s-.6.2-.7.4c0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4.2.1.4.2.7.3,0,.1.1.3.1.4s0,0,0,0c0,0,0,0,0,0,0,.3-.4.6-.7.6s-.4,0-.5-.2c0,0,0,0,0,.1,0,.4-.3.8-.8.8s-.8-.3-.8-.8,0,0,0-.1c-.1.1-.3.2-.5.2-.3,0-.6-.2-.7-.5h0c0,0,0-.2,0-.2h0c0-.2,0-.3.1-.4.2,0,.5-.2.7-.3.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4s-.6.2-.7.4c0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2,0-.4.1-.4.1-.8.4-1.1.7.2.2.4.3.6.4.2.1.4.2.7.3,0,.1.1.3.1.4s0,0,0,0c0,0,0,0,0,0,0,.3-.4.6-.7.6s-.4,0-.5-.2c0,0,0,0,0,.1,0,.4-.3.8-.8.8s-.8-.3-.8-.8,0,0,0-.1c-.1.1-.3.2-.5.2-.3,0-.6-.2-.7-.5h0c0,0,0-.2,0-.2h0c0-.2,0-.3.1-.4.2,0,.5-.2.7-.3.2-.1.4-.3.6-.4-.3-.3-.7-.5-1.1-.7-.1,0-.2,0-.4-.1,0,0,0-.2,0-.2,0,0,0,0,0,0-.1-.3-.4-.4-.7-.4v6.2c0,.7.5,1.2,1.2,1.2h.2c.5,0,1,.4,1,1v10.2c.2.4.4.9.4,1.4s-.1.9-.3,1.2h.9c.2,0,.4.2.4.4v14.3h-.4c-.2,0-.4.2-.4.4v1h-.1c-.2,0-.3.1-.4.2-1.3-.9-2.7-1.6-4.1-2.1-.7-.3-1.2-.8-1.2-1.6.4,0,.7-.2,1-.5.1,0,.3-.2.4-.3-.4-.4-.9-.6-1.4-.8-.2-.4-.3-.9-.3-1.4s0-.8.2-1.2c0-.1.1-.3.2-.4,0,0,0,0,0,0,.1-.2.2-.3.2-.3l-1.1-2.2h0s0,0,0,0l-1.1,2.2s0,.1.2.3c0,0,0,.1,0,.2.2.4.3.9.4,1.4,0,.3,0,.6,0,.8,0,0,0,0,0,0,0,.2-.1.4-.2.6,0,0,0,0,0,0-.5.1-1,.4-1.4.8.1.1.3.2.4.3.3.2.7.4,1,.5,0,.8-.5,1.3-1.2,1.6-4.3,1.7-9.1,5-9.2,9.8h-3.6c0-.7-.5-1.3-1.2-1.3-.5,0-.9.2-1.1.6-.1.2-.2.4-.2.6s0,.2,0,.3h-.7s0,0,0,.1c0,0,0,0,0,.1,0,.4.2.8.5,1,0,0,0,0,0,0,.2.1.3.4.3.6s-.2.6-.5.7c0,0-.2,0-.2,0-.4,0-.7-.3-.7-.7,0,0,0,0,0,0,0-.4-.3-.8-.7-1-.4.2-.6.5-.7,1,0,0,0,0,0,0,0,.4-.4.7-.7.7s-.2,0-.2,0c-.3,0-.5-.4-.5-.7s.1-.5.3-.6c0,0,0,0,0,0,0,0,0,0,0,0,.3-.2.5-.6.5-1s0-.2,0-.2h-.7c0,0,0-.2,0-.3,0-.2,0-.4-.2-.6-.2-.4-.7-.6-1.1-.6,0,0,0,0,0,0v5.6c-.5,0-.9.5-1,1.1h0c.1,0,.2,0,.3,0,.7,0,1.4.3,2,.7-.2.1-.4.4-.4.7s.3.7.7.7c0,0,0,0,0,0v23.9c.4.6.7,1.2.7,1.9h0c0,.5.3.8.7.8.1,0,.2,0,.3,0h0s0,15.2,0,15.2l-.3.5s0,0,0,0c-.4,0-.8.3-.8.8s0,.3.1.4h0s0,0,0,0h0c0,.1-.7.4-.7.4v4.1c-1,0-2.1.2-3.1.3,0,.1.2.2.4.2v.3c.7.1,1.3.4,1.7.9,0,0,0,0,0,0,.3.3.3.7,0,1,0,0-.2.2-.3.2,0,.8.4,1.5.9,2,.3.3.7.6,1.1.7v.7h-30.7v2.4h-6.4v2.4h-6.4v2.4h27s43.7,0,43.7,0h118.5s27,0,27,0v-2.4h-6.4ZM248.5,436.8h-.5l.5,2.8h1.3v7.9c-.9.1-1.8.2-2.7.2s-1.1,0-1.6,0c-.2,0-.4.3-.2.4,1.1.8,3.2,2.2,4.5,2.8v4l-.3.9h-.8v.9h-1.5v-.9h-2.2c0-1.1-.8-1.2-1.4-1.7-.7.6-1.5.6-1.4,1.7h-2.2v.9h-1.5v-.9h-.8l-.3-.9v-15.3h1.3l.5-2.8h-.5l.6-1.6c-.6-.7-1.2-1.3-1.5-2.2-1.6-4.2,3.1-8.1,6-9.5,2.9,1.4,7.6,5.2,6,9.5-.3.9-.9,1.5-1.5,2.2l.6,1.6ZM267.7,396.4h-.4c-.2,0-.4.2-.4.4v1h-.1c-.2,0-.4.2-.4.4v1h-1.6v-1c0-.2-.2-.4-.4-.4h-.1v-1c0-.2-.2-.4-.4-.4h-.4v-14.3c0-.2.2-.4.4-.4h.9c-.2-.4-.3-.8-.3-1.2s.1-.9.4-1.3c-.2,0-.3-.2-.5-.3-.3-.3-.4-.6-.5-1,0,0,0-.1,0-.2,0-.4.2-.9.5-1.2,0,0,.2-.2.3-.2.1,0,.2-.1.3-.2,0,0-.2-.1-.3-.2-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.2-.2.5-.4.8-.4h0c.3,0,.6.2.8.4.3.3.5.7.5,1.2s-.2.9-.5,1.2c0,0-.2.2-.3.2.1,0,.2,0,.3.2,0,0,.2.1.3.2.3.3.5.7.5,1.2s0,.1,0,.2c0,.4-.2.7-.5,1-.1.1-.3.2-.5.3.2.4.4.9.4,1.3s-.1.9-.3,1.2h.9c.2,0,.4.2.4.4v14.3ZM274.4,396.4h-.4c-.2,0-.4.2-.4.4v1h-.1c-.2,0-.4.2-.4.4v1h-1.6v-1c0-.2-.2-.4-.4-.4h-.1v-1c0-.2-.2-.4-.4-.4h-.4v-14.3c0-.2.2-.4.4-.4h.9c-.2-.4-.3-.8-.3-1.2s.1-.9.4-1.3c-.2,0-.3-.2-.5-.3-.3-.3-.4-.6-.5-1,0,0,0-.1,0-.2,0-.4.2-.9.5-1.2,0,0,.2-.2.3-.2.1,0,.2-.1.3-.2,0,0-.2-.1-.3-.2-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.2-.2.5-.4.8-.4h0c.3,0,.6.2.8.4.3.3.5.7.5,1.2s-.2.9-.5,1.2c0,0-.2.2-.3.2.1,0,.2,0,.3.2,0,0,.2.1.3.2.3.3.5.7.5,1.2s0,.1,0,.2c0,.4-.2.7-.5,1-.1.1-.3.2-.5.3.2.4.4.9.4,1.3s-.1.9-.3,1.2h.9c.2,0,.4.2.4.4v14.3ZM325.8,396.4h-.4c-.2,0-.4.2-.4.4v1h-.1c-.2,0-.4.2-.4.4v1h-1.6v-1c0-.2-.2-.4-.4-.4h-.1v-1c0-.2-.2-.4-.4-.4h-.4v-14.3c0-.2.2-.4.4-.4h.9c-.2-.4-.3-.8-.3-1.2s.1-.9.4-1.3c-.2,0-.3-.2-.5-.3-.3-.3-.4-.6-.5-1,0,0,0-.1,0-.2,0-.4.2-.9.5-1.2,0,0,.2-.2.3-.2.1,0,.2-.1.3-.2,0,0-.2-.1-.3-.2-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.2-.2.5-.4.8-.4h0c.3,0,.6.2.8.4.3.3.5.7.5,1.2s-.2.9-.5,1.2c0,0-.2.2-.3.2.1,0,.2,0,.3.2,0,0,.2.1.3.2.3.3.5.7.5,1.2s0,.1,0,.2c0,.4-.2.7-.5,1-.1.1-.3.2-.5.3.2.4.4.9.4,1.3s-.1.9-.3,1.2h.9c.2,0,.4.2.4.4v14.3ZM332.5,396.4h-.4c-.2,0-.4.2-.4.4v1h-.1c-.2,0-.4.2-.4.4v1h-1.6v-1c0-.2-.2-.4-.4-.4h-.1v-1c0-.2-.2-.4-.4-.4h-.4v-14.3c0-.2.2-.4.4-.4h.9c-.2-.4-.3-.8-.3-1.2s.1-.9.4-1.3c-.2,0-.3-.2-.5-.3-.3-.3-.4-.6-.5-1,0,0,0-.1,0-.2,0-.4.2-.9.5-1.2,0,0,.2-.2.3-.2.1,0,.2-.1.3-.2,0,0-.2-.1-.3-.2-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.2-.2.5-.4.8-.4h0c.3,0,.6.2.8.4.3.3.5.7.5,1.2s-.2.9-.5,1.2c0,0-.2.2-.3.2.1,0,.2,0,.3.2,0,0,.2.1.3.2.3.3.5.7.5,1.2s0,.1,0,.2c0,.4-.2.7-.5,1-.1.1-.3.2-.5.3.2.4.4.9.4,1.3s-.1.9-.3,1.2h.9c.2,0,.4.2.4.4v14.3ZM357.5,436.8h-.5l.5,2.8h1.3v15.3l-.3.9h-.8v.9h-1.5v-.9h-2.2c0-1.1-.8-1.2-1.4-1.7-.7.6-1.5.6-1.4,1.7h-2.2v.9h-1.5v-.9h-.8l-.3-.9v-4.1c1.4-.6,3.3-2,4.4-2.8.2-.1,0-.5-.2-.4-.5,0-1.1,0-1.6,0-.9,0-1.7,0-2.6-.2v-7.9h1.3l.5-2.8h-.5l.6-1.6c-.6-.7-1.2-1.3-1.5-2.2-1.6-4.2,3.1-8.1,6-9.5,2.9,1.4,7.6,5.2,6,9.5-.3.9-.9,1.5-1.5,2.2l.6,1.6Z"
                }, void 0, false, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 636,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/svg-icons.tsx",
            lineNumber: 516,
            columnNumber: 5
        }, this),
    iztekLogoWithoutText: ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "219.67px",
            height: "220.735525px",
            viewBox: "0 0 219.67 220.735525",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "Page-1",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "00Iztek_Logo",
                    fillRule: "nonzero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            id: "Path",
                            fill: "#0069DF",
                            points: "90.909 133.449525 49.315 175.227525 64.429 190.407525 106.022 148.630525"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 659,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M139.942,144.808525 L121.07,163.764525 L109.589,152.289525 L94.487,167.470525 L105.911,179.002525 L79.487,205.554525 L94.601,220.735525 L121.059,194.079525 L136.207,209.283525 L143.438,202.008525 C144.473,200.969525 145.293,199.736525 145.853,198.378525 C146.413,197.021525 146.701,195.566525 146.701,194.097525 C146.701,192.627525 146.413,191.172525 145.853,189.815525 C145.293,188.457525 144.473,187.224525 143.438,186.185525 L136.173,178.899525 L147.174,167.849525 C148.208,166.810525 149.029,165.576525 149.589,164.219525 C150.149,162.861525 150.437,161.406525 150.437,159.937525 C150.437,158.468525 150.149,157.013525 149.589,155.655525 C149.029,154.298525 148.208,153.064525 147.174,152.025525 L139.942,144.808525 Z",
                            id: "Path",
                            fill: "#0069DF"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M117.003,137.590525 C118.038,136.551525 118.858,135.318525 119.418,133.961525 C119.978,132.603525 120.266,131.148525 120.266,129.679525 C120.266,128.209525 119.978,126.754525 119.418,125.397525 C118.858,124.039525 118.038,122.806525 117.003,121.767525 L109.772,114.504525 L94.658,129.673525 L109.772,144.854525 L117.003,137.590525 Z",
                            id: "Path",
                            fill: "#0069DF"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            id: "Path",
                            fill: "#1E1E1E",
                            points: "147.934 113.882525 132.82 129.062525 174.413 170.840525 189.527 155.659525"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M193.235,98.7610254 L208.383,83.5458254 L201.14,76.2824254 C200.106,75.2433254 198.878,74.4190254 197.526,73.8567254 C196.175,73.2943254 194.726,73.0048254 193.264,73.0048254 C191.801,73.0048254 190.352,73.2943254 189.001,73.8567254 C187.649,74.4190254 186.421,75.2433254 185.387,76.2824254 L178.121,83.5802254 L167.131,72.5417254 C166.097,71.5026254 164.869,70.6783254 163.518,70.1160254 C162.166,69.5536254 160.718,69.2641254 159.255,69.2641254 C157.792,69.2641254 156.343,69.5536254 154.992,70.1160254 C153.64,70.6783254 152.412,71.5026254 151.378,72.5417254 L144.112,79.8051254 L162.973,98.7495254 L151.549,110.224525 L166.663,125.404525 L178.087,113.930525 L204.556,140.516525 L219.67,125.335525 L193.235,98.7610254 Z",
                            id: "Path",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M144.192,110.097525 L136.949,102.834525 C135.915,101.795525 134.687,100.971525 133.336,100.408525 C131.984,99.8463254 130.536,99.5569254 129.073,99.5569254 C127.61,99.5569254 126.161,99.8463254 124.81,100.408525 C123.458,100.971525 122.23,101.795525 121.196,102.834525 L113.953,110.097525 L129.078,125.232525 L144.192,110.097525 Z",
                            id: "Path",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 684,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            id: "Path",
                            fill: "#1E1E1E",
                            points: "155.215 30.3112254 113.622 72.0886254 128.736 87.2693254 170.329 45.4919254"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 689,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M79.716,75.8924254 L98.577,56.9480254 L110.001,68.4225254 L125.115,53.2417254 L113.691,41.7672254 L140.16,15.1807254 L125.046,0 L98.577,26.5520254 L83.44,11.3368254 L76.209,18.6116254 C75.174,19.6505254 74.354,20.8839254 73.794,22.2414254 C73.234,23.5989254 72.946,25.0539254 72.946,26.5233254 C72.946,27.9927254 73.234,29.4476254 73.794,30.8051254 C74.354,32.1626254 75.174,33.3961254 76.209,34.4350254 L83.463,41.7328254 L72.485,52.7712254 C71.45,53.8101254 70.63,55.0435254 70.07,56.4010254 C69.51,57.7585254 69.222,59.2135254 69.222,60.6829254 C69.222,62.1523254 69.51,63.6073254 70.07,64.9648254 C70.63,66.3223254 71.45,67.5557254 72.485,68.5946254 L79.716,75.8924254 Z",
                            id: "Path",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 694,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M125,91.0157254 L109.84,75.8923254 L102.609,83.1557254 C100.525,85.2588254 99.354,88.1055254 99.354,91.0731254 C99.354,94.0406254 100.525,96.8874254 102.609,98.9905254 L109.852,106.253525 L125,91.0157254 Z",
                            id: "Path",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 699,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            id: "Path",
                            fill: "#1E1E1E",
                            points: "45.331 49.7814254 30.217 64.9621254 71.81 106.739525 86.924 91.5589254"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 704,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M52.618,148.055525 C53.653,149.094525 54.881,149.918525 56.232,150.481525 C57.584,151.043525 59.032,151.333525 60.495,151.333525 C61.958,151.333525 63.407,151.043525 64.758,150.481525 C66.11,149.918525 67.338,149.094525 68.372,148.055525 L75.603,140.792525 L56.742,121.790525 L68.166,110.315525 L53.064,95.1351254 L41.583,106.609525 L15.114,80.0117254 L-2.84217094e-14,95.1925254 L26.515,121.790525 L11.378,136.994525 L18.61,144.257525 C20.7,146.356525 23.536,147.536525 26.492,147.536525 C29.448,147.536525 32.284,146.356525 34.374,144.257525 L41.629,136.971525 L52.618,148.055525 Z",
                            id: "Path",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 709,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M75.569,110.488525 L82.812,117.751525 C83.846,118.790525 85.074,119.614525 86.426,120.177525 C87.777,120.739525 89.226,121.029525 90.689,121.029525 C92.152,121.029525 93.6,120.739525 94.952,120.177525 C96.303,119.614525 97.531,118.790525 98.566,117.751525 L105.797,110.488525 L90.683,95.3073254 L75.569,110.488525 Z",
                            id: "Path",
                            fill: "#1E1E1E"
                        }, void 0, false, {
                            fileName: "[project]/components/svg-icons.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/svg-icons.tsx",
                    lineNumber: 658,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/svg-icons.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/svg-icons.tsx",
            lineNumber: 643,
            columnNumber: 5
        }, this)
};

})()),
"[project]/lib/hooks/use-copy-to-clipboard.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useCopyToClipboard": ()=>useCopyToClipboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
function useCopyToClipboard({ timeout = 2000 }) {
    _s();
    const [isCopied, setIsCopied] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false);
    const copyToClipboard = (value)=>{
        if (typeof window === 'undefined' || !navigator.clipboard?.writeText) {
            return;
        }
        if (!value) {
            return;
        }
        navigator.clipboard.writeText(value).then(()=>{
            setIsCopied(true);
            setTimeout(()=>{
                setIsCopied(false);
            }, timeout);
        });
    };
    return {
        isCopied,
        copyToClipboard
    };
}
_s(useCopyToClipboard, "dIAMLjsduWkZ4KaA+ylUo0FLqmM=");

})()),
"[project]/components/ui/codeblock.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Markdown/CodeBlock.tsx
__turbopack_esm__({
    "CodeBlock": ()=>CodeBlock,
    "generateRandomString": ()=>generateRandomString,
    "programmingLanguages": ()=>programmingLanguages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript) <export default as Prism>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-copy-to-clipboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const programmingLanguages = {
    javascript: '.js',
    python: '.py',
    java: '.java',
    c: '.c',
    cpp: '.cpp',
    'c++': '.cpp',
    'c#': '.cs',
    ruby: '.rb',
    php: '.php',
    swift: '.swift',
    'objective-c': '.m',
    kotlin: '.kt',
    typescript: '.ts',
    go: '.go',
    perl: '.pl',
    rust: '.rs',
    scala: '.scala',
    haskell: '.hs',
    lua: '.lua',
    shell: '.sh',
    sql: '.sql',
    html: '.html',
    css: '.css'
};
const generateRandomString = (length, lowercase = false)=>{
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXY3456789' // excluding similar looking characters like Z, 2, I, 1, O, 0
    ;
    let result = '';
    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return lowercase ? result.toLowerCase() : result;
};
const CodeBlock = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ language, value })=>{
    _s();
    const { isCopied, copyToClipboard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"])({
        timeout: 2000
    });
    const downloadAsFile = ()=>{
        if (typeof window === 'undefined') {
            return;
        }
        const fileExtension = programmingLanguages[language] || '.file';
        const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`;
        const fileName = window.prompt('Enter file name' || '', suggestedFileName);
        if (!fileName) {
            // User pressed cancel on prompt.
            return;
        }
        const blob = new Blob([
            value
        ], {
            type: 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = url;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const onCopy = ()=>{
        if (isCopied) return;
        copyToClipboard(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full font-sans codeblock bg-zinc-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs lowercase",
                        children: language
                    }, void 0, false, {
                        fileName: "[project]/components/ui/codeblock.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                                onClick: downloadAsFile,
                                size: "icon",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDownload"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Download"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/codeblock.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                                onClick: onCopy,
                                children: [
                                    isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCopy"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 115,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Copy code"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/codeblock.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/codeblock.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/codeblock.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
                language: language,
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coldarkDark"],
                PreTag: "div",
                showLineNumbers: true,
                customStyle: {
                    margin: 0,
                    width: '100%',
                    background: 'transparent',
                    padding: '1.5rem 1rem'
                },
                lineNumberStyle: {
                    userSelect: 'none'
                },
                codeTagProps: {
                    style: {
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-mono)'
                    }
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/ui/codeblock.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/codeblock.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}, "2/Xp5dvGgc3DE1LEd1QNvpbEkfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"]
    ];
})), "2/Xp5dvGgc3DE1LEd1QNvpbEkfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"]
    ];
});
_c1 = CodeBlock;
CodeBlock.displayName = 'CodeBlock';
;
var _c, _c1;
__turbopack_refresh__.register(_c, "CodeBlock$memo");
__turbopack_refresh__.register(_c1, "CodeBlock");

})()),
"[project]/components/chat/spinner.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "spinner": ()=>spinner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
const spinner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg",
    className: "size-5 animate-spin stroke-zinc-400",
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"
    }, void 0, false, {
        fileName: "[project]/components/chat/spinner.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "[project]/components/chat/spinner.tsx",
    lineNumber: 4,
    columnNumber: 3
}, this);

})()),
"[project]/components/chat/message.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BotMessage": ()=>BotMessage,
    "SpinnerMessage": ()=>SpinnerMessage,
    "UserMessage": ()=>UserMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$streamable$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-streamable-text.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/remark-gfm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$math$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/remark-math/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/markdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$svg$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/svg-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$codeblock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/codeblock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat/spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function UserMessage({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex items-start md:-ml-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-[48px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {
                    className: "size-8"
                }, void 0, false, {
                    fileName: "[project]/components/chat/message.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/message.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 flex-1 space-y-2 overflow-hidden pl-2 pt-3",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/chat/message.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/message.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = UserMessage;
function BotMessage({ content, className }) {
    _s();
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$streamable$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStreamableText"])(content);
    const lastSpokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const lastIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Otomatik TTS devre dışı - kullanıcı manuel TTS butonunu kullanacak
    // useEffect(() => {
    //   const current = text || ''
    //   if (!current) return
    //   // If content shrank (shouldn't happen), reset index
    //   if (current.length < lastIndexRef.current) {
    //     lastIndexRef.current = 0
    //   }
    //   const delta = current.slice(lastIndexRef.current).trim()
    //   if (!delta) return
    //   lastIndexRef.current = current.length
    //   lastSpokenRef.current = current
    //   try {
    //     speakFromVariable(delta, { cancel: false })
    //   } catch (e) {
    //     console.warn('TTS not available:', e)
    //   }
    // }, [text])
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group relative flex items-start md:-ml-12', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-[48px] shrink-0 select-none items-center justify-center rounded-md border p-2 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$svg$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcons"].iztekLogoWithoutText, {}, void 0, false, {
                    fileName: "[project]/components/chat/message.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/message.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 flex-1 space-y-2 overflow-hidden px-1 pt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoizedReactMarkdown"], {
                    className: "prose break-words  prose-p:leading-relaxed prose-pre:p-0",
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$math$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        p ({ children }) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 last:mb-0",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/components/chat/message.tsx",
                                lineNumber: 72,
                                columnNumber: 22
                            }, void 0);
                        },
                        code ({ node, inline, className, children, ...props }) {
                            if (children.length) {
                                if (children[0] == '▍') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 animate-pulse cursor-default",
                                        children: "▍"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/message.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, void 0);
                                }
                                children[0] = children[0].replace('`▍`', '▍');
                            }
                            const match = /language-(\w+)/.exec(className || '');
                            if (inline) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: className,
                                    ...props,
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/message.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, void 0);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$codeblock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                language: match && match[1] || '',
                                value: String(children).replace(/\n$/, ''),
                                ...props
                            }, Math.random(), false, {
                                fileName: "[project]/components/chat/message.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, void 0);
                        }
                    },
                    children: text
                }, void 0, false, {
                    fileName: "[project]/components/chat/message.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/message.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/message.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(BotMessage, "YYURg9tRsGQCDAVRQf/o/KQOUSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$streamable$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStreamableText"]
    ];
});
_c1 = BotMessage;
function SpinnerMessage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex items-start md:-ml-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-[48px] shrink-0 select-none items-center justify-center rounded-md border p-2 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$svg$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgIcons"].iztekLogoWithoutText, {}, void 0, false, {
                    fileName: "[project]/components/chat/message.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/message.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinner"]
            }, void 0, false, {
                fileName: "[project]/components/chat/message.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/message.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c2 = SpinnerMessage;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "UserMessage");
__turbopack_refresh__.register(_c1, "BotMessage");
__turbopack_refresh__.register(_c2, "SpinnerMessage");

})()),
"[project]/components/ui/mic.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>VoiceRecorder
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function VoiceRecorder({ onTranscribed, disabled = false }) {
    _s();
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSupported, setIsSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if browser supports Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        setIsSupported(!!SpeechRecognition);
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'tr-TR'; // Türkçe
            let finalTranscript = '';
            recognition.onresult = (event)=>{
                let interimTranscript = '';
                for(let i = event.resultIndex; i < event.results.length; i++){
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }
                // Show interim results visually if needed
                console.log('Interim:', interimTranscript);
            };
            recognition.onend = ()=>{
                setIsRecording(false);
                setIsListening(false);
                if (finalTranscript.trim()) {
                    onTranscribed?.(finalTranscript.trim());
                    finalTranscript = ''; // Reset for next recording
                }
            };
            recognition.onerror = (event)=>{
                console.error('Speech recognition error:', event.error);
                setIsRecording(false);
                setIsListening(false);
            };
            recognition.onstart = ()=>{
                setIsListening(true);
            };
            recognitionRef.current = recognition;
        }
    }, [
        onTranscribed
    ]);
    const handleClick = async ()=>{
        if (!isSupported) {
            alert('Tarayıcınız ses tanıma özelliğini desteklemiyor. Chrome veya Edge kullanmayı deneyin.');
            return;
        }
        if (isRecording) {
            // Kaydı durdur
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        } else {
            // Kaydı başlat
            try {
                setIsRecording(true);
                recognitionRef.current.start();
            } catch (error) {
                console.error('Ses tanıma başlatma hatası:', error);
                setIsRecording(false);
                alert('Ses tanıma başlatılamadı. Lütfen mikrofon izni verdiğinizden emin olun.');
            }
        }
    };
    if (!isSupported) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: true,
                className: "w-9 h-9 rounded-full bg-gray-300 text-gray-500 text-xs font-medium flex items-center justify-center cursor-not-allowed",
                title: "Tarayıcınız ses tanıma özelliğini desteklemiyor",
                children: "🎤"
            }, void 0, false, {
                fileName: "[project]/components/ui/mic.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/mic.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClick,
                disabled: disabled,
                className: `
          w-9 h-9 rounded-full transition-all duration-200 text-white text-xs font-medium flex items-center justify-center
          ${isRecording ? 'bg-red-500 hover:bg-red-600 animate-pulse' : disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
        `,
                title: isRecording ? 'Konuşmayı durdur' : 'Konuşmaya başla',
                children: isRecording ? '⏹' : '🎤'
            }, void 0, false, {
                fileName: "[project]/components/ui/mic.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap",
                children: "Dinleniyor..."
            }, void 0, false, {
                fileName: "[project]/components/ui/mic.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/mic.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(VoiceRecorder, "JVql6TVQrDHRs0KciJZwD8Y9fkY=");
_c = VoiceRecorder;
var _c;
__turbopack_refresh__.register(_c, "VoiceRecorder");

})()),
"[project]/components/prompt-form.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PromptForm": ()=>PromptForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$textarea$2d$autosize$2f$dist$2f$react$2d$textarea$2d$autosize$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$enter$2d$submit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-enter-submit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat/message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$mic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/mic.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function PromptForm({ input, setInput, selectedTags, inputRef }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { formRef, onKeyDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$enter$2d$submit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnterSubmit"])();
    const { submitUserMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActions"])();
    const [_, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        inputRef,
        selectedTags
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: formRef,
        onSubmit: async (e)=>{
            e.preventDefault();
            // Blur focus on mobile
            if (window.innerWidth < 600) {
                e.target['message']?.blur();
            }
            const value = input.trim();
            setInput('');
            if (!value) return;
            // Optimistically add user message UI
            setMessages((currentMessages)=>[
                    ...currentMessages,
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nanoid"])(),
                        display: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMessage"], {
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/components/prompt-form.tsx",
                            lineNumber: 64,
                            columnNumber: 22
                        }, void 0)
                    }
                ]);
            // Submit and get response message
            const responseMessage = await submitUserMessage(value, selectedTags);
            setMessages((currentMessages)=>[
                    ...currentMessages,
                    responseMessage
                ]);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "absolute left-0 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4",
                                onClick: ()=>{
                                    router.push('/fuar-asistani/new');
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {}, void 0, false, {
                                        fileName: "[project]/components/prompt-form.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "New Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/prompt-form.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/prompt-form.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/prompt-form.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            children: "New Chat"
                        }, void 0, false, {
                            fileName: "[project]/components/prompt-form.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/prompt-form.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$textarea$2d$autosize$2f$dist$2f$react$2d$textarea$2d$autosize$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ref: inputRef,
                    tabIndex: 0,
                    onKeyDown: onKeyDown,
                    placeholder: "Fuar Asistanı'na bir mesaj gönder",
                    className: "min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm",
                    autoFocus: true,
                    spellCheck: false,
                    autoComplete: "off",
                    autoCorrect: "off",
                    name: "message",
                    rows: 1,
                    value: input,
                    onChange: (e)=>setInput(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/components/prompt-form.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-[13px] sm:right-4 flex gap-2 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$mic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onTranscribed: (text)=>{
                                const value = text.trim();
                                if (!value) return;
                                // Set the transcribed text to input field
                                setInput(value);
                                // Focus the input field so user can see the text and edit if needed
                                setTimeout(()=>{
                                    if (inputRef.current) {
                                        inputRef.current.focus();
                                        // Move cursor to end of text
                                        inputRef.current.setSelectionRange(value.length, value.length);
                                    }
                                }, 100);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/prompt-form.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        size: "icon",
                                        disabled: input === '',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowElbow"], {}, void 0, false, {
                                                fileName: "[project]/components/prompt-form.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Send message"
                                            }, void 0, false, {
                                                fileName: "[project]/components/prompt-form.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/prompt-form.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/prompt-form.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                    children: "Send message"
                                }, void 0, false, {
                                    fileName: "[project]/components/prompt-form.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/prompt-form.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/prompt-form.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/prompt-form.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/prompt-form.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(PromptForm, "w8zGijFFJpO1bdEZA1XD9TpFLI4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$enter$2d$submit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnterSubmit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"]
    ];
});
_c = PromptForm;
var _c;
__turbopack_refresh__.register(_c, "PromptForm");

})()),
"[project]/components/chat-panel.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatPanel": ()=>ChatPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2d$scroll$2d$to$2d$bottom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/button-scroll-to-bottom.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/prompt-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
function ChatPanel({ input, setInput, isAtBottom, scrollToBottom }) {
    _s();
    const [messages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"])();
    const [selectedTags, setSelectedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [initialRender, setInitialRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const exampleMessages = [
        {
            tag: 'technology',
            heading: 'Teknoloji',
            message: `Teknoloji ile ilgili etkinlikleri söyler misin?`,
            icon: '💻'
        },
        {
            tag: 'entertainment',
            heading: 'Eğlence',
            message: `Eğlence ile ilgili etkinlikleri söyler misin?`,
            icon: '🎉'
        },
        {
            tag: 'culture-art',
            heading: 'Kültür & Sanat',
            message: `Kültür & Sanat ile ilgili etkinlikleri söyler misin?`,
            icon: '🎭'
        },
        {
            tag: 'sport',
            heading: 'Spor',
            message: `Spor ile ilgili etkinlikleri söyler misin?`,
            icon: '🏃‍♂️'
        },
        {
            tag: 'kids',
            heading: 'Çocuk',
            message: `Çocuk ile ilgili etkinlikleri söyler misin?`,
            icon: '🎈'
        },
        {
            tag: 'education',
            heading: 'Eğitim',
            message: `Eğitim ile ilgili etkinlikleri söyler misin?`,
            icon: '📚'
        },
        {
            tag: 'science',
            heading: 'Bilim',
            message: `Bilim ile ilgili etkinlikleri söyler misin?`,
            icon: '🔬'
        },
        {
            tag: 'gastronomy',
            heading: 'Gastronomi',
            message: `Gastronomi ile ilgili etkinlikleri söyler misin?`,
            icon: '🍽️'
        }
    ];
    function handleCategoryClick(tag) {
        setSelectedTags((prevSelected)=>{
            const isAlreadySelected = prevSelected.includes(tag);
            const updatedTags = isAlreadySelected ? prevSelected.filter((c)=>c !== tag) : [
                ...prevSelected,
                tag
            ];
            if (!isAlreadySelected && !initialRender) {
                setTimeout(()=>{
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }, 100);
            }
            return updatedTags;
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInitialRender(false);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 w-full duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2d$scroll$2d$to$2d$bottom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonScrollToBottom"], {
                isAtBottom: isAtBottom,
                scrollToBottom: scrollToBottom
            }, void 0, false, {
                fileName: "[project]/components/chat-panel.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto sm:max-w-2xl sm:px-4",
                children: [
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg border-l-[3px] text-muted-foreground mb-3 px-3 mx-4 sm:mx-0 font-bold",
                                children: "İlgi alanlarınızı seçiniz"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-panel.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0",
                                children: exampleMessages.map((example)=>{
                                    const isSelected = selectedTags.includes(example.tag);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `cursor-pointer rounded-lg border p-2 md:p-4 block ${isSelected ? 'bg-blue-100' : 'bg-white'}`,
                                        onClick: ()=>handleCategoryClick(example.tag),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 items-center",
                                            children: [
                                                example.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: example.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat-panel.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold flex-1 line-clamp-1",
                                                    children: example.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat-panel.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this),
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircledIcon"], {}, void 0, false, {
                                                    fileName: "[project]/components/chat-panel.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat-panel.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this)
                                    }, example.heading, false, {
                                        fileName: "[project]/components/chat-panel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/chat-panel.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptForm"], {
                            input: input,
                            setInput: setInput,
                            selectedTags: selectedTags,
                            inputRef: inputRef
                        }, void 0, false, {
                            fileName: "[project]/components/chat-panel.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat-panel.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-panel.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-panel.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ChatPanel, "IjtZL4mokhHaR2Q9n5Qyge7EIMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"]
    ];
});
_c = ChatPanel;
var _c;
__turbopack_refresh__.register(_c, "ChatPanel");

})()),
"[project]/components/empty-screen.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EmptyScreen": ()=>EmptyScreen
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function EmptyScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = EmptyScreen;
var _c;
__turbopack_refresh__.register(_c, "EmptyScreen");

})()),
"[project]/lib/hooks/use-scroll-anchor.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useScrollAnchor": ()=>useScrollAnchor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
const useScrollAnchor = ()=>{
    _s();
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (messagesRef.current) {
            messagesRef.current.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
            });
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messagesRef.current) {
            if (isAtBottom && !isVisible) {
                messagesRef.current.scrollIntoView({
                    block: 'end'
                });
            }
        }
    }, [
        isAtBottom,
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { current } = scrollRef;
        if (current) {
            const handleScroll = (event)=>{
                const target = event.target;
                const offset = 25;
                const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - offset;
                setIsAtBottom(isAtBottom);
            };
            current.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ()=>{
                current.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (visibilityRef.current) {
            let observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            }, {
                rootMargin: '0px 0px -150px 0px'
            });
            observer.observe(visibilityRef.current);
            return ()=>{
                observer.disconnect();
            };
        }
    });
    return {
        messagesRef,
        scrollRef,
        visibilityRef,
        scrollToBottom,
        isAtBottom,
        isVisible
    };
};
_s(useScrollAnchor, "kcELlIAUeXCyJOfbDblqwcx7ATQ=");

})()),
"[project]/components/chat.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Chat": ()=>Chat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empty$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/empty-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scroll$2d$anchor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-scroll-anchor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
function Chat({ id, className }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"])();
    const [aiState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // if (session?.user) {
        if (!path.includes('chat') && messages.length === 1) {
            window.history.replaceState({}, '', `/fuar-asistani/chat/${id}`);
        }
    // }
    }, [
        id,
        path,
        messages
    ]);
    // }, [id, path, session?.user, messages])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const messagesLength = aiState.messages?.length;
        if (messagesLength === 2) {
            router.refresh();
        }
    }, [
        aiState.messages,
        router
    ]);
    const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scroll$2d$anchor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnchor"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]",
        ref: scrollRef,
        children: [
            messages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pb-[200px] pt-4 md:pt-10', className),
                ref: messagesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatList"], {
                        messages: messages
                    }, void 0, false, {
                        fileName: "[project]/components/chat.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-px",
                        ref: visibilityRef
                    }, void 0, false, {
                        fileName: "[project]/components/chat.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empty$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyScreen"], {}, void 0, false, {
                fileName: "[project]/components/chat.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPanel"], {
                input: input,
                setInput: setInput,
                isAtBottom: isAtBottom,
                scrollToBottom: scrollToBottom
            }, void 0, false, {
                fileName: "[project]/components/chat.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Chat, "BDChTd9gHgcAkq1sIhbRnutrIwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scroll$2d$anchor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnchor"]
    ];
});
_c = Chat;
var _c;
__turbopack_refresh__.register(_c, "Chat");

})()),
"[project]/app/fuar-asistani/(chat)/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_ed7541._.js.map