<script setup>
    import {gsap} from 'gsap';
</script>


<template>
  <button ref="btn1" @click="webJump('/about')" class="btn w-1/4 bg-sky-400  text-lg hover:text-white">了解我們</button>
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            default:"功能施工中",
        }, 
        second:{
            type:String,
            default:"0",
        }, // btn time delat
    },
    methods:{
        webJump(link){
            window.location.href=link
        }
    },
    mounted(){
        const btn1 = this.$refs.btn1
        const btn2 = this.$refs.btn2
        const sec = Number(this.$props.second)
        gsap.from(btn1,{delay:2+sec,duration:1,opacity:0,stagger:0.5})
        gsap.from(btn2,{delay:2+sec,duration:1,opacity:0,stagger:0.5})
        onbeforeunload = (event) => { this.reload };
    }
    
}
</script>

<style>
    .btn{
        height: 10%;
        margin: 5px;
        border-radius: 8px;
        text-align: center;
        font-weight:600;
    }

</style>