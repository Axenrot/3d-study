import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="header">
      <Link
        href="/"
        className="h-10 w-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">YL</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/projects"}>Projects</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
