import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";

import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
    )
}
