import Head from "next/head";

/* Constants */
import { MOVIE_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
import { MovieDetailPage } from "../../components";

export async function getServerSideProps(context) {
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

const MovieDetail = ({ id, movie }) => {
  // const media_type = "movie";

  // const title = movie?.original_title;
  // const backdrop_path= `https://www.themoviedb.org/t/p/original${movie?.backdrop_path}`;
  // const overview = movie?.overview;

  console.log({ movie });

  return (
    <>
      <section>
        <MovieDetailPage movieId={id} />
      </section>
    </>
  );
};

export default MovieDetail;
