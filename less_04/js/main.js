let app = new Vue({
  el: '#app',
  data:{
    product: "EnotShop" ,
    img:"bear.jpg",

    prodName:{}, //сюда кладу все из TestOne:{}

    prodTestTwo:[],//сюда кладу все из TestTwo:[]

    showWindow: false, // для показа инф.окна для фото при клике мышкой на этом же фот


  },
mounted() {
 this.getData(); // вызов fetch - в этом жизн.цикле
},

methods: {
 getData(){
   fetch(`./db/db.json`)
   .then((res) => res.json() )
   .then((data)=>{
    //console.log(data)
  
    // С обектом - проще прописывать в карточках товара несколько позиций
   this.prodName = data.TestOne; // вытащил данные из объекта TestOne
   console.log(this.prodName) ;

   this.prodTestTwo = data.TestTwo; // уже тащим данные из массива TestTwo
   console.log(this.prodTestTwo)
   
   })

   .catch( (err)=>{ console.log(err) }) // обработчик ошибок
 },

//Метод: показать инф.окно для фото при клике мышкой на этом же фото
 showWind(ev){
 ev.target.nextElementSibling.style="display: block;"
 //this.showWindow = !this.showWindow
 
 setTimeout(() => {
 //ч/з 5сек. модальное окошко исчезнет
   ev.target.nextElementSibling.style="display:none;"
 }, 5000);


 } ,


},


  template:
  `<div  class="wrapper">


<!-- ==================  -->

<div class="top_name"> 

    <a href="https://github.com/trenersambo/">
      <h2>{{product}}</h2>
    </a> 
</div>

<!-- ==================  -->

<div class="content">

  <div class="left_foto">
  <img :src=" './img/' +img " alt="pictures bjj">
  </div>

  <div class="right_text">

      <div class="bestinhell" v-for="ar in prodTestTwo" >

       {{ar}}

      </div>

  </div>

</div>

<!-- ==================  -->

<div class="foto_stock">

  <div class="gallery"
   v-for="(prod, index) in prodName" 
   :key = "index"
   >
  
    <p>Индекс: {{index}}</p>
    <p>Имя: {{prod.name}}</p>

    <p v-if="prod.inStock === true">Клубная карта: ЕСТЬ</p>
    <p v-else>Карта клуба: НЕТ

    <img src="./svg/x.svg" alt="svg" width="32" height="32" class="img_No_Cart">

    </p>
   
 
    <img :src=" './img/' +prod.foto" alt="picBJJ"
    class="foto_gallery"
    @click="showWind"
    />

    <div class="showWindow" v-show="showWindow "  >

      <p>{{prod.name}}</p>

    </div>


  </div>

   

</div>

<!-- ==================  -->

<div class="comment">
комментарии
</div>

 

<!-- ==================  --> 


  </div>`

  
}) //app = new Vue({}) :: end