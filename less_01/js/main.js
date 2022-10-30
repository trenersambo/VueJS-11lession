let app = new Vue({
  el: '#app',
  data:{
    product: "Panda BJJ" ,
    img:"bear.jpg",
  },


  template:
  `<div>

  <h2>{{product}}</h2>

  <hr>

  <h3>{{product==="Panda BJJ"}}</h3>

  <h3>{{product==="Panda BJJ" ? "#BJJRules" : "Just do It"}}</h3>
  
  <hr>
  
  <p>{{ product.split('') }}</p>
  <p>{{ product.split('').reverse() }}</p>
  <p>{{ product.split('').reverse().join('') }}</p>

  <img :src=" './img/' +img " alt="pictures bjj">

  </div>`

  
}) //app = new Vue({}) :: end