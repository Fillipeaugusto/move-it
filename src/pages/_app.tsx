import React from 'react';
import { CallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (

   <CallengesProvider >
      <Component {...pageProps} />
   </CallengesProvider>
  
  )
}

export default MyApp
