class Category {
    constructor(id, name, image, description,subImage,link) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
      this.subImage = subImage;
      this.link = link;
    }
}

Vue.component('hero',{
    props:{
        number: {
            type:Number            
        }
    },
    template:`    
    <section v-if="number === 1" class="hero-container" style="background-image: url('heroimage.jpg');">
        <div class="hero-advertisement">
            <h1>Watches<span style="color:#19b5fe">.Co</span></h1>                   
            <a href="#searchID"><button class="search-btn">Search</button></a>               
            <button class="signup-btn">Sign up</button>  
        </div>
        <div class="hero--content">
            <h1>History of Watches.Co</h1>
            <hr/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    </section>   

    <section v-else class="hero-container" style="background-image: url('secondhero.jpg');justify-content: flex-start;align-items: flex-start;">
                <div class="hero--content" style="margin-right:0;margin-left:5%">
                    <h1>' Watches ' makes you a man</h1>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
    </section>   
    `
})

Vue.component('side-bar',{
    template:`
        <ul>
            <i onclick="closeSide()" class="material-icons icon">close</i>            
            <h2>Watches brand</h2>
            <hr/>
            <a href="casio.html">Casio</a>
            <a href="#">Daniel Wellington</a>
            <a href="#">Tissot</a>
            
            <h2>Men</h2>
            <hr/>
            <a href="casio.html">Casio</a>
            <a href="#">Daniel Wellington</a>
            <a href="#">Tissot</a>

            <h2>Women</h2>
            <hr/>
            <a href="casio.html">Casio</a>
            <a href="#">Daniel Wellington</a>
            <a href="#">Tissot</a>
        </ul>
    `    
})

Vue.component('casio-product',{
    template:`
        <section class="card-container">
            <div class="card" v-for="(item,index) in casio" :key="index">
                <img :src="item.image"/>
                <h2>{{ item.name }}</h2>
                <span class="price-tag">RM {{ item.price }}</span>
                <p>{{ item.description }}</p> 
                <div style="width:100%;height:1px;background-color:silver"></div>                  
                <button 
                    @click="chgToAdded(index)"                                       
                    class="cartBtn" 
                    :class="[ item.status ? confirmedBuy : cartBtn]"
                    >
                    <i class="material-icons">favorite</i>
                    Add to cart                    
                </button>
            </div>
        </section>
    `,
    data() {
        return {   
            cartBtn:'cartBtn',
            confirmedBuy:'confirmedBuy',                                   
            casio:[
                {
                    status:false,
                    name:'Casio MTP-1374D-1AVDF',
                    image:'light-casio1.jpg',                    
                    price: 699.00,
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    status:false,
                    name:'Casio Edifice',
                    image:'light-casio2.jpg',                    
                    price: 1259.30,
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    status:false,
                    name:'Casio EQB-501XD-1AER | EDIFICE',
                    image:'light-casio3.jpg',                    
                    price: 1399.00,
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    status:false,
                    name:'Casio',
                    image:'light-casio4.jpg',                    
                    price: 899.50,
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    status:false,
                    name:'Casio',
                    image:'light-casio4.jpg',                    
                    price: 899.50,
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
            ]
        }
    },
    methods:{
       chgToAdded(index){          
          this.casio[index].status = !this.casio[index].status
          this.$emit('add-to-cart',this.casio[index].name,this.casio[index].price)
       }
    },
    computed:{
        
    }

})


Vue.component('product',{
    template:`
            <div class="product-container">
                <div class="search-container" id="searchID">  
                 
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
                    <img :src="list.image">                             
                    <div class="lightbox-container">                       
                        <img @click="updateImage(index,clickedIndex)" v-for="(image,clickedIndex) in list.subImage" :src="image"/>
                    </div>
                    <p style="position:relative;">{{ list.description }}</p>
                    <a :href="list.link">
                        <button class="category-button"> View more</button>
                    </a>
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
                    ['casio.jpg','light-casio1.jpg','light-casio2.jpg','light-casio3.jpg','light-casio4.jpg'],
                    'casio.html'
                ),
                new Category(
                    0002,
                    'Daniel Wellington',
                    'dw.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ['dw.jpg','light-dw1.jpg','light-dw2.jpg','light-dw3.jpg','light-dw4.jpg'],
                    'dw.html'
                ),
                new Category(
                    0003,
                    'Tissot',
                    'tissot.jpg',
                    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ['tissot.jpg','light-tissot1.png','light-tissot2.png','light-tissot3.jpg','light-tissot4.jpg'],
                    'tissot.html'
                )
            ]
        }
    },
    methods: {
        updateImage(index,clickedIndex){ 
            this.clickedObject = index           
            this.clickedIndex = clickedIndex            
            this.filteredList[this.clickedObject].image = this.filteredList[this.clickedObject].subImage[this.clickedIndex]
            console.log("success")
        }
    },
    computed: {
        filteredList(){
            return this.categoryList.filter(i => {
                return i.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }        
    }
})

var app = new Vue({
    el:'#app',
    data:{
        cart:[]
    },
    methods:{
        updateCart(name,price)
        {
            if(!this.cart.includes(name))
            this.cart.push(name)
            
            // console.log(price)
            // console.log(name)
        }
    }
})

// JavaScript and Jquery
var wPosition = 0;
$(window).scroll(function(){
    changeNav();
});

function openSide()
{
    $('#openIcon').css("display","none")
    $('.sideBar').css("display","flex")    
    // $('.main-content').css("margin-left",300+"px")
    // $('.main-content').css("margin-right",50+"px")
}

function closeSide()
{
    $('#openIcon').css("display","block")
    $('.sideBar').css("display","none")
    $('.main-content').css("margin-left",0)
    $('.main-content').css("margin-right",0)
}

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