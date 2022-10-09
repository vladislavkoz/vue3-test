<template>
  <div class="about">
    <h1>Cards test page</h1>

    <app-cards-conditional-list :cards="cards"/>
  </div>
</template>

<script>

import AppCardsConditionalList from "@/components/CardsConditinalList";
export default {
  name: 'AppTenThousandCardsTest',
  components: {AppCardsConditionalList},
  data() {
    return {
      cards: new Array(10000).fill({
        title: 'Title',
        description: 'Description',
      }).map((c, index) => ({ ...c, id: index})),
    }
  }
}
</script>