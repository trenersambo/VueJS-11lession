let app = new Vue({
  el: '#app',
  data:{
    product: "EnotShop" ,

    counterBtnRecord: 0 , //счётчик по умолчанию
    showCounterBtn: false , //видимость счетчика



    img:"bear.jpg", //фото в топ покажет по умолчанию
    nameSport: "Sambo",//надпись на кнопке покажет по умолчанию

    prodName:{}, //сюда кладу все из TestOne:{}

    prodTestTwo:[],//сюда кладу все из TestTwo:[]

    showWindow: false, // для показа инф.окна для фото при клике мышкой на этом же фото
    
    //клик "Запись на..." создает Массив ОБЪЕКТОВ (?) для вывода списка выбранных спорт
    // sportObj:{}, 
    addSportArr:[] ,
    showSportPerson: false, //видим/не видим "корзину" выбранных видов спорта

   

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
  
    // С оъбектом - проще прописывать в карточках товара несколько позиций
   this.prodName = data.TestOne; // вытащил данные из объекта TestOne
   console.log(this.prodName) ;

   this.prodTestTwo = data.TestTwo; // уже тащим данные из массива TestTwo
   console.log(this.prodTestTwo)
   
   })

   .catch( (err)=>{ console.log(err) }) // обработчик ошибок
 },

//cчетчик кликов по кнопке "Запись на ..." (без валидации , что такой вид спорт уже есть)
 addOneRecord(){
 this.counterBtnRecord++
 this.showCounterBtn = true ;

 //добавление в Объект addSportToPerson{} значений выбранного спорта
 this.sportObj ={};
 {
 this.sportObj.number = this.counterBtnRecord,
 this.sportObj.sport = this.nameSport 
 };
// console.log(this.ob) //{number: 1, sport: 'Sambo'}

  this.addSportArr.push(this.sportObj)

 // console.log(this.addSportArr) //[ {…}, {…}, __ob__: Observer]


 },





//Метод: показать инф.окно для фото при клике мышкой на этом же фото
 showWind(ev){
 ev.target.nextElementSibling.style="display: block;"
 //this.showWindow = !this.showWindow
 
 setTimeout(() => {
 //ч/з 5сек. модальное окошко исчезнет
   ev.target.nextElementSibling.style="display:none;"
 }, 5000);

 } ,//showWind(ev) :: end

 showFotoTop(prodfoto, prodname){
 console.log(prodfoto, prodname)
 this.img = prodfoto ;
 this.nameSport = prodname ;
 }


},


  template:
  `<div  class="wrapper">



<!-- ==================  -->

<div class="top_name"> 

    <a href="https://github.com/trenersambo/">
      <h2>{{product}}</h2>
    </a> 

    <img src="./svg/people.svg" alt="svg" width="32" height="32" class="persona"
    @click="showSportPerson = !showSportPerson"
    >


    <div class="sportPerson"  v-if="showSportPerson" >

        <p v-if="addSportArr.length < 1">  Профиль пуст! </p>

        <div class="addSportPerson"
        v-for="value, indx in addSportArr" :key="indx">

       <p> №{{value.number}} на: {{value.sport}} </p>

        </div>
    </div>



   <div class="couterClick" 
   v-show="showCounterBtn"> 
   {{counterBtnRecord}}
   </div>

</div>

<!-- ==================  -->

<div class="content">

  <div class="left_foto">
  <img :src=" './img/' +img " alt="pictures bjj">
  </div>

   <div class="middle_block">
   <button class="btn_record" @click="addOneRecord">
   Запись на {{nameSport}}
   </button>
   
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
    @mouseover="showWind"
    @click="showFotoTop(prod.foto, prod.name)"
    />

    <div class="showWindow" v-show="showWindow "  >

      <h3>{{prod.name}}</h3>
       <p>Кликни в картинку для выбора</p>

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