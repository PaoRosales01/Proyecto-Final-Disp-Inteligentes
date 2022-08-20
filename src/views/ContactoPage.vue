<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"> </ion-menu-button>
        </ion-buttons>
        <ion-title>Contacto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-card class="div-info-contacto">
        <ion-card-header>
          <ion-card-title class="titulo-info-contacto" color="light"
            >Información de Contacto</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <p class="descripcion-info-contacto">
            ¿Tienes alguna duda? Solo escribenos en nuestras redes sociales o en
            nuestro formulario.
          </p>
          <div class="informacion-contacto">
            <p class="descripcion-info-contacto" href="">
              Teléfono: 618 184 68 89
            </p>
            <p class="descripcion-info-contacto" href="">
              Correo Electrónico: atencion.a.clientes@gmail.com
            </p>
          </div>
        </ion-card-content>
      </ion-card>
      <ion-card class="div-form-contacto">
        <ion-card-header>
          <ion-card-title class="titulo-form-contacto"
            >Envíanos un mensaje</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <ion-item class="card-content__label">
            <ion-label position="floating">Nombre</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">Email</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="card-content__label">
            <ion-label position="floating">Mensaje</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <router-link class="router" to="/home">
            <ion-button class="boton-enviar-comentario" color="secondary"
              >Enviar</ion-button
            >
          </router-link>
        </ion-card-content>
      </ion-card>
      <ion-card class="card-inicio-usuario">
        <ion-card-header class="card-inicio-usuario__titulo">
          Visita nuestras redes sociales
        </ion-card-header>
        <ion-card-content class="mis-dispositivos__icons">
          <router-link class="router" to="#">
            <ion-icon
              size="large"
              class="mis-dispositivos__icon"
              color="light"
              src="/assets/icons/facebook.svg"
            >
            </ion-icon>
          </router-link>
          <router-link class="router" to="#">
            <ion-icon
              size="large"
              class="mis-dispositivos__icon"
              color="light"
              src="/assets/icons/twitter.svg"
            >
            </ion-icon>
          </router-link>
          <router-link class="router" to="#">
            <ion-icon
              size="large"
              class="mis-dispositivos__icon"
              color="light"
              src="/assets/icons/instagram.svg"
            >
            </ion-icon>
          </router-link>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>



<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";

import { defineComponent } from "vue";
import MenuPrincipal from "./MenuPage.vue";

export default defineComponent({
  name: "ContactoPage",
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    MenuPrincipal,
    IonMenuButton,
    IonButtons,
  },
});
</script>