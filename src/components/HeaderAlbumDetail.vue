<template>
  <div class="card card--header-album-detail">
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile is-multiline header-top">
          <div class="column is-half-desktop is-full-mobile header-top__left">
            <h3 class="title left" style="margin-bottom: 0">{{ album.title }}</h3>
            <div>
              <time>{{ album.date.toString() }}</time>
            </div>
          </div>
          <div class="column has-text-right is-half-desktop is-full-mobile header-top__right">
            <div
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
              <div class="favorite-text">{{ album.isFavorite ? 'Unfavorite Album' : 'Favorite Album' }}</div>
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
         <div class="columns is-mobile is-multiline header-bottom">
          <div class="column is-half-desktop is-full-mobile header-bottom__left">
            <p style="margin-bottom: 0">{{ album.description }}</p>
          </div>
          <div class="column has-text-right is-half-desktop is-full-mobile header-bottom__right">
            <ul class="meta-list">
              <li class="meta-list__item">{{ album.photos.length }} Photos</li>
              <!-- <li class="meta-list__item">2 Videos</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import { mapMutations } from 'vuex'
  export default {
    props: {
      album: Object
    },
    methods: {
      ...mapMutations({
        'onToggleFavorite': 'TOGGLE_FAVORITE_ALBUM'
      })
    },
  }
</script>

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
          margin-top: 5px;
        }
      }
    }
  }
  .header-bottom {
    .column {
      padding: 0 0.75rem;
    }
    &__right {
      ul {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        li {
          list-style: none;
          margin: 0;
          padding: 0 5px;
          font-size: 14px;
          &:not(:last-child) {
            border-right: 1px solid #ddd;
          }
        }
      }
    }
  }
</style>
