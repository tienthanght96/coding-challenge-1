<template>
  <div class="home">
    <b-tabs v-model="active_tab" class="tabs--custom">
      <b-tab-item :label="`Albums(${listAlbums.length})`">
        <list-albums :listAlbums="listAlbums" />
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
  import { mapGetters } from 'vuex';
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
    },
    computed: {
      ...mapGetters(['listAlbums']),
    },
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
