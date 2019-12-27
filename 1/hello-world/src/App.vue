<template>
  <div id="app">
    <header>
      <p>猫眼电影</p>
    </header>
    <main>
      <Mainbar></Mainbar>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Mainbar from "./components/Mainbar"
export default {
  data() {
    return {
      
    }
  },
  components:{
    Mainbar
  }
}
</script>
<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  width: 100%;
  height: 40px;
  background: red;
}
main{
  flex: 1;
  overflow: auto;
}
footer{
  width: 100%;
  height: 40px;
  background: #ccc;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
