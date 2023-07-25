<template>
  <div class="container">
      <div class="header-id"><Header/></div>
      <div class="router-container">
        <router-view/>
      </div>
      <!-- <div>
          <Footer/>
      </div> -->
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default{
    name: "App",
    components:{
    Header,
    Footer
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
body {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding:0;
}

.container{
  /* position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0; */
  min-height: 100vh;
  width:100%;
}

#app {
  display:flex;
  flex-direction:column;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  text-align: center;
  color: #2c3e50;
}
/* 
nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

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
.header-id{
  width: 100%;
}
#footer-id{
  margin-top:auto;
}

.router-container{
  display:flex;
  margin-top: 15vh;
  flex-direction: column;
  height: 83vh;
}

.circle-border{
  display:inline-block;
  border-radius:50%;
  /* border: 0.5px solid black; */
  padding: 5px;
  background: lightgray/*#e6e8e6;*/;
}
</style>
