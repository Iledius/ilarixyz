import { createApp } from "vue";
//import VueRouter from 'vue-router'
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(VueAxios, axios)
  .mount("#app");
require("dotenv").config({ path: `${__dirname}/dev.env` });
console.log(process.env.FINGRID_KEY);
console.log(process.cwd());
// Vue.use(VueRouter)
// const routes = [
//     {
//       path: '/',
//       name: 'counter',
//       component: Button
//     }
// ]
App.component("link", {
  data() {
    return {};
  },
  template: (
    <a href="https://www.linkedin.com/in/ilari-r%C3%A4is%C3%A4nen-26795b170/">
      <img
        id="linkedin"
        href="www.linkedin.com"
        src="./assets/images/linkedin.png"
        alt="linkedin"
        width="30"
      />
    </a>
  ),
});
