<template>
  <div>
    <h1>Test counter</h1>
    <p>count: {{ capacity }}</p>
    <p>test {{}}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <button @click="increaseCapacity()">Reset</button>
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
  if (parts.length === 2) return Number(parts.pop().split(";").shift());
}

export default {
  name: "App",

  data() {
    return {};
  },

  methods: {

  },

  setup() {
    const capacity = ref(0 + getCookie("count"));
    function increaseCapacity() {
      capacity.value++;
      setCookie(capacity.value);
    }
    return { capacity, increaseCapacity };
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
</style>
