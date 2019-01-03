class Category {
    constructor(id, name, image, description) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
    }
}

Vue.component('product',{
    template:`
            <div>
                <div class="search-container">  
                 <img src="flat.png"/> 
                 <h2>I wanna search</h2>              
                 <input v-model="search" class="search" type="text" placeholder="all"/>                                              
                </div>                                
                <div class="category" v-for="i in filteredList">                
                    <h2> {{ i.name }}</h2>            
                    <img :src="i.image">
                    <p>{{ i.description }}</p>
                </div>                
            </div>
    `,
    data() {
        return {
            search:'',
            categoryList:[
                new Category(
                    0001,
                   'Casio',
                    'casio.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                ),
                new Category(
                    0002,
                    'Daniel Wellington',
                    'dw.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                ),
                new Category(
                    0003,
                    'Tissot',
                    'tissot.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                )
            ]
        }
    },
    computed: {
        filteredList(){
            return this.categoryList.filter(i => {
                return i.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
})

var app = new Vue({
    el:'#app'
})

// JavaScript and Jquery
var wPosition = 0;
$(window).scroll(function(){
    changeNav();
});

function changeNav()
{
    var wScroll = $(window).scrollTop();
    if( wScroll >= wPosition)
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
}