<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"></ion-menu-button>
        </ion-buttons>
        <ion-title>Mi Cuenta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card-container">
        <ion-grid>
          <ion-row>
            <ion-col class="img-user-container">
              <ion-img
                src="/assets/img/default-user.png "
                class="img-user1"
              ></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-header>
          <ion-card-title class="card-container__title"
            >Nombre de usuario</ion-card-title
          >
        </ion-card-header>
        <ion-card-content class="card-content">
          <ion-item class="card-content__label">
            <ion-label position="floating">Correo Electronico</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>

          <div class="button-container">
            <router-link class="router" to="/inicioCliente">
              <ion-button class="button-container__style"
                >Actualizar</ion-button
              >
            </router-link>
          </div>
          <div class="help-container"></div>
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
  IonMenuButton,
  IonButtons,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/vue";
import { defineComponent } from "vue";
import MenuPrincipal from "./MenuPage.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    MenuPrincipal,
    IonMenuButton,
    IonButtons,
    IonCol,
    IonRow,
    IonGrid,
  },
});
</script>