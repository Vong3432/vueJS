Vue.component('product',{
    template:`
            <div>
                <div class="category" v-for="i in category" :key="i.id">
                    <h2> {{ i.name }}</h2>            
                    <img :src="i.image">
                    <p>{{ i.description }}</p>
                </div>
            </div>
    `,
    data() {
        return {
            category:[
                {
                    id: 0001,
                    name: 'Casio',
                    image: 'casio.jpg',
                    description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                {
                    id: 0002,
                    name: 'Daniel Wellington',
                    image: 'dw.jpg',
                    description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                {
                    id: 0003,
                    name: 'Tissot',
                    image: 'tissot.jpg',
                    description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                }
            ]
        }
    },
})

var app = new Vue({
    el:'#app'
})

// JavaScript and Jquery
var wPosition = 200;
$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    if( wScroll >= 200)
    {
        $('.top-nav').css("background-color","white")
        $('.top-nav a').css("color","black")        
        $('.men-btn a').css("color","black")                 
        $('.top-nav a').css("border-bottom","2px solid white")         
        $('#active').css("border-bottom","2px solid #353535")               
    }
    else{
        $('.top-nav').css("background-color","#24252a")
        $('.top-nav a').css("color","white")           
        $('.top-nav a').css("border-bottom","2px solid #353535")    
        $('.men-btn a').css("color","white")
        $('#active').css("border-bottom","2px solid white") 
    }
    wPosition = wScroll;
});