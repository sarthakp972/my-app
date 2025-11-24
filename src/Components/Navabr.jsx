import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar as RBNavbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
 
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  const handleLinkClick = () => {
    setExpanded(false); 
  };

  return (
    <RBNavbar
      expand="lg"
      expanded={expanded}
      className="py-3 shadow-sm"
      style={{
        background: "#0d0d0d",
        borderBottom: "2px solid #d4af37",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      <Container>
        {/* BRAND LOGO */}
        <RBNavbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-2"
          style={{
            color: "#d4af37",
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "1px",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "inline-block" }}
          >
            Bushra <span style={{ color: "white" }}>Mehendi</span> Art
          </motion.span>
        </RBNavbar.Brand>

        {/* MOBILE TOGGLE */}
        <RBNavbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "#d4af37" }}
          onClick={() => setExpanded(expanded ? false : true)}
        >
          {expanded ? <FaTimes color="#0d0d0d" /> : null}
        </RBNavbar.Toggle>

        {/* NAV LINKS */}
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fw-semibold align-items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ position: "relative" }}
              >
                <NavLink
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active-link" : "")
                  }
                  style={{
                    color: "#f5f5f5",
                    fontSize: "1.15rem",
                    fontFamily: "'Poppins', serif",
                  }}
                >
                  {item.name}
                  <span className="hover-line"></span>
                </NavLink>
              </motion.div>
            ))}

            {/* CART ICON */}
          
      
   
           
          </Nav>
        </RBNavbar.Collapse>
      </Container>

      {/* CSS for hover & active animation */}
      <style>{`
        .nav-link {
          position: relative;
          transition: 0.3s;
        }
        .hover-line {
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 3px;
          width: 0%;
          background-color: #d4af37;
          border-radius: 2px;
          transition: 0.4s;
        }
        .nav-link:hover .hover-line {
          width: 100%;
        }
        .active-link {
          color: #d4af37 !important;
        }
        .active-link .hover-line {
          width: 100%;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: #0d0d0d;
            padding: 20px;
            border-radius: 10px;
            margin-top: 10px;
          }
        }
      `}</style>
    </RBNavbar>
  );
}
