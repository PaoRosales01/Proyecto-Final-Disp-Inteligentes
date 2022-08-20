<template>
  <ion-page>
    <menu-principal></menu-principal>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-menu-button @click="openMenu"> </ion-menu-button>
        </ion-buttons>
        <ion-title>Continuar Compra</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="container-compra">
          <ion-col>
            <ion-item>
              <ion-label position="floating">Nombre completo:</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Dirección:</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Método de pago</ion-label>
              <ion-select>
                <ion-select-option value="debito">
                  Tarjeta de débito
                </ion-select-option>
                <ion-select-option value="credito">
                  Tarjeta de crédito
                </ion-select-option>
                <ion-select-option value="paypal"> Paypal </ion-select-option>
                <ion-select-option value="tranferencia">
                  Transeferencia bancaria
                </ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="total-pagar">
            <h4>Total a pagar: $2630.00</h4>
          </ion-col>
        </ion-row>
        <ion-row>
          <div class="button-container btn-continuar">
            <router-link class="router" to="/inicioCliente">
              <ion-button class="button-container__style"
                >Finalizar compra</ion-button
              >
            </router-link>
          </div>
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
  IonMenuButton,
  IonButtons,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/vue";
import { defineComponent } from "vue";
import MenuPrincipal from "./MenuPage.vue";

export default defineComponent({
  name: "ContinuarCompraPage",
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent,
    MenuPrincipal,
    IonMenuButton,
    IonButtons,
    IonCol,
    IonRow,
    IonGrid,
  },
});
</script>