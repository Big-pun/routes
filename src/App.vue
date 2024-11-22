<template>
  <RouterLink :to="{ name: 'Accueil', }">Accueil</RouterLink>
  <RouterLink :to="{ name: 'Produits' }">Produits</RouterLink>

  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    pageProduits() {
      this.$router.go(+1);
    },
  },
};
</script>

<style scoped>

a{
  text-decoration: none;
  font-size: 21px;
}

a.router-link-active{
padding: 5px;
background-color: blue;
color: white;
}

</style>
