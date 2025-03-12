import '../styles/globals.css'

// Import do Layout para que todas as páginas usem o mesmo layout
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
