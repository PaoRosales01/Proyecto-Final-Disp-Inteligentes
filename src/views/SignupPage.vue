<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-title>Registrarse</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card-container">
        <ion-card-header>
          <ion-card-title class="card-container__title"
            >Ingresa tus datos para crear una nueva cuenta</ion-card-title
          >
        </ion-card-header>

        <ion-card-content class="card-content">
          <ion-item class="card-content__label">
            <ion-label position="floating">Usuario</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">Email</ion-label>
            <ion-input></ion-input>
          </ion-item>
           <ion-item class="card-content__label">
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input></ion-input>
          </ion-item>
           <ion-item class="card-content__label">
            <ion-label position="floating">Confirmar contraseña</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <div class="button-container">
            <ion-button class="button-container__style">Crear cuenta</ion-button>
          </div>

         <div class="help-container">
           <router-link class="router" to="/login"
              ><p class="help-container__login">
              ¿Ya tienes un usuario? Inicia Sesión aquí
              </p></router-link
            >
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

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>