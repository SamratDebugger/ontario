import { Link } from "react-router";

export default function NavMenu() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </>
  );
}
