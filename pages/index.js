import React from 'react';
import Layout from "../src/components/Layout";
import algoliasearch from "algoliasearch/lite";
import {withInstantSearch} from "next-instantsearch";
import {
    Configure,
    RefinementList,
    SearchBox,
    connectInfiniteHits,
    ClearRefinements, Stats, ScrollTo
} from "react-instantsearch-dom";

import '../styles/Home.module.css'
import CardGrid from "../src/components/CardGrid";
import RangeInputWidget from "react-instantsearch-dom/dist/cjs/widgets/RangeInput";

const searchClient = algoliasearch(
    "7QCHFZ2CJG",
    "653fe8191e38640ca63a56c76990e561"
);
const CustomHits = connectInfiniteHits(CardGrid);

const Home = () => {

    return (
        <Layout>
            <Configure hitsPerPage={20}/>
            <div className="row pt-3">
                <div className="col-md-2 col-xs-12 d-none d-sm-block">
                    <ClearRefinements clearsQuery/>
                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>Make</h5>
                    <RefinementList
                        attribute="make"
                        showMore
                        showMoreLimit={1000}
                    />
                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>Model</h5>
                    <RefinementList
                        attribute="model"
                        showMore
                        showMoreLimit={1000}
                    />
                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>Year</h5>
                    <RefinementList
                        attribute="year"
                        showMore
                        showMoreLimit={1000}
                    />
                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>Color</h5>
                    <RefinementList
                        attribute="ext_color"
                        showMore
                        showMoreLimit={1000}
                    />
                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>City</h5>
                    <RefinementList
                        attribute="city"
                        showMore
                        showMoreLimit={1000}
                    />
                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>Mileage</h5>
                    <RangeInputWidget attribute="mileage"/>
                </div>
                <div className="col-md-10 col-xs-12 pb-5 justify-content-center">

                    <SearchBox/>
                    <Stats/>
                    <ScrollTo scrollOn="query">
                        <CustomHits/>
                    </ScrollTo>
                </div>
            </div>


        </Layout>
    )
}


export default withInstantSearch({
    indexName: "cars",
    searchClient,
})(Home);
