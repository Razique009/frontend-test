<template>
  <div id="app">
    <Logo />
    <SearchField :value="pokemon"  placeholder="Search Pokemon" autofocus />
    <Loader />
    <PokemonCard :pokemon="{ pokemon }" /> 
  </div>
</template>

<script>
import Logo from "./components/Logo.vue"
import SearchField from "./components/SearchField.vue"
import Loader from "./components/Loader.vue"
import PokemonCard from "./components/PokemonCard.vue"
import { getPokemon, getRandomPokemon } from "./api/index"

export default { 
  name: "App",
  data () {
    return {
      pokemon: {},
      searchValue: '' ,
    }
  },
  components: {
    Logo,
    SearchField,
    Loader,
    PokemonCard,
  },
  async mounted() {
      this.pokemon = await getPokemon(1);
      await getRandomPokemon();
  }
}
</script>
