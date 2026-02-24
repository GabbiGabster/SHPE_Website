import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Members } from "./pages/Members";
import { Sponsorship } from "./pages/Sponsorship";
import { GetPluggedIn } from "./pages/GetPluggedIn";
import { Leadership } from "./pages/Leadership";
export default function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navbar, {}), _jsx("div", { id: "main-content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/members", element: _jsx(Members, {}) }), _jsx(Route, { path: "/sponsorship", element: _jsx(Sponsorship, {}) }), _jsx(Route, { path: "/get-plugged-in", element: _jsx(GetPluggedIn, {}) }), _jsx(Route, { path: "/leadership", element: _jsx(Leadership, {}) })] }) })] }) }));
}
