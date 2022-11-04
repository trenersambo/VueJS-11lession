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
{
"TestOne":{
 "id1": {"name": "Sambo","foto":"bear.jpg", "inStock": false},
 ... ... ...
 "id6": {"name": "MMA", "foto": "panda1.jpg", "inStock": true}
},
 //тут можно еще 2...3...10-ую "базу" прописать, обернув ее в Массив[]
 // fetch в том случае можно один и тот же применять
"TestTwo":["a","b","c"] .... ... 

}

```


2. Ушел от преобразования полученного через fetch Объекта{..} в Массив. Цель: чтоб получалось в одну карточку добавлять сразу несколько позиций (имя фото наличие)

```JS
methods: {
 getData(){
   fetch(`./db/db.json`)
   .then((res) => res.json() )
   .then((data)=>{
   this.prodName = data.TestOne //вхожу в БД "TestOne"
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

4. Поигрался с SVG 
Если "нет Кубной карты", то svg-иконка появится на фото

5. Применил v-if / v-else Для слов "Клубная карта": есть или нет

6. Чуть поигрался с анимацией через CSS

<br><br>

_____


# Самоподготовка №4 (VueJS, not CLI)

1. Из db.json вытащил значения массива и вывели их на странице 

```JS
      <div class="bestinhell" v-for="ar in prodTestTwo" >

       {{ar}}

      </div>
```

2. При клике на фото выскакивает на несколько сек. модальное окошко

Решил отойти от обычных во Vue (документация): 

```JS
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})


<div id="demo">
  <button v-on:click="show = !show">
    Переключить
  </button>
  <transition name="fade">
    <p v-if="show">привет</p>
  </transition>
</div>
```

... и запилить  появление блока при клике на фото - через methods (как оказалось, случайно угадал):

```JS
  data:{
    ....
    showWindow: false, // для показа инф.окна для фото при клике мышкой на этом же фот
  },

methods:{
  //Метод: показать инф.окно для фото при клике мышкой на этом же фото
 showWind(ev){
 ev.target.nextElementSibling.style="display: block;"
 //this.showWindow = !this.showWindow
 
 setTimeout(() => {
  //ч/з 5сек. модальное окошко исчезнет (другог не придумал, // можно клик по крестику ?)
   ev.target.nextElementSibling.style="display:none;"
 }, 5000);
 } ,

}

//внутри template --->
...
...
    <img :src=" './img/' +prod.foto" alt="picBJJ"  class="foto_gallery"
    @click="showWind" /> // зову ф-цию от клика по фото
    

// показ мод.окна
    <div class="showWindow" v-show="showWindow "  > 
      <p>{{prod.name}}</p>
    </div>

```

3. Игрался с анимацией @keyframes 
Подробности кода  см. в  футере и в файле  .... \less_04\css\animation.css 
квадрат превращается в прямоугольник со сменой цвета и обртано в квадратик