<script setup>
import {gsap} from "gsap"
import icon from "./Icon.vue";
import btn from "./btn.vue"
</script>

<template>
    <div id="box" class="absolute bg-slate-400 rounded-lg" >
        <icon></icon>
        <btn></btn>
    </div>
</template>

<script>
export default {
    name: "Comopnent",
    components: {
        icon,
        btn,
    },
    mounted() {
      onbeforeunload = (event) => { this.reload };
    }
}
</script>

<style>

    #box{
        left: 50%;
        transform: translateX(-50%);
        top: 15vh;
        width: 200vh;
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>