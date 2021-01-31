<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<transition name="slide-fade" mode="out-in">
  <div class="container" v-if="display">
    <div class="picdiv" >
      <img
        id="ppic"
        src="./assets/images/profiili_transparent2.png"
        alt="that's me"
        
      />
    </div>
    <h1 id="name">Ilari Räisänen</h1>
    <button id="Weather_button" @click="display = !display">Weather app</button>
    <div class="links">
      <a href="https://www.linkedin.com/in/ilari-r%C3%A4is%C3%A4nen-26795b170/">
        <img
          id="linkedin"
          href="www.linkedin.com"
          src="./assets/images/linkedin.png"
          alt="linkedin"
          width="30"
        />
      </a>
      <a href="https://www.github.com/iledius">
        <img
          id="github"
          src="./assets/images/github.png"
          alt="github"
          width="30"
        />
      </a>
    </div>
  </div>
</transition>
</template>

<script>
const fingrid_api = "0URywV3HXP9iIcNZwswJj1JLWqQcVSmz7c0pHPjK"
console.log(fingrid_api)
export default {
  name: "App",
  data() {
    return {display : true};
  },
  setup() {
    function printData() {
      
    }
    return { printData };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  flex: auto;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 500px;
  height: 500px;
  flex: auto;
  margin: auto;
  box-shadow: 0px 0px 10px;
}
.container2 {
  width: 500px;
  height: 500px;
  margin: auto;
  box-shadow: 0px 0px 10px;
}
.picdiv {
  display: flex;
  justify-content: center;
}
.picdiv img {
  margin-top: 10px;
  margin-right: 10px;
  width: 200px;
}
#name {
  font-family: "Lucida Console", "Courier New", monospace;
}
.links {
  margin-top: 80px;
}
#github {
  margin-left: 5px;
}
#linkedin {
  margin-right: 5px;
}
#Weather_button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  display: inline-flex;
  font-size: 16px;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-800px);

}
</style>
