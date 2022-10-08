import { Navbar } from "flowbite-react";

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
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">My Favs</Navbar.Link>
        <Navbar.Link href="/">Create Your List</Navbar.Link>
        <Navbar.Link href="/aboutme">About Me</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
