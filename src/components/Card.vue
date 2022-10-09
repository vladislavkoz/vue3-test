<template>
  <div class="card">
    <p>{{card.id}}</p>
    <p>{{card.title}}</p>
    <p>{{card.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    card: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  margin: 1rem;
  padding: 1rem;
}
</style>
