import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import colorScheme from "../colorScheme";

const TopBar = props => {
  const { pathName } = props;
  const [state, setState] = useState({
    menuOpen: false
  });

  const toggleMenuOpen = () => {
    setState({ ...state, menuOpen: !state.menuOpen });
  };
  return (
    <>
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 w-full">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <MenuLogo />
            <div className="w-0 lg:w-6" />
            <MobileMenuButton toggleMenuOpen={toggleMenuOpen} />
          </div>
          <MenuItems pathName={pathName} />
        </div>

        <div className="hidden md:block text-right">
          <MenuMainButton label="Sign Up" hrefLink="/form" />
        </div>
      </nav>
      <div
        className={
          "absolute top-0 inset-x-0 p-2 md:hidden  " +
          (state.menuOpen ? "block" : "hidden")
        }
      >
        <div className="rounded-lg shadow-md transition transform origin-top-right">
          <div className="rounded-lg bg-white shadow-xs overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <span className="font-title font-black text-2xl">SQUAD</span>
              </div>
              <div className="-mr-2">
                <button
                  onClick={toggleMenuOpen}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              <MenuItem
                label="Why Squad?"
                hrefLink="/why"
                pathName={pathName}
                mobileItem
              />
              <MenuItem
                label="Features"
                hrefLink="/features"
                pathName={pathName}
                mobileItem
              />
              <MenuItem
                label="Partners"
                hrefLink="/partners"
                pathName={pathName}
                mobileItem
              />
              <MenuItem
                label="About Us"
                hrefLink="/about"
                pathName={pathName}
                mobileItem
              />
            </div>
            <div>
              <MenuMainButton label="Sign Up" hrefLink="/form" mobileItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileMenuButton = props => {
  const { toggleMenuOpen } = props;
  return (
    <div className="-mr-2 flex items-center md:hidden">
      <button
        onClick={toggleMenuOpen}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
      >
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

const MenuItems = props => {
  const { pathName } = props;
  return (
    <div className="hidden md:flex md:ml-10 items-center h-full mt-2">
      <div className="mr-2">
        <MenuItem label="Why Squad?" hrefLink="/why" pathName={pathName} />
      </div>
      <MenuItem label="Partners" hrefLink="/partners" pathName={pathName} />
      <MenuItem label="About Us" hrefLink="/about" pathName={pathName} />
      <MenuItem label="FAQs" hrefLink="/faqs" pathName={pathName} />
    </div>
  );
};

const MenuItem = props => {
  const { label, hrefLink, pathName, mobileItem } = props;
  if (mobileItem) {
    return (
      <Link href={hrefLink}>
        <a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
          {label}
        </a>
      </Link>
    );
  }
  return (
    <div className="w-28 text-center">
      <Link href={hrefLink}>
        <a
          className={
            "font-medium pb-1 border-b-2 focus:outline-none focus:text-primary-700 focus:border-primary-700 focus:font-bold hover:text-primary-700 hover:border-primary-700 hover:font-bold transition duration-200 ease-in-out " +
            (pathName.startsWith(hrefLink)
              ? "text-primary-700 border-primary-700"
              : "text-gray-500 border-white")
          }
        >
          {label}
        </a>
      </Link>
    </div>
  );
};

const MenuLogo = () => {
  return (
    <div
      className="
        text-2xl font-black font-title
        sm:text-3xl
      "
    >
      <motion.div
        whileHover={{
          color: colorScheme["primary-700"],
          borderColor: colorScheme["primary-700"]
        }}
        whileTap={{
          color: colorScheme["primary-700"],
          borderColor: colorScheme["primary-700"]
        }}
      >
        <Link href="/">
          <a>SQUAD</a>
        </Link>
      </motion.div>
    </div>
  );
};

const MenuMainButton = props => {
  const { label, hrefLink, mobileItem } = props;

  if (mobileItem) {
    return (
      <Link href={hrefLink}>
        <a className="block w-full px-5 py-3 text-center font-bold text-primary-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
          {label}
        </a>
      </Link>
    );
  }

  return (
    <Link href={hrefLink}>
      <motion.button
        className="bg-primary-700 border-primary-700 border-2 text-white font-extrabold py-2 px-4 rounded-lg text-center focus:outline-none ml-10 w-24"
        whileHover={{
          color: colorScheme["primary-700"],
          backgroundColor: "#FFF"
        }}
        whileTap={{
          color: colorScheme["primary-700"],
          backgroundColor: "#FFF"
        }}
      >
        {label}
      </motion.button>
    </Link>
  );
};

export default TopBar;
