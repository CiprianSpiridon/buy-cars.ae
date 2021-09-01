import CarCard from "../CarCard";

const CardGrid = ({
                      hits,
                      hasPrevious,
                      refinePrevious,
                      hasMore,
                      refineNext
                  }) => {
    return (
        <>
            {
                hasPrevious ?
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center pt-5">
                            <button
                                className="btn btn-outline-primary col-lg-2 col-sm-12"
                                disabled={!hasPrevious}
                                onClick={refinePrevious}
                            >
                                Show previous
                            </button>
                        </div>
                    </div>
                    :
                    null
            }
            <div className="row pt-5 justify-content-center">
                {hits.map((hit, key) => (
                    <CarCard key={key} hit={hit}/>
                ))}
            </div>

            {
                hasMore ?
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <button
                                className="btn btn-outline-primary col-lg-2 col-sm-12 ml-2"
                                disabled={!hasMore}
                                onClick={refineNext}
                            >
                                Show more
                            </button>
                        </div>
                    </div>

                    :
                    null
            }

        </>
    )
}

export default CardGrid;
