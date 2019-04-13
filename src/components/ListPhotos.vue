<template>
  <div class="list-photos">
    <div class="columns is-mobile is-multiline is-1-mobile ">
      <div class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <new-photo-card />
      </div>
      <div v-for="(photo) in photos" :key="photo.id" class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <photo-card :photo="photo"/>
      </div>
    </div>
  </div>
</template>
<script>
  import PhotoCard from '@/components/PhotoCard.vue';
  import NewPhotoCard from '@/components/NewPhotoCard.vue';
  export default {
    components: {
      PhotoCard,
      NewPhotoCard
    },
    props: {
      photos: Array
    }
  }
</script>

<style lang="scss" scoped>
  .list-photos {
    padding: 3rem 0;
  }
</style>
