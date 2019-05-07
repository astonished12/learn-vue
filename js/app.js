new Vue({
    el:'#vue-app',
    data: {
        name: 'Gelu',
        job: 'Ninja',
        website: 'https://planner.expertnetwork.ro',
        websiteTag: '<a href="https://planner.expertnetwork.ro"> The Planner Website </a> '
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});