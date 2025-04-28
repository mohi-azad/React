import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);
  const searchLinkRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const currentPath = location.pathname;
  const menuItems = [
    { path: "/startsidan", label: "START" },
    { path: "/brollop", label: "BRÖLLOP" },
    { path: "/foretag", label: "FÖRETAG" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/kontakt", label: "KONTAKT" },
  ];
  const visibleMenuItems = menuItems.filter(item => item.path !== currentPath);

  // visa sökrutan när man klickar på "SÖK"
  const handleSearchClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchVisible(true);
  };

  // att dölja sökrutan om man klickar utanför den
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchLinkRef.current &&
        event.target !== searchLinkRef.current
      ) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // fokusera sökrutan när den visas
  useEffect(() => {
    if (searchVisible && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchVisible]);

  return (
    <nav className="navbar">
      <h3>
        Andreas Regrådh <br />
        Fotografering
      </h3>

      <ul className={`nav-items ${menuVisible ? "active" : ""}`}>
        {visibleMenuItems.map(item => (
          <li key={item.path}>
            <NavLink to={item.path} onClick={closeMenu}>
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <a
            href="#"
            id="söklänk"
            ref={searchLinkRef}
            onClick={(e) => {
              //closeMenu();
              handleSearchClick(e);
            }}
          >
            SÖK
          </a>
        </li>
      </ul>

      <input
	  type="text"
	  id="sökruta"
	  ref={searchRef}
	  placeholder="Sök här..."
	  className={window.innerWidth < 768 && searchVisible ? "mobile-center-search" : ""}
	  style={{display: searchVisible ? "inline-block" : "none",
		backgroundColor: "#e8f0fe",
		border: "2px solid #103e77",
		width: window.innerWidth < 768 ? "80%" : "200px",
		padding: "4px 8px",
		borderRadius: "4px",
		position: "absolute",
		top: menuVisible ? "auto" : "80px", 
        left: window.innerWidth < 768 ? "10%" : "auto",
        right: window.innerWidth < 768 ? "10%" : "20px",
        margin: window.innerWidth < 768 ? "10px auto" : "0",
		/*
		top: "80px", 
		right: window.innerWidth < 768 ? "auto" : "20px", 
		*/
    	zIndex: 1000,
	}}
  	onClick={(e) => e.stopPropagation()}
/>

      <div
        className={`hamburger ${menuVisible ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Header;
