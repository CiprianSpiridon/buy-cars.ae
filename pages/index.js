import React, {useState} from 'react';
import Layout from "../src/components/Layout";
import algoliasearch from "algoliasearch/lite";
import {withInstantSearch} from "next-instantsearch";
import {
    Configure,
    RefinementList,
    SearchBox,
    connectInfiniteHits,
    ClearRefinements,
    Stats,
    ScrollTo
} from "react-instantsearch-dom";

import '../styles/Home.module.css'
import CardGrid from "../src/components/CardGrid";
import RangeInputWidget from "react-instantsearch-dom/dist/cjs/widgets/RangeInput";
import FiltersModal from "../src/components/FiltersModal";
import {WEB_FULL_BASE_URL} from "../src/config/website";

const og_tags = {
    'title': 'Buy Cars in UAE - Your search engine for used cars in the UAE',
    'description': 'The UAE\'s number 1 search engine for used cars. Browse though thousands of used cars in the you',
    'url': WEB_FULL_BASE_URL,
    'type': 'website'
};

const searchClient = algoliasearch(
    "6UV2AZNA78",
    "b560773303be19e4030ec91adb97f0d9"
);
const CustomHits = connectInfiniteHits(CardGrid);

const Home = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <Layout og_tags={og_tags}>
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

                    <h5 className="pt-3" style={{fontWeight: 'bold'}}>Price: </h5>
                    <RangeInputWidget attribute="price"/>
                </div>
                <div className="col-md-10 col-xs-12 pb-5 justify-content-center">

                    <SearchBox/>

                    <Stats/>
                    <ScrollTo scrollOn="query">
                        <CustomHits/>
                    </ScrollTo>
                </div>

                <div
                    className="row align-items-center justify-content-center d-sm-none"
                    style={{
                        position: "fixed",
                        bottom: '20px'
                    }}
                >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            style={{
                                width: '200px',
                                backgroundColor: 'white'
                            }}

                            onClick={() => {
                                setShowFilters(true);
                                console.log('toggle show filters', showFilters);
                            }}
                        >
                            FILTERS
                        </button>
                </div>
            </div>
            <div className="d-block d-sm-none">

                <div
                    style={{
                        display: (showFilters === true ? 'block' : 'none')
                    }}
                >
                    <FiltersModal
                        displayModal={setShowFilters}
                    >
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
                        <h5 className="pt-3" style={{fontWeight: 'bold'}}>Price: </h5>
                        <RangeInputWidget attribute="price"/>
                    </FiltersModal>
                </div>
            </div>
            <p className="mt-5"></p>

        </Layout>
    )
}


export default withInstantSearch({
    indexName: "cars",
    searchClient,
})(Home);
