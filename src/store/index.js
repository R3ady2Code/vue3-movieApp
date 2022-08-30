import { createStore } from 'vuex';
import axios from 'axios';
import moment from 'moment';

const URL = 'https://kinopoiskapiunofficial.tech';

const config = {
  headers: {
    'X-API-KEY': 'c1ae7cf9-64da-40b9-af7e-e7fb6e805e10',
    'Content-Type': 'application/json',
  },
};

export default createStore({
  state: {
    loading: false,
  },
  getters: {
    getLoadingStatus(state) {
      return state.loading;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getNewestsMovies() {
      const year = moment().format('YYYY');
      const mounth = moment().format('MMMM');

      const { data } = await axios.get(
        URL + `/api/v2.2/films/premieres?year=${year}&month=${mounth}`,
        config,
      );

      const premieres = data.items.filter((movie) => movie.year === year - 1).slice(0, 5);

      return premieres;
    },
    async getClassicsMovies() {
      const { data } = await axios.get(
        URL + `/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
        config,
      );

      return data.films.slice(0, 5);
    },
    async getPopularMovies() {
      const { data } = await axios.get(
        URL + `/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
        config,
      );

      return data.films.slice(0, 5);
    },
  },
  modules: {},
});
