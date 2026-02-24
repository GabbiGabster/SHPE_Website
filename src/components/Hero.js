import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import logo from "";
// To use a local image, uncomment the line below and add your image to src/images/
// import washUCampus from "../images/washu-campus.jpg";
export function Hero() {
    // Option 1: Use a local image (uncomment when image is added)
    // const imageUrl = washUCampus;
    // Option 2: Use a URL (replace with your WashU campus image URL)
    const imageUrl = "https://admissions.washu.edu/app/uploads/2025/06/COMM-12317_6027.jpg";
    return (_jsx("section", { className: "relative", "aria-labelledby": "hero-heading", children: _jsxs("div", { className: "relative w-full h-[600px] md:h-[700px] overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat", style: {
                        backgroundImage: `url('${imageUrl}')`,
                    }, role: "img", "aria-label": "Washington University in St. Louis campus during sunset", children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#1B365D]/80 via-[#1B365D]/60 to-[#1B365D]/80" }) }), _jsx("div", { className: "relative z-10 h-full flex items-center justify-center px-4 sm:px-6", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("div", { className: "mb-6 sm:mb-8 flex justify-center" }), _jsx("h1", { id: "hero-heading", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 px-2 text-white font-bold drop-shadow-lg leading-tight", children: "Welcome to WashU SHPE" }), _jsx("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto drop-shadow-md px-2", children: "Society of Hispanic Professional Engineers at Washington University in St. Louis" })] }) })] }) }));
}
