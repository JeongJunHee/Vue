<template>
  <div class="">
    <h3>All Stories ({{stories.length}})</h3>
    <ul class="list-group">
      <li v-for="story in stories" class="list-group-item">
        <h5>{{ story.writer }} said "{{ story.plot }}"
          <span class="badge">{{ story.upvotes }}</span>
        </h5>
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
    console.log('stories')
  }
}
</script>