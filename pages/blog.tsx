import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        <li>
          <h3>Episode 1</h3>
        </li>
        <Link href="/blogPage/episode1">
          <a>Check the review</a>
        </Link>
        <li>
          <h3>Episode 2</h3>
        </li>
        <Link href=" /blogPage/episode2">
          <a>Check the review</a>
        </Link>
        <li>
          <h3>Episode 3</h3>
        </li>
        <Link href=" /blogPage/episode3">
          <a>Check the review</a>
        </Link>
        <li>
          <h3>Episode 4</h3>
        </li>
        <Link href="/episode4">
          <a>Check the review</a>
        </Link>
      </ul>
    </div>
  );
};

export default Blog;
