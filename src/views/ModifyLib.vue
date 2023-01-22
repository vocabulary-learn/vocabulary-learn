<template>
  <form id="formbox" class="absolute bg-slate-200" >
    <div style="height:100%;width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: space-around;">
      <div id="BuildTitle" class="m-8 text-3xl font-semibold">修改單字庫</div>
      <div class= "select" style="height:30%">
        <div class="bg-slate-300 p-3 rounded font-semibold">選擇題庫</div>
        <select id="select" @change="SelectCategory" class="rounded-lg focus:outline-none">
            <option v-for="(item,index) in categoryList" :key="index" :value="item.id" class="font-medium rounded">{{ item.name }}</option>
        </select> 
      </div>
      <div class="input" style="height:30%">
        <div class="bg-slate-300 p-3 rounded font-semibold">修改名稱</div>
        <input :value="libname" @input="libname=$event.target.value" class="rounded-lg border-0 p-2 in disabled:bg-slate-100" required :disabled="!chose"> 
      </div>
      <div class= "input" style="height:30%">
        <div class="bg-slate-300 p-3 rounded font-semibold">修改敘述</div>
        <input :value="descriptinput" @input="descriptinput=$event.target.value" class="rounded-lg p-2 in disabled:bg-slate-100" required :disabled="!chose"> 
      </div>
      <div class= "input" style="height:30%">
        <div class="bg-slate-300 p-3 rounded font-semibold">修改單字</div>
        <input id="warn" :id="wordInputId" :value="wordinput" @input="wordinput=$event.target.value" class="p-2 rounded-lg in border-red-500 disabled:bg-slate-100" required :disabled="!chose"> 
      </div>
      <div class="h-1/6">
        <p class="text-red-600 text-sm" :hidden="notFormat == false" >請以逗號隔開且勿留空格</p>
      </div>
      <button type="submit" id="BuildSendBtn" @click="sent()" class="rounded-lg mb-4 bg-slate-300 p-1">送出</button>
    </div>
  </form>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { onMounted } from 'vue'

export default {
  name: '',
  components: {
  },
  data() {
    return {
      sentences: [],
      libname:"",
      wordinput: "",
      descriptinput: "",
      ifbtndisable: true,
      notFormat:false,
      wordInputId: "in",
      categoryList: [],
      chose: false,
    }
  },
  mounted() {
    //alert("修改單字時，請使用小寫，有多個單字請以,隔開，否則將無法送出");
    axios.get("api/v1/all_categories/")
    .then( (res) => {
      this.categoryList = res.data
    } )
    .catch( (err) => { console.log(err)} )

    onbeforeunload = (event) => { this.reload };

  },
  methods:{
    FormatJudge(){
      console.log(this.wordinput);
      return true;
    },
    sent(){
      var list = this.wordinput.split(",")
      var id = document.getElementById("select").value
      console.log(this.libname,this.descriptinput,typeof(this.libname),typeof(this.descriptinput))
      var sublist=[]
      for(var i=0;i<list.length();i++){
        var judge=0
        sublist.push(list[i])
        if(i%19==1){
          axios.post("api/v1/edit_category/"+id,{
              "name": "",
              "description": "",
              "vol_list": sublist,
            }
          )
          .then((res)=>{
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            var errorword = err.response.data.info.split(" ")[2]
            alert("找不到單字"+errorword);
            judge=1;
          })  
          
        }
        if(judge==1) break;
        if(i==list.length()-1){
          axios.post("api/v1/edit_category/"+id,{
              "name": this.libname,
              "description": this.descriptinput,
              "vol_list": sublist,
            }
          )
          .then((res)=>{
            console.log(res);
            this.libname="";
            this.descriptinput="";
            this.wordinput="";
          })
          .catch((err) => {
            console.log(err);
            var errorword = err.response.data.info.split(" ")[2]
            alert("找不到單字"+errorword);
            judge=1;
          })          
        }
        if(judge==1) break; 
      }
    },
    SelectCategory(){
      console.log("selected")
      axios.get("api/v1/get_category/"+document.getElementById("select").value)
      .then( (res) => {
        this.wordinput = res.data.vol_list.join(",")
        this.descriptinput =  res.data.description;
        this.libname = res.data.name
        this.chose = true;
      } )
      .catch( (err) => console.log(err) )
    }
  },
  watch:{
    wordinput: function(){
      var str = this.wordinput
      console.log("~"+str)
      if(str==""){
        this.notFormat=false; 
        this.wordInputId = "in"
        console.log("empty")         
      }
      for(var i=0;i<str.length;i++ ){
        if(str[i]==',' || (str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)){
          console.log("able");
          this.ifbtndisable = false;
          this.notFormat=false;
          this.wordInputId = "in"
        }
        else{
          console.log("disable");
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
    .in {
      height: 50%;
      width: 60%;
    }
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
        border-width: 2px;
    }
    #BuildTitle{
      height: 30px;
      font-size: 30px;
      font-weight: 600;
      color:black;
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
        text-align: center;
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
    #ErrorIn{
        height: 50%;
        width: 60%;
        border-width: 2px;
        border-color: red;
    }
    #select{
        height: 50%;
        width: 60%; 
    }
    #InputTitle{
        border-radius: 15px;
        height: 50%;
        width: 20%;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;;
    }
    .select{
        /* background-color: red; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15%;
    }
    #SelectTitle{
        border-radius: 15px;
        height: 50%;
        width: 20%;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
    input:focus{
      outline: none;
    }

</style>