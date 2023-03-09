import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Movies = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('/discover/movies/popular');
    }, []);

    return (
        <>
        </>
    );
}

export default Movies;
