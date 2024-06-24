import { useState } from "react";
import "./Header.css";
import { FaBars, FaX } from "react-icons/fa6";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      menu: "Story",
      url: "/story",
    },
    {
      id: 2,
      menu: "Modules",
      url: "/modules",
    },
    {
      id: 3,
      menu: "Upcoming Batch",
      url: "/upcoming-batch",
    },
    {
      id: 4,
      menu: "Events",
      url: "/events",
    },
    {
      id: 5,
      menu: "Blogs",
      url: "/blogs",
    },
    {
      id: 6,
      menu: "Contact",
      url: "/contact",
    },
  ];
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" loading="lazy" />
        </Link>
      </div>
      <nav className={openMenu ? "active" : ""}>
        <ul>
          {navItems &&
            navItems.map((i) => {
              return (
                <li key={i.id} onClick={() => setOpenMenu(!openMenu)}>
                  <Link to={i.url}>{i.menu}</Link>
                </li>
              );
            })}
        </ul>
        <FaX
          className="close"
          size={25}
          onClick={() => setOpenMenu(!openMenu)}
        />
      </nav>
      <FaBars
        className="bars"
        size={25}
        onClick={() => setOpenMenu(!openMenu)}
      />
    </header>
  );
};

export default Header;
