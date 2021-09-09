import Helmet from "next/head";
import imgFavicon from "../../../public/favicon.ico";
import React from "react";
import {WEB_FULL_BASE_URL} from "../../config/website";

const OgTags = ({
                    title = '',
                    description = '',
                    url = '',
                    type = 'website',
                    image = WEB_FULL_BASE_URL+'/buy-cars-ae-logo.jpg',
                }) => {
    return <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            {/*OG Tags*/}
            <meta property="og:title" content={title}/>
            <meta property="og:url" content={url}/>
            <meta property="og:type" content={type}/>
            <meta property="og:image" content={image}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>

            <link rel="icon" type="image/png" href={WEB_FULL_BASE_URL+'/buy-cars-ae-logo.jpg'}/>
        </Helmet>
    </>
};

export default OgTags;
