<template>
  <div class="home">
    <CenterCom></CenterCom>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { onMounted } from 'vue'
import CenterCom from "../components/CenterCom/Component.vue"
export default {
  name: 'HomeView',
  components: {
      CenterCom,
  },
  data() {
    return {
      sentences: [],
    }
  },
  mounted() {
    document.querySelector('meta[name="description"]').setAttribute("content", '文意字彙線上平台的首頁');
  }
}
</script>