<template>
  <div class="card card--album-custom">
    <div class="card-image">
      <figure class="image is-4by3">
        <router-link to="/album-detail">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </router-link>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">
            <router-link to="/album-detail">John Smith</router-link>
          </p>
          <p class="subtitle is-6">12 photos, 2 videos</p>
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
    data(){
      return {
        isFavoriting: false,
      }
    },
    methods: {
      onFavorite(){
        console.log('12312')
      }
    },
  }
</script>
<style lang="scss" scoped>
  .card {
    &--album-custom {
      border-radius: 5px;
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

