import Head from "next/head";
import { useRouter } from "next/router";

/* Constants */
import { MOVIE_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
import { MovieDetailPage } from "../../components";

const MovieDetail = ({ id, movie }) => {
  // const media_type = "movie";

  // const title = movie?.original_title;
  // const backdrop_path= `https://www.themoviedb.org/t/p/original${movie?.backdrop_path}`;
  // const overview = movie?.overview;

  const router = useRouter();

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  console.log({ router });
  return (
    <>
      <section>{movie && <MovieDetailPage movieId={id} />}</section>
    </>
  );
};

export async function getStaticPaths() {
  const getData = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data);

  const paths = getData.results.map((d) => ({
    params: { movieId: d.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { movieId } = params;

  const getMovie = await fetch(
    `${MOVIE_DETAIL}${movieId}?api_key=${API_KEY}&language=en-US`,
    { timeout: 5000 } // Increase timeout to 5 seconds
  )
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      id: movieId,
      movie: getMovie,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default MovieDetail;
