<template>
  <div id="app">
    <Logo />
    <SearchField placeholder="Search Pokemon" autofocus />
    <!-- <Loader /> -->
    <!-- <PokemonCard /> -->
  </div>
</template>

<script>
import Logo from "./components/Logo.vue"
import SearchField from "./components/SearchField.vue"
// import Loader from "./components/Loader.vue"
// import PokemonCard from "./components/PokemonCard.vue"

export default {
  name: "App",
  components: {
    Logo,
    SearchField,
    // Loader,
    // PokemonCard,
  },
}
</script>
