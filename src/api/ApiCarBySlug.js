import axios from "axios";
import {API_CARS_URL} from "../config/website";

const ApiCarBySlug = async (slug) => {

    console.log(`${API_CARS_URL}/${slug}`);

    const car = await axios.get(`${API_CARS_URL}/${slug}`)
    // console.log(car );
    return car.data;
}

export default ApiCarBySlug;
