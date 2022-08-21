<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"> </ion-menu-button>
        </ion-buttons>
        <ion-title>Administrar Producto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card-container__admin">
        <ion-grid>
          <ion-row>
            <ion-col class="img-foco-container">
              <ion-img src="/assets/img/foco.png"></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-header>
          <ion-card-title class="card-container__title">Nombre Del Producto</ion-card-title>
        </ion-card-header>

        <ion-card-content class="card-content">
          <div class="button-container">
            <router-link class="router" to='/inicioCliente'>
              <ion-button class="button-container__style">Configurar</ion-button>
            </router-link>

          </div>
          <div class="help-container">
          </div>
          <ion-card-title class="card-container__title">Estadísticas De uso</ion-card-title>
        </ion-card-content>
        <ion-img src="/assets/img/grafic.png" class="img-foco"></ion-img>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonImg,
  IonButtons,
  IonCol,
  IonRow,
  IonGrid,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import MenuPrincipal from './MenuPage.vue'

export default defineComponent({
  name: "AdministrarProductoPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    IonImg,
    IonButtons,
    IonCol,
    IonRow,
    IonGrid,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonButton,
    MenuPrincipal
  },
});
</script>
