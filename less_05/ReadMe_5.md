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

<br><br>

_____


# Самоподготовка №5 (VueJS, not CLI)

Что поделал (1день):

1. Клик в любую фото в Галлерее, покажет ее вверху

Код  будет в data:

```JS

data:{
    product: "EnotShop" ,

    counterBtnRecord: 0 , //счётчик по умолчанию
    showCounterBtn: false , //видимость счетчика
    


    img:"bear.jpg", //фото в топ покажет по умолчанию
    nameSport: "Sambo",//надпись на кнопке покажет по умолчанию

    prodName:{}, //сюда кладу все из TestOne:{}

    prodTestTwo:[],//сюда кладу все из TestTwo:[]

    showWindow: false, // для показа инф.окна для фото при клике мышкой на этом же фот

  },
```

как это в template (фрагмент):

```JS
....
<img :src=" './img/' +prod.foto" alt="picBJJ"
    class="foto_gallery"
    @mouseover="showWind"
    @click="showFotoTop(prod.foto, prod.name)"
    />

    <div class="showWindow" v-show="showWindow "  >

      <h3>{{prod.name}}</h3>
       <p>Кликни в картинку для выбора</p>

    </div>
... ... ...

```

Код в methods:

```JS
... ... ...
 showFotoTop(prodfoto, prodname){
 console.log(prodfoto, prodname)
 this.img = prodfoto ;
 this.nameSport = prodname ;
 }

```

2. Добавил кнопку "Запись на {{вид спорта}}"

3. Клик по кнопке "Запись":
- появление счетчика (круг около svg -иконки человеков)
- увеличивает счетчик в Шапке (header)

Код шапки:

```JS
<div class="top_name"> 

    <a href="https://github.com/trenersambo/">
      <h2>{{product}}</h2>
    </a> 

    <img src="./svg/people.svg" alt="svg" width="32" height="32" class="persona">

   <div class="couterClick" 
   v-show="showCounterBtn"> 
   {{counterBtnRecord}}
   </div>

</div>
```

Код в методе:

```JS
//cчетчик кликов по кнопке "Запись на ..."
 addOneRecord(){
 this.counterBtnRecord++
 this.showCounterBtn = true ;

 },
```

ToDo:
 сделать по клику на svg-иконку "Люди":
[ ] - появл. меню с записями на виды спорта
[ ] - 
[ ] - 

