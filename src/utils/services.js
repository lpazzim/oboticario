import axios from '../helpers/AxiosHelper';
import config from '../config';

const baseUrl = config.baseUrl.url;
class BoticarioServices {
    static users() {
        return axios
            .get(`${baseUrl}/users`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static products() {
        return axios
            .get(`${baseUrl}/products`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
}

export default BoticarioServices;
