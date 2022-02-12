<template>
  <div class="pokemon">
    <div class="pokemon__stage">
      <!-- <img
        :src="INSERT OFFICIAL ARTWORK SPRITE"
        class="pokemon__sprite"
      /> -->
    </div>
    <div class="pokemon__details">
      <h3 class="pokemon__name">{{ pokemon.name | capitalize }}</h3>
      <table class="pokemon__stats">
        <tbody>
          <tr>
            <th>HP</th>
            <td>INSERT STAT</td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>INSERT STAT</td>
          </tr>
          <tr>
            <th>Defense</th>
            <td>INSERT STAT</td>
          </tr>
          <tr>
            <th>Sp. Atk</th>
            <td>INSERT STAT</td>
          </tr>
          <tr>
            <th>Sp. Def</th>
            <td>INSERT STAT</td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>INSERT STAT</td>
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
