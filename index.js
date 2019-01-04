class Category {
    constructor(id, name, image, description,subImage) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
      this.subImage = subImage;
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
                <span class="result"
                      :class="{noResult : filteredList.length === 0}"
                      >
                      Result: {{ filteredList.length }}
                </span>
                <hr class="divider" :class="{ noResultLine : filteredList.length === 0 }"/>
                <div class="category" v-for="(list,index) in filteredList" :key="index">                
                    <h2> {{ list.name }}</h2>            
                    <img :src="list.subImage[updatedImage]">
                    <div class="lightbox-container">                       
                        <img @click="updateImage(index,clickedIndex)" v-for="(image,clickedIndex) in list.subImage" :src="image"/>
                    </div>
                    <p style="position:relative;">{{ list.description }}</p>
                </div>                
            </div>
    `,
    data() {
        return {
            search:'',
            clickedObject:0,
            clickedIndex:0,            
            categoryList:[
                new Category(
                    0001,
                   'Casio',
                    'casio.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ['casio.jpg','light-casio1.jpg','light-casio2.jpg','light-casio3.jpg','light-casio4.jpg']
                ),
                new Category(
                    0002,
                    'Daniel Wellington',
                    'dw.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ['dw.jpg','light-dw1.jpg','light-dw2.jpg','light-dw3.jpg','light-dw4.jpg']
                ),
                new Category(
                    0003,
                    'Tissot',
                    'tissot.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ['tissot.jpg','light-tissot1.png','light-tissot2.png','light-tissot3.jpg','light-tissot4.jpg']
                )
            ]
        }
    },
    methods: {
        updateImage(index,clickedIndex){ 
            this.clickedObject = index           
            this.clickedIndex = clickedIndex
            
        }
    },
    computed: {
        filteredList(){
            return this.categoryList.filter(i => {
                return i.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        updatedImage(){
                return this.clickedIndex
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