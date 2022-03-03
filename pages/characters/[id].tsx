import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface ID {
  id: number;
}
interface Rick {
  name: string;
  status: string;
  species: string;
  gender: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();

  const paths = results.map((item: ID) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch("https://rickandmortyapi.com/api/character/" + id);
  const data = await res.json();

  return {
    props: { rick: data },
  };
};

const Details: React.FC<Rick> = ({ name, status, species, gender }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </div>
  );
};

export default Details;
