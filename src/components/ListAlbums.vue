<template>
  <div class="list-albums">
    <div class="columns is-mobile is-multiline is-1-mobile ">
      <div class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <NewAlbumCard />
      </div>
      <div v-for="(item, index) in 6" :key="index" class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <album-card />
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
    }
  }
</script>

<style lang="scss" scoped>
  .list-albums {
    padding: 3rem 1.5rem;
  }
</style>
