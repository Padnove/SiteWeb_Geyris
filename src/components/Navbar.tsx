import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css"
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);


  useEffect(() => {
      if (isMobile) {
            document.body.style.overflow = isOpen ? "hidden" : "auto";
        } else {
            document.body.style.overflow = "auto";
        }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMobile]);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar_link">
        <a style={{display: "flex", alignItems: "center", textDecoration: "none"}} href="#">
          <img src="/1000608225-removebg-preview.svg" width={"120px"} height={"120px"}/>
        </a>
      </div>
      <div
        className={`burger ${isOpen ? "active" : ""}`}
        onClick={(e) => { e.stopPropagation();     
        setIsOpen(isOpen => !isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink onClick={(e) => { e.stopPropagation();     
        setIsOpen(isOpen => !isOpen);
        }} to="/">Accueil</NavLink></li>

        <li><NavLink onClick={(e) => { e.stopPropagation();     
        setIsOpen(isOpen => !isOpen);
        }} to="/Comment-ça-marche">Comment ça marche</NavLink></li>

        <li><NavLink onClick={(e) => { e.stopPropagation();     
        setIsOpen(isOpen => !isOpen);
        }} to="/Tarifs">Tarifs</NavLink></li>

        <li><a onClick={(e) => { e.stopPropagation();     
        setIsOpen(isOpen => !isOpen);
        }} href="https://app.geyris.com" className="cta_button">Tester maintenant</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;