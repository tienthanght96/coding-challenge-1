<template>
  <div class="detail">
    <HeaderAlbumDetail />
    <ListPhotos />
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
        console.log(this.albumDetail(this.$route.params))
        return []
      }
    },
    mounted() {
      console.log('HeaderAlbumDetail',this.$route.params)
      
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    padding: 30px;
  }
</style>
