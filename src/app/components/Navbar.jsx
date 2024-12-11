"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="flex"
          // className="text-2xl md:text-5xl text-white font-semibold w-20"
        >
          {/* LOGO   */}
        <SVGComponent/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar

const SVGComponent = (props) => (
  <svg
    id={205966512}
    viewBox="0 0 370 74.43007497327018"
    height={74.43007497327018}
    width={370}
    style={{
      width: 370,
      height: "74.4301px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0.435676)",
      zIndex: 0,
      cursor: "pointer",
      overflow: "visible",
    }}
    {...props}
  >
    <defs id="SvgjsDefs2242">
      <linearGradient id="SvgjsLinearGradient2247">
        <stop id="SvgjsStop2248" stopColor="#006838" offset={0} />
        <stop id="SvgjsStop2249" stopColor="#96cf24" offset={1} />
      </linearGradient>
      <linearGradient id="SvgjsLinearGradient2250">
        <stop id="SvgjsStop2251" stopColor="#006838" offset={0} />
        <stop id="SvgjsStop2252" stopColor="#96cf24" offset={1} />
      </linearGradient>
    </defs>
    <g
      id="SvgjsG2243"
      featurekey="symbolFeature-0"
      transform="matrix(1.1404120107296454,0,0,1.1404120107296454,-7.020599992691451,-24.742016063145858)"
      fill="url(#SvgjsLinearGradient2247)"
    >
      <g xmlns="http://www.w3.org/2000/svg" transform="translate(0,-952.36218)">
        <path
          style={{
            textIndent: 0,
            textTransform: "none",
            direction: "ltr",
            blockProgression: "tb",
            baselineShift: "baseline",
            color: "",
            enableBackground: "accumulate",
          }}
          d="m 53.593797,977.56534 -13,47.99996 5.8124,1.5937 13,-47.99991 -5.8124,-1.59375 z m -20.4688,3.4375 -23.9999995,18.99996 -2.9688,2.375 2.9688,2.3438 23.9999995,19 3.75,-4.7188 -21.031199,-16.625 21.031199,-16.65622 -3.75,-4.71875 z m 33.750001,0 -3.750001,4.71875 21.031206,16.65621 -21.031206,16.625 3.750001,4.7188 24.000004,-19 2.968801,-2.3438 -2.968801,-2.375 -24.000004,-18.99996 z"
          fill="url(#SvgjsLinearGradient2247)"
          fillOpacity={1}
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </g>
    <g
      id="SvgjsG2244"
      featurekey="nameFeature-0"
      transform="matrix(2.658216963331078,0,0,2.658216963331078,116.81014395362722,-31.898603559972933)"
      fill="url(#SvgjsLinearGradient2250)"
    >
      <path d="M1.2 40 l0 -4.48 l0.84 -0.56 l0 -17.92 l-0.84 -0.56 l0 -4.48 l6.2 0 l5.84 14.96 l0 -9.92 l-0.84 -0.56 l0 -4.48 l6.72 0 l0 4.48 l-0.84 0.56 l0 22.96 l-5.36 0 l-5.84 -14.96 l0 9.92 l0.84 0.56 l0 4.48 l-6.72 0 z M23.032 40 l0 -4.48 l0.84 -0.56 l3.64 -17.92 l-0.84 -0.56 l0 -4.48 l10.64 0 l0 4.48 l-0.84 0.56 l3.64 17.92 l0.84 0.56 l0 4.48 l-4.96 0 l-1.24 -6.16 l-5.52 0 l-1.24 6.16 l-4.96 0 z M30.272000000000002 28.8 l3.44 0 l-1.72 -8.56 z M49.544000000000004 40 l-4.64 -22.96 l-0.84 -0.56 l0 -4.48 l4.96 0 l4 19.76 l4 -19.76 l4.96 0 l0 4.48 l-0.84 0.56 l-4.64 22.96 l-6.96 0 z M65.896 40 l0 -4.48 l0.84 -0.56 l0 -17.92 l-0.84 -0.56 l0 -4.48 l6.72 0 l0 4.48 l-0.84 0.56 l0 17.92 l0.84 0.56 l0 4.48 l-6.72 0 z M77.328 40 l0 -4.48 l0.84 -0.56 l0 -17.92 l-0.84 -0.56 l0 -4.48 l6.2 0 l5.84 14.96 l0 -9.92 l-0.84 -0.56 l0 -4.48 l6.72 0 l0 4.48 l-0.84 0.56 l0 22.96 l-5.36 0 l-5.84 -14.96 l0 9.92 l0.84 0.56 l0 4.48 l-6.72 0 z" />
    </g>
  </svg>
);



