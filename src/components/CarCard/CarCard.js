import Image from 'next/image';
import Link from "next/link";
import { DateTime } from "luxon";

const CarCard = ({hit}) => {

    const now = DateTime.now();
    const created_at = DateTime.fromSeconds(hit.created_at);

    const diff = now.diff(created_at);
    const diffInDays = Math.floor(diff.as('days'))

    const addDefaultImage = (ev) => {
        ev.target.src = '/buy-cars-no-photo-available.jpg'
    }

    return (
        <div
            className="card ml-5 my-lg-0 m-2 mb-4 p-0 border-0 bg-white shadow-sm mb-lg-4"
            style={{
                maxWidth: '360px'
            }}
        >
            <Link href={'/cars/'+hit.slug}>
                <a
                    // target="_blank"
                    style={{
                        textDecoration:"none"
                    }}
                    // rel="nofollow"
                >
                    <div className="card-body m-0 p-0 ">
                        <div
                            style={{
                                height: '270px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >

                            <img
                                width={360}
                                src={hit.images.length>0?hit.images[0]:'/buy-cars-no-photo-available.jpg'}
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
                            <div className="row">
                              <span className="px-2 text-muted">{ diffInDays === 0 ? 'Created Today':  diffInDays > 1 ? diffInDays+' days ago': diffInDays+' day ago'} </span>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default CarCard;
