import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import {HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useLoader} from "@/assets/hooks/useLoader";
import "@/styles/nprogress.css";
import "@/styles/globals.css";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppPropsWithLayout) {

    useLoader()

    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydrateState}>
                <Component {...pageProps} />
            </HydrationBoundary>
        </QueryClientProvider>
       )
}