<template>
  <div class="card card--header-album-detail">
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile header-top">
          <div class="column is-6 header-top__left">
            <h3 class="title left" style="margin-bottom: 0">2018 SEO</h3>
            <div>
              <time>23 Jun 2019</time>
            </div>
          </div>
          <div class="column has-text-right is-6 header-top__right">
            <div class="btn-favorite">
              <b-icon
                pack="fas"
                icon="star"
                size="is-small"
              >
              </b-icon>
              <div class="favorite-text">Favorite Album</div>
            </div>
            <div>
              <b-icon
                pack="fas"
                icon="ellipsis-v"
                size="is-small"
              >
              </b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card--header-album-detail {
    position: relative;
    &::before {
      position: absolute;
      width: 100px;
      height: 5px;
      z-index: 1;
      top: -2px;
      content: '';
      background-color: var(--main-color);
    }
  }
  .header-top {
    &__right {
      display: flex;
      justify-content: flex-end;
      .btn-favorite{
        margin-right: 10px;
        text-align: center;
        cursor: pointer;
        .favorite-text {
          font-size: 14px;
        }
      }
    }
  }
</style>
