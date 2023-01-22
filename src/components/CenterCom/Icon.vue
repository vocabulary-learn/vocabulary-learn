<script setup>
    import {gsap} from 'gsap';
</script>

<template>
  <div class="flex items-center justify-center">
    <img :src="imgsrc" ref="imag" class="imag w-1/3 mr-16" @load="drop()" >
    <p ref="_imag" class="imag w-1/3 text-3xl font-bold" @load="drop()" >英文文意字彙<br>不再是小考罩門</p>
  </div>
  
</template>

<script>
export default {

    name: "icon",
    data(){
        return{
            imgsrc: "/mdcpp_icon.png",
        }
    },
    methods:{
        drop(){
            const imag = this.$refs.imag;
            gsap.from(imag,{duration:2,y:"-100vh",ease:"bounce"})
            const _imag = this.$refs._imag;
            gsap.from(_imag,{duration:2,y:"-100vh",ease:"bounce"})
        }
    }

}


</script>

<style>

</style>

