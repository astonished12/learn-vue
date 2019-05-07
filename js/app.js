new Vue({
    el:'#vue-app',
    data: {   
       age: 20,
       a: 0,
       b: 0,    
       user: {
             name:'',
             age:''
             }    
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
       },
     
    },
    computed:{
        addToA: function(){
            return this.a + this.age;
        },
        addToB: function(){
         return this.b  + this.age;
     }
    }
});