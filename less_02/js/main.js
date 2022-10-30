let app = new Vue({
  el: '#app',
  data:{
    product: "Enot GitHub" ,
    img:"bear.jpg",
    imgs:[
        "bear.jpg",
        "panda.jpg",
        "panda1.jpg",
        "panda2.jpg",
        "tiger.jpg"
         ],
  

  },


methods: {
 
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