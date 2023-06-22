<template>
  <div class="header-flex-container">
    <router-link to="/">
      <img class="icon-container" :src="IconImage" />
    </router-link>
    <div class="center-box">
      <h1 class="header-text-container">Scrounger</h1>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import IconImage from "@/assets/icons/trash-panda-icon.jpg";
export default {
  name: "Header",
  data() {
    return {
      IconImage: IconImage,
    };
  },
  props: {
    title: String,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.header-flex-container {
  display: flex;
  background: #5c9173;
  color: white;
  position: static;
  width: 100%;
  height: 120px;
}
.icon-container {
  height: auto;
  width: 80px;
  margin: 20px;
}
.header-text-container {
  margin-left: 0px;
  text-align: center;
}
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*style logic here*/
</style>
