new Vue({
    el:'#vue-app',
    data: {
       age:23,
       x:0,
       y:0
    },
    methods: {
       add: function(inc){
           this.age+=inc;
       },
       subtract: function(inc){
           this.age-=inc;
       },
       updateXY: function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;
       },
       click:function(){
           alert("You clicked me");
       },
       logName: function(){
            console.log('you entered your name');      
       },
       logAge: function(){
            console.log('you entered your age');    
       }
    }
});