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
  TOGGLE_FAVORITE_ALBUM: 'TOGGLE_FAVORITE_ALBUM',
  TOGGLE_LIKE_PHOTO: 'TOGGLE_LIKE_ALBUM',
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
    },
    [mutationsTypes.TOGGLE_FAVORITE_ALBUM](state, album_id) {
      const current = state.listAlbums.find(album => album.id === album_id);
      if(current) {
        current.isFavorite = !current.isFavorite;
      }
    },
    [mutationsTypes.TOGGLE_LIKE_PHOTO](state, { album_id, photo_id }) {
      if(!album_id || !photo_id) return;

      const current = state.listAlbums.find(album => album.id === album_id);
      if(current && current.photos && Array.isArray(current.photos)) {
        const { photos } = current;
        const currentPhoto = photos.find(photo => photo.id === photo_id);
        if(currentPhoto) {
          currentPhoto.isLike = !currentPhoto.isLike;
        }
      }
    }
  },
  actions: {
    [actionsTypes.GENERATE_ALBUMS]({ commit }) {
      commit(mutationsTypes.GENERATE_ALBUMS_PENDING);
      setTimeout(() => {
        commit(mutationsTypes.GENERATE_ALBUMS_SUCCESS, generateListAlbums(faker.random.number({ min: 1, max: 100 })));
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
