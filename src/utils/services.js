import axios from '../helpers/AxiosHelper';
import config from '../config';

const baseUrl = config.baseUrl.url;
class BoticarioServices {
    static getUsers() {
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

    static postUser(dataUser) {
        return axios
            .post(`${baseUrl}/users`, dataUser)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static getProducts() {
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

    static getSales() {
        return axios
            .get(`${baseUrl}/sales`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static postSales(dataSale) {
        return axios
            .post(`${baseUrl}/sales`, dataSale)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static getCashBack() {
        return axios
            .get(`${baseUrl}/cashback`)
            .then((response) => {
               return response.data;
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    static postCashBack(dataCashBack) {
        return axios
            .post(`${baseUrl}/cashback`, dataCashBack)
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
