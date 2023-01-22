<template>
  <div class="bg-gray-600 pt-20 pb-20">
    <p class="font-semibold text-6xl text-center text-blue-100">介紹</p>
  </div>
  <div class="bg-gray-200 pl-20 pr-20 pt-16 pb-20">
    <p class="text-xl text-black ml-20 mr-20 font-bold">
      這個網站是為了讓大家練習英文段考的文意字彙而建立。
      <br>當初因為我們在英文考試中，常常因為文意字彙這種需要通靈的題目而掉分，因此想要來好好地練一下文意字彙。
      <br>不過能用的資源就只有習作跟一些考卷，這些題目對我們而言是不太足夠的
      <br>所以我們就想，既然題目不夠，那就自己抓吧!這個網站的構想也因此誕生。
      <br>在這個網站中，我們採用 Vue 作為前端的框架，以 Django 作為後端，以 Postgresql 作為資料庫。
      <br>因為技術不足(對以上技術不算熟悉)，雖然現在這個網站還不成熟，但希望之後能繼續補足精進這個網站。
    </p>
    <div class="font-semibold text-2xl text-gray-600 ml-20 mr-20 mt-10">網站開發者 : 楊翔宇、謝侑哲</div>
  </div>
</template>

<script>

  export default{
    name:"about",
    mounted(){
      onbeforeunload = (event) => { this.reload };

    }
  }


</script>