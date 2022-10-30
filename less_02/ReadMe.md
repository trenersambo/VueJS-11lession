## Что делаю на это уроке:

1. Добваить картинку \< img src = "... " >
2. Добавить ссылку \<a>
3. Подключение Vue по CDN (удален файл Vue.js)

Картинка без полного указания пути в data:

```JS
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

```JS
<div class="gallery"
  v-for="(foto, index) in imgs" 
  :key = "index">
    <p>Картинка№ {{index+1}}</p>
    <img :src=" './img/' +foto " alt="picBJJ"
    class="foto_gallery"/>
  </div>
```

5. Создал JSON-файл (в планах- он будет на сервере, с него дергаю всю db-инфу)
(файл будет пополняться еще данными)

```JSON
{
 "id1": { "foto":"bear.jpg"},
 "id2": { "foto": "panda.jpg"},
 ....
}
```

6. Запустил в muunted "дернуть ручку fetch" в methods:

```JS
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
```



