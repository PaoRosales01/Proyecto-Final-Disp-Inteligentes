<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"></ion-menu-button>
        </ion-buttons>
        <ion-title>LOGIN</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card-container">
        <ion-card-header>
          <ion-card-title class="card-container__title">INICIA SESIÓN PARA ADMINISTRAR TU PROCESO</ion-card-title>
        </ion-card-header>

        <ion-card-content class="card-content">
          <ion-item class="card-content__label">
            <ion-label position="floating">EMAIL</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">CONTRASEÑA</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>

          <div class="button-container">
            <router-link class="router" to='/inicioCliente'>
              <ion-button class="button-container__style">INICIAR SESIÓN</ion-button>
            </router-link>
          </div>

          <div class="help-container">
            <p class="help-container__pass">¿OLVIDASTE TU CONTRASEÑA?</p>
            <router-link class="router" to="/signup">
              <p class="help-container__signup">
                ¿NO TIENES USUARIO? REGISTRATE AQUÍ
              </p>
            </router-link>
          </div>
        </ion-card-content>
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
} from "@ionic/vue";
import { defineComponent } from "vue";
import MenuPrincipal from './MenuPage.vue'

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    MenuPrincipal
  },
});
</script>