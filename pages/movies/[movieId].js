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

  console.log({ movie });
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading...</div>;
  }

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

  return {
    paths: getData?.results?.map((d) => ({
      params: { movieId: d.id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { movieId } = context.params;

  const getMovie = await fetch(`${MOVIE_DETAIL}${movieId}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      id: movieId,
      movie: getMovie,
    },
  };
}

export default MovieDetail;
