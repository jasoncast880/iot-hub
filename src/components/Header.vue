<template>
  <div class="header-flex-container">
    <div class="icon-box">
      <router-link to="/">
        <img class="icon-container" :src="IconImage" />
      </router-link>
      <div class="title-box">
        <h1 class="header-text-container">Scrounger</h1>
      </div>
    </div>
    <div class="right-align-box">
      <div>
        <p>USER</p>
      </div>
      <div class="arrow-container">
        <span class="material-symbols-outlined">
        arrow_drop_down
        </span>
      </div>
      <div>
        <img style="height:45px; border-radius:100%;" :src="DefaultUserProfile"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import IconImage from "@/assets/icons/trash-panda-icon.jpg";
import DefaultUserProfile from "@/assets/icons/default-user-icon.jpg";
export default {
  name: "Header",
  data() {
    return {
      IconImage: IconImage,
      DefaultUserProfile: DefaultUserProfile,
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
  margin: 0;
  height: 120px;

  justify-content: space-between;
}
.icon-container {
  height: auto;
  width: 80px;
  margin: 20px;
}
.icon-box{
  display: flex;
  width:400px;
}
.header-text-container {
  margin-left: 0px;
  text-align: center;
}
.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-container {
  cursor: pointer;
}

.right-align-box {
  display: flex;
  width: 200px;
  align-items:center;
  margin-right:20px;
}
</style>
