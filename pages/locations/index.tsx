import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface Rick {
  name: string;
  id: number;
}

interface PageProps {
  rick: Rick[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  const data = await res.json();

  //   console.log("data");

  return {
    props: { rick: data.results },
  };
};

const RickLocations = ({ rick }: PageProps) => {
  return (
    <div>
      <h1> All Rick and Morty Locations</h1>
      {rick.map((item) => (
        <h3 key={item.id}> {item.name} </h3>
      ))}
    </div>
  );
};

export default RickLocations;
