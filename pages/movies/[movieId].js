import Head from "next/head";

/* Constants */
// import { MOVIE_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
// import { MovieDetailPage } from "../../components";

export async function getServerSideProps({ query }) {
  const { movieId } = query;

  const res = await fetch(
    `https://dummyjson.com/products`
  );
  const data = await res.json();

  if (res.ok) {
    return {
      props: {
        id: movieId,
        movie: data,
      },
    };
  }
}

const MovieDetail = ({movie}) => {
  // const media_type = "movie";

  // const title = movie?.original_title;
  // const backdrop_path= `https://www.themoviedb.org/t/p/original${movie?.backdrop_path}`;
  // const overview = movie?.overview;

  console.log({movie})

  return (
    // <>
    //   <Head>
    //     <title>{title}</title>
    //     <meta name="title" content={title} />
    //     <meta name="description" content={overview} />
    //     {/* <!-- Open Graph / Facebook --> */}
    //     <meta property="og:type" content="website" />
    //     <meta
    //       property="og:url"
    //       content={`https://cine.tenyain.com/movies/${movie.id}`}
    //     />
    //     <meta property="og:title" content={title} />
    //     <meta property="og:description" content={overview} />
    //     <meta property="og:image" content={backdrop_path} />

    //     {/* <!-- Twitter --> */}
    //     <meta property="twitter:card" content="summary_large_image" />
    //     <meta
    //       property="twitter:url"
    //       content={`https://cine.tenyain.com/movies/${movie.id}`}
    //     />
    //     <meta property="twitter:title" content={title} />
    //     <meta property="twitter:description" content={overview} />
    //     <meta property="twitter:image" content={backdrop_path} />
    //   </Head>
    //   {/* className="mt-[70px] lg:mt-[60px]" */}
    //   <section>
    //     {/* <MovieDetailPage movieId={id} /> */}
    //     {/* <h1>{title}</h1> */}
    //   </section>
    // </>
    <>
      <h1>Hello</h1>
    </>
  );
};

export default MovieDetail;
