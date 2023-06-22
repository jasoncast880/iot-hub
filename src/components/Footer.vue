<template>
  <div id= "footer-id" class="footer-flex-container">
    <div><router-link to="/about">About Us</router-link></div>
    <div><router-link to="/doc-rsrc">Documentation</router-link></div>
    <div><router-link to="/camera-test">test1</router-link></div>
  </div>
</template>
<style scoped>
.footer-flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6e8e6;
  color: white;
  width: 100%;
  height: 80px;
}
.footer-flex-container > div {
  margin: 10px;
  font-size: 14px;
}
</style>
