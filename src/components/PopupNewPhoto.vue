<template>
  <b-modal :active.sync="isOpen" has-modal-card :onCancel="handleCloseModal">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New Photo</p>
      </header>
      <section class="modal-card-body">
         <b-field class="file">
          <b-upload v-model="file">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload image</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="file">
            {{ file.name }}
          </span>
        </b-field>
        <img class="img-review" :src="imageBase64" v-if="imageBase64"/>
      </section>

      <footer class="modal-card-foot">
        <button class="button" type="button" @click="handleCloseModal">Close</button>
        <button class="button is-primary" :disabled="disabled" @click="submit">Add</button>
      </footer>
    </div>
  </b-modal>
</template>
<script>
  import { mapMutations } from 'vuex';
  import { convertToBase64 } from '@/utils/image';

  export default {
    props: {
      isOpenModal: Boolean,
      onCloseModal: { type: Function },
    },
    data() {
      return {
        file: null,
        imageBase64: '',
      }
    },
    computed: {
      isOpen: {
        get: function () {
          return this.isOpenModal
        },
        set: function() {
        }
      },
      disabled(){
        return (!this.imageBase64 || this.imageBase64.trim().length < 1)
      }
    },
    watch: {
      file: function() {
        if(this.file) {
          convertToBase64(this.file, (result) => {
           this.imageBase64 = result;
          })
        }
      },
    },
    methods: {
      ...mapMutations({
        'addNewPhoto': 'ADD_NEW_PHOTO'
      }),
      handleCloseModal: function() {
        this.resetValue();
        this.onCloseModal();
      },
      resetValue: function() {
        this.file = null;
        this.imageBase64 = '';
      },
      submit: function() {
        const { imageBase64 } = this;
        this.addNewPhoto({ album_id: this.$route.params.album_id, imageUrl: imageBase64 });
        this.handleCloseModal();
      }
    }
  }
</script>
<style lang="scss" scoped>
  .img-review {
    max-width: 200px;
    border: 1px solid #ddd;
    max-height: 200px;
  }
</style>
