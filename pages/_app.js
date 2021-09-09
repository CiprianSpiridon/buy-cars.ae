// Include only the reset
import 'instantsearch.css/themes/reset.css';
// or include the full Satellite theme
import 'instantsearch.css/themes/satellite.css';
import '../styles/bootstrap.min.css'

import {GoogleAnalytics, usePagesViews} from "nextjs-google-analytics";


function MyApp({Component, pageProps}) {
    usePagesViews();

    return <>
        <GoogleAnalytics/>
        <Component {...pageProps} />
    </>
}

export default MyApp
