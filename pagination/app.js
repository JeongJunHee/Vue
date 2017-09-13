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
        fetchStories : function(page_url) {
            var vm = this;
            page_url = page_url || 'http://localhost:3000/api/stories';

            this.$http.get(page_url)
            .then(function(res) {
                var storiesReady = res.data.data.map(function(story) {
                    story.editing = false;
                    story.resetPlot = '';
                    story.resetWriter = '';
                    return story;
                })
                vm.makePagination(res.data);
                Vue.set(vm, 'stories', storiesReady);
            })
        },
        makePagination : function(data) {
            //res.data를 사용
            var pagination = {
                current_page : res.data.current_page,
                last_page : res.data.last_page,
                next_pate_url : res.data.next_pate_url,
                prev_pate_url : res.data.prev_pate_url,
            }
            Vue.set(vm, 'pagination', pagination);
        }
    }
})