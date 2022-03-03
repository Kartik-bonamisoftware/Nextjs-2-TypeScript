import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface Rick {
  id: number;
  name: string;
}

interface PageProps {
  rick: Rick[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await res.json();

  //   console.log("data");

  return {
    props: { rick: data.results },
  };
};

const RickEpisodes = ({ rick }: PageProps) => {
  return (
    <div>
      <h1> All Rick and Morty Episodes</h1>
      {rick.map((item) => (
        <h3 key={item.id}> {item.name} </h3>
      ))}
    </div>
  );
};

export default RickEpisodes;
