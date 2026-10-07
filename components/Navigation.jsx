"use client";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Projects" },
  { href: "#tech_stack", label: "Tech Stacks" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [active, setActive] = useState("about");

  // header-fixed shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY >= 1);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // one-page active-section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const updateActive = () => {
      const scrollTop = window.scrollY;
      const headerHeight =
        document.querySelector(".header-fixed")?.offsetHeight || 0;
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - headerHeight;
        const bottom = top + section.offsetHeight;
        if (scrollTop >= top && scrollTop < bottom) current = section.id;
      });
      if (current) setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const headerHeight =
      document.querySelector(".header-fixed")?.offsetHeight || 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={`header header-fixed${isFixed ? " is-fixed" : ""}`}>
        <div className="header-inner d-flex align-items-center justify-content-between">
          <a href="#" className="site-logo">
            <img
              src="/images/logo/logo-3.png"
              width={196}
              height={31}
              alt="logo"
            />
          </a>
          <nav className="main-menu lg-hide">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} style={{ display: "contents" }}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-title text_white link nav_link${
                    active === link.href.slice(1) ? " active" : ""
                  }`}
                >
                  {link.label}
                </a>
                {/* {i < NAV_LINKS.length - 1 && <span className="dot" />} */}
              </span>
            ))}
          </nav>
          <div className="header-right d-flex gap_12">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="tf-btn style-border btn-hover-animation-fill md-hide"
            >
              <span>
                <i className="icon-ArrowRight arr-1" />
                <span className="btn-text">Hire Me</span>
                <FaArrowRight className="arr-2" />
              </span>
              <span className="bg-effect" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen((o) => !o);
              }}
              className={`side-toggle d-lg-none${open ? " open" : ""}`}
            >
              <div className="icon">
                <span className="top" />
                <span className="middle" />
                <span className="bottom" />
              </div>
            </a>
          </div>
        </div>
      </header>

      <div className={`side-menu-mobile${open ? " show" : ""}`}>
        <div className="tf-container h-100">
          <div className="menu-content h-100">
            <div className="menu-body">
              <ul className="nav-menu-list text-center">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`menu-link link nav_link${
                        active === link.href.slice(1) ? " active" : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-footer d-flex justify-content-between">
              <div className="menu-bot_left flex-wrap">
                <a className="h6 text-white link" href="ni3262019@gmai.com">
                  ni3262019@gmai.com
                </a>
                <span className="br-dot" />
                <a className="h6 text-white link" href="tel:+2348101037375">
                  (+234) 810 103 7375
                </a>
              </div>
              {/* <div className="menu-bot_right">
                <ul className="tf-social-icon">
                  <li>
                    <a href="#" className="social-dribbble">
                      <i className="icon icon-Dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-behance">
                      <i className="icon icon-Behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-instagram">
                      <i className="icon icon-Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-facebook">
                      <i className="icon icon-FaceBook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-x">
                      <i className="icon icon-X" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
