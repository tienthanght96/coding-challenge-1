import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker'
import { generateListAlbums, generateNewAlbum, getLastIndex, generateNewPhoto } from './utils/seedData';

Vue.use(Vuex);

const actionsTypes = {
  GENERATE_ALBUMS: 'GENERATE_ALBUMS',
};
const mutationsTypes = {
  GENERATE_ALBUMS_PENDING: 'GENERATE_ALBUMS_PENDING',
  GENERATE_ALBUMS_SUCCESS: 'GENERATE_ALBUMS_SUCCESS',
  GENERATE_ALBUMS_ERRORED: 'GENERATE_ALBUMS_ERRORED',
  ADD_NEW_ALBUM: 'ADD_NEW_ALBUM',
  ADD_NEW_PHOTO: 'ADD_NEW_PHOTO',
  TOGGLE_FAVORITE_ALBUM: 'TOGGLE_FAVORITE_ALBUM',
  TOGGLE_LIKE_PHOTO: 'TOGGLE_LIKE_ALBUM',
  UPDATE_PHOTO: 'UPDATE_PHOTO'
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
    },
    [mutationsTypes.ADD_NEW_ALBUM](state, { title, imageUrl }) {
      const list = state.listAlbums;
      const last_index = getLastIndex(list, 'index_album');
      const album = generateNewAlbum({ title, imageUrl }, last_index);
      state.listAlbums = [album].concat(list);
    },
    [mutationsTypes.ADD_NEW_PHOTO](state, { album_id, imageUrl }) {
      const album = state.listAlbums.find(a => a.id === album_id);
      if(album && album.id) {
        const { photos } = album;
        const last_index = getLastIndex(photos, 'index_photo');
        const photo = generateNewPhoto(album_id, last_index, imageUrl);
        album.photos = [photo].concat(photos);
      }
    },
    [mutationsTypes.UPDATE_PHOTO](state, { album_id, photo_id, data }) {
      const album = state.listAlbums.find(a => a.id === album_id);
      if(album && album.id) {
        const { photos } = album;
        const photo = photos.find(p => p.id === photo_id);
        if(photo && photo.id) {
          const newPhoto = { ...photo, ...data };
          album.photos = photos.map(p => {
            if(p.id !== photo_id) return p;
            return newPhoto;
          })
        }
      }
    }
  },
  actions: {
    [actionsTypes.GENERATE_ALBUMS]({ commit }) {
      commit(mutationsTypes.GENERATE_ALBUMS_PENDING);
      setTimeout(() => {
        commit(mutationsTypes.GENERATE_ALBUMS_SUCCESS, generateListAlbums(faker.random.number({ min: 0, max: 100 })));
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
