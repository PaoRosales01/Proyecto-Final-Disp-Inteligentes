<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"> </ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="container-ini">
        <ion-card-header>
          <ion-toolbar class="titulo">
            <ion-title class="titulo">Tecnología que </ion-title>
            <ion-title class="titulo">resplandece</ion-title>

          </ion-toolbar>
        </ion-card-header>

        <ion-text>
          <p class="desc">El control de tus productos smart al alcance de tu mano.</p>
          <p class="desc">Innovación, cálidad y compromiso.</p>
        </ion-text>
        <ion-img src="/assets/img/logic (1).jpeg" class="img-inicio"></ion-img>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuPrincipal from './MenuPage.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    MenuPrincipal
  }
});
</script>
