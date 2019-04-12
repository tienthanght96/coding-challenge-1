<template>
  <div class="card card--photo-custom">
    <div
      class="card-image"
      style="background-image: url(https://bulma.io/images/placeholders/1280x960.png)"
      @click="onOpenLightBox"
    >
    </div>
    <div class="card-actions">
      <div class="btn-like">
        <b-icon
          pack="fas"
          icon="heart"
          size="is-small"
          type="is-white"
        >
        </b-icon>
      </div>
    </div>
    <photo-light-box :isOpenModal="isOpenLightBox" :onCloseModal="onOpenLightBox" />
  </div>
</template>

<script>
  import PhotoLightBox from '@/components/PhotoLightBox.vue';

  export default {
    components: {
      PhotoLightBox
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
      onLike(){
        console.log('12312')
      }
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

