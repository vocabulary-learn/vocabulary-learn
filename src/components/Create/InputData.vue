<template>
    <div class= "input">
        <div id="InputTitle">{{Msg}}</div>
        <input id="in" class="px-2"> 
    </div>
</template>

<script>
import Default from '../../views/default.vue'

export default {
  components: { Default },

    props:{
        Msg:{
            type:String,
            default: "預設文字",
        },
    },
    data(){
        return{
        }
    },
    mounted() {
      onbeforeunload = (event) => { this.reload };
    }

}
</script>

<style>

    .input{
        /* background-color: red; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15%;
    }
    #in{
        height: 50%;
        width: 60%;
    }
    #InputTitle{
        height: 50%;
        width: 20%;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;;
    }
    input:focus{
      outline: none;
    }


</style>