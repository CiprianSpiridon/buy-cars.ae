import Image from 'next/image';


const CarCard = ({hit}) => {
    const addDefaultImage = (ev) => {
        ev.target.src='/buy-cars-no-photo-available.jpg'
    }

    return (
        <div
            className="card ml-5 my-lg-0 m-2 mb-4 p-0 border-0 bg-white shadow-sm"
            style={{
                maxWidth: '360px'
            }}
        >

                <div className="card-body m-0 p-0 ">
                <div
                    style={{
                        height:'270px',
                        overflow:'hidden',
                        display:'flex',
                        alignItems:'center'
                    }}
                >
                    <img
                        width={360}
                        src={hit.images[0]}
                        className="rounded-top rounded-3 "
                        onError={addDefaultImage}
                    />
                </div>
                <div className="p-2 pt-0">
                    <div className="row">
                        <h4 className="card-title">
                            {hit.year} {hit.make} {hit.model}
                        </h4>

                    </div>
                    <div className="row">
                        <div className="col-7">
                            <p
                                className="card-title"
                                style={{
                                    textAlign: 'left'
                                }}>
                                {hit.mileage} km
                            </p>
                        </div>
                        <div className="col-5">
                            <p
                                style={{
                                    textAlign: 'right'
                                }}>
                                {hit.currency} {hit.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard;
