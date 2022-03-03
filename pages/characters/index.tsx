import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface Rick {
  id: number;
  image: string;
}

interface PageProps {
  rick: Rick[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  //   console.log("data");

  return {
    props: { rick: data.results },
  };
};

const RickCharacters = ({ rick }: PageProps) => {
  return (
    <div>
      <h1> All Rick and Morty Characters</h1>
      {rick.map((item) => (
        <Link href={"/characters/" + item.id} key={item.id}>
          <a>
            {/* <h3> {item.name} </h3> */}
            <Image src={item.image} width="500" height="300" />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default RickCharacters;
