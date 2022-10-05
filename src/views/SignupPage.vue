<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"></ion-menu-button>
        </ion-buttons>
        <ion-title>REGISTRARSE</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card-container">
        <ion-card-header>
          <ion-card-title class="card-container__title">INGRESA TUS DASTOS PARA CREAR UNA NUEVA CUENTA</ion-card-title>
        </ion-card-header>

        <ion-card-content class="card-content">
          <ion-item class="card-content__label">
            <ion-label position="floating">USUARIO</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">EMAIL</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">CONTRASEÑA</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">CONFIRMAR CONTRASEÑA</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>

          <div class="button-container">
            <router-link class="router" to='/login'>
              <ion-button class="button-container__style">CREAR CUENTA</ion-button>
            </router-link>
          </div>

          <div class="help-container">
            <router-link class="router" to="/login">
              <p class="help-container__login">
                ¿YA TIENES USUARIO? INICIA SESIÓN AQUÍ
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