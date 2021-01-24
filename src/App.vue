<template>
  <div>
    <div class="mainBox">
      <div class="picdiv">
        <img
          id="ppic"
          src="./assets/images/profiili_transparent2.png"
          alt="that's me"
        />
      </div>
      <h1 id="name">Ilari Räisänen</h1>
      <p>cookie tester, click btn and refresh: {{ capacity }}</p>
      <button @click="increaseCapacity()">Increase Capacity</button>
      <button @click="resetCapacity()">Reset</button>
      <div class="links">
        <a
          href="https://www.linkedin.com/in/ilari-r%C3%A4is%C3%A4nen-26795b170/"
        >
          <img
            id="linkedin"
            href="www.linkedin.com"
            src="./assets/images/linkedin.png"
            alt="linkedin"
            width="30"
          />
        </a>
        <a href="github.com/iledius">
          <img
            id="github"
            src="./assets/images/github.png"
            alt="github"
            width="30"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//import { MenuBox } from "./components/MenuBox";
//import { Button } from "./components/Button";
import { ref } from "vue";
function setCookie(value) {
  document.cookie = `count=${value}; Path=/;`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const count = Number(parts.pop().split(";").shift());
    console.log(count);
    if (isNaN(count)) {
      document.cookie = "count=0";
      return 0;
    }
    return count;
  }
}

export default {
  name: "App",

  data() {
    return {};
  },

  methods: {},

  setup() {
    const capacity = ref(0 + getCookie("count"));
    console.log(getCookie("count"));
    console.log(capacity);
    function increaseCapacity() {
      capacity.value++;
      setCookie(capacity.value);
    }
    function resetCapacity() {
      capacity.value = 0;
      setCookie(capacity.value);
    }
    return { capacity, increaseCapacity, resetCapacity };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainBox {
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
</style>
