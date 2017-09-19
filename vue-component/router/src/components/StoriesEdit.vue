<template>
  <div class="row">
    <h3>Editing</h3>
    <form>
      <div class="form-group col-md-offset-2 col-md-8">
        <input v-model="story.plot" class="form-control">
      </div>
      <div class="form-group col-md-12">
        <button class="btn btn-success" @click="saveChanges(story)">
          Save changes
        </button>
        <button class="btn btn-default" @click="goBack">Go back</button>
      </div>
    </form>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  props: ['id'],
  data () {
    return {
      story : {}
    }
  },
  methods : {
    isTheOne (story) {
      return story.id === this.id
    },
    saveChanges (story) {
      console.log('Saved!')
      this.$router.push('/stories')
    },
    goBack () {
      // this.$router.back() or this.$router.go(-1)
      this.$router.go(-1)
    }
  },
  mounted () {
    this.story = store.stories.find(this.isTheOne)
  }
}
</script>