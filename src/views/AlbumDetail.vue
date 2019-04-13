<template>
  <div class="detail" v-if="album && album.id">
    <header-album-detail :album="album"/>
    <list-photos :photos="album.photos"/>
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
