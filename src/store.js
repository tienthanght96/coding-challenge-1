import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker'
import { generateListAlbums } from './utils/seedData';

Vue.use(Vuex);

const actionsTypes = {
  GENERATE_ALBUMS: 'GENERATE_ALBUMS',
  ADD_NEW_ALBUM: 'ADD_NEW_ALBUM',
  ADD_NEW_PHOTO: 'ADD_NEW_PHOTO',
  ADD_TAGS_PHOTO: 'ADD_TAGS_PHOTO',
};
const mutationsTypes = {
  
  GENERATE_ALBUMS_PENDING: 'GENERATE_ALBUMS_PENDING',
  GENERATE_ALBUMS_SUCCESS: 'GENERATE_ALBUMS_SUCCESS',
  GENERATE_ALBUMS_ERRORED: 'GENERATE_ALBUMS_ERRORED',
  ADD_NEW_ALBUM_PENDING: 'ADD_NEW_ALBUM_PENDING',
  ADD_NEW_ALBUM_SUCCESS: 'ADD_NEW_ALBUM_SUCCESS',
  ADD_NEW_ALBUM_ERRORED: 'ADD_NEW_ALBUM_ERRORED',
  ADD_NEW_PHOTO_PENDING: 'ADD_NEW_PHOTO_PENDING',
  ADD_NEW_PHOTO_SUCCESS: 'ADD_NEW_PHOTO_SUCCESS',
  ADD_NEW_PHOTO_ERRORED: 'ADD_NEW_PHOTO_ERRORED',
};

export default new Vuex.Store({
  state: {
    listAlbums: [],
    isAppLoading: false,
    isPendingAddAlbum: false,
    isPendingAddPhoto: false,
  },
  mutations: {
    [mutationsTypes.GENERATE_ALBUMS_PENDING](state) {
      state.isAppLoading = true;
    },
    [mutationsTypes.GENERATE_ALBUMS_SUCCESS](state, listAlbums) {
      state.isAppLoading = false;
      state.listAlbums = [].concat(listAlbums);
    }
  },
  actions: {
    [actionsTypes.GENERATE_ALBUMS]({ commit }) {
      commit(mutationsTypes.GENERATE_ALBUMS_PENDING);
      setTimeout(() => {
        commit(mutationsTypes.GENERATE_ALBUMS_SUCCESS, generateListAlbums(faker.random.number({ min: 1, max: 12 })));
      }, 500)
    }
  },
  getters: {
    listAlbums: state => state.listAlbums,
    albumDetail: state => id => state.listAlbums.find(album => album.id === id),
    isAppLoading: state => state.isAppLoading,
    isPendingAddAlbum: state => state.isPendingAddAlbum,
    isPendingAddPhoto: state => state.isPendingAddPhoto,
  }
})
