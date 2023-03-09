import '../styles/font.css';
import '../styles/globals.css';
import '../styles/style.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { StyledEngineProvider } from '@mui/material';

import { Provider } from 'react-redux';
import { store } from '../modules';

/* Major components */
import NavBar from '../components/navigation';
import Progress from '../components/common/progress-bar/Progress';
import { useProgressStore } from '../store';
import { Footer } from '../components';

/* Components */

function MyApp({ Component, pageProps }) {

  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state)=> state.isAnimating);
  const router = useRouter(); 

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    }

    const handleStop = () => {
      setIsAnimating(false);
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
    router.events.off('routeChangeComplete', handleStop);
    router.events.off('routeChangeError', handleStop);
    }
  }, [router])

  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <main className='font-primary main-overflow bg-dark min-h-screen'>
          <NavBar/>
          <Progress isAnimating={isAnimating}/>
          <Component {...pageProps} />
          <Footer/>
        </main>
      </Provider>
    </StyledEngineProvider>
  )
}

export default MyApp
