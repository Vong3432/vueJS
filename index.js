Vue.component('navbar',{
    template:`
        <div>
            <ul class="top-nav">
                <a v-for="item in items" :href="item.links"> {{ item.name }} </a>        
                <span class="menBtn-components" @mouseover="displayItem">
                    <a>Men</a>
                    <men-btn v-show="isHover === true"></men-btn>
                </span>
            </ul>
        </div>
    `,
    data() {
        return {
            items:[
                {
                    name: 'Home',
                    links: 'index.html'
                },
                {
                    name: 'About us',
                    links: 'about.html'
                }
            ],
            isHover:false
        }
    },
    methods: {
        displayItem(){

        }
    },
})

Vue.component('men-btn',{

    template:`
            <span>
                <a 
                    v-for="item in menItems" 
                    :href="item.links"                               
                    >
                    {{ item.name }}
                </a>
            </span>
    `,
    data() {
        return {
            menItems:[
            {                
                name:'Casio',
                link:'#'
            },
            {                
                name:'Daniel Wellington',
                link:'#'
            },
            {                
                name:'...',
                link:'#'
            }
        ]
        }
    },
})

Vue.component('hero',{
    template:`
        <div>
            <div class="hero-container">    
                <div>
                    <img :src="image" :alt="imageText"/>         
                </div>
                <div class="hero--content">
                    <h2>Watches.Co</h2>
                    <p>Watches.Co is a website that provides variety of watches for everyone.
                       Our goal is to let everyone can find their favourite watches and calculate
                       the correct price before dealing.
                    </p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            image:'logo.jpg',
            imageText:"watches-logo"     
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
    }
    else{
        $('.top-nav').css("background-color","#24252a")
        $('.top-nav a').css("color","white")
    }
    wPosition = wScroll;
});