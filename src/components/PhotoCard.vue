<template>
  <div class="card card--photo-custom">
    <div
      class="card-image"
      :style="`background-image: url('${photo.imageUrl}')`"
      @click="onOpenLightBox"
    >
    </div>
    <div class="card-actions">
      <div class="btn-like"
        @click="onToggleLike({ album_id: photo.album_id, photo_id: photo.id })"
      >
        <b-icon
          pack="fas"
          icon="heart"
          size="is-small"
          :type="photo.isLike ? 'is-danger' : 'is-white'"
        >
        </b-icon>
      </div>
    </div>
    <photo-light-box :isOpenModal="isOpenLightBox" :onCloseModal="onOpenLightBox" :photo="Object.assign({}, photo)"/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import PhotoLightBox from '@/components/PhotoLightBox.vue';

  export default {
    components: {
      PhotoLightBox
    },
    props: {
      photo: Object
    },
    data(){
      return {
        isLiked: false,
        isOpenLightBox: false,
      }
    },
    methods: {
      onOpenLightBox() {
        this.isOpenLightBox = !this.isOpenLightBox;
      },
      ...mapMutations({
        'onToggleLike': 'TOGGLE_LIKE_ALBUM'
      })
    },
  }
</script>
<style lang="scss" scoped>
  .card {
    height: 250px;
    &--photo-custom {
      border-radius: 5px;
    }
    &-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &-actions {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      height: 40px;
      background-color: hsla(0,0%,4%,.86);
      display: flex;
      align-items: center;
      padding: 0 20px;
      .btn-like {
        display: inline-block;
        cursor: pointer;
      }
    }
  }
</style>

