import Vue from "vue"
import VueCompositionAPI, { createApp } from "@vue/composition-api"
import App from "./App.vue"
import "./main.css"

Vue.use(VueCompositionAPI)

createApp(App).mount("#app")
