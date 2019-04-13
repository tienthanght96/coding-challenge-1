<template>
  <div class="card card--create-photo">
    <div class="card-image">
      <div class="card-create-container">
        <div class="btn-create" @click="onOpenPopup">
          <b-icon
            pack="fas"
            icon="plus"
            size="is-medium"
            type="is-white"
          >
          </b-icon>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <p class="title is-6">Add photo</p>
    </div>
    <popup-new-photo :isOpenModal="isOpenPopup" :onCloseModal="onOpenPopup" />

  </div>
</template>

<script>
  import PopupNewPhoto from '@/components/PopupNewPhoto.vue';

  export default {
    data(){
      return {
        isOpenPopup: false,
      }
    },
    components: {
      PopupNewPhoto
    },
    methods: {
      onOpenPopup() {
        this.isOpenPopup = !this.isOpenPopup;
      }
    },
  }
</script>
<style lang="scss" scoped>
  .card {
    height: 250px;
    &-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    &-create-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ccc;
      .btn-create {
        cursor: pointer;
        border: 4px solid #fff;
        border-radius: 50%;
        padding: 10px;
        &:hover {
          border-color: hsl(204, 86%, 53%);
           & * {
             color: hsl(204, 86%, 53%) !important;
           }
        }
      }
    }

    &-actions {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      height: 40px;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 14px;
    }
  }
</style>