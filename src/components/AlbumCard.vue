<template>
  <div class="card card--album-custom">
    <div class="card-image">
      <figure class="image is-4by3">
        <router-link to="/album-detail">
          <img v-if="mainImage" :src="mainImage" :alt="album.title">
        </router-link>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">
            <router-link :to="'/album-detail/' + album.id">{{ album.title }}</router-link>
          </p>
          <p class="subtitle is-6" v-if=" album.photos">{{ album.photos.length }} photos</p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <b-button
          size="is-small"
          icon-pack="fas"
          icon-left="star"
          outlined
          @click="onFavorite"
        >
          Favorite
        </b-button>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
      album: Object
    },
    data(){
      return {
        isFavoriting: false,
      }
    },
    computed: {
      mainImage() {
        const { photos } = this.album;
        if(photos && Array.isArray(photos) && photos[0]) {
          return photos[0].imageUrl;
        }
        return '';
      }
    },
    methods: {
      onFavorite(){
      }
    },
  }
</script>
<style lang="scss" scoped>
  .card {
    &--album-custom {
      border-radius: 5px;
      height: 100%;
    }
    &-image {
      img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &-footer {
      &-item {
        justify-content: flex-end;
      }
    }
  }
</style>

