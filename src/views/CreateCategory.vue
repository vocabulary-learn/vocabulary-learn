<template>

<div id="InsertEntryBox" class="absolute rounded-xl bg-slate-200 flex flex-row p-10">
  <p class="w-full text-center text-2xl font-bold mb-2">請選擇功能</p>
  <button class="basis-1/2 border-2 border-black rounded-xl px-4" @click="get(1)" id="f1">
    <div class=" bg-sky-200 rounded-lg p-2"><p class="text-center font-semibold text-xl">新增單字庫</p></div>
    <div class="mt-6 mb-6 mr-4 font-bold">建立單字庫進行練習，須含題庫名稱、描述、單字。</div>
  </button>
  <button class="basis-1/2 border-2 border-black rounded-xl px-4" @click="get(2)" id="f2">
    <div class=" bg-sky-200 rounded-lg p-2"><p class="text-center font-semibold text-xl">修改單字庫</p></div>
    <div class="mt-6 mb-6 font-bold">修改單字庫內容，包括題庫名稱、描述、單字皆可修改</div>
  </button>
  <button @click="smt()" :disabled='clk == 0' id="submit" class="w-full bg-slate-300 font-bold rounded-lg mt-10 float-right">
    前往
  </button>
</div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  data() {
    return {
      sentences: [],
      clk: 0,
    }
  },
  mounted() {
      document.getElementById('f2').style.borderStyle = 'none';
      document.getElementById('f1').style.borderStyle = 'none';
      this.clk = 0;
      document.querySelector('meta[name="description"]').setAttribute("content", '選擇所想要的功能 ( 新增資料庫 / 修改資料庫 )');
      onbeforeunload = (event) => { this.reload };
  },
  methods: {
    get(num) {
      if(num == 1) {
        if(this.clk != 1) document.getElementById('f1').style.borderStyle = 'solid', document.getElementById('f2').style.borderStyle = 'none', this.clk = 1;
        else document.getElementById('f1').style.borderStyle = 'none', this.clk = 0;
      }
      else {
        if(this.clk != 2) document.getElementById('f2').style.borderStyle = 'solid', document.getElementById('f1').style.borderStyle = 'none', this.clk = 2;
        else document.getElementById('f2').style.borderStyle = 'none', this.clk = 0;
      } 
      if(this.clk == 0) document.getElementById('submit').style.color
    },
    smt() {
      if(this.clk == 1) window.location.href = '/insertlib';
      else if(this.clk == 2) window.location.href = '/modifylib';
    }
  }
}
</script>
<style>
    #InsertEntryBox{
        left: 50%;
        transform: translateX(-50%);
        top: 17%;
        width: 50%;
        height: 55%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

</style>>