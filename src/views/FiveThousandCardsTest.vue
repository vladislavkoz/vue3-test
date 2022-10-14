<template>
  <div class="about">
    <h1>Cards test page</h1>

    <app-cards-list :cards="cards"/>
  </div>
</template>

<script>

import AppCardsList from "@/components/CardsList";
export default {
  name: 'AppFiveThousandCardsTest',
  components: {AppCardsList},
  data() {
    return {
      cards: new Array(5000).fill({
        title: 'Title',
        description: 'Description',
      }).map((c, index) => ({ ...c, id: index})),
    }
  }
}
</script>