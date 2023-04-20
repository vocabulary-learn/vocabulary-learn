<template>
  <div id="formbox" class="absolute bg-slate-200" >
    <div style="height:100%;width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: space-around;">
      <!-- submit.prevent可以避免表單重新整理 -->
      <div id="BuildTitle" class="m-8 text-3xl font-semibold">新增單字庫</div>
      <div class= "input" style="height:30%">
          <input :value="libname" @input="libname=$event.target.value" placeholder="單字庫名稱" class="p-2 rounded-lg in" required> 
      </div>
      <div class="input" style="height:30%" >
          <input :value="descriptnput" @input="descriptnput=$event.target.value" placeholder="介紹一下單字庫" class="p-2 rounded-lg in" required> 
      </div>
      <div class= "input" style="height:30%">
        <input id="warn" :id="wordInputId" :value="wordinput" @input="wordinput=$event.target.value" placeholder="單字列表" class="p-2 rounded-lg in border-red-500" required> 
      </div>
      <div class="h-1/6">
        <p class="text-red-600 text-sm" :hidden="notFormat == false" >請以逗號隔開且勿留空格</p>
      </div>
      <button type="submit" id="BuildSendBtn" @click="sent" class="rounded-lg mb-4 bg-slate-300 p-1">送出</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { onMounted } from 'vue'
import InputData from "../components/Create/InputData.vue"
import SelectData from "../components/Create/SelectData.vue"

export default {
  name: '',
  components: {
    InputData,
    SelectData,
  },
  data() {
    return {
      sentences: [],
      libname:"",
      wordinput: "",
      descriptnput: "",
      ifbtndisable: true,
      wordInputId: "in",
      notFormat: false,
    }
  },
  mounted() {
      document.getElementById('warn').style.borderWidth = 0 + 'px';
      document.querySelector('meta[name="description"]').setAttribute("content", '新增一個單字庫的頁面');
      onbeforeunload = (event) => { this.reload };
  },
  methods:{
    sent(){
      var list = this.wordinput.split(",")
      axios.post("api/v1/add_category/",{
          "name": this.libname,
          "description": this.descriptnput,
          "vol_list": list,
        }
      )
      .then((res)=>{
        console.log(res);
        this.libname="";
        this.descriptnput="";
        this.wordinput="";
      })
      .catch((err) => {
        console.log(err);
        var errorword = err.response.data.info.split(" ")[2]
        alert("找不到單字"+errorword);
      })
      console.log("pass")
      
    },
  },
  watch:{
    wordinput: function(){
      var str = this.wordinput
      console.log("~"+str)
      console.log("2 "+this.libname)
      console.log("3 "+this.descriptnput)
      if(str==""){
        this.notFormat=false; 
        this.wordInputId = "in"
        console.log("empty")         
      }
      for(var i=0;i<str.length;i++ ){
        if(str[i]==',' || (str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)){
          this.ifbtndisable = false;
          this.notFormat=false;
          this.wordInputId = "in";
        }
        else{
          this.ifbtndisable = true; 
          this.notFormat=true;
          this.wordInputId = "ErrorIn"
          break;
        }
      }
    },
    notFormat: function() {
      if(this.notFormat) document.getElementById('warn').style.borderWidth = 2 + 'px';
      else document.getElementById('warn').style.borderWidth = 0 + 'px';
    }
  }
}
</script>
<style>
    #formbox{
        left: 50%;
        transform: translateX(-50%);
        top: 15%;
        width: 55%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-radius: 15px;
        border-width: 3px;
    }
    #BuildSendBtn{
        height: 8%;
        width: 20%;
        color: black;
        text-align: center;
        font-size: 20px;
        font-weight:600;
    }
    #BuildSendBtn:hover{
        background-color: white;
    }
    .input{
        /* background-color: red; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15%;
    }
    .in{
        height: 50%;
        width: 60%;
        border-width: 2px;
    }
    input:focus{
      outline: none;
    }


</style>>