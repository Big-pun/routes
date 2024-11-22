import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../components/Accueil.vue";
import Produits from "../components/Produits.vue";
import Erreur from "../components/Erreur.vue";
import Details from "../components/Details.vue";
import DetailsId from "../components/DetailsId.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Accueil,
      name: "Accueil",
    },
    {
      path: "/produits",
      component: Produits,
      name: "Produits",
            children: [
                {
                  path: "/details/:id",
                  component: DetailsId,
                  name: "DetailsId",
                },
              ],
            },
    {
      path: "/liste",
      redirect: "/produits",
    },
    {
      path: "/details/:id",
      component: Details,
      name: "Details",
    },
    {
      path: "/:pathMatch(.*)*",
      component: Erreur,
    },
  ],
});

export default router;
