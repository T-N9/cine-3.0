import React from 'react';

const MovieId = ({message}) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>{message}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  }
}

export default MovieId;
