let app = new Vue({
  el: '#app',
  data:{
    product: "Enot GitHub" ,
    img:"bear.jpg",
    imgs:[],    
//arrImgs:[],
//imgs: ["bear.jpg", "panda.jpg",  "panda1.jpg", "panda2.jpg",  "tiger.jpg" ],
    

  },
mounted() {
 this.getData();
},

methods: {
 getData(){
   fetch(`./db/db.json`)
   .then((res) => res.json() )
   .then((data)=>{
   // console.log(data)

    this.arrImgs = Object.values(data) //Объект - преобраз. в-> Массив
    this.arrImgs.map( (el)=>{
    this.imgs.push(el.foto) //фото из Объекта - кладем в-> Массив Imgs

    //console.log(el.foto)

    } )

   // console.log(this.arrImgs )
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
  v-for="(foto, index) in imgs" 
  :key = "index">
    <p>Картинка№ {{index+1}}</p>
    <img :src=" './img/' +foto " alt="picBJJ"
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