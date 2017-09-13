Vue.component("story", {
    template : "#template-story-raw",
    props : ["story"],
    methods : {
        upvoteStory : function(story) {
            story.upvotes++;
            this.$http.put('http://localhost:3000/api/stories/' + story.id, story)
        },
        editStory : function(story) {
            story.editing = true;
            story.resetPlot = story.plot;
            story.resetWriter = story.writer;
        },
        updateStory : function(story) {
            this.$http.put('http://localhost:3000/api/stories/' + story.id, story)
            story.editing = false;
        },
        cancleStory : function(story) {
            story.editing = false;
            story.plot = story.resetPlot;
            story.writer = story.resetWriter;
        },
        deleteStory : function(story) {
            var index = this.$parent.stories.indexOf(story)
            this.$parent.stories.splice(index, 1)
            this.$http.delete('http://localhost:3000/api/stories/' + story.id, story)
        },
        storeStory : function(story) {
            this.$http.post('http://localhost:3000/api/stories', story).then(function() {
                story.editing = false;
                vm.fetchStories();
            });
        }
    }
});

var vm = new Vue({
    el : "#app",
    data : {
        stories : [],
    },
    mounted : function() {
        this.fetchStories()
    },
    methods : {
        createStory : function() {
            var newStory = {
                "plot" : " ",
                "writer" : " ",
                "upvotes" : 0,
                "editing" : true
            };
            this.stories.push(newStory);
        },
        fetchStories : function() {
            this.$http.get('http://localhost:3000/api/stories')
            .then(function(res) {
                var storiesReady = res.data.map(function(story) {
                    story.editing = false;
                    story.resetPlot = '';
                    story.resetWriter = '';
                    return story;
                })
                Vue.set(vm, 'stories', storiesReady)
            })
        }
    }
})