<template>
  <div class="list-albums">
    <div class="columns is-mobile is-multiline is-1-mobile ">
      <div class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <NewAlbumCard />
      </div>
      <div v-for="(album) in listAlbums" :key="album.id" class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <album-card :album="album"/>
      </div>
    </div>
  </div>
</template>
<script>

  import AlbumCard from '@/components/AlbumCard.vue';
  import NewAlbumCard from '@/components/NewAlbumCard.vue';
  export default {
    components: {
      AlbumCard,
      NewAlbumCard
    },
    props: {
      listAlbums: Array
    }
  }
</script>

<style lang="scss" scoped>
  .list-albums {
    padding: 3rem 1.5rem;
  }
</style>
