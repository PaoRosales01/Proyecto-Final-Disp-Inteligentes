<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"> </ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio Cliente</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-img src="/assets/img/default-user.png" class="img-user"></ion-img>

        <ion-row>
          <ion-col>
            <ion-card class="card-inicio-usuario">
              <ion-card-header class="card-inicio-usuario__titulo">
                Mis dispositivos
              </ion-card-header>
              <ion-card-content class="mis-dispositivos__icons">
                <router-link class="router" to="/administrarProducto">
                  <ion-icon
                    size="large"
                    class="mis-dispositivos__icon"
                    src="/assets/icons/paw-outline.svg"
                  ></ion-icon>
                </router-link>
                <router-link class="router" to="/administrarProducto">
                  <ion-icon
                    size="large"
                    class="mis-dispositivos__icon"
                    src="/assets/icons/alarm-outline.svg"
                  ></ion-icon>
                </router-link>
                <router-link class="router" to="/productos">
                  <ion-icon
                    size="large"
                    class="mis-dispositivos__icon"
                    src="/assets/icons/add-outline.svg"
                  ></ion-icon>
                </router-link>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="card-inicio-usuario">
              <ion-card-header class="card-inicio-usuario__titulo">
                ¡Buenos días!
              </ion-card-header>
              <ion-card-content class="card-administra-content">
                <p>
                  Administra tus dispositivos y mira estadísticas desde este
                  panel.
                </p>
                <div>
                  <ion-icon
                    size="large"
                    class="card-administra-conten__icon"
                    src="/assets/icons/thunderstorm-outline.svg"
                  ></ion-icon>
                  <p>15°C</p>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="card-inicio-usuario">
              <ion-card-header class="card-inicio-usuario__titulo">
                Temperatura
              </ion-card-header>
              <ion-card-content>
                <ion-img src="/assets/img/chart.svg"></ion-img>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="card-inicio-usuario">
              <ion-card-header class="card-inicio-usuario__titulo">
                Porciones de alimento
              </ion-card-header>
              <ion-card-content class="dispositivo-porciones">
                <ion-icon
                  size="large"
                  src="/assets/icons/paw-outline.svg"
                  class="mis-dispositivos__icon"
                ></ion-icon>
                <p>3 disponibles</p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonButtons,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/vue";
import { defineComponent } from "vue";
import MenuPrincipal from "./MenuPage.vue";

export default defineComponent({
  name: "InicioClientePage",
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonImg,
    MenuPrincipal,
    IonMenuButton,
    IonButtons,
    IonCol,
    IonRow,
    IonGrid,
  },
});
</script>