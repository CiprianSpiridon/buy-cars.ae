import Layout from "../../src/components/Layout";
import ApiCarBySlug from "../../src/api/ApiCarBySlug";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";


const CarDetails = ({slug, car}) => {
    const router = useRouter();

    let features = null;

    features = car.features ? JSON.parse(car.features): null;

    const [selectedImage, setSelectedImage] = useState(null);

    const addDefaultImage = (ev) => {
        ev.target.src = '/buy-cars-no-photo-available.jpg'
    }
    return (
        <Layout>

            <div className="row">
                <button
                    type="button"
                    className="btn btn-light  my-4 p-1 align-content-start col-3 col-lg-1"
                    onClick={() => router.back()}
                >
                        <span className="col-4 py-2">
                            <Image height="22px" width="22px" src="/icons8-back-50.png"/>
                        </span>
                    <span
                        className="col-10"
                        style={{
                            marginLeft: '5px',
                            fontSize: '18px'
                        }}
                    >Back</span>
                </button>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>Used {car.make.name} {car.model.name} {car.year} </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <img
                            src={selectedImage ? selectedImage : car.images.length > 0 ? car.images[0] : '/buy-cars-no-photo-available.jpg'}
                            className="rounded rounded-3 img-fluid"
                            onError={addDefaultImage}
                        />
                    </div>
                    <div
                        style={{
                            overflowX: "scroll",
                            overflowY: "hidden",
                            height: '130px'
                        }}
                        className="mt-4"
                    >
                        <div
                            className="row justify-content-center"
                            style={{
                                height: '130px',
                                width: (car.images.length * 165) + 'px'
                            }}
                        >
                            {
                                car.images.map((car_image, key) => (
                                    <div
                                        style={{
                                            height: '125px',
                                            width: '165px'
                                        }}
                                        onClick={() => setSelectedImage(car_image)}
                                        key={key}
                                    >
                                        <img
                                            src={car_image}
                                            className="rounded rounded-3 img-fluid"
                                            onError={addDefaultImage}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 pt-5 pt-lg-0">
                    <div className="row border-bottom py-2">
                        <div className="col-6"><h4>Price</h4></div>
                        <div className="col-6"><h4>AED {car.price} </h4></div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Make</div>
                        <div className="col-6">{car.make.name}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Model</div>
                        <div className="col-6">{car.model.name}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Year</div>
                        <div className="col-6">{car.year}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Exterior Color</div>
                        <div className="col-6">{car.ext_color}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Interiour Color</div>
                        <div className="col-6">{car.int_color}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Body</div>
                        <div className="col-6">{car.body_type}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Mileage</div>
                        <div className="col-6">{car.mileage}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Fuel</div>
                        <div className="col-6">{car.fuel_type}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-6">Specs</div>
                        <div className="col-6">{car.regional_specs}</div>
                    </div>
                    <div className="row border-bottom py-2">
                        {
                            features && features.length > 0 && <h3 className="border-bottom mt-3">Features:</h3>
                        }

                        {
                            features && features.length > 0 && features.map((feature, index) => (
                                <div key={index} className="col-12 col-xl-4" style={{display: 'flex'}}>
                                    <Image height="23px" width="23px" src="/icons8-tick-box-24.png"/>
                                    <div
                                        style={{
                                            marginLeft: '5px'
                                        }}
                                    >{feature}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div
                        className="row d-none d-sm-block"
                        style={{
                            marginTop:'10px'
                        }}
                    >
                        <div className="col-12">
                            <Link
                                href={car.source_link}

                            >
                                <a
                                    target='_blank'
                                    className="btn-primary btn "
                                >
                                    Contact Seller
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="row px-5 d-block d-sm-none"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    width: '100%'
                }}
            >

                <Link
                    href={car.source_link}

                >
                    <a
                        target='_blank'
                        className="btn-primary btn "
                    >
                        Contact Seller
                    </a>
                </Link>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </Layout>
    );
}

export default CarDetails;

export const getStaticProps = async ({params}) => {

    const car = await ApiCarBySlug(params.slug);

    if (!car) {
        return {
            notFound: true,
            revalidate: 60
        }
    }

    return {
        props: {
            car: car.data,
            slug: params.slug
        },
        revalidate: 86400
    }
}

export async function getStaticPaths({params}) {

    return {
        paths: [],
        fallback: 'blocking',
    }
}

