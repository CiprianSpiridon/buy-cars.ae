import React from 'react';
import Layout from "../src/components/Layout";
import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
    Configure,
    Highlight,
    Hits,
    Pagination,
    RefinementList,
    SearchBox,
    connectHits,
    connectRefinementList,
    InfiniteHits,
    createInfiniteHitsSessionStorageCache,
    connectInfiniteHits
} from "react-instantsearch-dom";

import '../styles/Home.module.css'
import CardGrid from "../src/components/CardGrid";
import CheckboxFilterList from "../src/components/CheckboxFilterList";

const searchClient = algoliasearch(
    "7QCHFZ2CJG",
    "653fe8191e38640ca63a56c76990e561"
);


const CustomHits = connectInfiniteHits(CardGrid);
const sessionStorageCache = createInfiniteHitsSessionStorageCache();





const Home = () => {

    return (
        <Layout>
            <Configure hitsPerPage={20} />
            <div className="row pt-3">
                <div className="col-md-2 col-xs-12">
                    <h4 className="pt-3" style={{fontWeight:'bold'}}>Make</h4>
                    <RefinementList attribute="make" />
                    <h4 className="pt-3"  style={{fontWeight:'bold'}}>Model</h4>
                    <RefinementList attribute="model" />
                    <h4 className="pt-3"  style={{fontWeight:'bold'}}>Year</h4>
                    <RefinementList attribute="year" />
                    <h4 className="pt-3"  style={{fontWeight:'bold'}}>Color</h4>
                    <RefinementList attribute="ext_color" />
                </div>
                <div className="col-md-10 col-xs-12 pb-5">
                    <SearchBox />
                    <CustomHits/>
                    {/*<Pagination />*/}
                    {/*<InfiniteHits*/}

                    {/*    cache={sessionStorageCache}*/}
                    {/*/>*/}
                </div>
            </div>


        </Layout>
    )
}


export default withInstantSearch({
    indexName: "cars",
    searchClient,
})(Home);
