<template>
  <div class="card card--create-image">
    <div class="card-image">
      <figure class="image is-4by3">
        <div class="card-create-container">
          <div class="btn-create">
            <b-icon
              pack="fas"
              icon="plus"
              size="is-medium"
              type="is-white"
            >
            </b-icon>
          </div>
        </div>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">Create New <br/> Album</p>
        </div>
      </div>
    </div>
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
    &--create-image {
      border-radius: 5px;
      height: 100%;
      figure {
        background-color: #ccc;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &-create-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
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
  }
</style>

