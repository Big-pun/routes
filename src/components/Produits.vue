<template>
  <h1>Liste des produits</h1>

  <ul v-for="produit in produits" :key="produit.id">
    <li>
      <router-link
        :to="{
          name: 'DetailsId',
          params: { id: produit.id },
        }"
      >
        {{ produit.nom }} - {{ produit.prix.toFixed(2) }}$
      </router-link>
    </li>
  </ul>

  <RouterView />
</template>

<script>
  export default {
    data() {
      return {
        produits: [
          { id: 1, nom: "Écran", prix: 125, categorie: "Informatique" },
          { id: 2, nom: "Souris", prix: 23, categorie: "Informatique" },
          { id: 3, nom: "Assiettes", prix: 135, categorie: "Cuisine" },
          { id: 4, nom: "Tasse", prix: 18, categorie: "Cuisine" },
          { id: 5, nom: "Chaise", prix: 45, categorie: "Mobilier" },
          { id: 6, nom: "Table", prix: 125, categorie: "Mobilier" },
        ],
      };
    },
  };
</script>

<style scoped>

a.router-link-exact-active{
padding: 5px;
background-color: green;
color: white;
}

</style>
