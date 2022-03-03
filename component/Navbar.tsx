import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a className="active">Home</a>
      </Link>
      <Link href="/episodes">
        <a>Episodes</a>
      </Link>
      <Link href="/characters">
        <a>Characters</a>
      </Link>
      <Link href="/locations">
        <a>Location</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
  );
}

export default Navbar;
