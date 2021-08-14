import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { defaultOptions } from '../config/cache';
import { SavedPlacesProvider } from '../providers/SavedPlaces';

const queryClient = new QueryClient({ defaultOptions });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SavedPlacesProvider>
        <Component {...pageProps} />
      </SavedPlacesProvider>
    </QueryClientProvider>
  )
}
export default MyApp
