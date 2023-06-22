import type {AppProps} from 'next/app';
import {ReactElement, ReactNode} from 'react';
import {NextPage} from 'next';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import React, { useState } from 'react';


export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient)
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client = {queryClient}>
      
      <Hydrate state={pageProps.dehydrateState}>
       <Component {...pageProps} /> 
      </Hydrate>
      
    </QueryClientProvider>
  
  );
}
