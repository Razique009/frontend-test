<template>
  <div class="pokemon">
    <div class="pokemon__stage">
      <!-- <img
        :src="INSERT OFFICIAL ARTWORK SPRITE"
        class="pokemon__sprite"
      /> -->
    </div>
    <div class="pokemon__details">
      <h3 class="pokemon__name">{{ pokemon && pokemon.pokemon.data.name | capitalize }}</h3>
      <table class="pokemon__stats">
        <tbody v-for="(pokemons, index) in pokemon.pokemon.data.stats" :key="index">
          <tr>
            <th>{{ pokemons.stat.name }}</th>
            <td>{{ pokemons.base_stat }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { capitalize } from "lodash-es"

export default {
  name: "PokemonCard",
  filters: {
    capitalize,
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
}
</script>
