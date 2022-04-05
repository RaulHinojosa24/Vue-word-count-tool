Vue.createApp({
    data() {
        return {
            word: ""
        }
    },
    computed: {
        getTextColor() {
            return (this.word.length % 2 == 0) ? 'red' : 'green';
        }
    }
}).mount("#app");