<template>
  <div class="detail" v-if="album && album.id">
    <header-album-detail :album="album"/>
    <list-photos :photos="album.photos"/>
  </div>
  <div v-else>
    <b-notification
      type="is-danger"
      has-icon
      icon-pack="fas"
      :closable="false"
      role="alert"
    >
      Album is not exist ! <br/>
      <router-link to="/">Go to homepage</router-link>
    </b-notification>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import HeaderAlbumDetail from '@/components/HeaderAlbumDetail.vue';
  import ListPhotos from '@/components/ListPhotos.vue'

  export default {
    components: {
      HeaderAlbumDetail,
      ListPhotos
    },
    computed: {
      ...mapGetters(['albumDetail']),
      album () {
        if(this.$route.params.album_id) {
          const value = this.albumDetail(this.$route.params.album_id)
          return value;
        }
        return null;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .detail {
    padding: 30px;
  }
</style>
