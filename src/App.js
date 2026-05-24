import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Members = lazy(() => import("./pages/Members").then((m) => ({ default: m.Members })));
const Sponsorship = lazy(() => import("./pages/Sponsorship").then((m) => ({ default: m.Sponsorship })));
const GetPluggedIn = lazy(() => import("./pages/GetPluggedIn").then((m) => ({ default: m.GetPluggedIn })));
const Leadership = lazy(() => import("./pages/Leadership").then((m) => ({ default: m.Leadership })));
/**
 * Vite sets BASE_URL to "/" in dev and to whatever `base` is in vite.config
 * in production.  React Router wants "" (empty string) for root, not "/".
 */
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;
function PageLoader() {
    return (_jsx("div", { className: "flex min-h-[50vh] items-center justify-center", "aria-label": "Loading page", role: "status", children: _jsx("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-[#1B365D] border-t-transparent" }) }));
}
export default function App() {
    return (_jsxs(Router, { basename: routerBasename, children: [_jsx(ScrollToTop, {}), _jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navbar, {}), _jsx("main", { id: "main-content", children: _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/members", element: _jsx(Members, {}) }), _jsx(Route, { path: "/sponsorship", element: _jsx(Sponsorship, {}) }), _jsx(Route, { path: "/get-plugged-in", element: _jsx(GetPluggedIn, {}) }), _jsx(Route, { path: "/leadership", element: _jsx(Leadership, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }) }) })] })] }));
}
