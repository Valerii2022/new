import axios from 'axios';

export class CountriesAPI {
  //   #API_KEY = '34628461-4bda2ae404146a46c3fd3a186';
  #BASE_API = 'https://restcountries.com/v3.1/all';

  //   page = 1;
  //   count = 40;
  //   query = null;

  baseSearchParams = {
    // key: this.#API_KEY,
    // per_page: this.count,
    // image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: true,
  };

  async fetchPhotos() {
    try {
      return await axios.get(
        `${this.#BASE_API}`
        //     , {
        // params: {
        //   q: this.query,
        //   page: this.page,
        //   ...this.baseSearchParams,
        // },
        //     }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
