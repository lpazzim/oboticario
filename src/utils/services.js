import axios from '../helpers/AxiosHelper';
import config from '../config';

const baseUrl = config.baseUrl.url;
class Characters {
    static characters() {
        return axios.get(`${baseUrl}/characters`, {
            params: {
                apikey: config.publicApiKey,
                ts: config.timestamp,
                hash: config.md5Hash
            }
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}

export default Characters;
