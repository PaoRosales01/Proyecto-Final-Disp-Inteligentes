<template>
  <ion-app>
    <menu-principal></menu-principal>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuPrincipal from './views/MenuPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    MenuPrincipal,
    IonRouterOutlet
  }

});
</script>