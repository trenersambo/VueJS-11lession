## Что делаю на это уроке:

1. Добваить картинку \< img src = "... " >
2. Добавить ссылку \<a>
3. Подключение Vue по CDN (удален файл Vue.js)

Картинка без полного указания пути в data:

```#JS
  data:{
    product: "Panda BJJ" ,
    img:"bear.jpg",
  },

  ... ... 

  template:

  ...

  <img :src=" './img/' +img " alt="pictures bjj">

  ...

```

4. Подшаманил с галлереей картинок через v-for

```#JS
<div class="gallery"
  v-for="(foto, index) in imgs" 
  :key = "index">
    <p>Картинка№ {{index+1}}</p>
    <img :src=" './img/' +foto " alt="picBJJ"
    class="foto_gallery"/>
  </div>
```

