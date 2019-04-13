<template>
  <div class="card card--album-custom">
    <div class="card-image">
      <figure class="image is-4by3">
        <router-link :to="'/album-detail/' + album.id">
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
        <span
          class="btn-favorite"
          @click="onToggleFavorite(album.id)"
        >
          <b-icon
            pack="fas"
            icon="star"
            size="is-small"
            :type="album.isFavorite ? 'is-warning' : ''"
          >
          </b-icon>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    props: {
      album: Object,
    },
    computed: {
      mainImage() {
        const { photos } = this.album;
        if(photos && Array.isArray(photos) && photos[0]) {
          return photos[0].imageUrl;
        }
        return require('@/assets/no_image_available.png');
      }
    },
    methods: {
      ...mapMutations({
        'onToggleFavorite': 'TOGGLE_FAVORITE_ALBUM'
      })
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
    &-content {
      min-height: 120px;
      max-height: 150px;
      overflow: hidden;
      a {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        color: #666;
      }
    }
    &-footer {
      &-item {
        justify-content: flex-end;
        .btn-favorite {
          cursor: pointer;
        }
      }
    }
  }
</style>

