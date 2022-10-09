<template>
  <div class="cards-list">
    <app-card v-for="c in cards" :card="c" :key="c.id"/>
  </div>
</template>

<script>
import AppCard from "@/components/Card";
export default {
  name: 'AppCardsList',
  components: {AppCard},
  props: {
    cards: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cards-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
