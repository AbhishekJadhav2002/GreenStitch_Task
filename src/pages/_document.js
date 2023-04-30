import { Html, Head, Main, NextScript } from 'next/document'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchCarbonFootprint, fetchEmission } from '@/api/requests'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await Promise.allSettled([
    queryCache.prefetchQuery('carbon_footprint', fetchCarbonFootprint),
    queryCache.prefetchQuery('emission', fetchEmission)
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}