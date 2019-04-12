<template>
  <div class="home">
    <b-tabs v-model="active_tab" class="tabs--custom">
      <b-tab-item label="Albums">
          <ListAlbums />
      </b-tab-item>

      <b-tab-item label="Media">
        <b-message title="Error !" type="is-info" :closable="false">
          OPPS NOT FOUND !
        </b-message>

      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import ListAlbums from '@/components/ListAlbums.vue'

export default {
  name: 'home',
  components: {
    ListAlbums
  },
  data() {
    return {
      active_tab: 0,
    }
  }
}
</script>

<style lang="scss">
  .tabs--custom {
    ul {
      li.is-active a {
        border-bottom: 2px solid var(--main-color) !important;
        color: var(--main-color) !important;
        font-weight: bold;
      }
    }
  }
</style>
