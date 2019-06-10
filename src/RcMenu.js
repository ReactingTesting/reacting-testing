import React from "react";
import { NavLink } from "react-router-dom";
import Menu, { SubMenu, MenuItem } from "rc-menu";
import "rc-menu/assets/index.css";
import classNames from "classnames";
import { useMedia } from "./useMedia";
import "./RcMenu.css";

export default function RcMenu({ toggleMenu, menuIsExpanded }) {
  const isDesktop = useMedia(["(min-width: 600px)"], [true], false);
  const expandIcon = isDesktop ? "▿" : "";

  return (
    <div className="menu-container">
      <Menu
        mode={isDesktop ? "horizontal" : "inline"}
        className={classNames({
          mymenu: true,
          isopen: menuIsExpanded,
          "mymenu-mobile": !isDesktop,
          mainmenu: true
        })}
        selectable={false}
      >
        {/* Home */}
        <MenuItem key="home" className="mymenuitem mainmenu">
          <NavLink
            to="/"
            className="menu-link"
            activeClassName="selected"
            exact
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </MenuItem>
        
          {/* Bingo */}
          <MenuItem key="bingo" className="mymenuitem mainmenu">
            <NavLink
              to="/bingo"
              className="menu-link"
              activeClassName="selected"
              onClick={toggleMenu}
            >
              Bingo
            </NavLink>
          </MenuItem>


        {/* Countdown */}
        <MenuItem key="timer" className="mymenuitem mainmenu">
          <NavLink
            to="/timer"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Countdown
          </NavLink>
        </MenuItem>

        {/* Quiz */}
        <MenuItem key="quiz" className="mymenuitem mainmenu">
          <NavLink
            to="/quiz"
            className="menu-link"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            Quiz
          </NavLink>
        </MenuItem>

        <SubMenu
          key="misc"
          title={"Misc" + expandIcon}
          className="mysubmenu mainmenu"
        >

          {/* Episode Randomizer */}
          <MenuItem key="episode-randomizer" className="mymenuitem mainmenu">
            <NavLink
              to="/episode-randomizer"
              className="menu-link"
              activeClassName="selected"
              onClick={toggleMenu}
            >
              Episode Randomizer
            </NavLink>
          </MenuItem>

          {/* Videos */}
          <MenuItem key="episode-randomizer" className="mymenuitem mainmenu">
            <NavLink
              to="/videos"
              className="menu-link"
              activeClassName="selected"
              onClick={toggleMenu}
            >
              Videos
            </NavLink>
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}
