<template>
        <router-link :to="ToLocation" class="InsertEntryBtn bg-"><p class="text-center">{{msg}}</p></router-link>
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            default:"預設訊息",
        },
        ToLocation:{
            type:String,
            default:"",
        }
    },
    mounted() {
      onbeforeunload = (event) => { this.reload };
    }
}
</script>

<style>

    .InsertEntryBtn{
        justify-content: center;
    }

</style>