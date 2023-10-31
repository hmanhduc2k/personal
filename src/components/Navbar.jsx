import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, experiences, leadership } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  const [opacity, setOpacity] = useState(0);

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand text-white" href={process.env.PUBLIC_URL + "/#home"}>
        Hoang Manh Duc
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#aboutmed"}
            >
              About
            </NavLink>
          )}

          {experiences.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#experiences"}
            >
              Experiences
            </NavLink>
          )}

          {experiences.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#experiences"}
            >
              Education
            </NavLink>
          )}

          {repos.show && (

            <NavLink className="text-white nav-item"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}

          {leadership.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#leadership"}
            >
              Leadership
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#skills"}
              onClick={() => setOpacity(1-opacity)}
            >
              Skills
            </NavLink>
          )}

          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
