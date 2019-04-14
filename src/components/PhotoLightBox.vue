<template>
   <b-modal :active.sync="isOpen" :width="800" scroll="keep" :onCancel="handleClose">
    <div class="light-box-container">
      <div class="columns is-mobile is-multiline light-box">
        <div class="column is-half-desktop is-full-mobile light-box__left">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                  <img :src="dataPhoto.imageUrl" alt="Image">
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-half-desktop is-full-mobile light-box__right has-background-white">
          <section class="has-background-white">
            <b-field label="Caption">
              <b-input v-model="dataPhoto.caption" type="textarea" :has-counter="false"></b-input>
            </b-field>
            <b-field label="Date">
              <b-input v-model="dataPhoto.date" :disabled="true"></b-input>
            </b-field>
            <b-field label="Tags">
              <multiselect
                v-model="value"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="code"
                :options="options"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              >
              </multiselect>
            </b-field>
            <div
              class="field"
              v-for="(checkbox) in checkboxes" :key="checkbox.code"
            >
              <b-checkbox v-model="checkbox.checked" >
                {{ checkbox.name }}
              </b-checkbox>
            </div>
             <div class="buttons">
              <b-button rounded @click="handleClose">Close</b-button>
              <b-button rounded type="is-primary" @click="handleUpdate">Save</b-button>
            </div>
        </section>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
  import Multiselect from 'vue-multiselect'
  import { mapMutations } from 'vuex'
  import faker from 'faker'

  export default {
    components: {
      Multiselect
    },
    props: {
      isOpenModal: Boolean,
      onCloseModal: { type: Function },
      photo: Object
    },
    data() {
      return {
        value: [],
        options: [],
        checkboxes: [],
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
      dataPhoto(){
        const photo = Object.assign({}, JSON.parse(JSON.stringify(this.photo)));
        const tags = Array.isArray(photo.tags) ? photo.tags.slice() : [];
        const checkboxes = Array.isArray(photo.checkboxes) ? photo.checkboxes.slice() : [];
        this.value = tags;
        this.options = tags;
        this.checkboxes = checkboxes;
        return photo;
      },
    },
    methods: {
      ...mapMutations({
        'updatePhoto': 'UPDATE_PHOTO'
      }),
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: faker.random.uuid()
        };
        this.options = this.options.concat([tag]);
        this.value = this.value.concat([tag]);
      },
      handleUpdate() {
        const { checkboxes, value, dataPhoto } = this;
        const newData = { ...dataPhoto, checkboxes, tags: value };
        const album_id = this.$route.params.album_id;
        this.updatePhoto({ album_id, photo_id: dataPhoto.id, data: newData });
        this.snackbar();
      },
       snackbar() {
        this.$snackbar.open({
          duration: 2000,
          queue: false,
          message: "Update photo success !",
          type: 'is-success',
          position: 'is-top-right'
        });
      },
      handleClose() {
        this.onCloseModal();
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
  .light-box-container {
    padding: 1.5rem;
  }
</style>
