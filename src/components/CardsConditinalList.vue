<template>
  <div class="cards-list">
    <app-card
        v-for="card in filteredArray"
        :card="card"
        :key="card.id"
    />
  </div>
</template>

<script>
import AppCard from "@/components/Card";
export default {
  name: 'AppCardsConditionalList',
  components: {AppCard},
  props: {
    cards: Array
  },
  computed: {
    filteredArray() {
      return this.cards.filter(c => c.id % 2);
    }
  },
}
</script>

<style scoped lang="scss">
.cards-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
