import '@/styles/global.css'
import type { AppProps } from 'next/app'
import axios from 'axios';

//setup defualt instance of axios with base url for subsequent uses in all other components
axios.defaults.baseURL = "https://pokeapi.co/api/v2/"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
