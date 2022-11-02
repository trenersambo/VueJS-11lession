let app = new Vue({
  el: '#app',
  data:{
    product: "EnotShop" ,
    img:"bear.jpg",
    //imgs:[],   //для фото Товара

    prodName:{}, //наимнован. товара
    //inStock:[], // наличие товара (false / true)

  },
mounted() {
 this.getData();
},

methods: {
 getData(){
   fetch(`./db/db.json`)
   .then((res) => res.json() )
   .then((data)=>{
    //console.log(data)

   // this.arrImgs = Object.values(data) //Объект - преобраз. в-> Массив
   //  this.arrImgs.map( (el)=>{

   //  this.imgs.push(el.foto) ;//ФОТО из Объекта - кладем в-> Массив Imgs

   //this.prodName.push(el.name);//ИМЯ из Объекта - кладем в-> prodName
   // this.inStock.push(el.inStock); // наличие товара - кладем в-> inStock
   //} )
  
    // С обектом - проще прописывать в карточках товара несколько позиций
   this.prodName = data.TestOne; // вытащил данные из объекта TestOne
   console.log(this.prodName)
   
   })

   .catch( (err)=>{ console.log(err) })
 },

 
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
      описание 
      Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Quia sint ipsam impedit corrupti neque at,
       voluptatibus reprehenderit dicta porro minus, 
       beatae aliquid, repellendus recusandae provident 
       alias illo ullam itaque voluptatem.
  </div>

</div>

<!-- ==================  -->

<div class="foto_stock">

  <div class="gallery"
  v-for="(prod, index) in prodName" 
  :key = "index">
  
    <p>Индекс: {{index}}</p>
    <p>Имя: {{prod.name}}</p>

    <p v-if="prod.inStock === true">Клубная карта: ЕСТЬ</p>
    <p v-else>Карта клуба: НЕТ

    <img src="./svg/x.svg" alt="svg" width="32" height="32" class="img_No_Cart">

    </p>
   
 
    <img :src=" './img/' +prod.foto" alt="picBJJ"
    class="foto_gallery"/>

  </div>

</div>

<!-- ==================  -->

<div class="comment">
комментарии
</div>

 

<!-- ==================  --> 


  </div>`

  
}) //app = new Vue({}) :: end