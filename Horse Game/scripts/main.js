var myApp = new Vue({
    el: '#app',
    data: {
        rows: [1, 2, 3, 4, 5, 6, 7, 8],
        cells:["A", "B", "C", "D", "E", "F", "G", "H"],
    },


    methods: {
        mouseOver(cells,rows){
            document.getElementById(cells+rows).classList.add("hover");
        },
        mouseLeave(cells,rows){
            document.getElementById(cells+rows).classList.remove("hover");
            
        }

    },

    created: function(){
        resetTime();
        startTime();
        //
       },

       mounted:function(){
        autoplay();
       }

    
});