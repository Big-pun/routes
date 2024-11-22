<template>
  
  <h1>ID du produit : {{ $route.params.id }}</h1>

</template>

<script>
export default {
  data() {
    return {
      idProduit: this.$route.params.id,
    };
  },
};
</script>

<style scoped>

</style>