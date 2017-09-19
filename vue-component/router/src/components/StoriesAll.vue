<template>
  <div class=" ">
    <h3>All Stories ({{stories.length}})</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="story in stories">
          <h4>{{ story.writer }} said "{{ story.plot }}"
            <span class="badge">{{ story.upvotes }}</span>
          </h4>
          <router-link :to="{ name : 'stories.edit', params : { id : story.id }}" tag="button" class="btn btn-default" exact>
            Edit
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  data () {
    return {
      stories: store.stories
    }
  },
  mounted () {
    console.log('stories');
  }
}
</script>