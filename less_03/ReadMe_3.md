# Что делаю на самоподготовке №2:

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

_____


# Самоподготовка №3 (VueJS)

1. Добавил в json еще несколько позиций (name, наличие в магазине)

```JSON
"id1": {"name": "Sambo","foto":"bear.jpg", "inStock": false},
...

```


2. Ушел от преобразования полученного через fetch Объекта{..} в Массив. Цель: чтоб получалось в одну карточку добавлять сразу несколько позиций (имя фото наличие)

```JS
methods: {
 getData(){
   fetch(`./db/db.json`)
   .then((res) => res.json() )
   .then((data)=>{
   this.prodName = data;
   console.log(this.prodName)
   })
   .catch( (err)=>{ console.log(err) })
 },
}

```

3. Карточка товара при использовании Объектов стала :

```JS

<div class="foto_stock">

  <div class="gallery"
  v-for="(prod, index) in prodName" :key = "index">
  
    <p>Индекс: {{index}}</p>
    <p>Имя: {{prod.name}}</p>
    <p>Наличие: {{prod.inStock }}</p>

 
    <img :src=" './img/' +prod.foto" alt="picBJJ"
    class="foto_gallery"/>

  </div>

</div>

```
