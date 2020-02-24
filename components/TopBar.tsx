import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const TopBar = props => {
  const { pathName } = props;
  const [state, setState] = useState({ openedMenu: null });

  return (
    <div id="topbar" className="flex px-8 py-4 items-center">
      <MenuLogo />
      <div className="flex-1" />
      <div className="items-center hidden md:flex md:mt-2">
        <MenuItemWithSubmenu
          label="Why Squad?"
          state={state}
          setState={setState}
        >
          <SubmenuItem label="How it works" linkHref="/why" />
          <SubmenuItem label="Solutions" linkHref="/why#solutions" />
          <SubmenuItem label="Privacy" linkHref="/why#safety" />
        </MenuItemWithSubmenu>
        <MenuItemWithSubmenu label="Partners" state={state} setState={setState}>
          <SubmenuItem label="Our partners" linkHref="/partner" />
          <SubmenuItem label="Become a partner" linkHref="/partner#join" />
        </MenuItemWithSubmenu>
        <BasicMenuItem label="Blog" linkHref="/blog" pathName={pathName} />
        <BasicMenuItem label="Login" linkHref="/login" pathName={pathName} />
        <MenuMainButton label="Sign Up" linkHref="/signup" />
      </div>
    </div>
  );
};

const MenuLogo = () => {
  const handleMenuItemOnClick = () => {
    window.analytics.track("Menu Logo Clicked");
  };
  return (
    <div
      className="
        text-2xl font-black font-title
        sm:text-3xl
      "
    >
      <motion.div
        whileHover={{
          color: "#2B6CB0",
          borderColor: "#2B6CB0"
        }}
        whileTap={{
          color: "#2B6CB0",
          borderColor: "#2B6CB0"
        }}
        onClick={handleMenuItemOnClick}
      >
        <Link href="/">
          <a>squad</a>
        </Link>
      </motion.div>
    </div>
  );
};

const BasicMenuItem = props => {
  const { label, linkHref, pathName } = props;
  const handleMenuItemOnClick = () => {
    window.analytics.track("Menu Item Clicked", {
      label
    });
  };

  return (
    <Link href={linkHref}>
      <motion.button
        whileHover={{
          color: "#2B6CB0"
        }}
        className="ml-6 font-semibold flex items-center"
        onClick={handleMenuItemOnClick}
      >
        <motion.span
          className={
            "border-b-2 mt-1 " +
            (pathName.startsWith(linkHref) ? "border-blue-700" : "border-white")
          }
          whileHover={{
            borderColor: "#2B6CB0"
          }}
        >
          {label}
        </motion.span>
      </motion.button>
    </Link>
  );
};

const MenuItemWithSubmenu = props => {
  const { label, children, state, setState } = props;
  const handleMenuItemOnClick = () => {
    window.analytics.track("Submenu Item Clicked", {
      label
    });
    if (state.openedMenu !== label) {
      setState({ ...state, openedMenu: label });
    } else {
      setState({ ...state, openedMenu: null });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        whileHover={{
          color: "#2B6CB0"
        }}
        className="ml-6 font-semibold flex items-center"
        onClick={() => handleMenuItemOnClick()}
      >
        <motion.span
          className="border-b-2 border-white mt-1"
          whileHover={{
            borderColor: "#2B6CB0"
          }}
        >
          {label}
        </motion.span>
        &nbsp;
        <motion.div
          className="inline"
          animate={state.openedMenu === label ? "selected" : "unselected"}
          variants={{
            unselected: {
              rotate: "0deg",
              marginBottom: 0,
              marginTop: "10px"
            },
            selected: {
              rotate: "180deg",
              marginBottom: "10px",
              marginTop: 0
            }
          }}
        >
          <FiChevronDown size={20} style={{ marginBottom: 2 }} />
        </motion.div>
      </motion.button>
      <motion.div
        animate={state.openedMenu === label ? "selected" : "unselected"}
        variants={{
          unselected: {
            opacity: "0",
            color: "#fff",
            borderColor: "#fff"
          },
          selected: {
            opacity: "1",
            color: "#000",
            borderColor: "#000"
          }
        }}
        className="absolute m-auto w-48 mt-20 flex rounded-lg top-0 border-2 border-black"
      >
        <div className="m-auto flex flex-col py-4 text-center">{children}</div>
      </motion.div>
    </div>
  );
};

const SubmenuItem = props => {
  const { label, linkHref } = props;
  const handleMenuItemOnClick = () => {
    window.analytics.track("Submenu Item Clicked", {
      label
    });
  };

  return (
    <Link href={linkHref}>
      <motion.button
        whileHover={{
          color: "#2B6CB0"
        }}
        className="py-1 hover:font-semibold"
        onClick={handleMenuItemOnClick}
      >
        <motion.span
          className="border-b-2 border-white mt-1"
          whileHover={{
            borderColor: "#2B6CB0"
          }}
        >
          {label}
        </motion.span>
      </motion.button>
    </Link>
  );
};

const MenuMainButton = props => {
  const { label, linkHref } = props;
  const handleMenuItemOnClick = () => {
    window.analytics.track("Menu Main Button Clicked", {
      label
    });
  };
  return (
    <Link href={linkHref}>
      <motion.button
        className="bg-blue-700 border-blue-700 border-2 text-white font-extrabold py-2 px-4 rounded-lg text-center focus:outline-none ml-10"
        onClick={handleMenuItemOnClick}
        whileHover={{
          color: "#2B6CB0",
          backgroundColor: "#FFF"
        }}
        whileTap={{
          color: "#2B6CB0",
          backgroundColor: "#FFF"
        }}
      >
        {label}
      </motion.button>
    </Link>
  );
};

export default TopBar;
