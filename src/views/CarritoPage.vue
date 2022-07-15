<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-title>Carrito de Compras</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row class="producto-carrito-container" v-for="producto in carrito" :key="producto.id">
                <ion-col size="10" size-lg="2" size-md="4" size-sm="10">
                    <ion-card class="producto-carrito">
                        <div>
                            <ion-card-header class="producto-carrito__nombre">
                                {{ producto.nombre }}
                            </ion-card-header>
                            <ion-card-content class="producto-carrito__info">
                                <p id="producto-carrito__descripcion">{{ producto.descripcion }}</p>
                                <div class="producto-carrito__precio-cantidad">
                                    <p>Cantidad: {{ producto.cantidad }}</p>
                                    <p>${{ producto.precio }}.00</p>
                                </div>
                            </ion-card-content>
                        </div>
                        <ion-img
                            :src="producto.imagen"
                            class="producto-carrito__img"
                        ></ion-img>
                    </ion-card>
                </ion-col>
                <ion-col size="2" class="producto-carrito__btn-eliminar">
                    <ion-icon src="/assets/icons/close-circle-outline.svg"></ion-icon>
                </ion-col>
            </ion-row>
            
            <ion-item-divider />

            <ion-row size="12">
                <div class="total-pagar">
                    <p>Total a pagar:</p>
                    <p>$2630.00</p>
                </div>
            </ion-row>

            <ion-row size="12">
                <div class="button-container btn-continuar">
                    <ion-button class="button-container__style"
                        >Continuar compra</ion-button
                    >
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
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
    // IonIcon
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarritoPage",
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
    // IonIcon
  },
  data() {
    return {
      carrito: [
        {
            id: 1,
            nombre: 'Cerradura inteligente',
            descripcion: 'WiFi con huella digital, gama Premium (Mortise)',
            cantidad: 1,
            precio: 2500.00,
            imagen: '/assets/img/productos/cerradura.jpeg'
        },
        {
            id: 2,
            nombre: 'Foco inteligente',
            descripcion: 'Smart Light con 16 millones de colores',
            cantidad: 1,
            precio: 130.00,
            imagen: '/assets/img/productos/foco.avif'
        },
      ]
    }
  }
});
</script>