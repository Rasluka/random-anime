import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/my-fav-movies-fe">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Anime_Barnstar_Hires.png"
          className="mr-3 h-6 sm:h-9"
          alt="Main Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Random Anime
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
          {" "}
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link href="/">
          <Link to="/">Top Favorites</Link>
        </Navbar.Link>
        <Navbar.Link href="/">
          <Link to="/">Recommend Anime</Link>
        </Navbar.Link>
        <Navbar.Link>
          {" "}
          <Link to="/aboutme">About Me</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
