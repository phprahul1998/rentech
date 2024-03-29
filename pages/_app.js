import Navbar from '../components/Navbar'
import '../styles/index.css'
import '../styles/navbar.css'
import '../styles/multistep.css'

import i18next from 'i18next'
import { initReactI18next } from "react-i18next"
import Backend from 'i18next-http-backend'
import 'bootstrap/dist/css/bootstrap.css'

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: '/translations/{{lng}}/translations.json'
    }
  })


function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
    <Navbar />
    <div className='section'>
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
