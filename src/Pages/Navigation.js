import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div style={{ backgroundColor: "tomato", padding: "1rem" }}>
        {/* <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/blog">
          Blog
        </Link>
        <Link className="link" to="/content">
          Content
        </Link> */}
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="link" to="/content">
          Content
        </NavLink>
        {/*  <a style={{ marginRight: "10px" }} href="/">
          Home
        </a>
        <a style={{ marginRight: "10px" }} href="/about">
          About
        </a>
        <a style={{ marginRight: "10px" }} href="/blog">
          Blog
        </a>
        <a style={{ marginRight: "10px" }} href="/content">
          Content
        </a> */}
      </div>
    </>
  );
};

export default Navigation;
