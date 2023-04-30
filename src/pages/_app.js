import '@/styles/globals.css'
import '@/styles/dashboard.css'
import { Inter } from 'next/font/google'
import React from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const inter = Inter({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <style dangerouslySetInnerHTML={{
          __html: `
        :root {
          --font-inter: ${inter.style.fontFamily}
        }`}} />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
