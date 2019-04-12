<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  import { generateListAlbums } from '@/utils/seedData';

  export default {
    methods: {
      ...mapActions({
        'getListAlbums': 'GENERATE_ALBUMS'
      })
    },
     computed: {
      ...mapGetters(['listAlbums']),
    },
    mounted(){
      this.getListAlbums()
    } 
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  max-width: 1200px;
  margin: 50px auto;
  background-color: #eaeaea;
}
:root {
  --main-color: hsl(204, 86%, 53%);
}
</style>
